import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';
import { MotionSection } from '../components/MotionWrapper';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xgolbwqy';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_MS = 60 * 1000; // 1 minute between submissions

// reCAPTCHA v2 site key (from environment variable)
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6Lce35gsAAAAAOOzHsmrp-bWolsgrX2RcNcXSXiX';

// Disposable/temporary email domains to block
const BLOCKED_EMAIL_DOMAINS = [
    'mailinator.com', 'guerrillamail.com', 'tempmail.com', '10minutemail.com',
    'throwaway.email', 'temp-mail.org', 'fakeinbox.com', 'trashmail.com',
    'getnada.com', 'maildrop.cc', 'yopmail.com', 'sharklasers.com',
];

// Common free email providers (flag for manual review, not block)
const FREE_EMAIL_PROVIDERS = [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
    'icloud.com', 'mail.com', 'protonmail.com', 'zoho.com', 'gmx.com',
];

const PRODUCTS = [
    { value: '', label: 'Select product' },
    { value: 'makhana', label: 'Makhana (Fox Nuts)' },
    { value: 'dehydrated-onion', label: 'Dehydrated Onion' },
    { value: 'dehydrated-garlic', label: 'Dehydrated Garlic' },
    { value: 'banana-powder', label: 'Banana Powder' },
    { value: 'moringa-powder', label: 'Moringa Powder' },
    { value: 'other', label: 'Other / Not Listed' },
];

const COUNTRIES = [
    '', 'Afghanistan', 'Albania', 'Algeria', 'Australia', 'Austria', 'Bahrain', 'Bangladesh',
    'Belgium', 'Brazil', 'Cambodia', 'Canada', 'Chile', 'China', 'Colombia', 'Czech Republic',
    'Denmark', 'Egypt', 'Ethiopia', 'Finland', 'France', 'Germany', 'Ghana', 'Greece',
    'Hong Kong', 'Hungary', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy',
    'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Malaysia', 'Mexico', 'Morocco',
    'Netherlands', 'New Zealand', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Philippines',
    'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Saudi Arabia', 'Singapore',
    'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'Sweden', 'Switzerland',
    'Taiwan', 'Thailand', 'Turkey', 'Ukraine', 'United Arab Emirates', 'United Kingdom',
    'United States', 'Vietnam', 'Yemen', 'Other',
];

export default function ContactPage() {
    const navigate = useNavigate();
    const [status, setStatus] = useState('idle');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});
    const lastSubmitRef = useRef(null);
    const recaptchaRef = useRef(null);

    // Load reCAPTCHA script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const validate = (data) => {
        const errs = {};

        // Company validation (required)
        if (!data.company.trim()) {
            errs.company = 'Required';
        } else if (data.company.trim().length < 2) {
            errs.company = 'Company name is too short';
        }

        // Email validation (required)
        if (!data.email.trim()) {
            errs.email = 'Required';
        } else if (!EMAIL_REGEX.test(data.email)) {
            errs.email = 'Enter a valid email address';
        } else {
            const domain = data.email.toLowerCase().split('@')[1];
            if (BLOCKED_EMAIL_DOMAINS.includes(domain)) {
                errs.email = 'Please use a business or permanent email address';
            }
        }

        // Phone validation (required)
        if (!phone) {
            errs.phone = 'Required';
        } else if (!isValidPhoneNumber(phone)) {
            errs.phone = 'Enter a valid international phone number';
        } else if (phone.replace(/[\s\-()] /g, '').length < 10) {
            errs.phone = 'Phone number is too short';
        }

        // Product (required)
        if (!data.product) errs.product = 'Select a product';

        // Requirement validation - only check for gibberish if provided
        if (data.requirement.trim()) {
            const repetitiveChars = /(.)\1{4,}/.test(data.requirement);
            const allCaps = /^[A-Z\s!]+$/.test(data.requirement);
            if (repetitiveChars || allCaps) {
                errs.requirement = 'Please enter a valid requirement in normal text';
            }
        }

        return errs;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Client-side rate limiting
        const now = Date.now();
        if (lastSubmitRef.current && now - lastSubmitRef.current < RATE_LIMIT_MS) {
            setErrors({ _rate: 'Please wait a minute before submitting again.' });
            return;
        }

        // reCAPTCHA validation
        const recaptchaResponse = document.querySelector('[name="g-recaptcha-response"]');
        if (!recaptchaResponse || !recaptchaResponse.value) {
            setErrors({ _captcha: 'Please complete the reCAPTCHA' });
            return;
        }

        const form = e.target;
        const data = {
            first_name: form.first_name.value,
            last_name: form.last_name.value,
            company: form.company.value,
            email: form.email.value,
            phone: phone || '',
            product: form.product.value,
            requirement: form.requirement.value,
        };

        const errs = validate(data);
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }

        setErrors({});
        setStatus('submitting');

        const formData = new FormData();
        Object.entries(data).forEach(([k, v]) => formData.append(k, v));

        // Honeypot for spam — Formspree ignores submissions where this is filled
        formData.append('_gotcha', '');

        // Add timestamp for server-side verification
        formData.append('_timestamp', Date.now().toString());

        // Add next URL to redirect to thank-you page
        formData.append('_next', window.location.origin + '/thank-you');

        // Build subject line
        const subjectParts = [`New Enquiry: ${data.product}`, data.company];
        if (data.requirement.trim()) {
            subjectParts.push(data.requirement.trim().split('\n')[0].slice(0, 50));
        }
        formData.append('_subject', subjectParts.join(' - '));

        // Add reply-to for direct responses
        formData.append('_replyto', data.email);

        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: { Accept: 'application/json' },
            });

            if (res.ok) {
                lastSubmitRef.current = Date.now();
                // Fire Clarity tracking event
                if (typeof window.clarity === 'function') {
                    window.clarity('event', 'form_submit');
                }
                form.reset();
                setPhone('');
                if (window.grecaptcha) {
                    window.grecaptcha.reset();
                }
                navigate('/thank-you');
            } else {
                const json = await res.json().catch(() => ({}));
                if (json.error === 'FORM_NOT_FOUND' || res.status === 422) {
                    setStatus('error');
                } else {
                    setStatus('error');
                }
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <>
            <SEOMeta
                title="Contact Export Desi | Get a Sourcing Quote | Indian Food Ingredients"
                description="Contact Export Desi for Indian food ingredient sourcing. Makhana, turmeric, dehydrated onion & garlic. Response within 48 business hours."
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <HeroSection
                    label="Contact"
                    title="Get a Sourcing Quote."
                    subtitle="Share your product specification, destination, and volume. We assess processor availability and respond with indicative pricing within 48 business hours."
                    background="white"
                />
            </motion.div>

            <MotionSection className="bg-white border-b border-border" variant="fadeUp" delay={200}>
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">

                        <div>
                            {/* Quick contact options - for users who prefer direct contact */}
                            <div className="mb-6 p-4 bg-surface border border-border rounded-lg">
                                <p className="text-sm font-semibold text-brand mb-3">Prefer faster contact?</p>
                                <div className="flex flex-wrap gap-4 text-sm">
                                    <a href="mailto:contact@exportdesi.com" className="flex items-center gap-2 text-muted hover:text-brand transition-colors">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        contact@exportdesi.com
                                    </a>
                                    <a href="https://wa.me/919289790283" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-brand transition-colors">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                        WhatsApp
                                    </a>
                                    <a href="tel:+919289790283" className="flex items-center gap-2 text-muted hover:text-brand transition-colors">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        +91 928 979 0283
                                    </a>
                                </div>
                            </div>

                            {status === 'success' ? (
                                <div className="border border-border bg-surface p-8 rounded-lg">
                                    <div className="w-2 h-2 bg-brand mb-6" />
                                    <h2 className="text-xl font-bold mb-3">Enquiry Received.</h2>
                                    <p className="text-muted text-sm">
                                        You will receive a response within 48 business hours after we complete our internal feasibility review. If the requirement falls outside our current scope, we confirm that in our first reply.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                                    {/* Honeypot — hidden from real users */}
                                    <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                                    {/* Essential fields first - progressive disclosure */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <Field label="First Name" id="first_name" name="first_name" error={errors.first_name} />
                                        <Field label="Last Name" id="last_name" name="last_name" error={errors.last_name} />
                                    </div>
                                    <Field label="Company Name" id="company" name="company" required error={errors.company} />
                                    <Field label="Email Address" id="email" name="email" type="email" required error={errors.email} />

                                    {/* Phone with international selector — required */}
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                                            Phone / WhatsApp <span className="text-red-500">*</span>
                                        </label>
                                        <PhoneInput
                                            international
                                            defaultCountry="IN"
                                            value={phone}
                                            onChange={setPhone}
                                            className="phone-input-wrapper"
                                            inputClassName={`w-full border px-4 py-3 text-sm text-brand focus:outline-none ${errors.phone ? 'border-red-400' : 'border-border focus:border-brand-light'}`}
                                        />
                                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                                    </div>

                                    {/* Product — required */}
                                    <div>
                                        <label htmlFor="product" className="block text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                                            Product <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="product"
                                            name="product"
                                            required
                                            className={`w-full border px-4 py-3 text-sm text-brand bg-white focus:outline-none ${errors.product ? 'border-red-400' : 'border-border focus:border-brand-light'}`}
                                        >
                                            {PRODUCTS.map((p) => (
                                                <option key={p.value} value={p.value} disabled={p.value === ''}>{p.label}</option>
                                            ))}
                                        </select>
                                        {errors.product && <p className="text-xs text-red-500 mt-1">{errors.product}</p>}
                                    </div>

                                    {/* Requirement — optional with better placeholder */}
                                    <div>
                                        <label htmlFor="requirement" className="block text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                                            Requirement Details <span className="text-xs text-muted">(optional)</span>
                                        </label>
                                        <textarea
                                            id="requirement"
                                            name="requirement"
                                            rows={4}
                                            placeholder="Product & grade, destination port, volume (MT), Incoterm (FOB/CIF), certifications needed"
                                            className={`w-full border px-4 py-3 text-sm text-brand placeholder:text-gray-300 focus:outline-none resize-y ${errors.requirement ? 'border-red-400' : 'border-border focus:border-brand-light'}`}
                                        />
                                        {errors.requirement && <p className="text-xs text-red-500 mt-1">{errors.requirement}</p>}
                                    </div>

                                    {/* reCAPTCHA */}
                                    <div className="flex justify-center">
                                        <div
                                            ref={recaptchaRef}
                                            className="g-recaptcha"
                                            data-sitekey={RECAPTCHA_SITE_KEY}
                                        />
                                    </div>
                                    {errors._captcha && (
                                        <p className="text-xs text-red-500 mt-2 text-center">{errors._captcha}</p>
                                    )}

                                    {errors._rate && (
                                        <p className="text-sm text-amber-600">{errors._rate}</p>
                                    )}

                                    {status === 'error' && (
                                        <p className="text-sm text-red-600">
                                            There was an error submitting your enquiry. Email us directly at{' '}
                                            <a href="mailto:contact@exportdesi.com" className="underline">contact@exportdesi.com</a>.
                                        </p>
                                    )}

                                    <div>
                                        <button
                                            type="submit"
                                            disabled={status === 'submitting'}
                                            className="btn-primary w-full sm:w-auto disabled:opacity-60"
                                        >
                                            {status === 'submitting' ? 'Submitting...' : 'Submit Requirement'}
                                        </button>
                                        <p className="text-xs text-muted mt-2">
                                            Response within 48 business hours.
                                        </p>
                                    </div>
                                </form>
                            )}
                        </div>

                        {/* Side info - streamlined */}
                        <div className="space-y-6">
                            <div className="border border-border bg-surface p-5 rounded-lg">
                                <p className="section-label mb-3">Direct Contact</p>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <p className="font-semibold text-brand mb-1">Email</p>
                                        <a href="mailto:contact@exportdesi.com" className="text-muted hover:text-brand transition-colors block">
                                            contact@exportdesi.com
                                        </a>
                                        <a href="mailto:rajiv@exportdesi.com" className="text-muted hover:text-brand transition-colors block">
                                            rajiv@exportdesi.com
                                        </a>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-brand mb-1">Phone / WhatsApp</p>
                                        <a href="tel:+919289790283" className="text-muted hover:text-brand transition-colors block">
                                            +91 928 979 0283
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-border bg-surface p-5 rounded-lg">
                                <p className="section-label mb-3">WhatsApp</p>
                                <p className="text-sm text-muted mb-3">
                                    9am to 7pm IST, Mon–Sat
                                </p>
                                <a
                                    href="https://wa.me/919289790283"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => {
                                        if (typeof window.clarity === 'function') {
                                            window.clarity('event', 'whatsapp_click');
                                        }
                                    }}
                                    className="btn-primary text-xs inline-block"
                                >
                                    Open WhatsApp Chat
                                </a>
                            </div>

                            <div className="border border-border bg-surface p-5 rounded-lg">
                                <p className="section-label mb-3">Response Time</p>
                                <p className="text-sm text-muted">
                                    48 business hours after feasibility review.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </MotionSection>
        </>
    );
}

function Field({ label, id, name, type = 'text', required = false, error }) {
    return (
        <div>
            <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                required={required}
                className={`w-full border px-4 py-3 text-sm text-brand focus:outline-none ${error ? 'border-red-400' : 'border-border focus:border-brand-light'}`}
            />
            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
    );
}
