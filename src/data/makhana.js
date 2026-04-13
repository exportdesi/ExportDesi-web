// Makhana product specification data
export const makhanaSpecs = {
  hsCode: "20081921", // effective July 2025 for popped makhana
  origin: "Bihar, India",
  botanicalName: "Euryale ferox",
  shelfLife: "12 months in sealed packaging",

  gradeTable: {
    headers: [
      "Grade",
      "Size (mm)",
      "Moisture",
      "Broken Ratio",
      "Ideal For",
      "Primary Markets",
    ],
    rows: [
      [
        "5 Suta",
        "15–18 mm",
        "<8%",
        "<5%",
        "Standard retail packs, snack brands",
        "Domestic, mass market",
      ],
      [
        "6 Suta",
        "18–21 mm",
        "<8%",
        "<5%",
        "Premium retail, export",
        "USA, Canada, UK, UAE",
      ],
      [
        "7 Suta",
        ">21 mm",
        "<8%",
        "<5%",
        "Luxury retail, high-value gifting",
        "USA, Europe, premium channels",
      ],
    ],
  },

  packagingTable: {
    headers: ["Format", "Details", "Use Case"],
    rows: [
      [
        "Bulk (raw)",
        "10 kg PP bags with inner PE liner",
        "B2B ingredient supply",
      ],
      [
        "Export carton",
        "Double-layer corrugated with inner food-grade liner",
        "International shipments",
      ],
    ],
  },

  // Value-added products (retail-ready)
  valueAddedProducts: {
    flavouredMakhana: {
      description:
        "Roasted and flavoured makhana in retail-ready packaging",
      flavours: [
        "Peri Peri",
        "Himalayan Salt",
        "Cheese & Herbs",
        "Plain Salted",
      ],
      packaging: [
        {
          size: "100g",
          type: "Sealed transparent pouch",
          carton: "24 pouches per carton",
        },
        {
          size: "250g",
          type: "Sealed transparent pouch",
          carton: "20 pouches per carton",
        },
        {
          size: "100g",
          type: "PET jar with tamper-evident seal",
          carton: "16 jars per carton",
        },
      ],
      moq: "10 cartons (mixed flavours allowed)",
      shelfLife: "6 months in sealed packaging",
    },
    makhanaPowder: {
      description: "Fine ground makhana powder for baby food and functional foods",
      packaging: [
        { size: "250g", type: "Sealed pouch" },
        { size: "500g", type: "Sealed pouch" },
        { size: "1kg", type: "Sealed pouch" },
      ],
      moq: "10 cartons",
      applications: [
        "Baby food formulations",
        "Functional food ingredients",
        "Gluten-free baking",
        "Energy blends",
      ],
    },
    makhanaCookies: {
      description: "Premium makhana-based cookies, gluten-free and nutrient-rich",
      packaging: [
        { size: "150g", type: "Flow-wrap packet" },
        { size: "200g", type: "Flow-wrap packet" },
        { size: "250g", type: "Retail box" },
      ],
      moq: "10 cartons",
      variants: ["Classic Butter", "Chocolate Chip", "Oats & Makhana"],
    },
  },

  certifications: [
    { name: "FSSAI", description: "Indian food safety compliance" },
    {
      name: "APEDA RCMC",
      description:
        "Registered with Agricultural and Processed Food Products Export Development Authority",
    },
    { name: "Phytosanitary Certificate", description: "Issued per shipment" },
    { name: "Certificate of Origin", description: "Available per shipment" },
    {
      name: "GI Tag",
      description: "Mithila Makhana — geographic indication certification",
    },
    {
      name: "Organic Certification",
      description: "Available on request (USA, EU, Canada)",
    },
    {
      name: "HACCP / ISO 22000",
      description: "Available through processing partners",
    },
  ],

  exportDocuments: [
    "Commercial Invoice & Packing List",
    "Bill of Lading / Airway Bill",
    "Certificate of Origin",
    "Phytosanitary Certificate (NPPO issued)",
    "FSSAI Certificate",
    "Inspection / Quality Certificate",
    "Certificate of Analysis (COA) — moisture, broken ratio, foreign matter, microbiology",
    "Insurance Certificate",
    "AD Code Registration",
  ],

  targetMarkets: [
    {
      market: "United States",
      buyerType:
        "Health food distributors, Indian grocery chains, snack brands",
      why: "Highest price ($19.5/kg), fastest demand growth (11%/yr)",
    },
    {
      market: "Canada",
      buyerType: "Natural food retailers, Indian diaspora wholesale",
      why: "20% of India's makhana exports",
    },
    {
      market: "UAE & Middle East",
      buyerType: "Retail chains, Indian grocery wholesalers",
      why: "Strong cultural familiarity, retail demand",
    },
    {
      market: "United Kingdom",
      buyerType: "Health food retail, ethnic grocery wholesale",
      why: "Plant-based and organic snack segment",
    },
    {
      market: "Australia",
      buyerType: "Health food distributors, superfood importers",
      why: "Emerging superfood market",
    },
  ],

  faqs: [
    {
      question: "What is the MOQ for bulk makhana export?",
      answer:
        "Our minimum order quantity starts from 1 MT for bulk shipments. For sample orders, we can accommodate 5–10 kg at cost.",
    },
    {
      question: "Do you supply raw or roasted makhana?",
      answer:
        "Both. Raw (popped) makhana is available in 10kg PP bags with inner PE liner. Roasted and flavoured makhana is available in retail-ready packs (100g/250g pouches and 100g jars). We also offer makhana powder and makhana cookies as value-added products.",
    },
    {
      question: "Which grades are best for the US and European markets?",
      answer:
        "6 Suta (18–21 mm) and 7 Suta (>21 mm) grades meet the expectations of premium retail buyers in the USA, UK, and Europe. These grades deliver superior visual appeal and shelf stability.",
    },
    {
      question: "Is your makhana GI-tagged?",
      answer:
        "Yes. We source Mithila Makhana, which carries the Geographic Indication (GI) tag — the strongest provenance certification available for makhana, equivalent to Darjeeling tea or Champagne in their respective categories.",
    },
    {
      question: "What certifications do you hold?",
      answer:
        "FSSAI, APEDA RCMC, and phytosanitary certificates are provided with every shipment. Organic (USDA, EU Organic) and HACCP certifications are available for premium market requirements.",
    },
    {
      question: "What are the payment terms?",
      answer:
        "We accept LC (Letter of Credit), TT (Telegraphic Transfer), and advance payment. Terms are discussed and confirmed on the proforma invoice.",
    },
    {
      question: "Can you do CIF or FOB shipping?",
      answer:
        "Yes. We offer both CIF (Cost, Insurance, Freight) and FOB (Free on Board) shipping terms. We ship from major Indian ports including JNPT Mumbai, Kolkata, and Mundra.",
    },
    {
      question: "What is the shelf life of export-grade makhana?",
      answer:
        "12 months in sealed, moisture-proof packaging under standard storage conditions (cool, dry, away from direct sunlight).",
    },
    {
      question: "Do you provide a Certificate of Analysis (COA)?",
      answer:
        "Yes. A batch-specific COA covering moisture content, broken ratio, foreign matter, and microbiological parameters is provided with every shipment.",
    },
    {
      question: "Can you do private label or white label makhana?",
      answer:
        "Yes. We can supply retail-ready makhana in your brand's packaging, including custom flavours (peri peri, Himalayan salt, cheese, etc.). Lead time for private label is discussed at order confirmation.",
    },
  ],
};
