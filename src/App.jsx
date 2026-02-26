import React, { useState } from 'react';

// Main App Component
export default function App() {
  return (
    <div className="bg-white text-[#0a0a0a] antialiased font-sans">
      <Navigation />
      <main>
        <HeroSection />
        <PivotSection />
        <ProductsSection />
        <DifferentiatorsSection />
        <VendorSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

// --- Components ---

function Navigation() {
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo placeholder - replace src with actual logo path in your project */}
            <img
              className="h-16 w-auto"
              src="/ExportDesi-logo-removebg.jpg"
              alt="Export Desi Logo"
              onError={(e) => {
                e.target.src = 'https://placehold.co/150x60/0a0a0a/FFF?text=EXPORT+DESI'
              }}
            />
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#makhana" className="text-sm font-medium text-gray-900 hover:text-gray-500">Makhana</a>
            <a href="#dehydrated" className="text-sm font-medium text-gray-900 hover:text-gray-500">Dehydrated Ingredients</a>
            <a href="#process" className="text-sm font-medium text-gray-900 hover:text-gray-500">Our Process</a>
            <button className="bg-[#0a0a0a] text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-800 transition">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
          Direct Sourcing for Indian Makhana and Dehydrated Ingredients.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          We connect global buyers with verified processors. No opaque trading chains. Complete transparency from the processing floor to the port.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[#0a0a0a] text-white text-center px-8 py-4 font-medium hover:bg-gray-800 transition">
            Request Specs & Pricing
          </button>
          <a href="#process" className="border border-gray-300 text-[#0a0a0a] text-center px-8 py-4 font-medium hover:bg-gray-50 transition flex items-center justify-center">
            See Our Process
          </a>
        </div>
      </div>
    </div>
  );
}

function PivotSection() {
  return (
    <div className="bg-[#f4f4f5] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">We don’t manufacture. We verify, secure, and ship.</h2>
          <p className="text-lg text-gray-700 mb-6">
            Most export websites pretend to own 10 different factories. We don't.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Export Desi is a specialized sourcing partner. We act as your ground team in India. We identify reliable processors, verify their quality standards, manage the export documentation, and handle the logistics.
          </p>
          <p className="text-lg text-gray-700">
            You get direct-from-processor pricing, without the headache of chasing five different vendors across time zones. We manage the ground reality. You get a clean shipment.
          </p>
        </div>
      </div>
    </div>
  );
}

function ProductsSection() {
  return (
    <div className="py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16">Current Sourcing Focus</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Product 1 */}
          <div id="makhana">
            <div className="bg-gray-200 aspect-video mb-6 flex items-center justify-center text-gray-500 text-sm overflow-hidden">
              {/* Replace with actual image tag later */}
              <span className="bg-gray-300 w-full h-full flex items-center justify-center">[Real Photo: Makhana in Bulk Bags]</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Makhana (Fox Nuts)</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><span className="mr-2 text-black font-bold">→</span> Sourced directly from processing clusters in Bihar.</li>
              <li className="flex items-start"><span className="mr-2 text-black font-bold">→</span> Available in multiple size grades (12mm to 20mm+).</li>
              <li className="flex items-start"><span className="mr-2 text-black font-bold">→</span> Moisture-controlled bulk packaging (5kg, 10kg, 20kg).</li>
              <li className="flex items-start"><span className="mr-2 text-black font-bold">→</span> Ready for retail repacking, roasting, or seasoning.</li>
            </ul>
          </div>

          {/* Product 2 */}
          <div id="dehydrated">
            <div className="bg-gray-200 aspect-video mb-6 flex items-center justify-center text-gray-500 text-sm overflow-hidden">
              {/* Replace with actual image tag later */}
              <span className="bg-gray-300 w-full h-full flex items-center justify-center">[Real Photo: Dehydrated Onion Flakes]</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Dehydrated & Dried Ingredients</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><span className="mr-2 text-black font-bold">→</span> Dehydrated Onion & Garlic (Flakes, Minced, Powder).</li>
              <li className="flex items-start"><span className="mr-2 text-black font-bold">→</span> Banana Powder.</li>
              <li className="flex items-start"><span className="mr-2 text-black font-bold">→</span> Moringa Powder.</li>
              <li className="flex items-start font-medium mt-4"><span className="mr-2 text-black font-bold">→</span> Looking for something specific? Ask us. If we can't source it reliably, we will tell you upfront.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function DifferentiatorsSection() {
  return (
    <div id="process" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 max-w-2xl">Sourcing is easy. Consistency is hard.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-xl font-bold mb-3">1. Ground-Level Access</h4>
            <p className="text-gray-600">We work directly with processors in the producing regions. You skip the layers of trading chains that inflate prices and dilute accountability.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-3">2. Pre-Dispatch Verification</h4>
            <p className="text-gray-600">We don't cross our fingers and hope the factory loaded the right boxes. We provide batch photos, documentation checks, and pre-dispatch confirmation. No surprises when the container opens.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-3">3. Realistic Trial Orders</h4>
            <p className="text-gray-600">Testing a new SKU or a new market? We offer flexible Minimum Order Quantities (MOQs) so you can prove the concept before committing to massive volumes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VendorSection() {
  return (
    <div className="bg-[#0a0a0a] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Focus on processing. We’ll handle the export.</h2>
        <p className="text-lg text-gray-400 mb-10">
          We partner with serious Indian processors who want global reach but don't want the overhead of building an in-house export team. If you have consistent capacity and clean compliance, we bring the buyers.
        </p>
        <button className="inline-block bg-white text-[#0a0a0a] px-8 py-4 font-medium hover:bg-gray-200 transition">
          Become a Vendor Partner
        </button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            className="h-12 w-auto mb-6 grayscale opacity-80"
            src="/ExportDesi-logo-removebg.jpg"
            alt="Export Desi Logo"
            onError={(e) => { e.target.src = 'https://placehold.co/120x40/0a0a0a/FFF?text=EXPORT+DESI' }}
          />
          <p className="text-gray-600 max-w-sm mb-6">
            A specialized sourcing partner connecting global buyers with verified Indian processors.
          </p>
          <div className="flex space-x-4">
            <span className="text-sm font-semibold text-gray-500">FSSAI Certified</span>
            <span className="text-sm font-semibold text-gray-500">Spice Board India</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Gurgaon, Haryana, India</li>
              <li>contact@exportdesi.com</li>
              <li>+91 928 979 0283</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">The Team</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Hemant – Sourcing</li>
              <li>Nishant – Risk & Ops</li>
              <li>Sahil – Business Dev</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-200 text-sm text-gray-400">
        © {new Date().getFullYear()} Export Desi. All Rights Reserved.
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  const message = encodeURIComponent("Hi Export Desi team, I need specs and pricing information.");
  const url = `https://wa.me/919289790283?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#1ebe57] transition hover:-translate-y-1 z-50 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.066.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z" fillRule="evenodd" clipRule="evenodd" />
        <path d="M12.031 2c5.466 0 9.886 4.42 9.886 9.886 0 5.466-4.42 9.886-9.886 9.886-1.742 0-3.374-.45-4.786-1.241l-5.245 1.378 1.402-5.114c-.859-1.455-1.353-3.185-1.353-5.009 0-5.466 4.42-9.886 9.886-9.886zm0 1.831c-4.444 0-8.055 3.611-8.055 8.055 0 1.456.388 2.822 1.066 4l-.657 2.396 2.457-.645c1.137.604 2.441.942 3.82.942 4.444 0 8.055-3.611 8.055-8.055 0-4.444-3.611-8.055-8.055-8.055z" fillRule="evenodd" clipRule="evenodd" />
      </svg>
    </a>
  );
}