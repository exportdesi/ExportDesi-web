/**
 * TwoColumnSection — a left content column + right highlight/callout box.
 * Props:
 *   leftContent   ReactNode — full left column slot
 *   rightContent  ReactNode — full right column slot (rendered in a styled box)
 *   reverseOnMobile boolean — default false
 *   background   'white' | 'surface' — default 'white'
 */
export default function TwoColumnSection({
    leftContent,
    rightContent,
    reverseOnMobile = false,
    background = 'white',
}) {
    const bg = background === 'surface' ? 'bg-surface' : 'bg-white';
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
                        <div className="border border-border bg-surface p-8">
                            {rightContent}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
