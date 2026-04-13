// Dehydrated ingredients product data
// Note: Only products with confirmed suppliers and specifications are listed
export const dehydratedProducts = [
    {
        name: 'Dehydrated Onion',
        variants: ['Flakes', 'Minced', 'Chopped', 'Granules', 'Powder'],
        moisture: '≤ 6%',
        hsCode: '0712.20.00',
        priceRange: '$4-8/kg FOB',
        note: 'Available in white and red onion variants.',
    },
    {
        name: 'Dehydrated Garlic',
        variants: ['Flakes', 'Minced', 'Granules', 'Powder'],
        moisture: '≤ 6%',
        hsCode: '0712.90.20',
        priceRange: '$6-12/kg FOB',
        note: 'Machine cleaned, double sorted. Allicin content documentation available.',
    },
];

export const dehydratedSpecTable = {
    headers: ['Product', 'HS Code', 'Forms Available', 'Moisture', 'Mesh Size', 'Pack Formats'],
    rows: [
        ['Dehydrated Onion', '0712.20.00', 'Flakes (1-3mm) / Minced (2-4mm) / Granules (8-20 mesh) / Powder (60-80 mesh)', '≤ 6%', '8-80 mesh (customizable)', '5 kg kraft bag / 10 kg carton / 25 kg woven bag'],
        ['Dehydrated Garlic', '0712.90.20', 'Flakes (1-3mm) / Granules (8-20 mesh) / Powder (60-80 mesh)', '≤ 6%', '8-80 mesh (customizable)', '5 kg kraft bag / 10 kg carton / 25 kg woven bag'],
    ],
};

export const dehydratedFaqs = [
    {
        question: 'Do you supply dehydrated ingredients in bulk containers?',
        answer: 'Yes. Most dehydrated ingredients can be supplied in 10–25 kg cartons for FCL and LCL shipments. Bulk container supply is available for onion and garlic at commercial volumes. Contact us for freight and container feasibility.',
    },
    {
        question: 'Can you provide test reports for pesticide residue and heavy metals?',
        answer: 'Yes. Third-party lab reports for pesticide residue, heavy metals, microbiology, and moisture are standard for all export consignments. Specific accredited labs can be specified by the buyer. Costs for buyer-specified testing are borne by the buyer.',
    },
    {
        question: 'What is the typical lead time from order to shipment?',
        answer: 'For in-stock products, lead time is typically 10–15 working days from order confirmation to container stuffing. Custom processing or organic-certified lots require 4–6 weeks advance notice.',
    },
    {
        question: 'Can multiple dehydrated products be shipped in the same container?',
        answer: 'Yes. We coordinate consolidated shipments covering multiple SKUs — for example, dehydrated onion flakes and garlic powder in the same FCL or LCL consignment. Each product is packed separately with its own inner packaging, documented individually on the packing list, and covered by a product-specific lab report. A single commercial invoice and CoO covers the full consignment.',
    },
    {
        question: 'What is the minimum order quantity?',
        answer: 'Minimum quantities vary by product and form. For trial purposes, we can structure smaller quantities across multiple products to allow buyers to verify specifications before committing to commercial volumes. Contact us to confirm current processor availability and feasibility.',
    },
    {
        question: 'What packaging formats are available for mixed SKU orders?',
        answer: 'For mixed-SKU consignments, each product is packed in its standard export format: 5 kg, 10 kg, or 25 kg cartons depending on the product. Cartons are individually labelled with product name, batch reference, and net weight. Palletisation and container packing layout are confirmed with the buyer before stuffing.',
    },
];

// Export documents for dehydrated products
export const dehydratedExportDocuments = [
    'Certificate of Origin: FIEO or Chamber of Commerce',
    'Phytosanitary Certificate: NPPO India',
    'Commercial Invoice and Packing List',
    'Bill of Lading or Airway Bill',
    'Third-party Lab Report: moisture, microbiology, pesticide residue, heavy metals',
    'Pre-shipment Inspection Certificate: on request',
    'Fumigation Certificate: for wooden pallets/crates',
];

// Certifications for dehydrated products
export const dehydratedCertifications = [
    { name: 'FSSAI', description: 'Food Safety and Standards Authority of India - Domestic manufacturing license' },
    { name: 'APEDA', description: 'Agricultural and Processed Food Products Export Development Council - RCMC registered' },
    { name: 'ISO 22000', description: 'Food Safety Management System certified processors' },
    { name: 'HACCP', description: 'Hazard Analysis Critical Control Point certified facilities' },
    { name: 'GMP', description: 'Good Manufacturing Practices compliant units' },
    { name: 'Organic (Optional)', description: 'NPOP/USDA/EU Organic certification available on request' },
];
