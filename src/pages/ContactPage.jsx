import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgolbwqy';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_MS = 60 * 1000; // 1 minute between submissions

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
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});
    const lastSubmitRef = useRef(null);

    const validate = (data) => {
        const errs = {};
        if (!data.first_name.trim()) errs.first_name = 'Required';
        if (!data.last_name.trim()) errs.last_name = 'Required';
        if (!data.company.trim()) errs.company = 'Required';
        if (!data.email.trim()) {
            errs.email = 'Required';
        } else if (!EMAIL_REGEX.test(data.email)) {
            errs.email = 'Enter a valid email address';
        }
        if (phone && !isValidPhoneNumber(phone)) {
            errs.phone = 'Enter a valid international phone number';
        }
        if (!data.product) errs.product = 'Select a product';
        if (!data.destination) errs.destination = 'Select a destination country';
        if (!data.requirement.trim()) errs.requirement = 'Required';
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

        const form = e.target;
        const data = {
            first_name: form.first_name.value,
            last_name: form.last_name.value,
            company: form.company.value,
            email: form.email.value,
            product: form.product.value,
            destination: form.destination.value,
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
        if (phone) formData.append('phone', phone);
        // Honeypot for spam — Formspree ignores submissions where this is filled
        formData.append('_gotcha', '');

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
                title="Submit Your Requirement"
                description="Contact Export Desi to discuss a supply requirement. Provide your product, destination, and volume. We respond within 48 business hours."
            />

            <HeroSection
                label="Contact"
                title="Submit Your Requirement."
                subtitle="We review every enquiry before responding. If the requirement falls outside what we can fulfil, we confirm that at first response, not after extended back-and-forth."
                background="surface"
            />

            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-16 lg:gap-24 items-start">

                        <div>
                            {status === 'success' ? (
                                <div className="border border-border bg-surface p-8">
                                    <div className="w-2 h-2 bg-brand mb-6" />
                                    <h2 className="text-xl font-bold mb-3">Enquiry Received.</h2>
                                    <p className="text-muted text-sm">
                                        You will receive a response within 48 business hours after we complete our internal feasibility review. If the requirement falls outside our current scope, we confirm that in our first reply.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                                    {/* Honeypot — hidden from real users */}
                                    <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <Field label="First Name" id="first_name" name="first_name" required error={errors.first_name} />
                                        <Field label="Last Name" id="last_name" name="last_name" required error={errors.last_name} />
                                    </div>
                                    <Field label="Company Name" id="company" name="company" required error={errors.company} />
                                    <Field label="Email Address" id="email" name="email" type="email" required error={errors.email} />

                                    {/* Phone with international selector */}
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                                            Phone / WhatsApp
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

                                    {/* Destination country — required */}
                                    <div>
                                        <label htmlFor="destination" className="block text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                                            Destination Country <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="destination"
                                            name="destination"
                                            required
                                            className={`w-full border px-4 py-3 text-sm text-brand bg-white focus:outline-none ${errors.destination ? 'border-red-400' : 'border-border focus:border-brand-light'}`}
                                        >
                                            <option value="">Select country</option>
                                            {COUNTRIES.filter(Boolean).map((c) => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                        {errors.destination && <p className="text-xs text-red-500 mt-1">{errors.destination}</p>}
                                    </div>

                                    {/* Requirement — required */}
                                    <div>
                                        <label htmlFor="requirement" className="block text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                                            Requirement Details <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="requirement"
                                            name="requirement"
                                            required
                                            rows={5}
                                            placeholder="Product grade or specification, required volume, pack format, destination market, and timeline."
                                            className={`w-full border px-4 py-3 text-sm text-brand placeholder:text-gray-300 focus:outline-none resize-y ${errors.requirement ? 'border-red-400' : 'border-border focus:border-brand-light'}`}
                                        />
                                        {errors.requirement && <p className="text-xs text-red-500 mt-1">{errors.requirement}</p>}
                                    </div>

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
                                        <p className="text-xs text-muted mt-3">
                                            You will receive a response within 48 business hours after review.
                                        </p>
                                    </div>
                                </form>
                            )}
                        </div>

                        {/* Side info */}
                        <div className="space-y-8">
                            <div className="border border-border bg-surface p-6">
                                <p className="section-label mb-4">Direct Contact</p>
                                <div className="space-y-2 text-sm">
                                    <p className="font-medium">Sahil Dudeja, Business Development</p>
                                    <a href="mailto:contact@exportdesi.com" className="text-muted hover:text-brand transition-colors block">
                                        contact@exportdesi.com
                                    </a>
                                    <a href="tel:+919289790283" className="text-muted hover:text-brand transition-colors block">
                                        +91 928 979 0283
                                    </a>
                                </div>
                            </div>

                            <div className="border border-border bg-surface p-6">
                                <p className="section-label mb-4">WhatsApp</p>
                                <p className="text-sm text-muted mb-4">
                                    Available during Indian business hours: 9am to 7pm IST, Monday to Saturday.
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

                            <ContentBlock
                                label="Response Time"
                                heading="48 business hours."
                                headingLevel="h3"
                                paragraphs={[
                                    'We assess feasibility internally before responding. If the requirement raises supply or compliance questions, we resolve those before our first reply.',
                                ]}
                                maxWidth={false}
                            />
                        </div>
                    </div>
                </div>
            </section>
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
