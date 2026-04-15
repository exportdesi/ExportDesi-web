import SEOMeta from '../components/SEOMeta';
import { Helmet } from 'react-helmet-async';
import { MotionSection } from '../components/MotionWrapper';

export default function DisclaimerPage() {
    return (
        <>
            <SEOMeta
                title="Disclaimer"
                description="Legal Disclaimer for Export Desi - Information accuracy, product specifications, and image usage."
            />
            <Helmet>
                <link rel="canonical" href="https://exportdesi.com/disclaimer" />
            </Helmet>

            <MotionSection className="bg-white" variant="fadeUp">
                <div className="page-container section-pad">
                    <div className="max-w-3xl">
                        <p className="section-label">Legal</p>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Disclaimer</h1>
                        <p className="text-muted text-sm mb-8">
                            Last Updated: April 15, 2026
                        </p>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-base leading-relaxed mb-6">
                                The information provided on exportdesi.com is for general informational and business purposes only. While we strive to keep information accurate and current, there may be inaccuracies or omissions.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">1. No Professional Advice</h2>
                            <p className="text-base leading-relaxed mb-4">
                                All content on this website is for informational purposes only and does not constitute:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Legal, tax, or customs advice</li>
                                <li>Guarantees of product availability or specifications</li>
                                <li>Binding offers to sell products</li>
                                <li>Assurances of regulatory compliance in your jurisdiction</li>
                            </ul>
                            <p className="text-base leading-relaxed mb-4">
                                You should consult with appropriate professionals in your country before making purchasing decisions.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">2. Product Information Disclaimer</h2>
                            <p className="text-base leading-relaxed mb-4">
                                Product information displayed on this website is subject to change without notice due to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Seasonal availability and harvest conditions</li>
                                <li>Processor capacity and production schedules</li>
                                <li>Changes in raw material quality or specifications</li>
                                <li>Updates to compliance requirements or certifications</li>
                            </ul>
                            <p className="text-base leading-relaxed mb-4">
                                We recommend confirming current specifications, availability, and pricing before placing orders.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">3. Image Usage Disclaimer</h2>
                            <p className="text-base leading-relaxed mb-4">
                                All images on this website are used for informational, educational, and promotional purposes related to our export business. Image sources include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li><strong>Vendor-Provided Images:</strong> Supplied by processing partners and manufacturers for product representation.</li>
                                <li><strong>AI-Generated Images:</strong> Created using artificial intelligence tools for illustrative and design purposes.</li>
                                <li><strong>Publicly Available Sources:</strong> Obtained from search engines, stock libraries, and other publicly accessible sources.</li>
                            </ul>

                            <h3 className="text-lg font-semibold mt-6 mb-3">Image Accuracy</h3>
                            <p className="text-base leading-relaxed mb-4">
                                Product images are representative and may not exactly match actual shipments due to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Natural variation in agricultural products</li>
                                <li>Differences in packaging based on buyer requirements</li>
                                <li>Lighting and photography conditions</li>
                                <li>Display settings on your device</li>
                            </ul>
                            <p className="text-base leading-relaxed mb-4">
                                For exact product samples, we recommend requesting physical samples before placing orders.
                            </p>

                            <h3 className="text-lg font-semibold mt-6 mb-3">Copyright Concerns</h3>
                            <p className="text-base leading-relaxed mb-4">
                                We respect intellectual property rights. If you believe any image on our website infringes your copyright, please contact us at <a href="mailto:contact@exportdesi.com" className="text-brand underline">contact@exportdesi.com</a> with:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Identification of the copyrighted work</li>
                                <li>Location of the allegedly infringing material</li>
                                <li>Your contact information</li>
                                <li>Statement of good faith belief regarding authorization</li>
                            </ul>
                            <p className="text-base leading-relaxed mb-4">
                                We will promptly investigate and remove any infringing content upon verification.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">4. External Links Disclaimer</h2>
                            <p className="text-base leading-relaxed mb-4">
                                Our website may contain links to external websites including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Government portals (FSSAI, APEDA, Spice Board, etc.)</li>
                                <li>Certification body websites</li>
                                <li>Industry association resources</li>
                                <li>Logistics and shipping partner sites</li>
                            </ul>
                            <p className="text-base leading-relaxed mb-4">
                                We do not control and are not responsible for the content, accuracy, or practices of these external sites.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">5. Forward-Looking Statements</h2>
                            <p className="text-base leading-relaxed mb-4">
                                Some statements on this website may be forward-looking, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Production capacity estimates</li>
                                <li>Delivery timeline projections</li>
                                <li>Market availability assessments</li>
                                <li>Pricing indications</li>
                            </ul>
                            <p className="text-base leading-relaxed mb-4">
                                These statements involve risks and uncertainties that may cause actual results to differ materially.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">6. No Warranty</h2>
                            <p className="text-base leading-relaxed mb-4">
                                THE WEBSITE AND ALL CONTENT ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE</li>
                                <li>NON-INFRINGEMENT AND ACCURACY</li>
                                <li>RELIABILITY AND COMPLETENESS</li>
                            </ul>

                            <h2 className="text-xl font-bold mt-10 mb-4">7. Limitation of Liability</h2>
                            <p className="text-base leading-relaxed mb-4">
                                EXPORT DESI SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING FROM USE OF THIS WEBSITE, INCLUDING:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Direct, indirect, incidental, or consequential damages</li>
                                <li>Loss of profits, data, or business opportunities</li>
                                <li>Errors, omissions, or delays in information</li>
                                <li>Service interruptions or technical failures</li>
                            </ul>

                            <h2 className="text-xl font-bold mt-10 mb-4">8. Jurisdiction-Specific Disclaimers</h2>
                            <p className="text-base leading-relaxed mb-4">
                                Some jurisdictions have specific consumer protection laws that may override certain disclaimers. If you are accessing this website from such jurisdictions, some limitations may not apply to you.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">9. Changes to Disclaimer</h2>
                            <p className="text-base leading-relaxed mb-4">
                                We may update this Disclaimer periodically. The "Last Updated" date reflects the most recent revision.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">10. Contact</h2>
                            <p className="text-base leading-relaxed mb-4">
                                For questions about this Disclaimer, contact:
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
