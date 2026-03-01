/**
 * TwoColumnSection — left content column + right highlight callout.
 * Defaults to 'surface' background so structural text sections
 * contrast against adjacent white table/data sections.
 */
export default function TwoColumnSection({
    leftContent,
    rightContent,
    reverseOnMobile = false,
    background = 'surface',
}) {
    const bg = background === 'white' ? 'bg-white' : 'bg-surface';
    const order = reverseOnMobile ? 'flex-col-reverse md:flex-row' : 'flex-col md:flex-row';

    return (
        <section className={`${bg} border-b border-border`}>
            <div className="page-container section-pad">
                <div className={`flex ${order} gap-12 lg:gap-20 items-start`}>
                    {/* Left Column */}
                    <div className="flex-1 min-w-0">
                        {leftContent}
                    </div>

                    {/* Right Highlight Box */}
                    <div className="flex-shrink-0 w-full md:w-[340px] lg:w-[380px]">
                        <div className="border border-border bg-white p-8">
                            {rightContent}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
