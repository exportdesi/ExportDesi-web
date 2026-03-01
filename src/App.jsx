import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import IndustriesPage from './pages/IndustriesPage';
import FoodIngredientsPage from './pages/FoodIngredientsPage';
import MakhanaPage from './pages/MakhanaPage';
import DehydratedPage from './pages/DehydratedPage';
import HowWeWorkPage from './pages/HowWeWorkPage';
import CompliancePage from './pages/CompliancePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ThankYouPage from './pages/ThankYouPage';

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="industries/food-ingredients" element={<FoodIngredientsPage />} />
        <Route path="industries/food-ingredients/makhana" element={<MakhanaPage />} />
        <Route path="industries/food-ingredients/dehydrated-ingredients" element={<DehydratedPage />} />
        <Route path="how-we-work" element={<HowWeWorkPage />} />
        <Route path="compliance" element={<CompliancePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="thank-you" element={<ThankYouPage />} />
        {/* Catch-all: redirect to home */}
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}