import { useState } from 'react';

/**
 * ContentAccordion — reusable accordion for content sections.
 * Renders content inside collapsible panel with custom header.
 */
export default function ContentAccordion({ title, subtitle, children, defaultOpen = false, icon }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="bg-white border border-border rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center gap-4 px-6 py-5 text-left hover:bg-surface/50 transition-colors"
                aria-expanded={isOpen}
            >
                <div className="flex items-center gap-3">
                    {icon && <span className="text-brand">{icon}</span>}
                    <div>
                        <h3 className="font-semibold text-brand text-sm">{title}</h3>
                        {subtitle && <p className="text-muted text-xs mt-0.5">{subtitle}</p>}
                    </div>
                </div>
                <span className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                aria-hidden={!isOpen}
            >
                <div className="px-6 py-6 border-t border-border space-y-6">
                    {children}
                </div>
            </div>
        </div>
    );
}
