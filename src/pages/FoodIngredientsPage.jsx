import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';

const PRODUCTS = [
    {
        label: 'Fox Nuts',
        name: 'Makhana',
        summary: 'Multiple size grades. Verified processor network in Bihar. Suitable for retail, food ingredient, and snack manufacturing.',
        href: '/industries/food-ingredients/makhana',
    },
    {
        label: 'Dehydrated Ingredients',
        name: 'Dehydrated & Dried Ingredients',
        summary: 'Onion, garlic, banana powder, moringa — multiple forms and pack formats. Process-grade and food-grade supply.',
        href: '/industries/food-ingredients/dehydrated-ingredients',
    },
];

export default function FoodIngredientsPage() {
    return (
        <>
            <SEOMeta
                title="Food & Ingredients"
                description="Export Desi's food & ingredients export cluster. Makhana, dehydrated onion, garlic, and functional powders from verified Indian processors."
            />

            <HeroSection
                label="Food & Ingredients"
                title="Indian Food Ingredients for Global Supply Chains."
                subtitle="Direct-from-processor supply across verified food ingredient categories. Full documentation, quality verification, and compliance support."
                background="surface"
            />

            {/* Product Grid */}
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
                                    View Product Details
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cluster context */}
            <section className="bg-surface border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Compliance"
                            heading="Export documentation is handled end-to-end."
                            paragraphs={[
                                'All products in this cluster ship with a standard documentation package: Certificate of Origin, Phytosanitary Certificate, Quality/Test Reports, Commercial Invoice, and Packing List.',
                                'Destination-market-specific requirements — including import permits, fumigation certificates, and halal/organic documentation — are coordinated on a shipment basis.',
                            ]}
                        />
                        <ContentBlock
                            label="Logistics"
                            heading="Sea and air freight across all major ports."
                            paragraphs={[
                                'Standard shipments are consolidated or FCL by sea from Nhava Sheva, Mundra, or Chennai depending on product and processor location. Air freight is available for samples.',
                                'Incoterm flexibility: FOB, CIF, and DAP terms are all accommodated.',
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
                heading="Working on a food ingredient sourcing requirement?"
                subtext="Share specifications. We confirm processor availability and indicative pricing within 48 hours."
                primaryCTA={{ label: 'Request Export Details', href: '/contact' }}
                background="dark"
            />
        </>
    );
}
