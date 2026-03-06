/**
 * CertificateStrip
 * Displays all certification logos in a static flex row aligned with the page container.
 */

const CERTIFICATES = [
    { src: '/APEDA-Certificate.webp', label: 'APEDA' },
    { src: '/FIEO-Certificate.webp', label: 'FIEO' },
    { src: '/fssai-Certificate.webp', label: 'FSSAI' },
    { src: '/ICE-Certificate.webp', label: 'IEC' },
    { src: '/Spice-Board-Certificate.webp', label: 'Spice Board' },
    { src: '/Udyog-Aadhar-Certificate.webp', label: 'Udyog Aadhar' },
];

export default function CertificateStrip() {
    return (
        <section className="bg-white border-b border-border">
            <div className="page-container py-8 md:py-10">
                <p className="section-label mb-4">Certifications &amp; Registrations</p>
                <div className="flex items-center justify-between">
                    {CERTIFICATES.map((cert) => (
                        <div key={cert.label} className="flex flex-col items-center gap-1.5" title={cert.label}>
                            <img
                                src={cert.src}
                                alt={cert.label}
                                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                loading="lazy"
                            />
                            <span className="text-[9px] font-semibold tracking-wide text-muted uppercase text-center leading-tight">
                                {cert.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
