import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Analytics Component
 * Handles Google Analytics (GA4) and Microsoft Clarity.
 * Only activates if environment variables are provided.
 */
const Analytics = () => {
    const location = useLocation();

    // Environment Variables
    const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
    const CLARITY_ID = import.meta.env.VITE_CLARITY_PROJECT_ID;

    useEffect(() => {
        // 1. Load Google Analytics
        if (GA_ID && GA_ID !== 'G-XXXXXXX') {
            const script1 = document.createElement('script');
            script1.async = true;
            script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
            document.head.appendChild(script1);

            const script2 = document.createElement('script');
            script2.innerHTML = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                });
            `;
            document.head.appendChild(script2);
        }

        // 2. Load Microsoft Clarity
        if (CLARITY_ID && CLARITY_ID !== 'CLARITY_ID') {
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", CLARITY_ID);
        }
    }, [GA_ID, CLARITY_ID]);

    // Track page views on route change
    useEffect(() => {
        if (GA_ID && window.gtag) {
            window.gtag('config', GA_ID, {
                page_path: location.pathname + location.search,
            });
        }
    }, [location, GA_ID]);

    return null; // This component doesn't render anything
};

export default Analytics;
