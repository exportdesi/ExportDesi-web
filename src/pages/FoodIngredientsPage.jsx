import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';
import CTASection from '../components/CTASection';
import { MotionSection, MotionCard } from '../components/MotionWrapper';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom';

const PRODUCTS = [
    {
        label: 'Fox Nuts',
        name: 'Makhana',
        summary: 'Four size grades from 12mm to 18mm+. Sourced from processing units in Bihar\'s Mithila cluster. Each shipment includes Certificate of Origin, phytosanitary certificate, grade-specific lab report, and packing list.',
        href: '/industries/food-ingredients/makhana',
    },
    {
        label: 'Dehydrated Ingredients',
        name: 'Dehydrated and Dried Ingredients',
        summary: 'Onion and garlic in flakes, minced, chopped, granule, and powder forms. Banana powder. Process-grade and food-grade supply. Third-party lab reports per lot.',
        href: '/industries/food-ingredients/dehydrated-ingredients',
    },
    {
        label: 'Ayurvedic & Wellness',
        name: 'Moringa Products',
        summary: 'Moringa leaf powder, capsules, and tablets. Sourced from certified organic farms. Rich in vitamins, minerals, and antioxidants. USDA Organic, EU Organic available.',
        href: '/industries/food-ingredients/moringa',
    },
];

export default function FoodIngredientsPage() {
    return (
        <>
            <SEOMeta
                title="Food and Ingredients"
                description="Export Desi's food and ingredients sourcing cluster. Makhana in four grades plus dehydrated onion, garlic, banana powder, and moringa from pre-qualified Indian processors."
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <HeroSection
                    label="Food and Ingredients"
                    title="Indian Food Ingredients for Global Supply Chains."
                    subtitle="We work directly with verified processors. We do not operate through catalogue-based sourcing. Each product ships with pre-dispatch lot verification and a complete export documentation package."
                    background="white"
                    imageUrl="/food-ingredients-hero.png"
                    imageSize="50%"
                    imagePosition="right bottom"
                />
            </motion.div>

            <MotionSection className="bg-white border-b border-border" variant="fadeUp" delay={200}>
                <div className="page-container section-pad">
                    <p className="section-label mb-12">Active Products</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
                        {PRODUCTS.map((product) => (
                            <Link key={product.name} to={product.href} className="bg-white p-10 hover:bg-white/5 transition-colors block">
                                <p className="section-label">{product.label}</p>
                                <h2 className="text-xl md:text-2xl font-bold mb-4">{product.name}</h2>
                                <p className="text-muted text-sm leading-relaxed mb-8">{product.summary}</p>
                                <span className="btn-primary text-xs">
                                    View Specifications
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </MotionSection>

            <MotionSection className="bg-surface border-b border-border" variant="fadeUp" delay={300}>
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Documentation"
                            heading="Full document set per shipment, verified before dispatch."
                            paragraphs={[
                                'All products in this cluster ship with Certificate of Origin, phytosanitary certificate, third-party lab report, commercial invoice, and packing list. Documents are checked for HS code accuracy, Incoterm consistency, and lot traceability before the container is released.',
                                'Destination-specific requirements such as fumigation certificates, health certificates, or halal certification are identified at enquiry stage and coordinated before loading.',
                            ]}
                        />
                        <div>
                            <p className="section-label">Logistics</p>
                            <h2 className="text-xl md:text-2xl font-bold mb-8">Logistics are structured based on shipment volume and destination.</h2>
                            <div className="space-y-0 divide-y divide-border border-t border-border">
                                {[
                                    { label: 'Sea Freight', detail: 'LCL (consolidated) or FCL (full container) depending on order size.' },
                                    { label: 'Primary Ports', detail: 'Nhava Sheva, Mundra, and Chennai — selected by processor location and freight conditions.' },
                                    { label: 'Air Freight', detail: 'Available for samples and urgent dispatches.' },
                                    { label: 'Incoterms', detail: 'FOB, CIF, or DAP confirmed at the Proforma Invoice stage.' },
                                ].map(({ label, detail }) => (
                                    <div key={label} className="flex gap-6 py-4">
                                        <span className="text-xs font-bold uppercase tracking-widest text-brand min-w-[100px] pt-0.5">{label}</span>
                                        <span className="text-sm text-muted leading-relaxed">{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-12">
                        <Link to="/compliance" className="btn-secondary">
                            View Full Compliance Framework
                        </Link>
                    </div>
                </div>
            </MotionSection>

            <MotionSection variant="fadeUp" delay={400}>
                <CTASection
                    heading="Have a food ingredient sourcing requirement?"
                    subtext="Send us the product, grade, volume, and destination. We confirm processor availability and indicative pricing within 48 business hours."
                    primaryCTA={{ label: 'Request Export Details', href: '/contact' }}
                    background="dark"
                />
            </MotionSection>
        </>
    );
}
