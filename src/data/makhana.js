// Makhana product specification data
export const makhanaSpecs = {
    gradeTable: {
        headers: ['Grade', 'Size (mm)', 'Moisture (%)', 'Broken (%)', 'Typical Use'],
        rows: [
            ['Standard', '12–14', '≤ 12%', '≤ 5%', 'Bulk ingredient, snack base'],
            ['Select', '14–16', '≤ 10%', '≤ 3%', 'Retail packs, roasted SKUs'],
            ['Premium', '16–18', '≤ 8%', '≤ 2%', 'Premium retail, gift packs'],
            ['Extra Premium', '18+', '≤ 8%', '≤ 1%', 'Luxury retail, specialty markets'],
        ],
    },
    packagingTable: {
        headers: ['Pack Format', 'Net Weight', 'Inner Bag', 'Outer Carton'],
        rows: [
            ['Bulk', '20 kg', 'Food-grade PP woven bag', 'N/A'],
            ['Semi-bulk', '10 kg', 'Food-grade PE liner', 'Corrugated carton'],
            ['Wholesale', '5 kg', 'Kraft paper / PE liner', 'Corrugated carton'],
        ],
    },
    faqs: [
        {
            question: 'What is the minimum order quantity for Makhana?',
            answer: 'Trial orders can be arranged from 100 kg per grade. Commercial orders typically start at 1 MT per grade. Exact MOQ depends on grade availability at time of order. Contact us to confirm current stock levels.',
        },
        {
            question: 'Do you supply organic-certified Makhana?',
            answer: 'Organic supply requires advance planning and processor alignment. We work with processors who can supply under organic protocols, subject to seasonal availability and a lead time of 4–6 weeks. Certification documentation is provided on request.',
        },
        {
            question: 'What documentation is provided with each shipment?',
            answer: 'Standard documentation includes Certificate of Origin, Phytosanitary Certificate, Commercial Invoice, Packing List, Bill of Lading, and test reports (moisture, purity, microbial). Additional buyer-specific documentation can be arranged.',
        },
        {
            question: 'How is Makhana shipped internationally?',
            answer: 'Makhana is shipped by sea freight in standard 20\' or 40\' containers from major Indian ports. Air freight is available for sample shipments. Storage requirements are dry, cool, and away from moisture — standard FCL dry container conditions apply.',
        },
        {
            question: 'Can you arrange custom packaging or private labelling?',
            answer: 'Yes. Custom packaging specifications (size, print, label) can be accommodated with processor partners. A minimum order quantity and a production lead time of 3–4 weeks applies. We do not offer private labelling ourselves; this is facilitated through the processor.',
        },
    ],
};
