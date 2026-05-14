import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';
import { MotionSection } from '../components/MotionWrapper';
import FloatingProductNav from '../components/FloatingProductNav';
import { motion } from 'framer-motion';  
import { Helmet } from 'react-helmet-async';
import { getOrganizationSchema, getBreadcrumbSchema } from '../utils/schemaGenerator';

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
    { value: 'bags', label: 'Jute & Non-Woven Bags' },
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

        // Include the reCAPTCHA token for Formspree validation
        formData.append('g-recaptcha-response', recaptchaResponse.value);

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
                title="Get a Sourcing Quote | Indian Food Ingredient Exporter | 48-Hour Response"
                description="Contact Export Desi for Indian food ingredient sourcing. Makhana, turmeric, dehydrated onion & garlic. Response within 48 business hours."
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        ...getOrganizationSchema(),
                        contactPoint: {
                            '@type': 'ContactPoint',
                            telephone: ['+91-9289790283', '+91-8796440283'],
                            contactType: 'sales',
                            email: 'contact@exportdesi.com',
                            availableLanguage: ['English', 'Hindi'],
                            areaServed: 'Worldwide'
                        }
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(getBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Contact', url: '/contact' }
                    ]))}
                </script>
            </Helmet>

            <div className="bg-surface border-b border-border">
                <div className="page-container py-8 md:py-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl"
                    >
                        <p className="section-label mb-4">Contact us</p>
                        <h1 className="text-3xl md:text-4xl font-bold mb-6">Submit Your Requirement</h1>
                        <p className="text-muted leading-relaxed">
                            For any queries or product requirements, please fill the form below. 
                            Our team assesses processor availability and responds with indicative pricing within 48 business hours.
                        </p>
                    </motion.div>
                </div>
            </div>

            <MotionSection className="bg-white border-b border-border" variant="fadeUp" delay={100}>
                <div className="page-container py-8 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">

                        <div>

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
                            <div id="direct-contact-block" className="border border-border bg-surface p-5 rounded-lg">
                                <p className="section-label mb-3">Direct Contact</p>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <a href="mailto:contact@exportdesi.com" className="text-muted hover:text-brand transition-colors block leading-loose">
                                            contact@exportdesi.com
                                        </a>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-brand mb-1">WhatsApp</p>
                                        <a href="https://wa.me/919289790283" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand transition-colors block">
                                            +91 928 979 0283
                                        </a>
                                        <a href="tel:+918796440283" className="text-muted hover:text-brand transition-colors block mt-1">
                                            +91 879 644 0283
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
                                <p className="section-label mb-3">Connect With Us</p>
                                <div className="flex gap-4">
                                    <a href="https://www.facebook.com/ExportDesi" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-[#1877F2] transition-colors" aria-label="Facebook">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/export_desi/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-[#E4405F] transition-colors" aria-label="Instagram">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="https://in.linkedin.com/company/exportdesi" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
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

            <FloatingProductNav
                items={[]}
                currentPath="/contact"
                hideOnId="direct-contact-block"
                showGetQuote={false}
            />
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
