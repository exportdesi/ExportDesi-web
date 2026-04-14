import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import ContactPage from './pages/ContactPage';

// Lazy load all pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const FoodIngredientsPage = lazy(() => import('./pages/FoodIngredientsPage'));
const MakhanaPage = lazy(() => import('./pages/MakhanaPage'));
const DehydratedPage = lazy(() => import('./pages/DehydratedPage'));
const MoringaPage = lazy(() => import('./pages/MoringaPage'));
const BagsPage = lazy(() => import('./pages/BagsPage'));
const HowWeWorkPage = lazy(() => import('./pages/HowWeWorkPage'));
const CompliancePage = lazy(() => import('./pages/CompliancePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage'));
const CompanyProfilePage = lazy(() => import('./pages/CompanyProfilePage'));
const BlogIndex = lazy(() => import('./pages/BlogIndex'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-brand text-sm font-semibold">Loading...</div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="industries/food-ingredients" element={<FoodIngredientsPage />} />
          <Route path="industries/food-ingredients/makhana" element={<MakhanaPage />} />
          <Route path="industries/food-ingredients/dehydrated-ingredients" element={<DehydratedPage />} />
          <Route path="industries/food-ingredients/moringa" element={<MoringaPage />} />
          <Route path="industries/bags" element={<BagsPage />} />
          <Route path="how-we-work" element={<HowWeWorkPage />} />
          <Route path="compliance" element={<CompliancePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="thank-you" element={<ThankYouPage />} />
          <Route path="company-profile" element={<CompanyProfilePage />} />
          <Route path="profile" element={<CompanyProfilePage />} />
          <Route path="blog" element={<BlogIndex />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          {/* Catch-all: redirect to home */}
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}