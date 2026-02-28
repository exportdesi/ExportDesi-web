import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import ScrollToTop from '../components/ScrollToTop';

/**
 * RootLayout — wraps every page with Navigation, Breadcrumb, and Footer.
 * React Router renders the matched page into <Outlet />.
 */
export default function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-brand antialiased">
            <ScrollToTop />
            <Navigation />
            <Breadcrumb />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
