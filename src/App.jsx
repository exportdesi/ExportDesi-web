import { Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import ContactPage from './pages/ContactPage';

// Lazy load all pages for code splitting
import HomePage from './pages/HomePage';
import FoodIngredientsPage from './pages/FoodIngredientsPage';
import MakhanaPage from './pages/MakhanaPage';
import DehydratedPage from './pages/DehydratedPage';
import MoringaPage from './pages/MoringaPage';
import BagsPage from './pages/BagsPage';
import HowWeWorkPage from './pages/HowWeWorkPage';
import CompliancePage from './pages/CompliancePage';
import AboutPage from './pages/AboutPage';
import ThankYouPage from './pages/ThankYouPage';
import CompanyProfilePage from './pages/CompanyProfilePage';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import TurmericPage from './pages/TurmericPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import DisclaimerPage from './pages/DisclaimerPage';
import NotFoundPage from './pages/NotFoundPage';
import InfoPage from './pages/InfoPage';

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        
          {/* Industries Hierarchy (Nested) */}
          <Route path="industries">
            <Route index element={<FoodIngredientsPage />} />
            <Route path="food-ingredients">
              <Route index element={<FoodIngredientsPage />} />
              <Route path="makhana" element={<MakhanaPage />} />
              <Route path="dehydrated-ingredients" element={<DehydratedPage />} />
              <Route path="moringa" element={<MoringaPage />} />
              <Route path="turmeric" element={<TurmericPage />} />
            </Route>
            <Route path="bags" element={<BagsPage />} />
          </Route>
        <Route path="how-we-work" element={<HowWeWorkPage />} />
        <Route path="compliance" element={<CompliancePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="thank-you" element={<ThankYouPage />} />
        <Route path="company-profile" element={<CompanyProfilePage />} />
        <Route path="profile" element={<CompanyProfilePage />} />
        <Route path="blog" element={<BlogIndex />} />
        <Route path="blog/:slug" element={<BlogPost />} />

        {/* Legal Pages */}
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="disclaimer" element={<DisclaimerPage />} />

        {/* 404 Page */}
        <Route path="404" element={<NotFoundPage />} />

        {/* Info Page (Visiting Card QR Landing) */}
        <Route path="info" element={<InfoPage />} />

        {/* Legacy URL Redirects (SEO Preservation) */}
        <Route path="export-desi-sharing-the-best-of-india-with-the-world" element={<Navigate to="/about" replace />} />

        {/* Catch-all: 404 for unknown routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}