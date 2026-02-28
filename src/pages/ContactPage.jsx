import { useState } from 'react';
import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';

// Formspree endpoint — replace YOUR_FORMSPREE_ID with your actual form ID from formspree.io
// Steps: 1) Sign up at formspree.io  2) Create a new form  3) Copy the form ID (e.g. xpwzlkjq)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgolbwqy';

const PRODUCTS = [
    { value: '', label: 'Select product (optional)' },
    { value: 'makhana', label: 'Makhana (Fox Nuts)' },
    { value: 'dehydrated-onion', label: 'Dehydrated Onion' },
    { value: 'dehydrated-garlic', label: 'Dehydrated Garlic' },
    { value: 'banana-powder', label: 'Banana Powder' },
    { value: 'moringa-powder', label: 'Moringa Powder' },
    { value: 'other', label: 'Other / Not Listed' },
];

export default function ContactPage() {
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        const form = e.target;
        const data = new FormData(form);

        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' },
            });

            if (res.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
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

                        {/* Form */}
                        <div>
                            {status === 'success' ? (
                                <div className="border border-border bg-surface p-8">
                                    <div className="w-2 h-2 bg-brand mb-6" />
                                    <h2 className="text-xl font-bold mb-3">Enquiry Received.</h2>
                                    <p className="text-muted text-sm">
                                        You will receive a response within 48 business hours after we complete our internal feasibility review. If the requirement falls outside our current scope, we will confirm that in our first reply.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <Field label="First Name" id="first_name" name="first_name" required />
                                        <Field label="Last Name" id="last_name" name="last_name" required />
                                    </div>
                                    <Field label="Company Name" id="company" name="company" required />
                                    <Field label="Email Address" id="email" name="email" type="email" required />
                                    <Field label="Phone / WhatsApp" id="phone" name="phone" type="tel" />

                                    <div>
                                        <label htmlFor="product" className="block text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                                            Product
                                        </label>
                                        <select
                                            id="product"
                                            name="product"
                                            className="w-full border border-border bg-white px-4 py-3 text-sm text-brand focus:outline-none focus:border-brand-light"
                                        >
                                            {PRODUCTS.map((p) => (
                                                <option key={p.value} value={p.value}>{p.label}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <Field label="Destination Country / Market" id="destination" name="destination" />

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
                                            className="w-full border border-border bg-white px-4 py-3 text-sm text-brand placeholder:text-gray-300 focus:outline-none focus:border-brand-light resize-y"
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <p className="text-sm text-red-600">
                                            There was an error submitting your enquiry. Please email us directly at{' '}
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

function Field({ label, id, name, type = 'text', required = false }) {
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
                className="w-full border border-border bg-white px-4 py-3 text-sm text-brand placeholder:text-gray-300 focus:outline-none focus:border-brand-light"
            />
        </div>
    );
}
