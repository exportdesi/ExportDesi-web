import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';
import CTASection from '../components/CTASection';
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
        summary: 'Onion and garlic in flakes, minced, chopped, granule, and powder forms. Banana powder. Moringa leaf powder. Process-grade and food-grade supply. Third-party lab reports per lot.',
        href: '/industries/food-ingredients/dehydrated-ingredients',
    },
];

export default function FoodIngredientsPage() {
    return (
        <>
            <SEOMeta
                title="Food and Ingredients"
                description="Export Desi's food and ingredients sourcing cluster. Makhana in four grades plus dehydrated onion, garlic, banana powder, and moringa from pre-qualified Indian processors."
            />

            <HeroSection
                label="Food and Ingredients"
                title="Indian Food Ingredients for Global Supply Chains."
                subtitle="Supply from processors we have verified, not catalogue listings. Each product ships with pre-dispatch lot verification and a complete export documentation package."
                background="surface"
            />

            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <p className="section-label mb-12">Active Products</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
                        {PRODUCTS.map((product) => (
                            <div key={product.name} className="bg-white p-10">
                                <p className="section-label">{product.label}</p>
                                <h2 className="text-xl md:text-2xl font-bold mb-4">{product.name}</h2>
                                <p className="text-muted text-sm leading-relaxed mb-8">{product.summary}</p>
                                <Link to={product.href} className="btn-primary text-xs">
                                    View Specifications
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-surface border-b border-border">
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
                        <ContentBlock
                            label="Logistics"
                            heading="Sea freight from Nhava Sheva, Mundra, or Chennai."
                            paragraphs={[
                                'Commercial volumes move by sea, either consolidated (LCL) or full container (FCL) depending on volume and product. Port selection is determined by processor location and freight rates at time of booking. Air freight is available for samples.',
                                'We accommodate FOB, CIF, and DAP Incoterms. Incoterm selection is confirmed at PI stage.',
                            ]}
                        />
                    </div>
                    <div className="mt-12">
                        <Link to="/compliance" className="btn-secondary">
                            View Full Compliance Framework
                        </Link>
                    </div>
                </div>
            </section>

            <CTASection
                heading="Have a food ingredient sourcing requirement?"
                subtext="Send us the product, grade, volume, and destination. We confirm processor availability and indicative pricing within 48 business hours."
                primaryCTA={{ label: 'Request Export Details', href: '/contact' }}
                background="dark"
            />
        </>
    );
}
