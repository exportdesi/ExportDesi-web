import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

/**
 * RootLayout — wraps every page with Navigation and Footer.
 * React Router renders the matched page into <Outlet />.
 */
export default function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-brand antialiased">
            <Navigation />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
