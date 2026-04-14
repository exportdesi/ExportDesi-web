import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
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

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        
        {/* Industries Hierarchy */}
        <Route path="industries">
          <Route path="food-ingredients">
            <Route index element={<FoodIngredientsPage />} />
            <Route path="makhana" element={<MakhanaPage />} />
            <Route path="dehydrated-ingredients" element={<DehydratedPage />} />
            <Route path="moringa" element={<MoringaPage />} />
            <Route path="turmeric" element={<TurmericPage />} />
          </Route>
          <Route path="bags" element={<BagsPage />} />
        </Route>
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
  );
}