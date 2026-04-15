import SEOMeta from '../components/SEOMeta';
import { Helmet } from 'react-helmet-async';
import { MotionSection } from '../components/MotionWrapper';
import ContentBlock from '../components/ContentBlock';

export default function PrivacyPolicyPage() {
    return (
        <>
            <SEOMeta
                title="Privacy Policy"
                description="Privacy Policy for Export Desi - How we collect, use, and protect your personal information."
            />
            <Helmet>
                <link rel="canonical" href="https://exportdesi.com/privacy-policy" />
            </Helmet>

            <MotionSection className="bg-white" variant="fadeUp">
                <div className="page-container section-pad">
                    <div className="max-w-3xl">
                        <p className="section-label">Legal</p>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
                        <p className="text-muted text-sm mb-8">
                            Last Updated: April 15, 2026
                        </p>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-base leading-relaxed mb-6">
                                Export Desi ("we", "our", or "us") operates exportdesi.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or contact us for business inquiries.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">1. Information We Collect</h2>
                            <h3 className="text-lg font-semibold mt-6 mb-3">Personal Information</h3>
                            <p className="text-base leading-relaxed mb-4">
                                We collect personal information that you voluntarily provide when you:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Submit an enquiry through our contact form</li>
                                <li>Request a product quote</li>
                                <li>Communicate with us via email or phone</li>
                                <li>Subscribe to our communications</li>
                            </ul>
                            <p className="text-base leading-relaxed mb-4">
                                This may include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Name and job title</li>
                                <li>Company name and address</li>
                                <li>Email address and phone number</li>
                                <li>Product requirements and specifications</li>
                                <li>Destination country and volume requirements</li>
                            </ul>

                            <h3 className="text-lg font-semibold mt-6 mb-3">Automatically Collected Information</h3>
                            <p className="text-base leading-relaxed mb-4">
                                When you visit our website, we automatically collect certain information about your device and browsing activity, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>IP address and browser type</li>
                                <li>Device information and operating system</li>
                                <li>Pages visited and time spent on pages</li>
                                <li>Referring website or source</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>

                            <h2 className="text-xl font-bold mt-10 mb-4">2. How We Use Your Information</h2>
                            <p className="text-base leading-relaxed mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Respond to your enquiries and provide requested information</li>
                                <li>Process and fulfill your product orders</li>
                                <li>Send you quotes and product specifications</li>
                                <li>Communicate about your shipment status</li>
                                <li>Improve our website and services</li>
                                <li>Comply with legal and regulatory requirements</li>
                            </ul>

                            <h2 className="text-xl font-bold mt-10 mb-4">3. Information Sharing and Disclosure</h2>
                            <p className="text-base leading-relaxed mb-4">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li><strong>With Processing Partners:</strong> To fulfill your orders, we may share necessary information with verified processing units and suppliers.</li>
                                <li><strong>With Logistics Providers:</strong> Shipping and documentation partners require certain information to coordinate exports.</li>
                                <li><strong>For Legal Compliance:</strong> When required by law, regulation, or legal process.</li>
                                <li><strong>With Your Consent:</strong> When you explicitly agree to information sharing.</li>
                            </ul>

                            <h2 className="text-xl font-bold mt-10 mb-4">4. Data Security</h2>
                            <p className="text-base leading-relaxed mb-4">
                                We implement reasonable security measures to protect your personal information, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Secure servers and encrypted data transmission</li>
                                <li>Limited access to personal information</li>
                                <li>Regular security assessments and updates</li>
                            </ul>
                            <p className="text-base leading-relaxed mb-4">
                                However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">5. Cookies and Tracking</h2>
                            <p className="text-base leading-relaxed mb-4">
                                Our website uses cookies and similar technologies to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Remember your preferences and settings</li>
                                <li>Understand how you use our website</li>
                                <li>Improve website performance and user experience</li>
                            </ul>
                            <p className="text-base leading-relaxed mb-4">
                                You can control cookie settings through your browser. Most browsers allow you to refuse or delete cookies. Note that disabling cookies may affect website functionality.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">6. Third-Party Links</h2>
                            <p className="text-base leading-relaxed mb-4">
                                Our website may contain links to third-party websites (e.g., certification bodies, industry associations). We are not responsible for the privacy practices or content of these external sites.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">7. International Data Transfers</h2>
                            <p className="text-base leading-relaxed mb-4">
                                As an export business, your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">8. Your Rights</h2>
                            <p className="text-base leading-relaxed mb-4">
                                Depending on your location, you may have the right to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Access your personal information</li>
                                <li>Correct inaccurate information</li>
                                <li>Request deletion of your information</li>
                                <li>Object to or restrict certain processing</li>
                                <li>Data portability</li>
                            </ul>
                            <p className="text-base leading-relaxed mb-4">
                                To exercise these rights, contact us at <a href="mailto:contact@exportdesi.com" className="text-brand underline">contact@exportdesi.com</a>.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">9. Data Retention</h2>
                            <p className="text-base leading-relaxed mb-4">
                                We retain personal information for as long as necessary to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Fulfill the purposes described in this policy</li>
                                <li>Comply with legal obligations (e.g., tax, export documentation)</li>
                                <li>Resolve disputes and enforce agreements</li>
                            </ul>

                            <h2 className="text-xl font-bold mt-10 mb-4">10. Children's Privacy</h2>
                            <p className="text-base leading-relaxed mb-4">
                                Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">11. Changes to This Privacy Policy</h2>
                            <p className="text-base leading-relaxed mb-4">
                                We may update this Privacy Policy periodically. The "Last Updated" date will reflect changes. We encourage you to review this policy regularly.
                            </p>

                            <h2 className="text-xl font-bold mt-10 mb-4">12. Contact Us</h2>
                            <p className="text-base leading-relaxed mb-4">
                                For questions about this Privacy Policy or our data practices, contact:
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
