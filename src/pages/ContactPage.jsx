import { useState } from 'react';
import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';

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
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with actual form submission (Formspree, Netlify Forms, etc.)
        setSubmitted(true);
    };

    return (
        <>
            <SEOMeta
                title="Request Export Details"
                description="Contact Export Desi to discuss product specifications, volumes, and export requirements. We respond within 48 business hours."
            />

            <HeroSection
                label="Contact"
                title="Request Export Details."
                subtitle="Share your requirement. We review feasibility and respond within 48 business hours. We do not accept enquiries we cannot fulfil."
                background="surface"
            />

            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-16 lg:gap-24 items-start">

                        {/* Form */}
                        <div>
                            {submitted ? (
                                <div className="border border-border bg-surface p-8">
                                    <div className="w-2 h-2 bg-brand mb-6" />
                                    <h2 className="text-xl font-bold mb-3">Enquiry Received.</h2>
                                    <p className="text-muted text-sm">
                                        We will review your requirement and respond within 48 business hours. If we cannot fulfil the requirement, we will let you know at that point.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <Field label="First Name" id="first_name" required />
                                        <Field label="Last Name" id="last_name" required />
                                    </div>
                                    <Field label="Company Name" id="company" required />
                                    <Field label="Email Address" id="email" type="email" required />
                                    <Field label="Phone / WhatsApp" id="phone" type="tel" />

                                    {/* Product */}
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

                                    {/* Destination */}
                                    <Field label="Destination Country / Market" id="destination" />

                                    {/* Requirement */}
                                    <div>
                                        <label htmlFor="requirement" className="block text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                                            Requirement Details <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="requirement"
                                            name="requirement"
                                            required
                                            rows={5}
                                            placeholder="Describe your requirement: product specification, grade, volume, packaging, destination market, timeline."
                                            className="w-full border border-border bg-white px-4 py-3 text-sm text-brand placeholder:text-gray-300 focus:outline-none focus:border-brand-light resize-y"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-primary w-full sm:w-auto"
                                    >
                                        Submit Requirement
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Side info */}
                        <div className="space-y-8">
                            <div className="border border-border bg-surface p-6">
                                <p className="section-label mb-4">Direct Contact</p>
                                <div className="space-y-2 text-sm">
                                    <p className="font-medium">Sahil — Business Development</p>
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
                                    For quick enquiries, WhatsApp is monitored during Indian business hours (9am–7pm IST, Mon–Sat).
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
                                label="Response time"
                                heading="48 business hours."
                                headingLevel="h3"
                                paragraphs={[
                                    'We review all enquiries before responding. If there are questions about feasibility of supply, we resolve those internally before our first response.',
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

function Field({ label, id, type = 'text', required = false }) {
    return (
        <div>
            <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                id={id}
                name={id}
                required={required}
                className="w-full border border-border bg-white px-4 py-3 text-sm text-brand placeholder:text-gray-300 focus:outline-none focus:border-brand-light"
            />
        </div>
    );
}
