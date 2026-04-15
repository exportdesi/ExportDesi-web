import SEOMeta from '../components/SEOMeta';
import { Helmet } from 'react-helmet-async';
import { MotionSection } from '../components/MotionWrapper';
import ContentBlock from '../components/ContentBlock';

export default function TermsAndConditionsPage() {
    return (
        <>
            <SEOMeta
                title="Terms & Conditions"
                description="Terms and Conditions for Export Desi - Governing the use of our website and services."
            />
            <Helmet>
                <link rel="canonical" href="https://exportdesi.com/terms-and-conditions" />
            </Helmet>

            <MotionSection className="bg-white" variant="fadeUp">
                <div className="page-container section-pad">
                    <div className="max-w-3xl">
                        <p className="section-label">Legal</p>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms & Conditions</h1>
                        <p className="text-muted text-sm mb-8">
                            Last Updated: April 15, 2026
                        </p>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-base leading-relaxed mb-6">
                                Welcome to exportdesi.com. These Terms & Conditions ("Terms") govern your access to and use of our website and services. By accessing or using this website, you agree to be bound by these Terms.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">1. Overview</h2>
                            <p className="text-base leading-relaxed mb-4">
                                Export Desi is a merchant export management operation based in Gurgaon, India. We manage processor qualification, documentation, and shipment coordination for Indian food ingredients and eco-friendly packaging.
                            </p>
                            <p className="text-base leading-relaxed mb-4">
                                These Terms apply to all visitors, users, and customers of exportdesi.com ("you", "your", or "user").
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">2. Use of Website</h2>
                            <h3 className="text-lg font-semibold mt-6 mb-3">Permitted Use</h3>
                            <p className="text-base leading-relaxed mb-4">
                                You may use this website solely for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Learning about our products and services</li>
                                <li>Requesting product quotes and specifications</li>
                                <li>Submitting procurement requirements</li>
                                <li>Communicating with our team regarding orders</li>
                            </ul>

                            <h3 className="text-lg font-semibold mt-6 mb-3">Prohibited Use</h3>
                            <p className="text-base leading-relaxed mb-4">
                                You agree not to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Use the website for any unlawful purpose</li>
                                <li>Attempt to gain unauthorized access to our systems</li>
                                <li>Interfere with or disrupt the website's functionality</li>
                                <li>Use automated systems (bots, scrapers) without permission</li>
                                <li>Transmit malicious code or viruses</li>
                                <li>Impersonate any person or entity</li>
                            </ul>

                            <h2 className="text-xl font-bold mt-10 mb-4">3. Product Information and Orders</h2>
                            <h3 className="text-lg font-semibold mt-6 mb-3">Product Descriptions</h3>
                            <p className="text-base leading-relaxed mb-4">
                                We strive to provide accurate product information, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Product specifications and grades</li>
                                <li>Origin and sourcing information</li>
                                <li>Packaging and labeling details</li>
                                <li>Compliance and certification status</li>
                            </ul>
                            <p className="text-base leading-relaxed mb-4">
                                However, we do not guarantee that all information is error-free. Product specifications may vary based on processor availability and harvest conditions.
                            </p>

                            <h3 className="text-lg font-semibold mt-6 mb-3">Pricing</h3>
                            <p className="text-base leading-relaxed mb-4">
                                Prices shown on the website are indicative and subject to change based on:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Order volume and packaging requirements</li>
                                <li>Destination port and shipping terms</li>
                                <li>Market conditions and raw material costs</li>
                                <li>Currency exchange rates</li>
                            </ul>
                            <p className="text-base leading-relaxed mb-4">
                                Final pricing will be confirmed in a Proforma Invoice after reviewing your specific requirements.
                            </p>

                            <h3 className="text-lg font-semibold mt-6 mb-3">Order Acceptance</h3>
                            <p className="text-base leading-relaxed mb-4">
                                Your submission of an order does not constitute acceptance. We reserve the right to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Accept or decline any order at our discretion</li>
                                <li>Modify quantities or specifications based on availability</li>
                                <li>Request additional documentation or verification</li>
                            </ul>

                            <h2 className="text-xl font-bold mt-10 mb-4">4. Intellectual Property</h2>
                            <h3 className="text-lg font-semibold mt-6 mb-3">Our Property</h3>
                            <p className="text-base leading-relaxed mb-4">
                                All content on this website is owned by or licensed to Export Desi, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Website design, layout, and code</li>
                                <li>Text, descriptions, and written content</li>
                                <li>Logos, trademarks, and brand elements</li>
                                <li>Images, graphics, and visual elements</li>
                                <li>Product specifications and documentation</li>
                            </ul>
                            <p className="text-base leading-relaxed mb-4">
                                You may not reproduce, distribute, modify, or create derivative works without our express written permission.
                            </p>

                            <h3 className="text-lg font-semibold mt-6 mb-3">Image Sources and Usage Disclosure</h3>
                            <p className="text-base leading-relaxed mb-4">
                                The images displayed on this website are sourced from the following channels:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li><strong>Vendor-Provided Images:</strong> Product photographs supplied by our verified processing partners and manufacturers for the purpose of showcasing their products to international buyers.</li>
                                <li><strong>AI-Generated Images:</strong> Certain product and marketing visuals are created using artificial intelligence tools for illustrative and design purposes.</li>
                                <li><strong>Publicly Available Sources:</strong> Some images are obtained from publicly available sources including search engines and stock photo libraries, used in accordance with applicable licenses and fair use principles.</li>
                            </ul>
                            <p className="text-base leading-relaxed mb-4">
                                All images are used for informational, educational, and promotional purposes related to our export business. If you believe any image infringes your copyright, please contact us at <a href="mailto:contact@exportdesi.com" className="text-brand underline">contact@exportdesi.com</a> and we will promptly address the matter.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">5. Disclaimer of Warranties</h2>
                            <p className="text-base leading-relaxed mb-4">
                                THE WEBSITE AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>IMPLIED WARRANTIES OF MERCHANTABILITY</li>
                                <li>IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE</li>
                                <li>IMPLIED WARRANTIES OF NON-INFRINGEMENT</li>
                                <li>WARRANTIES OF ACCURACY, COMPLETENESS, OR RELIABILITY</li>
                            </ul>
                            <p className="text-base leading-relaxed mb-4">
                                WE DO NOT WARRANT THAT:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>The website will be uninterrupted, secure, or error-free</li>
                                <li>Defects will be corrected</li>
                                <li>The website or its servers are free of viruses or harmful components</li>
                                <li>Product information is complete, current, or accurate</li>
                            </ul>

                            <h2 className="text-xl font-bold mt-10 mb-4">6. Limitation of Liability</h2>
                            <p className="text-base leading-relaxed mb-4">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>EXPORT DESI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                                <li>OUR TOTAL LIABILITY SHALL NOT EXCEED THE VALUE OF THE SPECIFIC ORDER GIVING RISE TO THE CLAIM</li>
                                <li>WE ARE NOT RESPONSIBLE FOR ERRORS, DELAYS, OR OMISSIONS IN INFORMATION PROVIDED ON THE WEBSITE</li>
                            </ul>
                            <p className="text-base leading-relaxed mb-4">
                                Our liability is limited to the maximum extent permitted by applicable law. Some jurisdictions may not allow certain limitations, in which case they may not apply to you.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">7. Indemnification</h2>
                            <p className="text-base leading-relaxed mb-4">
                                You agree to indemnify, defend, and hold harmless Export Desi from any claims, losses, damages, or expenses (including legal fees) arising from:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Your use of the website</li>
                                <li>Your violation of these Terms</li>
                                <li>Your misuse of information obtained from the website</li>
                                <li>Your violation of any third-party rights</li>
                            </ul>

                            <h2 className="text-xl font-bold mt-10 mb-4">8. Export Compliance</h2>
                            <p className="text-base leading-relaxed mb-4">
                                All transactions are subject to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Indian export laws and regulations</li>
                                <li>Import laws of the destination country</li>
                                <li>Applicable international trade sanctions</li>
                                <li>Required documentation and certifications</li>
                            </ul>
                            <p className="text-base leading-relaxed mb-4">
                                You are responsible for verifying that products comply with your country's import requirements.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">9. Payment Terms</h2>
                            <p className="text-base leading-relaxed mb-4">
                                Unless otherwise agreed in writing:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Payment terms are specified in the Proforma Invoice</li>
                                <li>We typically require advance payment or Letter of Credit</li>
                                <li>All payments are in USD unless otherwise specified</li>
                                <li>Bank charges on both ends are borne by respective parties</li>
                            </ul>

                            <h2 className="text-xl font-bold mt-10 mb-4">10. Shipping and Delivery</h2>
                            <p className="text-base leading-relaxed mb-4">
                                Shipping terms follow Incoterms 2020 rules as specified in your order confirmation. Key points:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Delivery timelines are estimates and not guaranteed</li>
                                <li>We are not liable for delays due to port congestion, customs, or force majeure</li>
                                <li>Insurance is the buyer's responsibility unless included in the agreed Incoterm</li>
                                <li>Inspection certificates are provided as per agreement</li>
                            </ul>

                            <h2 className="text-xl font-bold mt-10 mb-4">11. Force Majeure</h2>
                            <p className="text-base leading-relaxed mb-4">
                                We are not liable for delays or failures due to circumstances beyond our reasonable control, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Natural disasters, weather events, or acts of God</li>
                                <li>Government actions, embargoes, or export restrictions</li>
                                <li>Labor disputes or strikes</li>
                                <li>Supply chain disruptions or raw material shortages</li>
                                <li>War, terrorism, or civil unrest</li>
                                <li>Pandemics or public health emergencies</li>
                            </ul>

                            <h2 className="text-xl font-bold mt-10 mb-4">12. Modifications to Terms</h2>
                            <p className="text-base leading-relaxed mb-4">
                                We reserve the right to modify these Terms at any time. Changes take effect immediately upon posting to the website. Your continued use after changes constitutes acceptance.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">13. Governing Law and Jurisdiction</h2>
                            <p className="text-base leading-relaxed mb-4">
                                These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Gurgaon, Haryana, India.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">14. Severability</h2>
                            <p className="text-base leading-relaxed mb-4">
                                If any provision of these Terms is found invalid or unenforceable, the remaining provisions shall remain in full force and effect.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">15. Entire Agreement</h2>
                            <p className="text-base leading-relaxed mb-4">
                                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Export Desi regarding the website and supersede any prior agreements.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">16. Contact Information</h2>
                            <p className="text-base leading-relaxed mb-4">
                                For questions about these Terms, contact:
                            </p>
                            <div className="bg-surface p-6 rounded-lg mb-8">
                                <p className="text-base mb-2"><strong>Export Desi</strong></p>
                                <p className="text-base mb-2">Gurgaon, Haryana, India</p>
                                <p className="text-base mb-2">Email: <a href="mailto:contact@exportdesi.com" className="text-brand underline">contact@exportdesi.com</a></p>
                                <p className="text-base">Phone: <a href="tel:+919289790283" className="text-brand underline">+91 9289790283</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </MotionSection>
        </>
    );
}
