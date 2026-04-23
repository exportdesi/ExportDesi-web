import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';  
import { useEffect, useState, useRef } from 'react';
import { MotionSection } from '../components/MotionWrapper';

// ─── Reusable callout components ───────────────────────────────────────────────

function KeyTakeaways({ items }) {
    return (
        <div className="bg-surface border border-border rounded-lg p-6 my-8">
            <div className="mb-4 pb-3 border-b border-border">
                <h3 className="font-bold text-brand text-sm uppercase tracking-widest">Key Takeaways</h3>
            </div>
            <ul className="space-y-3">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function InfoBox({ title, children }) {
    return (
        <div className="border border-border rounded-lg p-5 my-6 bg-surface">
            {title && <h4 className="font-bold text-sm uppercase tracking-widest mb-3">{title}</h4>}
            <div className="text-muted text-sm">{children}</div>
        </div>
    );
}

function StatCard({ label, value, subtext }) {
    return (
        <div className="bg-white border border-border rounded-lg p-5 text-center">
            <div className="text-xs uppercase tracking-widest text-muted mb-2">{label}</div>
            <div className="text-3xl font-bold text-brand mb-1">{value}</div>
            {subtext && <div className="text-xs text-muted">{subtext}</div>}
        </div>
    );
}

function ContentSection({ id, title, children }) {
    return (
        <section id={id} className="scroll-mt-32 mb-12 last:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand">{title}</h2>
            {children}
        </section>
    );
}

function BulletList({ items }) {
    return (
        <ul className="space-y-3 mb-6">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

function DocTable({ rows }) {
    if (!rows || rows.length === 0) return null;
    const headers = Object.keys(rows[0]);
    return (
        <div className="overflow-x-auto rounded-lg border border-border mb-6">
            <table className="w-full text-sm">
                <thead>
                    <tr className="bg-brand text-white">
                        {headers.map((h) => (
                            <th key={h} className="text-left px-5 py-4 font-semibold text-xs uppercase tracking-widest">{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-border">
                    {rows.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-surface'}>
                            {Object.values(row).map((cell, ci) => (
                                <td key={ci} className={`px-5 py-4 ${ci === 0 ? 'font-semibold text-brand' : 'text-muted'}`}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function FAQList({ faqs }) {
    return (
        <div className="space-y-4">
            {faqs.map((faq, idx) => (
                <div key={idx} className="border border-border rounded-lg p-5 hover:border-brand transition-colors">
                    <h3 className="font-bold text-brand mb-3 flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand text-white text-xs flex items-center justify-center">Q</span>
                        {faq.q}
                    </h3>
                    <p className="text-muted text-sm pl-9">{faq.a}</p>
                </div>
            ))}
        </div>
    );
}

function BlogImage({ src, alt, caption, credit }) {
    return (
        <figure className="my-8 rounded-xl overflow-hidden border border-border">
            <img src={src} alt={alt} className="w-full h-64 md:h-80 object-cover" loading="lazy" />
            {(caption || credit) && (
                <figcaption className="bg-surface border-t border-border px-4 py-3">
                    {caption && (
                        <p className="text-xs text-center text-muted italic">{caption}</p>
                    )}
                    {credit && (
                        <p className="text-[10px] text-right text-muted/60 mt-1">Image: {credit}</p>
                    )}
                </figcaption>
            )}
        </figure>
    );
}

function ArticleSideNav({ slug, allPosts }) {
    const slugs = Object.keys(allPosts);
    const currentIndex = slugs.indexOf(slug);
    const prevSlug = currentIndex > 0 ? slugs[currentIndex - 1] : null;
    const nextSlug = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : null;
    const prevPost = prevSlug ? allPosts[prevSlug] : null;
    const nextPost = nextSlug ? allPosts[nextSlug] : null;

    return (
        <>
            {/* Desktop — right-side floating panel */}
            <div className="hidden xl:block fixed right-6 top-1/2 -translate-y-1/2 z-30 w-52">
                <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
                    <div className="px-4 py-3 border-b border-border bg-surface flex items-center justify-between">
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted">Articles</span>
                        <span className="text-xs font-bold text-brand">{currentIndex + 1} / {slugs.length}</span>
                    </div>
                    {prevPost ? (
                        <Link to={`/blog/${prevSlug}`} className="block px-4 py-3 border-b border-border hover:bg-surface transition-colors group">
                            <div className="flex items-center gap-1.5 mb-1.5">
                                <svg className="w-3 h-3 text-muted group-hover:text-brand transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                                <span className="text-[10px] uppercase tracking-widest text-muted">Previous</span>
                            </div>
                            <p className="text-xs font-semibold text-muted group-hover:text-brand transition-colors leading-snug line-clamp-2">{prevPost.title}</p>
                        </Link>
                    ) : (
                        <div className="px-4 py-3 border-b border-border">
                            <p className="text-[10px] uppercase tracking-widest text-muted/40">First article</p>
                        </div>
                    )}
                    {nextPost ? (
                        <Link to={`/blog/${nextSlug}`} className="block px-4 py-3 border-b border-border hover:bg-surface transition-colors group">
                            <div className="flex items-center gap-1.5 mb-1.5">
                                <svg className="w-3 h-3 text-muted group-hover:text-brand transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                                <span className="text-[10px] uppercase tracking-widest text-muted">Next</span>
                            </div>
                            <p className="text-xs font-semibold text-muted group-hover:text-brand transition-colors leading-snug line-clamp-2">{nextPost.title}</p>
                        </Link>
                    ) : (
                        <div className="px-4 py-3 border-b border-border">
                            <p className="text-[10px] uppercase tracking-widest text-muted/40">Last article</p>
                        </div>
                    )}
                    <Link to="/blog" className="flex items-center gap-2 px-4 py-3 hover:bg-surface transition-colors group">
                        <svg className="w-3.5 h-3.5 text-muted group-hover:text-brand transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                        <span className="text-xs font-semibold text-brand">All articles</span>
                    </Link>
                </div>
            </div>

            {/* Mobile — fixed bottom bar */}
            <div className="xl:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-lg">
                <div className="grid grid-cols-3">
                    {/* Prev */}
                    {prevPost ? (
                        <Link to={`/blog/${prevSlug}`} className="flex flex-col items-center gap-0.5 py-2.5 px-2 hover:bg-surface active:bg-brand/10 transition-colors border-r border-border">
                            <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="text-[9px] font-bold uppercase tracking-wider text-muted">Prev</span>
                            <span className="text-[8px] text-muted/60 leading-tight text-center truncate w-full px-1">{prevPost.title.split(':')[0]}</span>
                        </Link>
                    ) : (
                        <div className="flex flex-col items-center gap-0.5 py-2.5 px-2 border-r border-border opacity-25">
                            <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="text-[9px] font-bold uppercase tracking-wider text-muted">Prev</span>
                        </div>
                    )}

                    {/* All articles */}
                    <Link to="/blog" className="flex flex-col items-center gap-0.5 py-2.5 px-2 hover:bg-surface active:bg-brand/10 transition-colors border-r border-border">
                        <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-brand">All Articles</span>
                        <span className="text-[8px] text-muted/60">{currentIndex + 1} / {slugs.length}</span>
                    </Link>

                    {/* Next */}
                    {nextPost ? (
                        <Link to={`/blog/${nextSlug}`} className="flex flex-col items-center gap-0.5 py-2.5 px-2 hover:bg-surface active:bg-brand/10 transition-colors">
                            <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-[9px] font-bold uppercase tracking-wider text-muted">Next</span>
                            <span className="text-[8px] text-muted/60 leading-tight text-center truncate w-full px-1">{nextPost.title.split(':')[0]}</span>
                        </Link>
                    ) : (
                        <div className="flex flex-col items-center gap-0.5 py-2.5 px-2 opacity-25">
                            <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-[9px] font-bold uppercase tracking-wider text-muted">Next</span>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

// ─── Post content components ────────────────────────────────────────────────────

// ─── How to Import Makhana from India ───
function MakhanaImportContent() {
    return (
        <>
            <ContentSection id="overview" title="The Market Opportunity — and Where First-Time Buyers Get Stuck">
                <p className="text-muted leading-relaxed mb-4 text-lg">
                    Makhana exports from India have grown at a <strong className="text-brand">39% CAGR</strong> over the past four years — from 6,700 MT in 2020 to 25,130 MT in 2024, according to APEDA export data. India produces over 90% of the world&apos;s supply, almost entirely from Bihar. The Indian government formalised the sector&apos;s strategic importance in Union Budget 2025 by establishing a dedicated Makhana Board with ₹100 crore in funding. For international buyers in the USA, UK, UAE, Canada, and Australia, the product is no longer obscure — demand is real and growing.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                    What catches buyers off guard is not the product itself but the paperwork. Documentation errors are the most common cause of customs holds and port rejections for Indian food exports. A phytosanitary certificate issued before the final lot is packed is invalid. A COA from a non-NABL lab will be rejected by US FDA and EU customs. Mismatches between the commercial invoice and packing list trigger mandatory inspections. None of this is complicated once you know what to expect — but the first-time buyer who skips over the documentation section of this guide is the one who pays demurrage.
                </p>
                <p className="text-muted leading-relaxed mb-6">
                    This guide covers the full import process: the correct HS codes effective July 2025, what certifications your exporter must hold, what your document set must include, what to watch for when evaluating suppliers, and the questions real buyers ask about risk.
                </p>
                <BlogImage src="/images/products/makhana/makhna-field.webp" alt="Makhana cultivation in Bihar's wetland pond systems" caption="Makhana is cultivated in the wetland ponds of Bihar — India produces over 90% of global supply from this one state." />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                    <StatCard label="Export Volume" value="25,130 MT" subtext="FY2024 (Source: APEDA)" />
                    <StatCard label="CAGR" value="39%" subtext="2020–2024 (Source: APEDA)" />
                    <StatCard label="HS Code (popped)" value="2008.19.21" subtext="Effective July 2025" />
                    <StatCard label="Makhana Board" value="₹100 Cr" subtext="Union Budget 2025 allocation" />
                </div>
            </ContentSection>

            <ContentSection id="hs-code" title="HS Code & Classification">
                <p className="text-muted leading-relaxed mb-4">
                    As of July 2025, the Indian government issued updated HS codes for makhana products. Using the pre-July classification can cause a mismatch at customs — something that will hold your shipment and require amended documentation.
                </p>
                <DocTable rows={[
                    { Product: 'Popped makhana (phool makhana)', 'HS Code': '2008.19.21', Notes: 'Effective July 2025; covers plain, roasted, salted' },
                    { Product: 'Makhana flour / powder', 'HS Code': '2008.19.22', Notes: 'Effective July 2025; milled forms' },
                    { Product: 'Raw / unpopped makhana seeds', 'HS Code': 'Confirm with broker', Notes: 'Different classification; confirm before shipping' },
                ]} />
                <InfoBox title="Why This Matters">
                    If your customs broker files under the old code, your shipment may be stopped for reclassification at the destination port. Confirm your exporter is using the updated code on the commercial invoice, packing list, and shipping bill from India.
                </InfoBox>
                <p className="text-muted leading-relaxed mb-4">
                    Flavoured makhana — peri peri, Himalayan salt, turmeric — falls under 2008.19.21 as long as it is makhana that has been seasoned after popping. Heavily processed variants (e.g., makhana coated in chocolate or combined with other ingredients into a snack bar) may require a different classification. When in doubt, get a binding tariff ruling from your customs authority before placing a large order.
                </p>
            </ContentSection>

            <ContentSection id="certifications" title="Certifications: What Your Exporter Must Hold">
                <p className="text-muted leading-relaxed mb-4">
                    Indian exporters are required to hold active registrations under several bodies. These are not optional — a shipment from an exporter without FSSAI registration cannot legally be exported from India. Before you place an order, verify these documents exist and are current.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {[
                        { name: 'FSSAI Licence', desc: 'Food safety registration mandatory for Indian food exporters', detail: 'Verify the FSSAI number independently at fssai.gov.in' },
                        { name: 'APEDA RCMC', desc: 'Agricultural & Processed Food Products Export Development Authority registration', detail: 'Required for all agricultural product exports from India' },
                        { name: 'IEC (Import Export Code)', desc: 'Customs registration issued by DGFT', detail: 'Without a valid IEC, no export shipment can be filed' },
                        { name: 'GST Registration', desc: 'Mandatory for legal commercial operations in India', detail: 'Confirm the GSTIN matches the company name on commercial invoice' },
                    ].map((cert, idx) => (
                        <div key={idx} className="border border-border rounded-lg p-5">
                            <h3 className="font-bold text-brand mb-2">{cert.name}</h3>
                            <p className="text-sm text-muted mb-1">{cert.desc}</p>
                            <p className="text-xs text-muted italic">{cert.detail}</p>
                        </div>
                    ))}
                </div>
                <p className="text-muted leading-relaxed mb-4">
                    Per-shipment certificates — the Phytosanitary Certificate and the Certificate of Analysis — are not registrations held by the exporter but are generated fresh for each consignment. The Phytosanitary Certificate is issued by the National Plant Protection Organisation (NPPO) India after the lot is inspected. The COA is issued by a NABL-accredited laboratory. Both must reference the specific lot number and packing date of your shipment.
                </p>
                <InfoBox>
                    For US-destined shipments, a COA from a NABL-accredited lab is not just best practice — FDA&apos;s FSVP rules expect US importers to have supplier verification supported by documented lab results. Non-NABL COAs will not satisfy this requirement.
                </InfoBox>
                <p className="text-muted leading-relaxed mb-4">
                    Optional certifications — organic (USDA NOP or EU Organic), GI Tag for Mithila Makhana, Halal, Kosher — are available for specific lots from certified processors. These require advance specification at the enquiry stage, as they affect which processing facility and supply chain the product must move through. You cannot retroactively certify a shipment organic.
                </p>
                <BlogImage src="/images/products/makhana/makhana-packing.jpg" alt="Export-grade makhana packing at a Bihar processing unit" caption="Export-grade makhana being packed at a Bihar processing facility. Each bag is labelled with lot number, grade, weight, and packing date." />
            </ContentSection>

            <ContentSection id="documentation" title="The Full Document Set">
                <p className="text-muted leading-relaxed mb-4">
                    The document set for a makhana export shipment is not long, but every item must be correct, consistent with the others, and issued at the right time. A single inconsistency — lot number missing from the COA, a weight that differs by 2 kg between the invoice and packing list — is enough to trigger a customs query and delay clearance.
                </p>
                <DocTable rows={[
                    { Document: 'Commercial Invoice', 'Issued By': 'Exporter', Timing: 'Before container stuffing', 'Common Errors': 'HS code wrong; price does not match Proforma Invoice' },
                    { Document: 'Packing List', 'Issued By': 'Exporter', Timing: 'Before container stuffing', 'Common Errors': 'Net/gross weight mismatch with invoice; lot numbers missing' },
                    { Document: 'Bill of Lading / Airway Bill', 'Issued By': 'Carrier', Timing: 'After vessel departure', 'Common Errors': 'Notify party wrong for LC terms; Telex vs Original release confusion' },
                    { Document: 'Certificate of Origin', 'Issued By': 'FIEO or Chamber of Commerce', Timing: 'Before shipment', 'Common Errors': 'State of origin not specified (matters for GI products)' },
                    { Document: 'Phytosanitary Certificate', 'Issued By': 'NPPO India', Timing: 'After final packing — not before', 'Common Errors': 'Issued before lot is finalised; dated before packing date' },
                    { Document: 'Certificate of Analysis (COA)', 'Issued By': 'NABL-accredited lab', Timing: 'Before shipment', 'Common Errors': 'Non-NABL lab used; lot number not referenced' },
                    { Document: 'Insurance Certificate', 'Issued By': 'Indian insurer', Timing: 'Before vessel departure', 'Common Errors': 'Coverage amount less than CIF invoice value; omitted on TT-term shipments' },
                ]} />
            </ContentSection>

            <ContentSection id="what-to-watch" title="Red Flags: What to Watch For">
                <p className="text-muted leading-relaxed mb-4">
                    The makhana market has grown fast enough that there are now many suppliers who have not caught up with export documentation standards. The following patterns should prompt closer scrutiny before you commit funds.
                </p>
                <BulletList items={[
                    'Exporter cannot provide FSSAI and IEC numbers upfront — any legitimate exporter has these on letterhead',
                    'COA is from a lab not accredited by NABL — check the lab name at nabl.gov.in before accepting',
                    'Quote is significantly below the market range — almost always reflects lower Suta grade, higher moisture, or absent documentation',
                    'Phytosanitary certificate is offered before your production run is confirmed — this is procedurally impossible if done correctly',
                    'No pre-shipment sample offered or physical inspection resisted — legitimate exporters welcome verification',
                    'Payment demanded 100% in advance to a personal bank account, not a company account — a standard red flag for fraud',
                    'Supplier has no verifiable company presence (no GST registration traceable online, no India company registry listing)',
                    '7 Suta grade is quoted freely during Jun–Sep — peak scarcity period; large 7 Suta availability at this time should raise questions about grade accuracy',
                ]} />
                <InfoBox title="Best Practice">
                    For any first shipment above 500 kg, commission a pre-shipment inspection by a third-party agency (SGS, Bureau Veritas, or similar). The cost — typically USD 300-500 — is trivial relative to the cost of receiving the wrong grade or a substandard lot.
                </InfoBox>
            </ContentSection>

            <ContentSection id="faq" title="FAQ: What Buyers Actually Ask">
                <FAQList faqs={[
                    { q: 'How do I know I am not getting scammed by a fake supplier?', a: 'Verify the supplier\'s IEC number at the DGFT website (dgft.gov.in), their FSSAI licence at fssai.gov.in, and their GST number at the GST portal. A legitimate exporter will have all three verifiable online. Ask for a video call walkthrough of their facility. Request that any advance payment go to a company bank account matching their business registration name.' },
                    { q: 'What are the most common reasons makhana gets held at customs?', a: 'Pesticide residue levels above the destination market\'s MRL, documentation mismatches (quantity or HS code), missing or incorrectly dated phytosanitary certificate, and aflatoxin levels above permitted limits. A multi-residue pesticide panel and aflatoxin test from a NABL lab before shipment is the primary defence.' },
                    { q: 'What is the best time of year to order to get the freshest stock?', a: 'Makhana is harvested October-November in Bihar. Post-harvest stock from November through February is freshest, most stable in quality, and the most actively traded. By June-July, pre-harvest period, supply tightens and older stock from the previous season dominates. If freshness and consistency matter to your application, plan your orders for the Nov-Feb window.' },
                    { q: 'Can I visit the processing facility before placing a commercial order?', a: 'Yes, and we encourage it for buyers placing orders above 5 MT. We coordinate facility visits to Bihar processors and provide advance introductions to the processing unit management. Visits are typically arranged during October-February when production is active.' },
                    { q: 'How does the India Makhana Board affect buyers?', a: 'The Makhana Board established in India\'s 2025 Budget is a long-term positive for supply reliability and quality standardisation. Its ₹100 crore allocation supports producer infrastructure, post-harvest technology, and export promotion. For buyers, this means improving traceability and quality documentation standards over the next 2-3 years.' },
                ]} />
            </ContentSection>
        </>
    );
}

// ─── Makhana Grades 5/6/7 Suta ───
function MakhanaGradesContent() {
    return (
        <>
            <ContentSection id="overview" title="The Grade System That Confuses Most Buyers">
                <p className="text-muted leading-relaxed mb-4 text-lg">
                    The counterintuitive thing about makhana grades is that the <strong className="text-brand">higher the Suta number, the larger the bead</strong>. Most buyers assume 5 Suta is bigger than 3 Suta in some kind of quality ladder sense. The actual logic is the reverse: &ldquo;Suta&rdquo; originally referred to how many beads fit within a fixed ring circumference — so fewer beads fitting means each bead is larger. 7 Suta beads are the biggest. This matters because ordering the wrong grade is a common and avoidable mistake when buyers are going off word-of-mouth descriptions rather than actual specifications.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                    Grade directly affects three things: visual appeal (bead uniformity matters enormously for retail packaging), consumer texture experience, and price. A 7 Suta lot commands a <strong className="text-brand">meaningful price premium</strong> over a 5 Suta lot because it requires more raw lotus seeds to produce each kilogram of large beads — the yield of big beads per unit of raw material is simply lower. This cost difference is structural, not discretionary.
                </p>
                <p className="text-muted leading-relaxed mb-6">
                    In modern processing, grading is done mechanically using calibrated vibrating sieve decks — not by hand. This distinction matters when you are evaluating suppliers: a processor who hand-sorts claims inconsistent grade accuracy. Mechanical sieving is a basic quality marker for any export-grade operation.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                    <StatCard label="5 Suta" value="15-18mm" subtext="Smaller bead — ingredient use" />
                    <StatCard label="6 Suta" value="18-21mm" subtext="Medium — most requested retail" />
                    <StatCard label="7 Suta" value=">21mm" subtext="Large — premium positioning" />
                    <StatCard label="7 Suta Premium" value="30-40%" subtext="Over 5 Suta equivalent lot" />
                </div>
            </ContentSection>

            <ContentSection id="what-is-suta" title="What Suta Actually Measures — and What It Does Not">
                <p className="text-muted leading-relaxed mb-4">
                    Suta is a size classification. It tells you the diameter range of the popped bead. That is all it tells you. It says nothing about moisture content, purity, flavour, or whether the lot has been competently dried and stored. A 7 Suta lot with 12% moisture is a worse buy than a 5 Suta lot at 7% moisture for most food manufacturing applications — higher moisture accelerates rancidity and mould risk in transit and in the buyer&apos;s warehouse.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                    When you write a purchase specification, Suta grade is the starting point but not the complete picture. A well-written purchase order specifies grade, moisture (typically ≤8% standard, ≤6% for humid-climate destinations), purity (≥98%, meaning no broken beads, foreign matter, or skins beyond spec), and the processing method (mechanically sieved, not hand-sorted).
                </p>
                <InfoBox title="Grade Is Not the Same as Quality">
                    Grade (Suta) = bead size only. Quality = moisture, purity, flavour, absence of contaminants, and correct storage. Both need to be specified. A supplier who treats them as the same thing is one to probe further.
                </InfoBox>

                {/* Infographic: Suta bead size visual */}
                <div className="bg-surface border border-border rounded-xl p-6 my-6">
                    <p className="text-xs uppercase tracking-widest text-muted font-semibold mb-6 text-center">Bead Size by Suta Grade</p>
                    <div className="flex items-end justify-around gap-4 mb-4">
                        {[
                            { grade: '5 Suta', dia: 'w-12 h-12', mm: '15–18 mm', use: 'Ingredient / processing', opacity: 'bg-brand/20 border-2 border-brand/30' },
                            { grade: '6 Suta', dia: 'w-16 h-16', mm: '18–21 mm', use: 'Retail snack — most common', opacity: 'bg-brand/50 border-2 border-brand/60' },
                            { grade: '7 Suta', dia: 'w-20 h-20', mm: '> 21 mm', use: 'Premium / gifting', opacity: 'bg-brand border-2 border-brand' },
                        ].map((g, i) => (
                            <div key={i} className="flex flex-col items-center gap-3 flex-1">
                                <div className={`${g.dia} rounded-full ${g.opacity} flex items-center justify-center mx-auto`}>
                                    <span className={`text-xs font-bold ${i === 2 ? 'text-white' : 'text-brand'}`}>{g.grade}</span>
                                </div>
                                <div className="text-center">
                                    <div className="text-sm font-semibold">{g.mm}</div>
                                    <div className="text-xs text-muted mt-1 leading-tight">{g.use}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-muted text-center italic">Higher Suta = larger bead. Grades 3 and 4 Suta also exist below the export range shown above.</p>
                </div>
                <BlogImage src="/images/products/makhana/size-graded-makhana.jpg" alt="Size-graded makhana displayed showing Suta grade differences" caption="Mechanically graded makhana — the larger bead size of 7 Suta (right) is clearly visible against 5 Suta (left)." />
            </ContentSection>

            <ContentSection id="grade-comparison" title="Grade Comparison by Application">
                <DocTable rows={[
                    { Grade: '5 Suta', 'Diameter': '15-18 mm', 'Typical applications': 'Makhana flour, trail mix ingredient, cereal bar component, budget retail packs', 'Why this grade': 'Most cost-efficient; size consistency less critical for processed or powdered uses' },
                    { Grade: '6 Suta', 'Diameter': '18-21 mm', 'Typical applications': 'Flavoured snack pouches, health food retail, supermarket private label, DTC e-commerce brands', 'Why this grade': 'Best balance of visual uniformity, texture, and price; the default grade for retail snack products' },
                    { Grade: '7 Suta', 'Diameter': '>21 mm', 'Typical applications': 'Premium health food retail, gifting, food service (hotel/restaurant), high-end snack brands', 'Why this grade': 'Visually striking, substantial bite; justifies premium shelf price; supply is seasonal and tighter' },
                ]} />
                <p className="text-muted leading-relaxed mb-4">
                    For flavoured variants — peri peri, Himalayan salt, turmeric-lime — buyers almost universally use 6 Suta or 7 Suta as the base, since the bead visibility in the finished pack matters to the consumer. Flavoured makhana adds up to 40% in retail value over plain equivalents, which is why the base grade selection has a compounding effect on the retail positioning you can build around the product.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                    5 Suta is not an inferior product — it is appropriate product for its applications. For a food manufacturer blending makhana into a granola bar or grinding it to flour, paying the 7 Suta premium serves no functional purpose. Size selection should match application requirements, not perceived prestige.
                </p>
            </ContentSection>

            <ContentSection id="applications" title="Grade Selection by Market">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                        {
                            grade: '5 Suta',
                            uses: ['Makhana flour and powder blends', 'Granola and cereal bar ingredient', 'Trail mix filler component', 'Animal feed supplement (emerging use)', 'Budget retail under ₹300/100g positioning'],
                            note: 'Largest volume in B2B ingredient channels. Not the grade to lead with in premium DTC retail.',
                        },
                        {
                            grade: '6 Suta',
                            uses: ['Flavoured snack pouches (100-200g retail)', 'Health food store own-brand', 'Supermarket private label programmes', 'Subscription box inclusions', 'Online health food platforms (US, UK, UAE)'],
                            note: 'The workhorse grade for international retail. Consistent availability year-round at commercial volumes.',
                        },
                        {
                            grade: '7 Suta',
                            uses: ['Premium natural food retail shelf placement', 'Gifting and festive hamper packs', 'Michelin-star and fine dining supply', 'High-end DTC brands justifying >$15/100g retail', 'Corporate gifting in UAE and UK markets'],
                            note: 'Seasonal availability (Oct-Feb is safest). Build buffer stock during post-harvest period.',
                        },
                    ].map((g, idx) => (
                        <div key={idx} className="border border-border rounded-xl p-6 bg-surface">
                            <div className="text-2xl font-bold text-brand mb-3">{g.grade}</div>
                            <ul className="space-y-2 mb-4">
                                {g.uses.map((u, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-muted">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-1.5" />{u}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-muted italic border-t border-border pt-3">{g.note}</p>
                        </div>
                    ))}
                </div>
            </ContentSection>

            <ContentSection id="what-affects-grade-price" title="What Actually Drives the Price Gap Between Grades">
                <p className="text-muted leading-relaxed mb-4">
                    The price premium for 7 Suta over 5 Suta is not arbitrary. It reflects a real cost structure at the processor level. Large beads come from larger lotus seeds, and the proportion of raw material that yields beads above 21mm after popping is meaningfully lower than the proportion yielding 15-18mm beads. A processor handling the same batch of lotus seeds gets fewer kilograms of 7 Suta output than 5 Suta output — so each kilogram of 7 Suta represents more raw material input.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                    On top of the size-driven premium, several other factors shift the price spread between grades: crop year quality (a good Bihar monsoon year increases the proportion of large seeds in the harvest, slightly compressing the premium); seasonal timing (7 Suta stock is tightest in June-July pre-harvest, widening the premium during that window); and moisture specification (tighter moisture tolerances add cost at any grade).
                </p>
                <p className="text-muted leading-relaxed mb-4">
                    Domestic Indian demand for premium makhana has surged — prices in Bihar have risen 150% over the past five years, driven partly by India&apos;s growing urban health food market competing directly with export buyers for the same high-grade stock. For international buyers, this means supply of 7 Suta at competitive prices requires building genuine supplier relationships and committing to volumes, not just spot purchasing.
                </p>
                <InfoBox>
                    La Niña climate years bring colder, drier winters to Bihar, reducing access to the ponds where farmers harvest lotus seeds. When this happens, total supply contracts, the proportion of small beads in the crop increases, and the 7 Suta premium widens further. Watching Bihar monsoon forecasts from October is useful intelligence for buyers trying to time procurement.
                </InfoBox>
            </ContentSection>

            <ContentSection id="faq" title="FAQ: Grade Questions Buyers Ask">
                <FAQList faqs={[
                    { q: 'If I order 6 Suta, how uniform will the bead sizes actually be?', a: 'Mechanically sieved lots from reputable processors hold grade conformance of 95%+ — meaning at least 95% of beads fall within the 18-21mm band. Ask for a batch photograph and a pre-shipment sieve test result. Processors with calibrated equipment can share the sieve deck aperture specifications used.' },
                    { q: 'Can I mix grades in one container to hit a combined volume?', a: 'Yes. Different grades are packed in separately labelled bags within the container, each bag bearing the grade, lot number, and weight. Each grade still needs to meet its own MOQ (minimum 100 kg per grade for trials, 1 MT per grade for commercial orders).' },
                    { q: 'Does roasting change the grade classification?', a: 'Roasting causes slight bead expansion — typically 1-2mm. We account for this in our pre-roast grading: raw material sieved at the appropriate pre-roast size will meet the post-roast Suta specification. This is a known parameter, not a quality variable.' },
                    { q: 'Is 7 Suta reliably available, or do I need to book in advance?', a: '7 Suta is most reliably available October-February post-harvest. During June-September, pre-harvest supply tightens significantly and spot 7 Suta availability is limited. If your planning horizon is six months, book 7 Suta during the post-harvest window rather than trying to source it pre-harvest.' },
                    { q: 'Can I get a grade sample before committing to a commercial order?', a: 'Yes. Grade samples of 5-10 kg per grade are available at cost plus freight. The sample cost is credited against the first commercial order. We recommend sampling at least two grades side-by-side to make an informed decision.' },
                ]} />
            </ContentSection>
        </>
    );
}

// ─── Makhana Price Guide ───
function MakhanaPriceContent() {
    return (
        <>
            <ContentSection id="overview" title="What Moves Makhana Prices — and Why It Matters to Buyers">
                <p className="text-muted leading-relaxed mb-4 text-lg">
                    Domestic makhana prices in Bihar have risen significantly over the past five years. The driver is straightforward: India&apos;s own urban health food market has expanded rapidly, and domestic buyers now compete with international buyers for the same supply from the same Bihar-based processors. Export volumes have grown at a <strong className="text-brand">39% CAGR</strong> from 2020 to 2024 (APEDA), yet supply from Bihar&apos;s wetland pond systems cannot expand at the same pace.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                    The right question when you receive a makhana quote is not &ldquo;what is the price?&rdquo; — Proforma Invoice prices are valid for days, not weeks. The more useful questions are: what factors are moving this price right now, where are we in the crop cycle, and does this quote reflect my actual grade and specification? This guide answers all three.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                    <StatCard label="Export volume" value="25,130 MT" subtext="FY2024 (Source: APEDA)" />
                    <StatCard label="Key supply state" value="Bihar" subtext="85%+ of global output" />
                    <StatCard label="Best buying window" value="Nov–Feb" subtext="Post-harvest; freshest stock" />
                    <StatCard label="Makhana Board" value="₹100 Cr" subtext="Union Budget 2025 (GoI)" />
                </div>
            </ContentSection>

            <ContentSection id="price-drivers" title="The Seven Factors That Move Makhana Prices">
                <p className="text-muted leading-relaxed mb-4">
                    Makhana has no futures market. Prices are set bilaterally between buyers and processors, responding to the factors below. Understanding these factors lets you anticipate price direction rather than react to it.
                </p>
                <div className="space-y-5 mb-6">
                    {[
                        {
                            factor: '1. Bihar monsoon performance',
                            detail: 'Approximately 85% of global makhana supply comes from one Indian state. If Bihar has a poor monsoon — reduced rainfall reducing pond levels — or flooding that drowns the ponds, harvest volume contracts. A 15-20% supply reduction in Bihar has no substitution option; there is no equivalent producing region. La Niña years bring colder, drier winters that reduce pond access and tighten the post-harvest supply window. When Bihar weather news is poor in August-September, prices begin moving before harvest.',
                        },
                        {
                            factor: '2. Harvest timing (seasonal cycle)',
                            detail: 'Makhana is harvested October-November. Post-harvest (November through February) is the period of maximum stock, freshest product, and most stable prices. Pre-harvest (June-September) is the tightest supply period — processors are selling the previous year\'s remaining stock, which may have been in storage for 8-10 months. Prices are typically higher and quality consistency is harder to guarantee pre-harvest. If you can plan your procurement calendar, November-January is the optimal window.',
                        },
                        {
                            factor: '3. Grade (Suta)',
                            detail: '7 Suta beads come from larger lotus seeds, and the proportion of raw material yielding large beads is lower than for small beads. More raw material input per kg of output means a structural cost premium for large-grade makhana. This premium is real and persistent — it reflects input costs, not market speculation. It compresses slightly in exceptional harvest years when large seed proportions increase.',
                        },
                        {
                            factor: '4. Moisture specification',
                            detail: 'Standard export moisture is ≤8%. For humid-climate destination markets (Southeast Asia, parts of the Middle East in summer), buyers often specify ≤6% moisture to provide shelf-life buffer. The extra drying step adds cost. Similarly, if your application demands very low moisture (e.g., makhana flour for a baked product), specify this upfront — it is not automatically included in a standard quote.',
                        },
                        {
                            factor: '5. Packaging format',
                            detail: 'Bulk 25kg PP bags are the baseline export format and the reference point for all FOB price comparisons. Moving to retail pouches (100g–500g), custom branded packaging, or kraft paper inner bags adds packaging material cost, filling labour, and potentially private label MOQ premiums. Flavoured variants (roasted, seasoned) involve additional processing steps — roasting, seasoning, packing — and command a meaningful premium over plain bulk equivalents.',
                        },
                        {
                            factor: '6. INR/USD exchange rate',
                            detail: 'Indian exporters price in USD but their cost base is in INR. When INR weakens against USD, Indian exporters have more flexibility on USD-quoted prices; when INR strengthens, their margin compresses and USD prices tend to firm up. For buyers on long-term procurement plans, tracking the INR/USD rate alongside Bihar harvest news gives a reasonable forward view on price direction.',
                        },
                        {
                            factor: '7. Domestic Indian demand competition',
                            detail: 'This is the factor most international buyers underestimate. The Indian urban health food market has grown dramatically — makhana is now sold in premium supermarkets, quick commerce platforms, and health food chains across India. Domestic buyers compete for the same processor output as international buyers. When domestic demand is high, processors have less urgency to export and more pricing power. The establishment of the Makhana Board in Budget 2025 signals this category\'s strategic importance to India, which long-term supports supply development — but in the short term, domestic competition for supply is real.',
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="border border-border rounded-lg p-5">
                            <h3 className="font-bold text-brand mb-2">{item.factor}</h3>
                            <p className="text-muted text-sm leading-relaxed">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </ContentSection>

            <ContentSection id="seasonal-timing" title="The Crop Calendar: When to Buy">
                <p className="text-muted leading-relaxed mb-4">
                    Buying at the right point in the makhana crop cycle is one of the few levers an international buyer can pull to manage price and quality risk simultaneously.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="border border-border rounded-xl p-6">
                        <h3 className="font-bold text-brand mb-3">November–February (Post-Harvest Window)</h3>
                        <BulletList items={[
                            'Freshest stock — current crop year harvest',
                            'Maximum processor inventory means competitive pricing',
                            'Most stable quality consistency across the season',
                            'Best availability of premium grades (6 Suta and 7 Suta)',
                            'Recommended window for annual procurement planning',
                        ]} />
                    </div>
                    <div className="border border-border rounded-xl p-6">
                        <h3 className="font-bold text-brand mb-3">June–September (Pre-Harvest Period)</h3>
                        <BulletList items={[
                            'Previous crop year stock — up to 10 months old',
                            'Tighter supply; processors selling down inventory',
                            'Prices typically firmer, especially for premium grades',
                            '7 Suta availability most constrained during this period',
                            'If buying, request lot production date on COA to assess storage age',
                        ]} />
                    </div>
                </div>
                {/* Infographic: Makhana crop calendar */}
                <div className="bg-surface border border-border rounded-xl p-6 my-6">
                    <p className="text-xs uppercase tracking-widest text-muted font-semibold mb-4">Makhana Crop Calendar</p>
                    <div className="grid grid-cols-12 gap-0.5 mb-3">
                        {[
                            { month: 'Jan', phase: 'post' },
                            { month: 'Feb', phase: 'post' },
                            { month: 'Mar', phase: 'mid' },
                            { month: 'Apr', phase: 'mid' },
                            { month: 'May', phase: 'mid' },
                            { month: 'Jun', phase: 'pre' },
                            { month: 'Jul', phase: 'pre' },
                            { month: 'Aug', phase: 'pre' },
                            { month: 'Sep', phase: 'pre' },
                            { month: 'Oct', phase: 'harvest' },
                            { month: 'Nov', phase: 'harvest' },
                            { month: 'Dec', phase: 'post' },
                        ].map((m, i) => (
                            <div key={i} className="flex flex-col items-center gap-1">
                                <div className={`w-full h-7 rounded-sm ${
                                    m.phase === 'post' ? 'bg-brand' :
                                    m.phase === 'harvest' ? 'bg-amber-400' :
                                    m.phase === 'pre' ? 'bg-red-300' :
                                    'bg-border'
                                }`} />
                                <span className="text-[9px] text-muted font-medium">{m.month}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3">
                        {[
                            { color: 'bg-amber-400', label: 'Harvest (Oct–Nov)' },
                            { color: 'bg-brand', label: 'Best buying window (Nov–Feb)' },
                            { color: 'bg-border', label: 'Mid-season' },
                            { color: 'bg-red-300', label: 'Pre-harvest / tighter supply (Jun–Sep)' },
                        ].map((l, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-xs text-muted">
                                <span className={`w-3 h-3 rounded-sm flex-shrink-0 ${l.color}`} />
                                {l.label}
                            </div>
                        ))}
                    </div>
                </div>

                <InfoBox>
                    If you are building a brand or a retail programme around makhana, the single best operational decision you can make is to build 3-4 months of buffer stock during the November-February window. The carrying cost of that inventory is almost always less than the premium you will pay buying pre-harvest at short notice.
                </InfoBox>
                <BlogImage src="/images/products/makhana/hand-picking-makhana.webp" alt="Post-harvest makhana selection and quality check" caption="Post-harvest quality selection — the November to February window offers the freshest stock and most stable prices for international buyers." />
            </ContentSection>

            <ContentSection id="evaluating-quotes" title="How to Evaluate a Makhana Quote">
                <p className="text-muted leading-relaxed mb-4">
                    A Proforma Invoice from an Indian makhana exporter should be a complete, specific document — not a vague price indication. When you receive a quote, check every one of these parameters before treating it as a serious offer.
                </p>
                <BulletList items={[
                    'Grade specified explicitly (5/6/7 Suta) with diameter range — not just "premium grade" or "export quality"',
                    'Moisture specification stated (≤8% standard; confirm if tighter)',
                    'Purity stated (≥98% typical)',
                    'Packaging format specified (bulk 25kg vs retail pouch vs custom)',
                    'Incoterms clearly stated (FOB Indian port — which port? Or CIF to which destination port?)',
                    'HS code on the invoice matches your customs broker\'s classification',
                    'Validity period stated (7-14 days is standard; indefinite validity on a quote is a red flag)',
                    'Payment terms specified (30% advance TT / 70% against BL copy is standard)',
                ]} />
                <p className="text-muted leading-relaxed mb-4">
                    When comparing quotes from multiple suppliers, always normalise to the same Incoterm. FOB India is the standard benchmark — it removes freight and insurance variables that mask the actual product price. A CIF quote that looks cheaper than a FOB quote may just have a higher freight component baked in.
                </p>
            </ContentSection>

            <ContentSection id="red-flags" title="Red Flags in a Makhana Price Quote">
                <BulletList items={[
                    'No grade or diameter specification — "premium export quality" means nothing without a Suta number and mm range',
                    'Price significantly below the market range for that grade and season — almost always signals lower actual grade, higher moisture, or missing documentation',
                    'Quotation valid indefinitely — legitimate exporters cannot hold prices open when farm prices move daily',
                    'Price quoted per quintal or per bag without a per-kg breakdown — makes comparison impossible',
                    'No moisture or purity spec stated — means you have no grounds for dispute if the shipment arrives out of specification',
                    'CIF quote with freight destination not specified — makes the quote meaningless for comparison',
                    'Large 7 Suta quoted freely in May-August at stable prices — cross-check against seasonal availability; 7 Suta is genuinely scarce pre-harvest',
                ]} />
            </ContentSection>

            <ContentSection id="faq" title="FAQ: Price Questions Buyers Ask">
                <FAQList faqs={[
                    { q: 'Why have makhana prices increased significantly in recent years?', a: 'Domestic Indian demand for makhana has grown sharply — it is now sold in premium supermarkets, quick commerce platforms, and health food chains across India. This creates direct competition between Indian domestic buyers and international buyers for the same Bihar processor supply. The Makhana Board established in Union Budget 2025 (with ₹100 crore allocation) confirms this is a commodity the Indian government considers strategically important. Export volumes have grown 39% CAGR from 2020–2024 per APEDA data, but supply expansion is constrained by the geography of Bihar\'s wetland pond systems. Plan your cost model around current price levels.' },
                    { q: 'How long is a Proforma Invoice price valid?', a: 'A Proforma Invoice is typically valid for 7-14 days from issue date. Makhana prices move with crop news, currency shifts, and freight rate changes. An exporter who offers open-ended pricing is either unaware of their own cost structure or is not a serious commercial operator.' },
                    { q: 'Can I lock in a price for forward delivery?', a: 'We can issue a Proforma Invoice for 30-60 day forward delivery, subject to stock confirmation. Beyond 60 days, a price lock requires a firm order and advance payment to give the processor certainty. Forward contracts beyond that timeframe depend on crop season visibility and are handled case by case.' },
                    { q: 'A supplier quoted me significantly lower than other quotes I have received. Should I proceed?', a: 'Get the full specification in writing before comparing prices: grade (Suta and mm range), moisture, purity, packaging format, Incoterm, and the lab name on the COA. Lower quotes most commonly reflect: lower Suta than stated, moisture above 8%, manual rather than mechanical sorting, or missing/non-NABL documentation. The cheapest quote is almost never the best landed cost once quality shortfalls are factored in.' },
                ]} />
            </ContentSection>
        </>
    );
}

// ─── Lakadong Turmeric ───
function LakadongTurmericContent() {
    return (
        <>
            <ContentSection id="overview" title="Not All Turmeric Is the Same Product">
                <p className="text-muted leading-relaxed mb-4 text-lg">
                    If you are sourcing turmeric for a golden milk blend, a curcumin supplement, or a functional food product where the active curcumin content matters, standard Andhra Pradesh or Tamil Nadu turmeric at 2-5% curcumin is not the same product as Lakadong. Lakadong turmeric from the Jaintia Hills of Meghalaya carries <strong className="text-brand">7-12% curcumin</strong> — verified by HPLC, protected by Geographical Indication (GI Tag No. 741), and grown at altitude in conditions that cannot be replicated by mainstream turmeric producing states.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                    For a formulator, the practical implication is real: achieving a 500mg curcumin dose in a capsule requires far less Lakadong powder than standard turmeric. For a retailer building a premium turmeric product, the GI tag and the verifiable origin story are part of the product&apos;s brand equity. But buyers need to understand that &ldquo;Lakadong&rdquo; is increasingly a claimed attribute in Indian spice trade — and claims of Lakadong origin without verifiable supply chain documentation and HPLC lab results are common.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                    <StatCard label="Curcumin content" value="7-12%" subtext="HPLC verified; GI Tag No. 741" />
                    <StatCard label="Standard turmeric" value="2-5%" subtext="AP/TN commercial varieties" />
                    <StatCard label="Origin" value="Jaintia Hills" subtext="Meghalaya, Northeast India" />
                    <StatCard label="Harvest" value="Feb–Mar" subtext="Rabi crop; annual cycle" />
                </div>
            </ContentSection>

            <ContentSection id="what-makes-it-different" title="What Makes Lakadong Different — and Why That Matters to Buyers">
                <p className="text-muted leading-relaxed mb-4">
                    Standard commercial turmeric from Andhra Pradesh and Tamil Nadu is grown at scale, with conventional agricultural inputs, optimised for high yield rather than high curcumin content. It typically returns 2-5% curcumin by HPLC. It is a perfectly good commodity spice for culinary use — appropriate for most food manufacturing applications where curcumin concentration is not a specification parameter.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                    Lakadong is different at the variety level, not just the cultivation level. The Lakadong variety is a landrace cultivated in the Jaintia Hills at elevations and in soil conditions that appear to be strongly correlated with higher curcumin expression. The traditional cultivation system involves no synthetic inputs — it is organic by practice, though not all Lakadong is certified organic. The February-March harvest aligns with the Rabi growing season.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="border border-brand/20 rounded-xl p-6 bg-surface">
                        <h3 className="font-bold text-brand mb-4">Lakadong Turmeric</h3>
                        <BulletList items={[
                            'Curcumin content: 7-12% (HPLC verified)',
                            'Origin: Jaintia Hills, Meghalaya — GI protected',
                            'Cultivation: Traditional, no synthetic inputs (organic by practice)',
                            'Colour: Deep golden-orange; high colour value',
                            'Harvest: February-March (Rabi crop)',
                            'GI Tag No. 741 — verifiable geographic protection',
                        ]} />
                    </div>
                    <div className="border border-border rounded-xl p-6">
                        <h3 className="font-bold text-muted mb-4">Standard Turmeric (AP/TN)</h3>
                        <ul className="space-y-3 mb-6">
                            {[
                                'Curcumin content: 2-5% (varies by variety)',
                                'Origin: Andhra Pradesh, Tamil Nadu, Maharashtra, Telangana',
                                'Cultivation: Conventional; synthetic fertilisers and pesticides common',
                                'Colour: Bright yellow; good colour value for culinary uses',
                                'Harvest: January-March',
                                'No GI geographic protection',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-muted text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-border flex-shrink-0 mt-1.5" />{item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Infographic: Curcumin comparison bar */}
                <div className="bg-surface border border-border rounded-xl p-6 my-6">
                    <p className="text-xs uppercase tracking-widest text-muted font-semibold mb-5">Curcumin Content — Lakadong vs Standard Turmeric</p>
                    <div className="space-y-5">
                        {[
                            { label: 'Lakadong Turmeric (Jaintia Hills, Meghalaya)', range: '7–12%', barPct: 85, note: 'GI Tag No. 741 · HPLC verified', highlight: true },
                            { label: 'Standard Turmeric (Andhra Pradesh / Tamil Nadu)', range: '2–5%', barPct: 30, note: 'Commercial export varieties', highlight: false },
                        ].map((row, i) => (
                            <div key={i}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`text-sm font-semibold ${row.highlight ? 'text-brand' : 'text-muted'}`}>{row.label}</span>
                                    <span className={`text-sm font-bold ml-4 flex-shrink-0 ${row.highlight ? 'text-brand' : 'text-muted'}`}>{row.range}</span>
                                </div>
                                <div className="h-4 bg-border rounded-full overflow-hidden">
                                    <div className={`h-full rounded-full ${row.highlight ? 'bg-brand' : 'bg-muted/40'}`} style={{ width: `${row.barPct}%` }} />
                                </div>
                                <p className="text-xs text-muted mt-1">{row.note}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-muted mt-4 italic border-t border-border pt-3">Source: Geographical Indication Registry, Government of India (GI Tag No. 741). Curcumin content verified by HPLC.</p>
                </div>

                <InfoBox title="On Curcumin and Bioavailability">
                    Curcumin is poorly bioavailable on its own — absorption is significantly enhanced when combined with piperine (from black pepper) or formulated into lipid-based delivery systems. This is a formulation consideration, not a raw material deficiency. For buyers in the supplement space, the relevant specification is total curcuminoids (curcumin + demethoxycurcumin + bisdemethoxycurcumin) by HPLC, not just curcumin alone. Specify which you need in your purchase enquiry.
                </InfoBox>
            </ContentSection>

            <ContentSection id="verification" title="How to Verify You Are Getting Real Lakadong">
                <p className="text-muted leading-relaxed mb-4">
                    The demand premium for Lakadong has created a predictable problem: ordinary high-curcumin turmeric — or even blended turmeric — being sold as &ldquo;Lakadong&rdquo; without legitimate origin documentation. This is not hypothetical. It is a documented issue in the Indian spice trade. A buyer who relies on a supplier&apos;s verbal claim of Lakadong origin without documented verification is exposed.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                    Verified Lakadong sourcing requires three concurrent checks:
                </p>
                <BulletList items={[
                    'GI credentials cross-check — the exporter or processor should be able to provide documentation linking the lot to the GI-registered supply chain. The GI Tag No. 741 is a protected designation; its use without supporting supply chain records is fraudulent.',
                    'HPLC lab report showing ≥7% curcumin — from a NABL-accredited Indian laboratory, referencing the specific lot number. A result below 7% on a claimed Lakadong lot should be treated as non-conforming.',
                    'Supply chain records showing Jaintia Hills origin — procurement records from the processing unit, or a Certificate of Origin specifying Meghalaya as the state of production. Telangana or AP on the COO rules out Lakadong origin by definition.',
                ]} />
                <InfoBox title="Practical Verification Step">
                    When requesting a sample, ask for the HPLC curcumin result alongside it. If the exporter says the result is &ldquo;unavailable&rdquo; for a claimed Lakadong lot, that is a red flag. All legitimate Lakadong supply chains operate with HPLC documentation because it is the defining characteristic buyers pay for.
                </InfoBox>
                <BlogImage src="/images/Gi-tag-certificate.webp" alt="GI Tag Certificate No. 741 for Lakadong Turmeric from Meghalaya" caption="GI Tag No. 741 — the Geographical Indication certificate protecting Lakadong Turmeric from the Jaintia Hills, Meghalaya." />
            </ContentSection>

            <ContentSection id="sourcing" title="Sourcing, Certifications, and the Organic Question">
                <p className="text-muted leading-relaxed mb-4">
                    Lakadong is traditionally grown without synthetic inputs, which means it is organically farmed by practice. However, formal organic certification — NPOP (India) or USDA NOP — requires a documented audit trail going back to certified farmland. Not all Lakadong suppliers carry organic certification, and &ldquo;organically grown without certification&rdquo; does not satisfy EU or US organic claims on product labels.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                    For buyers in the EU and US organic food and supplement markets, organic certification of the supply chain is increasingly expected — particularly given the 2018/848 EU Organic Regulation requirements. If your market requires organic certification, specify this at enquiry stage. The certified-organic Lakadong supply chain is narrower than the uncertified supply chain, which affects availability and price.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                        { name: 'FSSAI Licence', detail: 'Mandatory Indian food safety registration', status: 'Standard' },
                        { name: 'APEDA RCMC', detail: 'Agricultural exports registration', status: 'Standard' },
                        { name: 'Phytosanitary Certificate', detail: 'Plant health certification, per-shipment', status: 'Standard' },
                        { name: 'Certificate of Origin (Meghalaya)', detail: 'Specifies state of origin — critical for GI verification', status: 'Standard' },
                        { name: 'HPLC Curcumin COA (NABL lab)', detail: 'Lot-specific; minimum ≥7%; curcuminoids panel available', status: 'Standard' },
                        { name: 'NPOP Organic Certification', detail: 'India National Programme for Organic Production', status: 'On request' },
                        { name: 'EU Organic / USDA NOP', detail: 'Required for EU/US organic label claims', status: 'On request' },
                    ].map((cert, idx) => (
                        <div key={idx} className="flex items-start gap-4 border border-border rounded-lg p-4">
                            <div className="flex-1">
                                <div className="font-semibold text-brand text-sm">{cert.name}</div>
                                <div className="text-xs text-muted mt-0.5">{cert.detail}</div>
                            </div>
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded ${cert.status === 'Standard' ? 'bg-brand/10 text-brand' : 'bg-surface text-muted border border-border'}`}>
                                {cert.status}
                            </span>
                        </div>
                    ))}
                </div>
            </ContentSection>

            <ContentSection id="product-forms" title="Available Product Forms and Specifications">
                <DocTable rows={[
                    { Form: 'Whole finger (dried)', Description: 'Dried rhizome, uncleaned', 'Typical use': 'Further processing, traditional and ethnic markets', MOQ: '500 kg' },
                    { Form: 'Polished finger', Description: 'Cleaned, polished whole finger', 'Typical use': 'Retail display, premium spice markets', MOQ: '500 kg' },
                    { Form: 'Sliced / split', Description: 'Finger sliced for drying or extraction', 'Typical use': 'Extract manufacturers, herbal processors', MOQ: '300 kg' },
                    { Form: 'Powder (mesh 60)', Description: 'Milled to 60-mesh fineness', 'Typical use': 'Spice blends, food manufacturing, golden milk', MOQ: '100 kg' },
                    { Form: 'Powder (mesh 100)', Description: 'Fine-milled, smooth texture', 'Typical use': 'Supplements, health food, premium culinary', MOQ: '100 kg' },
                ]} />
                <p className="text-muted leading-relaxed mb-4">
                    What drives price variation in Lakadong — beyond form — is the organic premium for certified lots, the verified vs claimed curcumin level (a 7% minimum lot commands a premium over a 5% lot regardless of the Lakadong label), the harvest year (current-season stock at February-March harvest vs aged stock), and the form factor (whole finger is less processed and lower cost; fine powder involves more processing steps and equipment).
                </p>
            </ContentSection>

            <ContentSection id="faq" title="FAQ: Lakadong Buyer Questions">
                <FAQList faqs={[
                    { q: 'The curcumin content I have seen cited for Lakadong varies wildly — 3%, 5%, even 12%. Which is correct?', a: 'The correct verified range for Lakadong from the Jaintia Hills is 7-12% curcumin (HPLC). Earlier published figures of 5-7% are outdated and reflect older testing. Claims of 3% are likely mislabelled standard turmeric. Claims of 12%+ are possible from exceptional lots but should be supported by NABL lab documentation. Always ask for a lot-specific HPLC report.' },
                    { q: 'Is Lakadong turmeric always organic?', a: 'Traditionally farmed without synthetic inputs, but not all Lakadong is formally certified organic. Certification requires audited farm records going back to certified land. If organic certification is a label requirement for your market, specify NPOP or EU/USDA NOP at enquiry stage. Certified-organic Lakadong supply is available but more limited.' },
                    { q: 'How do I know the supply chain is actually from Jaintia Hills?', a: 'Require a Certificate of Origin specifying Meghalaya as the state of production, a NABL HPLC report showing ≥7% curcumin, and supplier documentation of procurement from the Jaintia Hills supply chain. Any one of these alone is insufficient. Together, they provide reasonable supply chain assurance.' },
                    { q: 'Can I get heavy metals testing?', a: 'Yes. A full ICP-MS heavy metals panel (Lead, Cadmium, Mercury, Arsenic) from a NABL-accredited lab is standard practice for EU and US supplement market buyers. Specify this requirement at enquiry stage so the lab panel is requested on the correct lot before dispatch.' },
                    { q: 'What is the difference between curcumin and curcuminoids?', a: 'Curcumin (curcumin I) is one compound; total curcuminoids includes curcumin I, demethoxycurcumin (curcumin II), and bisdemethoxycurcumin (curcumin III). Most research on turmeric health properties involves total curcuminoids. Specify which metric your formulation requires when ordering, and confirm the COA reports accordingly.' },
                ]} />
            </ContentSection>
        </>
    );
}

// ─── Dehydrated Onion & Garlic ───
function DehydratedContent() {
    return (
        <>
            <ContentSection id="overview" title="A Market That Moved 67% in One Year — and Why">
                <p className="text-muted leading-relaxed mb-4 text-lg">
                    Gujarat exported <strong className="text-brand">83,452 tonnes of dehydrated white onions in 2023-24</strong> — a 67% year-on-year increase and the highest volume in four years. For buyers, this number tells two stories simultaneously: it signals the scale and reliability of Indian dehydrated onion supply, and it reflects a price spike driven by simultaneous crop failures in China and Egypt in the preceding season that pushed global buyers to India as the alternative of last resort.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                    India&apos;s Mahuva cluster in Gujarat is the global centre of gravity for dehydrated onion and garlic processing. The region hosts over 120 dehydration plants, producing approximately 80,000 tonnes of dehydrated onion and 40,000 tonnes of garlic powder annually — with around 90% exported. For international food manufacturers who use dehydrated alliums as a year-round ingredient, Mahuva is not an alternative source; it is typically the primary one.
                </p>
                <p className="text-muted leading-relaxed mb-6">
                    Understanding what moves price in this category — and when to buy — is more commercially useful than any static price list. This guide covers product forms, quality specifications, what drives the market, and what to watch for when evaluating Indian suppliers.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                    <StatCard label="Gujarat exports" value="83,452 T" subtext="Dehydrated onion, 2023-24" />
                    <StatCard label="YoY growth" value="+67%" subtext="Highest in 4 years" />
                    <StatCard label="Mahuva plants" value="120+" subtext="Dehydration processing units" />
                    <StatCard label="Export share" value="~90%" subtext="Of Mahuva output exported" />
                </div>
            </ContentSection>

            <ContentSection id="product-forms" title="Product Forms and What They Are Used For">
                <p className="text-muted leading-relaxed mb-4">
                    Both onion and garlic are available in a range of forms from the same Gujarat processors. The form selection is entirely application-driven — a soup seasoning manufacturer needs a different spec than a pizza topping ingredient supplier.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div>
                        <h3 className="font-bold text-brand mb-4 text-lg">Dehydrated Onion</h3>
                        <DocTable rows={[
                            { Form: 'White flakes (~5mm)', 'Application': 'Ready meals, soups, snack seasoning', Moisture: '≤5%' },
                            { Form: 'Minced (3-5mm)', 'Application': 'Sauces, condiments, meat products', Moisture: '≤5%' },
                            { Form: 'Granules (1-3mm)', 'Application': 'Spice blends, instant noodle seasoning', Moisture: '≤5%' },
                            { Form: 'Powder (80-mesh)', 'Application': 'Dry mixes, flavour coatings, seasoning blends', Moisture: '≤5%' },
                            { Form: 'Kibbled (8-12mm)', 'Application': 'Retail herb mixes, visible-ingredient products', Moisture: '≤5%' },
                            { Form: 'Toasted / fried', 'Application': 'Burger toppings, retail garnish, biriyani packs', Moisture: '≤4%' },
                        ]} />
                    </div>
                    <div>
                        <h3 className="font-bold text-brand mb-4 text-lg">Dehydrated Garlic</h3>
                        <DocTable rows={[
                            { Form: 'Flakes (~3mm)', 'Application': 'Pasta sauces, marinades, pizza toppings', Moisture: '≤5%' },
                            { Form: 'Minced (2-4mm)', 'Application': 'Sauces, dressings, meat marinades', Moisture: '≤5%' },
                            { Form: 'Granules (0.5-1.5mm)', 'Application': 'Garlic bread, seasonings, spice blends', Moisture: '≤5%' },
                            { Form: 'Powder (80-100 mesh)', 'Application': 'Flavour coatings, dry rubs, snack seasoning', Moisture: '≤5%' },
                            { Form: 'Roasted garlic powder', 'Application': 'Premium culinary, restaurant supply', Moisture: '≤4%' },
                            { Form: 'Garlic salt blend', 'Application': 'Table salt blends, retail seasoning shakers', Moisture: '≤3%' },
                        ]} />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <BlogImage src="/images/products/dehydrated/red-onion-flakes.jpg" alt="Red onion flakes from Mahuva, Gujarat" caption="Red onion flakes — light to dark purplish-red, moisture ≤6-7%, produced in Mahuva, Gujarat." />
                    <BlogImage src="/images/products/dehydrated/garlic-flakes.jpg" alt="Dehydrated garlic flakes from Gujarat" caption="Dehydrated garlic flakes — creamy white to light brownish, 8-15mm, purity 99%." />
                </div>
            </ContentSection>

            <ContentSection id="specifications" title="Quality Specifications: What to Specify in Your Purchase Order">
                <p className="text-muted leading-relaxed mb-4">
                    Dehydrated onion and garlic specifications are relatively standardised across the Mahuva cluster, but there are several parameters where buyer specification matters and where under-specified purchase orders create disputes at arrival.
                </p>
                <DocTable rows={[
                    { Parameter: 'Moisture', Standard: '≤5%', 'Tighter spec': '≤4% on request', Notes: 'US/EU food manufacturers often require ≤4% for shelf-stable products' },
                    { Parameter: 'Purity', Standard: '≥98%', 'Tighter spec': '≥99% achievable', Notes: 'Free from foreign matter, stems, skins, burnt particles' },
                    { Parameter: 'Colour', Standard: 'White to off-white (onion); light cream (garlic)', 'Tighter spec': 'Colour chart reference on request', Notes: 'Yellowing indicates sulphite deficiency or age; browning indicates excess heat' },
                    { Parameter: 'Sulphite (SO₂)', Standard: '≤50 ppm (EU MRL)', 'Tighter spec': 'Sulphite-free available', Notes: '10-15% price premium for sulphite-free; requires 14-21 days advance notice' },
                    { Parameter: 'Pesticide residues', Standard: 'EU MRL compliant', 'Tighter spec': 'US EPA MRL or Japan MRL on request', Notes: 'Multi-residue panel from NABL lab per shipment' },
                    { Parameter: 'Ethylene oxide', Standard: 'Not applied', 'Tighter spec': 'EU BfR limit <0.02 mg/kg', Notes: 'EU rejections historically linked to ETO; confirm processor does not apply ETO treatments' },
                ]} />
                <InfoBox title="On Sulphite-Free Production">
                    Standard dehydrated onion uses sulphur dioxide (SO₂) treatment to maintain colour and extend shelf life. Sulphite-free production is increasingly demanded for organic product lines and for markets where sulphite-sensitive consumers are a priority. It requires advance notice because the production run must be physically separated from sulphited production, and colour management without SO₂ is more demanding. Plan for 14-21 days production lead time and a 10-15% price premium.
                </InfoBox>
            </ContentSection>

            <ContentSection id="price-drivers" title="What Drives Dehydrated Onion and Garlic Prices">
                <p className="text-muted leading-relaxed mb-4">
                    The 2022-23 season illustrates how dehydrated allium prices move. When China (a major garlic and onion processor) and Egypt (a significant onion exporter) both experienced poor crop seasons simultaneously, global buyers turned to India. Gujarat&apos;s 67% year-on-year export volume increase to 83,452 MT in 2023-24 (APEDA) is partly a reflection of this demand surge. Indian processor inventories were drawn down, prices moved materially upward, and buyers who had not secured forward supply found themselves on wait lists during peak demand.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                    The lesson is that dehydrated allium prices are not purely driven by India&apos;s domestic supply situation — they are influenced by global supply from competing producing countries. Understanding that frame helps buyers interpret price movements.
                </p>
                <div className="space-y-4 mb-6">
                    {[
                        { factor: 'Indian fresh onion harvest (Oct-Dec)', detail: 'Dehydrated onion supply tracks the fresh onion crop. A good Oct-Dec harvest in Maharashtra, Rajasthan, and Gujarat means abundant raw material for processors and moderate prices. A poor harvest — drought, unseasonal rain — compresses raw material availability and lifts processor costs.' },
                        { factor: 'Competing crop failures (China, Egypt)', detail: 'India is not the only major producer. China dehydrates large volumes of onion and garlic for export. Egypt produces significant fresh onion quantities. When either has a poor year, global buyers shift sourcing to India, increasing demand and drawing down Indian processor inventories. This happened in 2022-23 and can happen again.' },
                        { factor: 'INR/USD exchange rate', detail: 'Indian processors cost in INR; revenues are predominantly in USD. A weaker INR increases their USD-denominated margin and gives them room to compete on price. A stronger INR compresses their margin and firms up USD prices.' },
                        { factor: 'Sulphite-free premium', detail: 'Sulphite-free production commands a persistent cost premium over standard sulphited dehydrated onion. This reflects the additional production complexity — colour management without SO₂ requires more careful process control, separate production runs, and lower effective yields.' },
                        { factor: 'Moisture specification', detail: 'Tighter moisture (≤4% vs standard ≤5%) requires additional drying time and equipment energy. Buyers who need guaranteed ≤4% moisture (common for humid-climate markets or for long-transit routes) should expect this to be reflected in price.' },
                    ].map((item, idx) => (
                        <div key={idx} className="border border-border rounded-lg p-5">
                            <h3 className="font-bold text-brand mb-2">{item.factor}</h3>
                            <p className="text-muted text-sm leading-relaxed">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </ContentSection>

            <ContentSection id="sourcing" title="Why Mahuva Is the Sourcing Reference Point">
                <p className="text-muted leading-relaxed mb-4">
                    Mahuva in Gujarat&apos;s Bhavnagar district is not merely one option among many — it is structurally the centre of Indian dehydrated onion and garlic production. The cluster developed because Mahuva sits adjacent to Gujarat&apos;s major onion-growing belt, which means the supply chain from farm to dehydration plant is short, the raw material is fresh, and the processing infrastructure is dense. Over 120 plants operating in close proximity means competitive pricing, a wide range of forms and specifications, and experienced export documentation handling.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                    Most Mahuva processors have direct experience exporting to EU, US, Japan, and GCC markets. The documentation requirements — NABL COA, phytosanitary certificate, pesticide multi-residue panels — are well understood. The logistics infrastructure to Mundra and JNPT ports is established.
                </p>
                <InfoBox>
                    EU rejections of Indian dehydrated onion and garlic have historically involved two main contaminants: ethylene oxide (ETO) and pesticide residues. ETO is not used in Mahuva processing as standard practice, but buyers should confirm this explicitly in their purchase order specification. Multi-residue pesticide panels from NABL labs are standard but must cover the full EU MRL panel — not just a shortened panel — for EU import clearance.
                </InfoBox>
            </ContentSection>

            <ContentSection id="faq" title="FAQ: Dehydrated Onion and Garlic Buyer Questions">
                <FAQList faqs={[
                    { q: 'What is the shelf life?', a: 'Properly sealed in moisture-barrier packaging and stored below 25°C at below 60% relative humidity: dehydrated onion lasts 18-24 months from production date, dehydrated garlic 12-18 months. The lower the moisture of the product (≤4% vs ≤5%), the longer the effective shelf life under equivalent storage conditions.' },
                    { q: 'What is the difference between white flakes and kibbled onion?', a: 'White flakes are sliced onion, approximately 5mm — rehydrate well and are the most widely used form for soups, ready meals, and seasonings. Kibbled onion is a coarser cut at 8-12mm, used where a visible onion piece in the finished product is desired — retail herb mixes, artisan-style products, or pizza toppings.' },
                    { q: 'Does EU import still have restrictions on Indian dehydrated onion?', a: 'There are no permanent import restrictions on Indian dehydrated onion. The RASFF (EU food and feed safety alert system) has historically flagged Indian products for pesticide residues and, in some periods, ethylene oxide. Ensuring your supplier provides a full EU MRL-compliant multi-residue pesticide COA and explicitly confirms no ETO treatment is the appropriate due diligence response.' },
                    { q: 'Can you supply non-irradiated product?', a: 'Irradiation is not standard practice in the Mahuva processing cluster. We can confirm non-irradiated status for lots on request, with written confirmation from the processing unit included in the documentation set. Specify this requirement in your purchase order.' },
                    { q: 'What lead time should I plan for?', a: 'Standard forms (white flakes, minced, powder, granules) from current stock: 7-14 days for documentation preparation and container dispatch. Sulphite-free lots or custom forms require 21-30 days from order confirmation. Always confirm current stock position before building a tight delivery schedule.' },
                ]} />
            </ContentSection>
        </>
    );
}

// ─── Export Documentation Checklist ───
function ExportDocsContent() {
    return (
        <>
            <ContentSection id="overview" title="The Paper Side of an Import — and Where It Goes Wrong">
                <p className="text-muted leading-relaxed mb-4 text-lg">
                    The most common causes of customs rejections and port holds on Indian food shipments are not contamination or quality failures — they are documentation errors. A phytosanitary certificate dated before the lot was packed. A COA from a lab not accredited by NABL. An HS code on the commercial invoice that does not match the product description. A weight discrepancy of 1.5 kg between the invoice and the packing list. These are not exotic problems — they are routine failures in exporters who are moving fast and not double-checking.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                    For the buyer, the cost is real: demurrage charges accumulate while documents are corrected, shipments can be returned or destroyed, and FDA-registered US imports that miss their Prior Notice window face refusal of admission. None of this is recoverable by arguing quality or goodwill. The documentation either complies or it does not.
                </p>
                <p className="text-muted leading-relaxed mb-6">
                    This guide covers every document in a standard Indian food export shipment, the timing each document requires, destination-specific requirements, and the mistakes that most commonly get shipments held.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                    <StatCard label="Mandatory docs" value="7" subtext="Every shipment, every market" />
                    <StatCard label="US requirement" value="≥8 hrs" subtext="FDA Prior Notice before sea arrival" />
                    <StatCard label="EU requirement" value="CHED" subtext="Filed in TRACES NT at entry port" />
                    <StatCard label="Phyto timing" value="Post-packing" subtext="Cannot be issued before lot is finalised" />
                </div>
            </ContentSection>

            <ContentSection id="mandatory-docs" title="Mandatory Documents — Every Shipment, Every Market">
                <p className="text-muted leading-relaxed mb-4">
                    These seven documents are required for every Indian food export shipment regardless of destination. No document is optional. Each has a specific issuing authority, a timing requirement, and common error modes that buyers should know about.
                </p>
                <DocTable rows={[
                    { Document: 'Commercial Invoice', 'Issued By': 'Exporter', Timing: 'Before container stuffing', 'Critical Requirement': 'HS code, quantity, unit price, Incoterms must exactly match the Proforma Invoice; any deviation triggers customs queries' },
                    { Document: 'Packing List', 'Issued By': 'Exporter', Timing: 'Before container stuffing', 'Critical Requirement': 'Net/gross weight, carton count, lot numbers per line; must be internally consistent and match invoice quantities' },
                    { Document: 'Bill of Lading (sea) / Airway Bill (air)', 'Issued By': 'Carrier', Timing: 'After vessel/aircraft departure', 'Critical Requirement': 'Original BL required for LC payment terms; telex/express release for TT terms; notify party details must be correct' },
                    { Document: 'Certificate of Origin', 'Issued By': 'FIEO or Chamber of Commerce', Timing: 'Before shipment', 'Critical Requirement': 'State of origin matters for GI products (e.g., Meghalaya for Lakadong turmeric, Bihar for Mithila makhana); affects preferential duty schemes' },
                    { Document: 'Phytosanitary Certificate', 'Issued By': 'NPPO India', Timing: 'After final packing — not before', 'Critical Requirement': 'NPPO inspector physically verifies the packed lot; a certificate issued before packing is invalid and will be rejected at destination' },
                    { Document: 'Certificate of Analysis (COA)', 'Issued By': 'NABL-accredited laboratory', Timing: 'Before shipment (2-5 days for results)', 'Critical Requirement': 'Lab must be NABL-accredited; COA must reference the specific lot number on the invoice; US FDA and EU customs reject non-NABL COAs' },
                    { Document: 'Insurance Certificate', 'Issued By': 'Indian insurance company', Timing: 'Before vessel departure', 'Critical Requirement': 'Coverage value must be ≥110% of CIF value; required for CIF and DAP Incoterms; often omitted in error for FOB terms' },
                ]} />
            </ContentSection>

            <ContentSection id="destination-specific" title="Destination-Specific Requirements">
                <p className="text-muted leading-relaxed mb-4">
                    Beyond the mandatory core set, each major destination market imposes additional requirements. These should be confirmed at enquiry stage — not after the container is loaded.
                </p>
                <div className="space-y-6 mb-6">
                    {[
                        {
                            destination: 'United States (FDA / CBP)',
                            docs: [
                                { doc: 'FDA Prior Notice', detail: 'Must be filed electronically at least 8 hours before a sea shipment arrives at the US port, or at least 4 hours before air arrival. Filed through FDA\'s PNSI system by the US-based importer of record or their customs broker. If the Prior Notice is not filed or is filed incorrectly, FDA can refuse admission of the entire shipment on arrival.' },
                                { doc: 'FSVP Documentation Support', detail: 'US importers under the Food Safety Modernization Act must maintain a Foreign Supplier Verification Program. We provide the COA, FSSAI registration, facility information, and audit documentation needed to support your FSVP file for our products.' },
                                { doc: 'Lacey Act Declaration', detail: 'Required for botanical ingredients (moringa, makhana and similar plant-derived products). Confirm applicability with your customs broker before the first shipment.' },
                            ],
                        },
                        {
                            destination: 'European Union',
                            docs: [
                                { doc: 'CHED (Common Health Entry Document)', detail: 'The CHED must be filed by the EU importer\'s customs broker in the TRACES NT system before the shipment arrives at the EU port of entry. The CHED references the COA, phytosanitary certificate, and other documents. Physical inspection may be triggered by the border control post based on product category risk profile.' },
                                { doc: 'EU Organic Certificate', detail: 'For products sold under an organic label in the EU, the product must be certified under EU Regulation 2018/848. We provide the organic certificate issued by the certifying body. Ensure the certificate covers the specific lot; lot-specific certificates are standard practice.' },
                                { doc: 'Novel Food Authorisation (moringa only)', detail: 'Moringa oleifera leaf has received EU Novel Food authorisation. EU importers must hold the authorisation before selling moringa leaf products in the EU. We supply technical documentation to support your authorisation application.' },
                            ],
                        },
                        {
                            destination: 'Australia (DAFF)',
                            docs: [
                                { doc: 'Fumigation Certificate', detail: 'Australia\'s Department of Agriculture, Fisheries and Forestry requires evidence of treatment (methyl bromide or heat treatment) for many plant-derived products. The fumigation certificate must be issued by an approved fumigation provider and reference the container and lot.' },
                                { doc: 'Import Permit', detail: 'Certain spices and plant-based products require an import permit from DAFF before shipment. Check the BICON database (biosecurity.gov.au) for your specific product before placing an order.' },
                            ],
                        },
                        {
                            destination: 'Saudi Arabia and GCC',
                            docs: [
                                { doc: 'Halal Certificate', detail: 'Required for processed food products. Issued by FSSAI-recognised Halal certification bodies in India. Confirm which Halal certification body is accepted by the Saudi Food and Drug Authority for your product category.' },
                                { doc: 'Certificate of Origin legalisation', detail: 'The Certificate of Origin may need to be legalised by the Indian Ministry of External Affairs and attested by the destination country\'s embassy in India before shipment. This process takes 3-5 business days; factor it into your timeline.' },
                            ],
                        },
                    ].map((dest, idx) => (
                        <div key={idx} className="border border-border rounded-xl p-6">
                            <h3 className="font-bold text-brand text-lg mb-4">{dest.destination}</h3>
                            <div className="space-y-4">
                                {dest.docs.map((d, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" />
                                        <div>
                                            <span className="font-semibold text-brand text-sm">{d.doc}: </span>
                                            <span className="text-muted text-sm">{d.detail}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </ContentSection>

            <ContentSection id="timeline" title="The Document Timeline — From Order to Departure">
                <p className="text-muted leading-relaxed mb-4">
                    Documentation does not happen on the day of shipment — it is a parallel process that must begin as soon as the order is confirmed. The phytosanitary certificate and COA both have lead times that must be planned for.
                </p>
                <div className="space-y-4 mb-6">
                    {[
                        { day: 'Day -21 to -15', action: 'Order confirmed, Proforma Invoice counter-signed, advance payment received. Processor given production instruction. Lab samples schedule set for pre-dispatch testing.' },
                        { day: 'Day -14 to -7', action: 'Pre-dispatch lot verification: physical grade check, moisture test, visual quality review. Lab samples dispatched to NABL-accredited laboratory. Lab turnaround typically 3-5 working days.' },
                        { day: 'Day -7 to -4', action: 'COA received from NABL lab. COA reviewed against purchase order specification. NPPO plant quarantine officer contacted to schedule lot inspection for phytosanitary certificate.' },
                        { day: 'Day -3 to -1', action: 'Commercial invoice and packing list finalised and cross-checked (quantities, weights, HS codes, lot numbers). Certificate of Origin applied for at FIEO or Chamber of Commerce. Container stuffed and sealed in presence of surveyor if third-party inspection is requested.' },
                        { day: 'Day 0 (BL Date)', action: 'Vessel departs. Complete electronic document set sent to buyer same day: BL copy, Commercial Invoice, Packing List, Certificate of Origin, Phytosanitary Certificate, COA, Insurance Certificate.' },
                        { day: 'Day +1 to +3', action: 'Original documents couriered to buyer or bank (LC terms). US shipments: FDA Prior Notice filed by US importer\'s broker. EU shipments: CHED filed in TRACES NT by EU importer\'s broker at port of entry.' },
                    ].map((step, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                            <div className="flex-shrink-0 bg-brand text-white text-xs font-semibold px-3 py-2 rounded-lg min-w-[130px] text-center">
                                {step.day}
                            </div>
                            <div className="text-muted text-sm leading-relaxed pt-1.5">{step.action}</div>
                        </div>
                    ))}
                </div>
            </ContentSection>

            <ContentSection id="common-mistakes" title="The Mistakes That Actually Hold Shipments">
                <p className="text-muted leading-relaxed mb-4">
                    These are not edge cases — they are patterns that repeat. Every one of these has caused a real shipment to be held or rejected.
                </p>
                <div className="space-y-4 mb-6">
                    {[
                        { mistake: 'Phytosanitary certificate issued before packing is complete', detail: 'The NPPO inspector must physically examine the final packed lot. A certificate generated before the lot is finalised is procedurally invalid. Any destination port border inspector who checks the dates will flag this immediately. The certificate date must be on or after the packing date on the packing list.' },
                        { mistake: 'COA from a non-NABL accredited laboratory', detail: 'US FDA and EU border control posts require laboratory accreditation as the basis for accepting test results. A COA from a private lab without NABL accreditation (even if the results look correct) is not a compliant document for these markets. Verify the lab name on the COA at nabl.gov.in before accepting it.' },
                        { mistake: 'Weight mismatch between Commercial Invoice and Packing List', detail: 'If the invoice states 5,000 kg net weight and the packing list totals 5,020 kg, customs will query the discrepancy. This is a correctable error, but it delays clearance and may trigger inspection. All documents must state identical quantities and weights.' },
                        { mistake: 'HS code on the invoice does not match the product', detail: 'Makhana was reclassified in July 2025. If your supplier is still using the pre-July HS code, the classification mismatch at your customs is a mandatory inspection trigger. Confirm the HS code on every invoice against your customs broker\'s current classification advice.' },
                        { mistake: 'Lot number not referenced on the COA', detail: 'A COA that says "standard export quality" without referencing the specific lot number being shipped cannot be linked to the commercial invoice. This breaks the traceability chain and is unacceptable to US FSVP and EU CHED filing requirements.' },
                        { mistake: 'FDA Prior Notice not filed before US sea arrival', detail: 'The 8-hour window before sea arrival is a hard deadline. If the Prior Notice is missing or contains incorrect information, FDA can refuse admission of the entire shipment. This is the US importer\'s responsibility, not the exporter\'s — but good communication on ETA is required from the exporter.' },
                    ].map((item, idx) => (
                        <div key={idx} className="border border-border rounded-lg p-5">
                            <h3 className="font-bold text-brand mb-2">{item.mistake}</h3>
                            <p className="text-muted text-sm leading-relaxed">{item.detail}</p>
                        </div>
                    ))}
                </div>
                <InfoBox>
                    A parallel document review before container stuffing — checking every document against every other document for internal consistency — is the single most effective procedural control. No container should be sealed until the document set has been reviewed as a complete package.
                </InfoBox>
            </ContentSection>

            <ContentSection id="faq" title="FAQ: Documentation Questions from Real Buyers">
                <FAQList faqs={[
                    { q: 'My customs broker says the COA from my current Indian supplier is from a non-NABL lab. What should I do?', a: 'Request a replacement COA from a NABL-accredited lab for the same lot, or for the next shipment insist on a NABL lab as a specification requirement in the purchase order. For US FSVP and EU CHED purposes, the NABL accreditation is not negotiable. If your supplier cannot provide a NABL COA, that is a serious qualification concern.' },
                    { q: 'Who is responsible for filing FDA Prior Notice for my US-bound shipment?', a: 'FDA Prior Notice is the US importer of record\'s responsibility — it must be filed by the US-based importing party or their licensed customs broker. The Indian exporter\'s obligation is to provide accurate shipment details (product description, quantity, HS code, vessel details, ETA) in time for the broker to file at least 8 hours before sea arrival.' },
                    { q: 'What happens if I receive a shipment and customs holds it for document discrepancies?', a: 'The customs authority will issue a query or a Customs Examination Order specifying what is missing or inconsistent. Documents can sometimes be corrected and re-submitted. However, depending on the nature of the discrepancy and the destination market\'s rules, the hold may result in mandatory physical inspection, storage costs, or — in worst cases — rejection and return to origin. Prevention through pre-shipment document review is far cheaper than remediation.' },
                    { q: 'For LC payment terms, which documents need to be originals?', a: 'For a documentary LC, the documents specified in the LC must be presented as originals to the negotiating bank. Typically this includes the original Bill of Lading (3 originals), original Commercial Invoice, original Certificate of Origin, and original Insurance Certificate. The specific requirements are stated in the LC itself — always review the LC document requirements before production starts.' },
                    { q: 'How far in advance should I confirm destination-specific requirements?', a: 'At enquiry stage — before you confirm the order. Requirements that affect production (fumigation, sulphite-free processing, organic certification) need 14-21 days lead time. Requirements that only affect documentation (legalisation of the Certificate of Origin, embassy attestation) need 5-7 business days and must be started before the shipment is ready to depart.' },
                ]} />
            </ContentSection>
        </>
    );
}

// ─── How to Import Moringa from India ───
function MoringaImportContent() {
    return (
        <>
            <ContentSection id="overview" title="The Two Risks European Buyers Need to Resolve First">
                <p className="text-muted leading-relaxed mb-4 text-lg">
                    India produces approximately <strong className="text-brand">80% of the world&apos;s moringa</strong> — from Andhra Pradesh, Tamil Nadu, and Karnataka. For international buyers, this supply dominance makes India the default sourcing origin. But for EU buyers in particular, two specific issues need to be resolved before anything else: the EU Novel Food status of moringa, and the documented history of ethylene oxide contamination in Indian moringa shipments.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                    <em className="text-brand">Moringa oleifera</em> leaf received a positive EFSA assessment and is authorised under EU Novel Food regulation. <em className="text-brand">Moringa stenopetala</em> — a different species — received a negative EFSA assessment and is not authorised in the EU. Species verification is therefore not a formality; it is a legal requirement. EU importers must hold a Novel Food authorisation for their specific product.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                    Ethylene oxide (ETO) contamination in Indian herbal and spice products has been a recurring EU RASFF issue. ETO is a sterilisation agent used by some processors; its use leaves residues that exceed EU limits and trigger border rejection. The correct response is not to avoid Indian moringa — it is to source from processors who demonstrably do not apply ETO treatment, supported by lot-specific ETO residue testing from a NABL-accredited lab.
                </p>
                <p className="text-muted leading-relaxed mb-6">
                    With those two issues resolved, importing moringa from India is straightforward. This guide covers product forms, specification, certifications, what drives price, and the questions real buyers ask.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                    <StatCard label="India supply share" value="~80%" subtext="Global moringa production" />
                    <StatCard label="EU status" value="Novel Food" subtext="M. oleifera authorised; M. stenopetala not" />
                    <StatCard label="Key risk" value="ETO" subtext="Ethylene oxide contamination" />
                    <StatCard label="HS Code" value="1212.21" subtext="Moringa leaf products" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                    <BlogImage src="/images/products/moringa/moringa-field.jpg" alt="Moringa plantation in India — rows of Moringa oleifera trees ready for leaf harvest" caption="A moringa plantation in southern India. Andhra Pradesh, Tamil Nadu, and Karnataka together account for ~80% of global supply." credit="moringa.com" />
                    <BlogImage src="/images/products/moringa/moringa-plant-leaves.jpg" alt="Moringa oleifera branch with fresh compound leaves ready for harvest" caption="Fresh Moringa oleifera leaves — harvested, shade-dried, and milled into powder. Low-temperature drying preserves chlorophyll and nutrients." credit="orgoallnatural.com" />
                </div>
            </ContentSection>

            <ContentSection id="product-forms" title="Product Forms and Their Applications">
                <p className="text-muted leading-relaxed mb-4">
                    Moringa leaf powder is the dominant commercial export form from India — it accounts for the large majority of international trade volume. Other forms exist and have specific applications, but if you are reading this guide for the first time, &ldquo;moringa leaf powder, 80-100 mesh&rdquo; is the reference product.
                </p>
                <DocTable rows={[
                    { Form: 'Leaf powder (80-100 mesh)', 'HS Code': '1212.21.00', 'Primary application': 'Supplements, smoothie blends, golden milk mixes, functional food ingredient', MOQ: '100 kg' },
                    { Form: 'Leaf flakes / cuts (2-5mm)', 'HS Code': '1212.21.00', 'Primary application': 'Herbal tea blends, loose-leaf tea, culinary garnish, animal feed supplement', MOQ: '200 kg' },
                    { Form: 'Whole dried leaves', 'HS Code': '1212.21.00', 'Primary application': 'Further processing, retail herb packs in natural foods market', MOQ: '300 kg' },
                    { Form: 'Drumstick pods (fresh/frozen)', 'HS Code': '0709.99', 'Primary application': 'South Asian ethnic grocery, restaurant supply — seasonal availability', MOQ: '500 kg' },
                    { Form: 'Seed powder', 'HS Code': '1212.99', 'Primary application': 'Water purification applications, cosmetic formulation', MOQ: '100 kg' },
                ]} />
                <InfoBox>
                    Colour is a quality signal for moringa leaf powder. High-quality powder from fresh leaves dried at low temperatures is a deep, uniform green. Yellowing or browning indicates heat exposure during drying — degrading nutrients and making the product less commercially appealing. Always request a batch photograph alongside your sample.
                </InfoBox>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                    <BlogImage src="/images/products/moringa/moringa-powder.jpg" alt="Moringa leaf powder — deep uniform green colour indicating low-temperature air-dried product" caption="Leaf powder (80–100 mesh) — the dominant export form. Deep green = high chlorophyll = fresh, correctly dried product." />
                    <BlogImage src="/images/products/moringa/moringa-drumstick-pods.jpg" alt="Fresh moringa drumstick pods — seasonal fresh produce export form" caption="Drumstick pods (Moringa oleifera fruit) — seasonal fresh/frozen export for South Asian ethnic grocery and restaurant supply." credit="Amazon" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <BlogImage src="/images/products/moringa/moringa-seeds.jpg" alt="Moringa seeds — used for water purification and cosmetic formulation" caption="Moringa seeds (HS 1212.99) — for water purification and cosmetic formulation; different classification from leaf products." credit="Flipkart" />
                    <BlogImage src="/images/products/moringa/moringa-powder-pouch.jpg" alt="Packaged moringa leaf powder — retail-ready export format" caption="Retail-format moringa leaf powder pouches — available for private-label export alongside bulk 25kg bags." credit="Amazon" />
                </div>
            </ContentSection>

            <ContentSection id="eu-us-requirements" title="EU and US Requirements — What You Need to Know Before Ordering">
                <p className="text-muted leading-relaxed mb-4">
                    The regulatory landscape for moringa varies meaningfully by destination market. Treat this section as a pre-order checklist, not background reading.
                </p>
                <div className="space-y-5 mb-6">
                    <div className="border border-border rounded-xl p-6">
                        <h3 className="font-bold text-brand mb-3">European Union</h3>
                        <p className="text-muted text-sm leading-relaxed mb-3">
                            Moringa oleifera leaf is authorised as a Novel Food under Commission Implementing Regulation (EU) 2018/1023. EU importers must hold a Novel Food authorisation to sell moringa leaf products in the EU. If you are a new EU importer of moringa, you need to obtain this authorisation — it is not the Indian exporter&apos;s responsibility. We supply the technical dossier (specifications, COA, processing information) needed to support an authorisation application.
                        </p>
                        <p className="text-muted text-sm leading-relaxed mb-3">
                            Ethylene oxide (ETO) testing is non-negotiable for EU-bound Indian moringa. The EU limit for ETO residues is 0.02 mg/kg. Indian moringa shipments have been flagged in RASFF multiple times for ETO exceedances. Request an explicit written confirmation from your processor that ETO is not used, and include ETO residue testing in the COA panel. A NABL-accredited lab result for ETO below EU limits must accompany every EU-bound shipment.
                        </p>
                        <p className="text-muted text-sm leading-relaxed">
                            Species verification matters legally: the COA and product specification should confirm <em>Moringa oleifera</em> species. <em>Moringa stenopetala</em> is not authorised in the EU and cannot be sold there as a food ingredient.
                        </p>
                    </div>
                    <div className="border border-border rounded-xl p-6">
                        <h3 className="font-bold text-brand mb-3">United States</h3>
                        <p className="text-muted text-sm leading-relaxed mb-3">
                            Moringa leaf is classified as a dietary supplement ingredient by FDA and does not require pre-market approval for sale in the US supplement market. However, US importers must have a valid Foreign Supplier Verification Program (FSVP) file, which requires documented supplier qualification evidence — FSSAI licence, COA from NABL lab, and facility records. FDA Prior Notice must be filed at least 8 hours before sea arrival.
                        </p>
                        <p className="text-muted text-sm leading-relaxed">
                            For supplement manufacturers, DSHEA-compliant identity testing (botanical ID confirmation of species) is an additional documentation requirement that must be performed at the US importer level. We can facilitate ID testing documentation from our supply chain to support this requirement.
                        </p>
                    </div>
                    <div className="border border-border rounded-xl p-6">
                        <h3 className="font-bold text-brand mb-3">United Kingdom (post-Brexit)</h3>
                        <p className="text-muted text-sm leading-relaxed">
                            The UK has its own retained Novel Food regulation. Moringa oleifera leaf is authorised in Great Britain under the GB Novel Foods framework. EU authorisation does not automatically apply to GB imports. UK importers should confirm current FSA Novel Food status before importing. Northern Ireland follows EU rules under the Windsor Framework.
                        </p>
                    </div>
                </div>
            </ContentSection>

            <ContentSection id="certifications" title="Certifications and Quality Standards">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                        { name: 'FSSAI Licence', detail: 'Mandatory Indian food safety registration; verify at fssai.gov.in', status: 'Mandatory' },
                        { name: 'APEDA RCMC', detail: 'Agricultural export registration', status: 'Mandatory' },
                        { name: 'Phytosanitary Certificate', detail: 'NPPO India; per-shipment; must be post-packing', status: 'Mandatory' },
                        { name: 'Certificate of Origin', detail: 'FIEO or Chamber of Commerce; state of origin specified', status: 'Mandatory' },
                        { name: 'NABL COA with ETO test', detail: 'Pesticide panel including ETO residue; required for EU', status: 'Mandatory (EU)' },
                        { name: 'NPOP Organic', detail: 'India organic certification; needed for organic label claims', status: 'On request' },
                        { name: 'USDA NOP / EU Organic', detail: 'For US and EU organic-labelled products', status: 'On request' },
                        { name: 'Kosher / Halal', detail: 'Religious dietary compliance', status: 'On request' },
                    ].map((cert, idx) => (
                        <div key={idx} className="flex items-start gap-4 border border-border rounded-lg p-4">
                            <div className="flex-1">
                                <div className="font-semibold text-brand text-sm">{cert.name}</div>
                                <div className="text-xs text-muted mt-0.5">{cert.detail}</div>
                            </div>
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded ${cert.status === 'Mandatory' || cert.status === 'Mandatory (EU)' ? 'bg-brand/10 text-brand' : 'bg-surface text-muted border border-border'}`}>
                                {cert.status}
                            </span>
                        </div>
                    ))}
                </div>
                <h3 className="font-bold text-brand mb-4 mt-6">Standard COA Parameters — Leaf Powder</h3>
                <DocTable rows={[
                    { Parameter: 'Moisture', 'Typical Result': '5-8%', Specification: '≤10%; EU buyers often require ≤8%' },
                    { Parameter: 'Protein (dry basis)', 'Typical Result': '27-30%', Specification: '≥25%' },
                    { Parameter: 'Colour (visual)', 'Typical Result': 'Deep, uniform green', Specification: 'No yellowing or browning' },
                    { Parameter: 'Pesticide residues (multi-residue)', 'Typical Result': 'Below EU MRL', Specification: 'Full EU MRL panel; specify US EPA or Japan if needed' },
                    { Parameter: 'Ethylene oxide (ETO)', 'Typical Result': 'Not detected', Specification: '<0.02 mg/kg (EU limit)' },
                    { Parameter: 'Heavy metals (Lead)', 'Typical Result': '<0.5 ppm', Specification: '<10 ppm (FSSAI); <2 ppm EU supplement' },
                    { Parameter: 'Total Plate Count', 'Typical Result': '<10,000 cfu/g', Specification: '<100,000 cfu/g' },
                    { Parameter: 'Yeast and mould', 'Typical Result': '<100 cfu/g', Specification: '<1,000 cfu/g' },
                ]} />
                <BlogImage src="/images/products/moringa/moringa-benefits-infographic.jpg" alt="Organic moringa powder benefits — nutrition profile and superfood properties infographic" caption="Moringa leaf powder nutrition profile — rich in protein, iron, calcium, and antioxidants, driving demand across supplement and functional food categories." credit="Organic India / Shopify vendor" />
            </ContentSection>

            <ContentSection id="what-to-watch" title="What to Watch For: Moringa-Specific Red Flags">
                <p className="text-muted leading-relaxed mb-4">
                    Beyond the standard documentation red flags that apply to any Indian food export, moringa has product-specific quality and regulatory concerns that buyers should screen for.
                </p>
                <BulletList items={[
                    'Yellow or off-green powder in the sample — indicates high-temperature drying, which degrades chlorophyll and nutrients; not acceptable for supplement or premium food applications',
                    'No ETO residue test on the COA — for EU-bound shipments, this is a mandatory test parameter; absence suggests the supplier is not familiar with EU requirements',
                    'Species not confirmed on the COA or product specification — a supplier who cannot confirm Moringa oleifera vs Moringa stenopetala species is a risk for EU importers with Novel Food obligations',
                    'COA shows moisture above 10% — at this level, mould risk during transit is significant for a plant powder; optimal is 8-10%, and European buyers typically require ≤8%',
                    'Protein content below 25% on dry basis — indicates poor raw material quality (old leaves, stem inclusion, excessive processing losses); ask for the COA on a fresh lot',
                    'Supplier cannot provide a NABL COA — non-negotiable for US FSVP and EU CHED compliance; if the supplier does not work with NABL labs, they are not export-market ready',
                    'Quote for "spray-dried" moringa that seems unusually cheap — spray drying requires dedicated equipment and typically yields a higher-value, lighter product; verify the process with the processor',
                ]} />
                <InfoBox title="The Quality Gap Is Real">
                    A European importer working with CBI noted that &ldquo;there&apos;s a huge difference in quality — that really defines pricing&rdquo; for moringa sourced from India. Colour, protein content, contaminant history, and certification level are all meaningful quality differentiators, and they all show up in price. A sample that arrives looking brown and smelling stale is not a documentation issue — it is a quality failure that no amount of paperwork can correct.
                </InfoBox>
            </ContentSection>

            <ContentSection id="faq" title="FAQ: Moringa Import Questions">
                <FAQList faqs={[
                    { q: 'Do I need a Novel Food authorisation to import moringa to the EU?', a: 'Yes, if you are placing moringa leaf products on the EU market. Moringa oleifera leaf is authorised under EU Novel Food regulation, but the authorisation is held by the importer/business placing the product on the market — not the Indian exporter. If you do not already hold or are named under an authorisation, you need to apply to the relevant EU member state authority. We provide the technical documentation package to support your application.' },
                    { q: 'How do I verify there is no ethylene oxide in the moringa I am buying?', a: 'Request a NABL lab COA that explicitly includes an ETO residue result below the EU limit of 0.02 mg/kg. Also request written confirmation from the processor that ETO-based sterilisation is not applied in their production process. For your first shipment and periodically thereafter, commission an independent verification test from a third-party EU or US accredited lab on arrival.' },
                    { q: 'What colour should the moringa powder be?', a: 'Deep, uniform green — like fresh dried leaves. The green comes from chlorophyll, which degrades with heat and age. Browning or yellowing indicates the leaves were dried at too high a temperature or the powder is old. This is not just aesthetic; it correlates with lower nutrient retention. Always request a batch photograph before confirming the order.' },
                    { q: 'What drives the price difference between conventional and organic moringa?', a: 'Organic certification (NPOP, USDA NOP, EU Organic) requires audited farm records, no synthetic input use, and recurring annual inspection costs. The certified supply chain is narrower. Beyond certification, quality differentials — colour score, protein content, contaminant history — drive further price variation. Certified organic and high visual quality combined commands the highest prices. Conventional, lower-quality powder is at the other end of the range.' },
                    { q: 'Can I get freeze-dried moringa powder?', a: 'Freeze-dried moringa is available from select processors with the appropriate equipment. It retains higher levels of heat-sensitive nutrients and produces a lighter, more dispersible powder. Lead time is longer (30-45 days), MOQ is higher (typically 500 kg minimum), and the price premium over hot-air dried is 20-40%. For pharmaceutical or clinical nutrition applications where nutrient retention is a specification parameter, freeze-drying is worth the premium.' },
                ]} />
            </ContentSection>
        </>
    );
}

// ─── India FTAs for Food Ingredient Importers ───
function FTABlogContent() {
    return (
        <>
            <ContentSection id="overview" title="Why Your Supplier's Country of Origin Affects Your Import Cost">
                <p className="text-muted leading-relaxed mb-4 text-lg">
                    Two buyers sourcing the same product — dehydrated onion, makhana, or turmeric from India — can face meaningfully different landed costs depending entirely on where they import it and whether they use a Preferential Certificate of Origin. The reason is India's growing network of Free Trade Agreements and Comprehensive Economic Partnership Agreements (CEPAs), which reduce or eliminate customs duties for buyers in partner countries.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                    India currently has active trade agreements with the UAE, Australia, Japan, and South Korea — four of the largest markets for Indian food ingredients. Under these agreements, Indian-origin products exported with the correct documentation can attract significantly lower import duties than products from non-agreement countries. For a buyer importing regularly, this is not a procedural detail — it is a direct cost advantage that improves margins or enables competitive pricing.
                </p>
                <p className="text-muted leading-relaxed mb-6">
                    This guide explains how India&apos;s active FTAs work in practice for food ingredient buyers, what documentation is required to claim benefits, and where to find current duty schedules from official government sources.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                    <StatCard label="India–UAE CEPA" value="May 2022" subtext="Effective date (MoCI)" />
                    <StatCard label="India–Australia ECTA" value="Dec 2022" subtext="Effective date (MoCI)" />
                    <StatCard label="India–Japan CEPA" value="Aug 2011" subtext="Effective date (MoCI)" />
                    <StatCard label="India–Korea CEPA" value="Jan 2010" subtext="Effective date (MoCI)" />
                </div>
                <InfoBox title="Official Source">
                    All active Indian trade agreements and their tariff schedules are available at the Ministry of Commerce and Industry website (commerce.gov.in) and the India Trade Portal (indiantradeportal.in), maintained by FIEO under the Ministry of Commerce.
                </InfoBox>
            </ContentSection>

            <ContentSection id="active-ftas" title="India's Active FTAs — What Each One Covers">
                <p className="text-muted leading-relaxed mb-4">
                    Each agreement has its own tariff schedule — the list of product categories, HS codes, and the duty rates (or duty elimination timelines) that apply. Not every product gets immediate zero-duty treatment; some categories are phased over 5 to 10 years. The details are in the agreement schedules, which are public documents.
                </p>
                <div className="space-y-5 mb-6">
                    {[
                        {
                            name: 'India–UAE CEPA (Comprehensive Economic Partnership Agreement)',
                            effective: 'May 1, 2022',
                            scope: 'India committed to preferential duty rates on approximately 97% of its tariff lines for UAE-origin imports. UAE committed to duty concessions across a broad set of Indian exports. For food ingredients, many categories receive immediate or early-phase duty elimination. UAE is one of India\'s top 3 food export destinations.',
                            source: 'Ministry of Commerce & Industry, Government of India. Signed February 18, 2022.',
                        },
                        {
                            name: 'India–Australia ECTA (Economic Cooperation and Trade Agreement)',
                            effective: 'December 29, 2022',
                            scope: 'Australia committed to eliminating tariffs on over 85% of Indian goods immediately, with the remainder phased out over several years. For most food ingredients — makhana, spices, dehydrated vegetables — Australia\'s standard import duty is already low, but ECTA provides tariff certainty, simplified Rules of Origin, and a preferential framework that can support longer-term trade relationships.',
                            source: 'Ministry of Commerce & Industry, Government of India. Signed April 2, 2022.',
                        },
                        {
                            name: 'India–Japan CEPA (Comprehensive Economic Partnership Agreement)',
                            effective: 'August 1, 2011',
                            scope: 'Japan committed to progressive tariff elimination on a large share of Indian exports. Japan is a significant market for Indian spices, organic ingredients, and processed food products. The agreement covers most HS chapters relevant to food ingredient trade, with specific duty schedules that have now been in effect for over a decade. Current concession rates are at or near their final agreed levels.',
                            source: 'Ministry of Commerce & Industry, Government of India.',
                        },
                        {
                            name: 'India–South Korea CEPA (Comprehensive Economic Partnership Agreement)',
                            effective: 'January 1, 2010',
                            scope: 'India\'s first CEPA. Korea committed to duty elimination on a broad range of Indian goods. South Korea is an active importer of Indian spices, moringa, and health food ingredients. Like Japan, this agreement has now reached near-final concession levels after 15 years of phased reductions.',
                            source: 'Ministry of Commerce & Industry, Government of India.',
                        },
                    ].map((fta, idx) => (
                        <div key={idx} className="border border-border rounded-lg p-5">
                            <h3 className="font-bold text-brand mb-2">{fta.name}</h3>
                            <p className="text-xs text-muted font-semibold uppercase tracking-widest mb-2">Effective: {fta.effective}</p>
                            <p className="text-muted text-sm leading-relaxed mb-2">{fta.scope}</p>
                            <p className="text-xs text-muted italic">Source: {fta.source}</p>
                        </div>
                    ))}
                </div>
            </ContentSection>

            <ContentSection id="how-ftas-work" title="How FTA Benefits Work in Practice">
                <p className="text-muted leading-relaxed mb-4">
                    Knowing an FTA exists is only the starting point. Claiming the duty benefit requires specific documentation and compliance with Rules of Origin. Missing either means your shipment is cleared under the standard (MFN) duty rate, not the preferential rate — the FTA benefit is simply not claimed.
                </p>
                <div className="space-y-4 mb-6">
                    {[
                        {
                            step: 'Step 1 — Verify your product\'s HS code in the FTA tariff schedule',
                            detail: 'Each FTA publishes an Annexure listing every tariff line (HS code) and its treatment: elimination, reduction, or exclusion. Look up your specific HS code in the schedule for your destination country. This schedule is available on the India Trade Portal (indiantradeportal.in) and the Ministry of Commerce website. If your HS code is in the exclusion list, the FTA does not apply to that product.',
                        },
                        {
                            step: 'Step 2 — Confirm your product meets Rules of Origin (RoO)',
                            detail: 'Rules of Origin define what qualifies as Indian-origin for FTA purposes. For agricultural and food products, the standard criterion is "wholly obtained" — meaning the product is grown and processed in India with no non-Indian raw material substitution. For processed food products, a value-addition criterion may apply (typically 35-40% value addition in India). Your APEDA-registered exporter\'s supply chain should meet this criterion for all products we supply, as they are sourced directly from Indian growing regions.',
                        },
                        {
                            step: 'Step 3 — Obtain a Preferential Certificate of Origin (CoO)',
                            detail: 'To claim the FTA duty rate, the importer must present a Preferential Certificate of Origin at the destination customs. This document is issued in India by authorised agencies: FIEO (Federation of Indian Export Organisations), the Export Inspection Council, or designated Chambers of Commerce. For APEDA-registered products, APEDA can issue CoO in some cases. This is a different document from the standard non-preferential Certificate of Origin — confirm with your customs broker which format is required.',
                        },
                        {
                            step: 'Step 4 — Importer claims preferential duty at destination customs',
                            detail: 'The Preferential CoO is presented to the customs authority in the destination country along with the standard import documentation. The customs authority verifies the CoO against the FTA schedule and applies the preferential rate. If documentation is incomplete, the shipment is cleared at the standard MFN rate. The duty saved cannot be reclaimed retroactively in most cases.',
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="border border-border rounded-lg p-5">
                            <h3 className="font-bold text-brand mb-2">{item.step}</h3>
                            <p className="text-muted text-sm leading-relaxed">{item.detail}</p>
                        </div>
                    ))}
                </div>
                <InfoBox title="Important">
                    Duty rates under FTAs change every year as phased reductions take effect. Always verify the current applicable rate from the official tariff schedule before placing a commercial order. The India Trade Portal (indiantradeportal.in) and your destination country&apos;s customs authority website are the authoritative sources. Your customs broker in the destination country should confirm the current preferential rate for your specific HS code before each import.
                </InfoBox>
            </ContentSection>

            <ContentSection id="fta-by-product" title="FTA Relevance by Product Category">
                <p className="text-muted leading-relaxed mb-4">
                    The table below maps the key products we supply to their HS codes and notes FTA relevance by destination market. Verify current duty rates via the India Trade Portal or your customs broker — the notes below reflect general FTA coverage, not specific current rates.
                </p>
                <DocTable rows={[
                    { Product: 'Makhana (popped)', 'HS Code': '2008.19.21', 'UAE CEPA': 'Covered', 'AU ECTA': 'Covered', 'JP CEPA': 'Covered', 'KR CEPA': 'Covered' },
                    { Product: 'Turmeric (finger/powder)', 'HS Code': '0910.30', 'UAE CEPA': 'Covered', 'AU ECTA': 'Covered', 'JP CEPA': 'Covered', 'KR CEPA': 'Covered' },
                    { Product: 'Dehydrated onion', 'HS Code': '0712.20.00', 'UAE CEPA': 'Covered', 'AU ECTA': 'Covered', 'JP CEPA': 'Covered', 'KR CEPA': 'Covered' },
                    { Product: 'Dehydrated garlic', 'HS Code': '0712.90.20', 'UAE CEPA': 'Covered', 'AU ECTA': 'Covered', 'JP CEPA': 'Covered', 'KR CEPA': 'Covered' },
                    { Product: 'Moringa leaf powder', 'HS Code': '1212.21.00', 'UAE CEPA': 'Covered', 'AU ECTA': 'Covered', 'JP CEPA': 'Covered', 'KR CEPA': 'Covered' },
                ]} />
                <p className="text-muted text-sm leading-relaxed mt-2 mb-4">
                    &ldquo;Covered&rdquo; means the HS code falls within the FTA&apos;s concession schedule. The actual duty rate — whether 0%, a partial reduction, or a phased rate — must be verified from the official schedule for your shipment date. Some products may be in the exclusion list or may attract non-zero preferential rates depending on the specific HS subheading and product form.
                </p>
                <InfoBox title="Verify Before You Order">
                    The India Trade Portal (indiantradeportal.in), maintained by FIEO under the Ministry of Commerce, allows you to look up product-specific duty rates under each FTA. Enter your HS code and destination country to see the current preferential rate, the standard MFN rate, and the phased reduction schedule. Your customs broker in the destination country should cross-check this against the local tariff schedule before the first shipment.
                </InfoBox>
            </ContentSection>

            <ContentSection id="claiming-benefits" title="Practical Checklist: Claiming FTA Benefits on Your Shipment">
                <p className="text-muted leading-relaxed mb-4">
                    If you are importing Indian food ingredients into the UAE, Australia, Japan, or South Korea and are not currently claiming FTA preferential duty rates, work through this checklist with your customs broker before the next shipment.
                </p>
                <BulletList items={[
                    'Confirm your destination country has an active FTA with India — check commerce.gov.in for the current list of in-force agreements',
                    'Look up your product\'s HS code in the FTA tariff schedule via the India Trade Portal (indiantradeportal.in) — confirm it is not in the exclusion list',
                    'Verify the current preferential duty rate applies to your shipment date (phased reductions change annually)',
                    'Instruct your Indian supplier to obtain a Preferential Certificate of Origin from FIEO, EIC, or an authorised Chamber of Commerce at the time of shipment',
                    'Confirm Rules of Origin compliance — for wholly-obtained agricultural products, this is straightforward; for processed food, confirm value-addition meets the FTA threshold',
                    'Ensure the Preferential CoO references the correct HS code, product description, and quantity matching the commercial invoice',
                    'Present the Preferential CoO to destination customs with the standard document set — it does not replace but supplements the standard non-preferential CoO',
                    'Keep records — most FTAs require the importer to maintain documentation to support preferential origin claims for a minimum of 3-5 years in case of audit',
                ]} />
            </ContentSection>

            <ContentSection id="faq" title="FAQ: FTA Questions from Buyers">
                <FAQList faqs={[
                    { q: 'My freight forwarder says I am already receiving the lowest duty. Do I need to look into FTAs?', a: 'Possibly not, but it is worth verifying. Some destination markets (like Australia) already have low or zero MFN rates on certain agricultural products. In those cases, the FTA benefit may be marginal. For UAE, Japan, and South Korea, the difference between MFN and preferential rates can be meaningful — verify the specific rate for your HS code.' },
                    { q: 'Who is responsible for obtaining the Preferential Certificate of Origin — the exporter or the importer?', a: 'The Preferential Certificate of Origin is a document obtained by the Indian exporter and provided to the importer as part of the document set. The importer then presents it at destination customs to claim the preferential rate. We can obtain the Preferential CoO from FIEO or an authorised Chamber of Commerce for all shipments where you intend to claim FTA benefits — specify this requirement at order stage.' },
                    { q: 'Can I claim FTA benefits retroactively on past shipments?', a: 'In most cases, no. Preferential duty claims must be made at the time of import clearance. Once a shipment is cleared at the standard MFN rate without a Preferential CoO, the duty cannot generally be reclaimed. Some FTAs do allow retrospective claims within a limited window if the CoO was genuinely unavailable at import time — check with your customs broker and the destination country\'s customs authority for the specific rules.' },
                    { q: 'Does the FTA benefit apply to all product forms within an HS chapter, or just specific sub-headings?', a: 'The FTA tariff schedule operates at the 6-digit or 8-digit HS code level, and different sub-headings within the same chapter can have different treatments. For example, within Chapter 09 (spices), turmeric finger and turmeric powder may have different duty treatments in some schedules. Always verify at the specific HS code level for your product form.' },
                    { q: 'India does not have an FTA with the US or EU. What applies?', a: 'Correct — India does not currently have an FTA with the United States or the European Union. Imports are subject to standard MFN duty rates in both markets. However, some Indian products benefit from the EU\'s Generalised System of Preferences (GSP) — check whether India\'s GSP status applies to your product category under current EU rules. India\'s GSP status with the US was suspended in 2019. For both markets, there are no preferential duty routes currently, and the full MFN duty applies.' },
                ]} />
            </ContentSection>
        </>
    );
}

// ─── Blog post metadata & content registry ─────────────────────────────────────

const BLOG_POSTS = {
    'how-to-import-makhana-from-india': {
        title: 'How to Import Makhana from India: Complete Buyer\'s Guide',
        category: 'Export Guides',
        publishDate: '2026-04-07',
        heroImage: { src: '/images/products/makhana/makhana-hero.webp', alt: 'Makhana (fox nuts) ready for export from Bihar, India' },
        lastUpdated: '2026-04-07',
        author: 'Rajiv Dudeja',
        authorRole: 'Founder, Export Desi',
        readTime: '8 min read',
        excerpt: 'Step-by-step guide for importing makhana (fox nuts) from India. Covers HS codes, documentation, certifications, MOQ, pricing, and shipping terms.',
        tableOfContents: [
            { id: 'overview', label: 'Overview' },
            { id: 'hs-code', label: 'HS Code' },
            { id: 'certifications', label: 'Certifications' },
            { id: 'documentation', label: 'Documentation' },
            { id: 'what-to-watch', label: 'Red Flags' },
            { id: 'faq', label: 'FAQ' },
        ],
        keyTakeaways: [
            'HS Code 2008.19.21 applies to popped/roasted/flavoured makhana (effective July 2025)',
            'Verify FSSAI, APEDA, and IEC numbers independently before any advance payment',
            'Phytosanitary certificate must be issued after final lot packing — not before',
            'COA from a non-NABL accredited lab will be rejected by US FDA and EU customs',
        ],
        cta: {
            heading: 'Ready to Import Makhana from India?',
            subtext: 'Get a quote, request samples, or discuss your requirements. We typically respond within 24 hours on business days.',
            primaryCTA: { label: 'Request a Quote', href: '/contact?product=makhana&type=quote' },
            secondaryCTA: { label: 'Request Sample', href: '/contact?product=makhana&type=sample' },
        },
        Content: MakhanaImportContent,
    },
    'makhana-grades-5-6-7-suta-explained': {
        title: 'Makhana Grades Explained: 5, 6 & 7 Suta — Which One Do You Need?',
        category: 'Product Guides',
        publishDate: '2026-04-14',
        heroImage: { src: '/images/products/makhana/makhana-grades-suta-sizes.webp', alt: 'Makhana graded by Suta — 5, 6 and 7 Suta bead sizes side by side' },
        lastUpdated: '2026-04-14',
        author: 'Rajiv Dudeja',
        authorRole: 'Founder, Export Desi',
        readTime: '6 min read',
        excerpt: 'What do 5 Suta, 6 Suta, and 7 Suta mean? This guide explains makhana grading, bead sizes, price differences, and which grade suits which application.',
        tableOfContents: [
            { id: 'overview', label: 'Overview' },
            { id: 'what-is-suta', label: 'What is Suta?' },
            { id: 'grade-comparison', label: 'Grade Comparison' },
            { id: 'applications', label: 'Applications' },
            { id: 'what-affects-grade-price', label: 'Price Drivers' },
            { id: 'faq', label: 'FAQ' },
        ],
        keyTakeaways: [
            'Higher Suta number = larger bead: 5 Suta (15-18mm), 6 Suta (18-21mm), 7 Suta (>21mm)',
            '7 Suta commands a 30-40% price premium over 5 Suta',
            'Grading is done mechanically via calibrated sieves — not hand-sorted',
            '6 Suta is the most requested grade for retail health food applications',
        ],
        cta: {
            heading: 'Get a Makhana Grade Sample',
            subtext: 'Request 5-10 kg grade samples to assess bead size, texture, and quality before committing to a commercial order.',
            primaryCTA: { label: 'Request Grade Sample', href: '/contact?product=makhana&type=sample' },
            secondaryCTA: { label: 'View Makhana Product Page', href: '/industries/food-ingredients/makhana' },
        },
        Content: MakhanaGradesContent,
    },
    'makhana-export-price-guide': {
        title: 'Makhana Export Price Guide: FOB Rates, Seasonal Factors & How to Evaluate Quotes',
        category: 'Market Intelligence',
        publishDate: '2026-04-16',
        heroImage: { src: '/images/products/makhana/storage-makhana.jpg', alt: 'Makhana in storage at a Bihar processing unit, awaiting export dispatch' },
        lastUpdated: '2026-04-16',
        author: 'Rajiv Dudeja',
        authorRole: 'Founder, Export Desi',
        readTime: '5 min read',
        excerpt: 'Current indicative FOB export prices for makhana by grade, and what drives price variation: crop season, moisture spec, packaging, and Incoterms explained.',
        tableOfContents: [
            { id: 'overview', label: 'Overview' },
            { id: 'price-drivers', label: 'Price Drivers' },
            { id: 'seasonal-timing', label: 'Seasonal Timing' },
            { id: 'evaluating-quotes', label: 'Evaluating Quotes' },
            { id: 'red-flags', label: 'Red Flags' },
            { id: 'faq', label: 'FAQ' },
        ],
        keyTakeaways: [
            'Bihar farmgate prices rose 150% from 2020–2025; domestic Indian demand competes directly with export buyers',
            'Post-harvest (Nov–Feb) is the optimal window — freshest stock, most stable prices, best premium grade availability',
            'The 7 Suta premium (30–40% over 5 Suta) is structural — it reflects lower yield per kg of raw material',
            'Always compare quotes on the same Incoterm — FOB Indian port is the standard benchmark',
        ],
        cta: {
            heading: 'Get a Confirmed Price Quote',
            subtext: 'Share your grade, volume, packaging, and Incoterm preference. We confirm current stock and provide a Proforma Invoice within 48 hours.',
            primaryCTA: { label: 'Request Proforma Invoice', href: '/contact?product=makhana&type=quote' },
            secondaryCTA: { label: 'Understand Makhana Grades', href: '/blog/makhana-grades-5-6-7-suta-explained' },
        },
        Content: MakhanaPriceContent,
    },
    'lakadong-turmeric-what-buyers-need-to-know': {
        title: 'Lakadong Turmeric: What International Buyers Need to Know',
        category: 'Product Guides',
        publishDate: '2026-04-17',
        heroImage: { src: '/images/products/turmeric/turmeric-collage.jpg', alt: 'Lakadong turmeric — field, roots and powder from Meghalaya', credit: 'apexherbex.com' },
        lastUpdated: '2026-04-17',
        author: 'Rajiv Dudeja',
        authorRole: 'Founder, Export Desi',
        readTime: '6 min read',
        excerpt: 'Lakadong turmeric from Meghalaya contains 7–12% curcumin — two to three times standard varieties. A buyer\'s guide to verification, sourcing, certifications, and product forms.',
        tableOfContents: [
            { id: 'overview', label: 'Overview' },
            { id: 'what-makes-it-different', label: 'What Makes It Different' },
            { id: 'verification', label: 'Verification' },
            { id: 'sourcing', label: 'Sourcing & Certs' },
            { id: 'product-forms', label: 'Product Forms' },
            { id: 'faq', label: 'FAQ' },
        ],
        keyTakeaways: [
            'Curcumin content: 7–12% (HPLC, GI Tag No. 741) vs 2–5% in standard commercial turmeric',
            'Always require a NABL HPLC report showing ≥7% curcumin — "Lakadong" claims without lab proof are common',
            'Certificate of Origin must specify Meghalaya as state of production to verify GI origin',
            'Organic certification (NPOP/USDA NOP) available on request for certified lots',
        ],
        cta: {
            heading: 'Source Lakadong Turmeric',
            subtext: 'Request a sample or get a quote. Specify form, certifications required, and target volume.',
            primaryCTA: { label: 'Request a Quote', href: '/contact?product=turmeric&type=quote' },
            secondaryCTA: { label: 'View Turmeric Product Page', href: '/industries/food-ingredients/turmeric' },
        },
        Content: LakadongTurmericContent,
    },
    'dehydrated-onion-garlic-buyer-guide': {
        title: 'Dehydrated Onion & Garlic from India: A Complete Buyer\'s Guide',
        category: 'Export Guides',
        publishDate: '2026-04-18',
        heroImage: { src: '/images/products/dehydrated/onion-garlic.jpg', alt: 'Dehydrated onion and garlic products from Gujarat, India' },
        lastUpdated: '2026-04-18',
        author: 'Rajiv Dudeja',
        authorRole: 'Founder, Export Desi',
        readTime: '7 min read',
        excerpt: 'India supplies 70%+ of the world\'s dehydrated onion. Product forms, specifications, HS codes, Gujarat Mahuva sourcing, sulphite-free options, and documentation.',
        tableOfContents: [
            { id: 'overview', label: 'Overview' },
            { id: 'product-forms', label: 'Product Forms' },
            { id: 'specifications', label: 'Specifications' },
            { id: 'price-drivers', label: 'Price Drivers' },
            { id: 'sourcing', label: 'Gujarat Sourcing' },
            { id: 'faq', label: 'FAQ' },
        ],
        keyTakeaways: [
            'Gujarat\'s Mahuva region supplies ~70% of India\'s dehydrated onion exports',
            'Standard moisture: ≤5%; tighter ≤4% available for US/EU food manufacturers',
            'Sulphite-free production available with 14-21 days advance notice',
            'HS Code: Onion 0712.20.00, Garlic 0712.90.20',
        ],
        cta: {
            heading: 'Get Dehydrated Onion & Garlic Pricing',
            subtext: 'Specify the product form, moisture requirement, quantity, and destination. We confirm current stock within 48 hours.',
            primaryCTA: { label: 'Request a Quote', href: '/contact?product=dehydrated&type=quote' },
            secondaryCTA: { label: 'View Dehydrated Products Page', href: '/industries/food-ingredients/dehydrated-ingredients' },
        },
        Content: DehydratedContent,
    },
    'indian-food-export-documentation-checklist': {
        title: 'Indian Food Export Documentation Checklist: Every Document You Need',
        category: 'Compliance & Documentation',
        publishDate: '2026-04-19',
        heroImage: { src: '/images/products/makhana/big-packing-makhana.jpg', alt: 'Export-grade makhana packed in bulk bags ready for dispatch — documentation ensures smooth customs clearance' },
        lastUpdated: '2026-04-19',
        author: 'Rajiv Dudeja',
        authorRole: 'Founder, Export Desi',
        readTime: '8 min read',
        excerpt: 'Complete checklist of export documents for Indian food shipments. Mandatory docs, destination-specific requirements (US, EU, Australia, GCC), timelines, and common mistakes.',
        tableOfContents: [
            { id: 'overview', label: 'Overview' },
            { id: 'mandatory-docs', label: 'Mandatory Docs' },
            { id: 'destination-specific', label: 'Destination-Specific' },
            { id: 'timeline', label: 'Timeline' },
            { id: 'common-mistakes', label: 'Common Mistakes' },
            { id: 'faq', label: 'FAQ' },
        ],
        keyTakeaways: [
            '7 mandatory documents for every shipment: BL, Commercial Invoice, Packing List, CO, Phytosanitary, COA, Insurance',
            'US importers need FDA Prior Notice filed ≥8 hours before sea arrival',
            'EU imports of Indian food require CHED filing in TRACES NT at port of entry',
            'Full electronic document set is sent to buyer on the day of vessel departure',
        ],
        cta: {
            heading: 'We Handle All Export Documentation',
            subtext: 'From Proforma Invoice to Bill of Lading, we prepare and verify every document. Share your destination market to confirm the full documentation requirement.',
            primaryCTA: { label: 'Discuss Your Requirements', href: '/contact' },
            secondaryCTA: { label: 'How We Work', href: '/how-we-work' },
        },
        Content: ExportDocsContent,
    },
    'how-to-import-moringa-from-india': {
        title: 'How to Import Moringa from India: Product Forms, HS Codes & Certifications',
        category: 'Export Guides',
        publishDate: '2026-04-21',
        heroImage: { src: '/images/products/moringa/moringa-field.jpg', alt: 'Moringa plantation — India is the world\'s largest moringa producer supplying 80% of global volume', credit: 'moringa.com' },
        lastUpdated: '2026-04-21',
        author: 'Rajiv Dudeja',
        authorRole: 'Founder, Export Desi',
        readTime: '6 min read',
        excerpt: 'India produces 80% of the world\'s moringa. A buyer\'s guide to moringa leaf powder, HS codes, organic certifications, EU Novel Food status, MOQ, and pricing.',
        tableOfContents: [
            { id: 'overview', label: 'Overview' },
            { id: 'product-forms', label: 'Product Forms' },
            { id: 'eu-us-requirements', label: 'EU & US Rules' },
            { id: 'certifications', label: 'Certifications' },
            { id: 'what-to-watch', label: 'Red Flags' },
            { id: 'faq', label: 'FAQ' },
        ],
        keyTakeaways: [
            'Moringa leaf powder HS Code: 1212.21.00',
            'India produces ~80% of global moringa supply — Andhra Pradesh, Tamil Nadu, Karnataka',
            'EU Novel Food regulation applies: EU importers must hold authorisation for moringa leaf products',
            'Organic certification (NPOP / USDA NOP) available for certified lots',
        ],
        cta: {
            heading: 'Source Moringa from India',
            subtext: 'Request a sample or get a quote. Specify product form, certification requirements, and volume. We respond within 48 business hours.',
            primaryCTA: { label: 'Request a Quote', href: '/contact?product=moringa&type=quote' },
            secondaryCTA: { label: 'View Moringa Product Page', href: '/industries/food-ingredients/moringa' },
        },
        Content: MoringaImportContent,
    },
    'india-fta-food-ingredient-importers': {
        title: 'India\'s Free Trade Agreements: What Food Ingredient Importers Need to Know',
        category: 'Trade & Compliance',
        publishDate: '2026-04-21',
        lastUpdated: '2026-04-21',
        heroImage: { src: '/images/products/dehydrated/garlic-in-bag.jpg', alt: 'Indian food ingredient in export bulk bag — FTA duty benefits apply across UAE, Australia, Japan, and Korea' },
        author: 'Rajiv Dudeja',
        authorRole: 'Founder, Export Desi',
        readTime: '7 min read',
        excerpt: 'India has active FTAs with the UAE, Australia, Japan, and South Korea. A practical guide to how preferential duty rates work, what documentation is required, and how to verify current rates from official government sources.',
        tableOfContents: [
            { id: 'overview', label: 'Overview' },
            { id: 'active-ftas', label: 'Active FTAs' },
            { id: 'how-ftas-work', label: 'How It Works' },
            { id: 'fta-by-product', label: 'By Product' },
            { id: 'claiming-benefits', label: 'Checklist' },
            { id: 'faq', label: 'FAQ' },
        ],
        keyTakeaways: [
            'India has active CEPAs/ECTAs with the UAE (May 2022), Australia (Dec 2022), Japan (Aug 2011), and South Korea (Jan 2010)',
            'A Preferential Certificate of Origin from FIEO or an authorised Chamber of Commerce is required to claim reduced duty rates',
            'Rules of Origin must be met — for wholly-obtained agricultural products this is straightforward; processed food requires value-addition compliance',
            'Verify current rates via the India Trade Portal (indiantradeportal.in) — phased reductions change annually',
        ],
        cta: {
            heading: 'Want to Claim FTA Benefits on Your Next Shipment?',
            subtext: 'We can obtain a Preferential Certificate of Origin from FIEO for all FTA-destination shipments. Specify at order stage.',
            primaryCTA: { label: 'Get in Touch', href: '/contact' },
            secondaryCTA: { label: 'How We Work', href: '/how-we-work' },
        },
        Content: FTABlogContent,
    },
};

// ─── Main BlogPost component ────────────────────────────────────────────────────

export default function BlogPost() {
    const { slug } = useParams();
    const post = BLOG_POSTS[slug];
    const [activeSection, setActiveSection] = useState('');
    const contentRef = useRef(null);

    const { scrollYProgress } = useScroll({ target: contentRef });
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    useEffect(() => {
        if (!post) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-100px 0px -60% 0px' }
        );
        post.tableOfContents.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [post]);

    if (!post) {
        return (
            <div className="page-container section-pad text-center">
                <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
                <p className="text-muted mb-6">The article you&apos;re looking for doesn&apos;t exist or has been moved.</p>
                <Link to="/blog" className="text-brand font-semibold hover:underline">← Back to Blog</Link>
            </div>
        );
    }

    const blogSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishDate,
        dateModified: post.lastUpdated,
        author: { '@type': 'Person', name: post.author, jobTitle: post.authorRole },
        publisher: {
            '@type': 'Organization',
            name: 'Export Desi',
            logo: { '@type': 'ImageObject', url: 'https://exportdesi.com/ExportDesi-logo.png' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `https://exportdesi.com/blog/${slug}` },
    };

    const { Content } = post;

    return (
        <>
            <Helmet>
                <title>{post.title} | Export Desi</title>
                <meta name="description" content={post.excerpt} />
                <link rel="canonical" href={`https://exportdesi.com/blog/${slug}`} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:type" content="article" />
                <meta property="article:published_time" content={post.publishDate} />
                <meta property="article:author" content={post.author} />
                <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
            </Helmet>

            {/* Reading progress bar */}
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-brand origin-left z-50" style={{ scaleX }} />

            {/* Floating article navigator (xl screens) */}
            <ArticleSideNav slug={slug} allPosts={BLOG_POSTS} />

            {/* Article header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white border-b border-border"
            >
                <div className="page-container py-12 md:py-16">
                    <div className="flex items-center gap-3 mb-6">
                        <Link to="/blog" className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-brand transition-colors">
                            Blog
                        </Link>
                        <span className="text-muted">/</span>
                        <span className="text-xs font-semibold uppercase tracking-widest text-brand">{post.category}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-8 max-w-4xl leading-tight">{post.title}</h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white font-bold text-lg">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <div className="font-semibold text-brand">{post.author}</div>
                                <div className="text-xs text-muted">{post.authorRole}</div>
                            </div>
                        </div>
                        <div className="hidden md:block w-px h-8 bg-border" />
                        <div className="flex flex-wrap items-center gap-4 text-muted">
                            <span>
                                {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span>·</span>
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Hero Image */}
            {post.heroImage && (
                <div className="w-full bg-surface">
                    <div className="overflow-hidden" style={{ maxHeight: '440px' }}>
                        <img
                            src={post.heroImage.src}
                            alt={post.heroImage.alt}
                            className={`w-full h-56 md:h-[440px] ${post.heroImage.contain ? 'object-contain p-8' : 'object-cover'}`}
                            loading="eager"
                        />
                    </div>
                    {post.heroImage.credit && (
                        <p className="text-[10px] text-right text-muted/50 px-4 py-1 border-b border-border">
                            Image: {post.heroImage.credit}
                        </p>
                    )}
                </div>
            )}

            {/* Sticky TOC (desktop) */}
            <div className="hidden lg:block bg-white border-b border-border sticky top-[81px] z-40">
                <div className="page-container py-4">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-widest text-muted">On this page</span>
                        <nav className="flex items-center gap-1">
                            {post.tableOfContents.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className={`text-xs px-3 py-2 rounded-md transition-colors ${
                                        activeSection === item.id ? 'bg-brand text-white' : 'text-muted hover:text-brand'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            {/* Key Takeaways */}
            <MotionSection variant="fadeUp" delay={100}>
                <div className="page-container pt-8">
                    <KeyTakeaways items={post.keyTakeaways} />
                </div>
            </MotionSection>

            {/* Article content */}
            <MotionSection variant="fadeUp" delay={200}>
                <article ref={contentRef} className="page-container section-pad max-w-4xl">
                    <Content />
                </article>
            </MotionSection>

            {/* Author bio */}
            <MotionSection variant="fadeUp" delay={400}>
                <div className="bg-surface border-y border-border">
                    <div className="page-container section-pad">
                        <div className="flex items-center gap-6 max-w-4xl">
                            <div className="w-20 h-20 rounded-full bg-brand flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <h3 className="font-bold text-brand mb-2 text-lg">About {post.author}</h3>
                                <p className="text-muted leading-relaxed mb-3">
                                    {post.authorRole}. Founder of Export Desi, helping international buyers source Indian
                                    food products with full compliance and quality assurance.
                                </p>
                                <Link to="/about" className="text-sm text-brand font-semibold hover:underline inline-flex items-center gap-1">
                                    Learn more
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </MotionSection>

            {/* More Articles */}
            <MotionSection variant="fadeUp" delay={450}>
                <div className="bg-white border-b border-border">
                    <div className="page-container section-pad">
                        <div className="flex items-center justify-between mb-8">
                            <p className="section-label">More Articles</p>
                            <Link to="/blog" className="text-sm font-semibold text-brand hover:underline inline-flex items-center gap-1">
                                All articles
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {Object.entries(BLOG_POSTS)
                                .filter(([s]) => s !== slug)
                                .sort(([, a], [, b]) => {
                                    if (a.category === post.category && b.category !== post.category) return -1;
                                    if (b.category === post.category && a.category !== post.category) return 1;
                                    return 0;
                                })
                                .slice(0, 3)
                                .map(([postSlug, relPost]) => (
                                    <Link key={postSlug} to={`/blog/${postSlug}`} className="block group h-full">
                                        <article className="flex flex-col h-full bg-surface rounded-lg border border-border p-6 hover:border-brand transition-colors">
                                            {relPost.heroImage && (
                                                <div className="w-full h-36 rounded-md overflow-hidden mb-4 bg-surface">
                                                    <img
                                                        src={relPost.heroImage.src}
                                                        alt={relPost.heroImage.alt}
                                                        className="w-full h-full object-cover"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            )}
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="text-xs font-semibold uppercase tracking-widest text-brand">
                                                    {relPost.category}
                                                </span>
                                                <span className="text-xs text-muted">·</span>
                                                <span className="text-xs text-muted">{relPost.readTime}</span>
                                            </div>
                                            <h3 className="text-base font-bold mb-3 group-hover:text-brand transition-colors leading-snug flex-grow">
                                                {relPost.title}
                                            </h3>
                                            <div className="flex items-center gap-1 pt-4 border-t border-border text-xs font-semibold text-brand">
                                                Read article
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </MotionSection>

            {/* CTA */}
            <MotionSection variant="fadeUp" delay={500}>
                <div className="bg-brand text-white">
                    <div className="page-container section-pad text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">{post.cta.heading}</h2>
                        <p className="text-white/90 mb-8 max-w-xl mx-auto">{post.cta.subtext}</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to={post.cta.primaryCTA.href}
                                className="px-8 py-4 bg-white text-brand font-semibold rounded-lg hover:bg-white/90 transition-colors"
                            >
                                {post.cta.primaryCTA.label}
                            </Link>
                            <Link
                                to={post.cta.secondaryCTA.href}
                                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                            >
                                {post.cta.secondaryCTA.label}
                            </Link>
                        </div>
                    </div>
                </div>
            </MotionSection>
        </>
    );
}
