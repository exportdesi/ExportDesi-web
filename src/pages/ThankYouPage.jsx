import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import { MotionSection } from '../components/MotionWrapper';
import { motion } from 'framer-motion';  

export default function ThankYouPage() {
    // Fire tracking event on mount
    useEffect(() => {
        if (typeof window.clarity === 'function') {
            window.clarity('event', 'form_submit');
        }
        // Scroll to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SEOMeta
                title="Enquiry Received"
                description="Your export requirement has been submitted. Export Desi will respond within 48 business hours."
            />

            <MotionSection className="bg-white border-b border-border min-h-[60vh] flex items-center" variant="fadeUp" delay={100}>
                <div className="page-container section-pad">
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-8 h-1 bg-brand mb-8"
                        />
                        <p className="section-label">Enquiry Submitted</p>
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                            Your requirement has been received.
                        </h1>
                        <p className="text-muted text-base leading-relaxed mb-4">
                            We review every enquiry before responding. You will receive a reply within <strong className="text-brand">48 business hours</strong>.
                        </p>
                        <p className="text-muted text-sm leading-relaxed mb-10">
                            If the requirement falls outside what we can currently fulfil, we confirm that in our first reply — not after extended back-and-forth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link to="/" className="btn-primary">
                                Back to Home
                            </Link>
                            <Link to="/compliance" className="btn-secondary">
                                View Compliance Framework
                            </Link>
                        </div>
                    </div>
                </div>
            </MotionSection>
        </>
    );
}
