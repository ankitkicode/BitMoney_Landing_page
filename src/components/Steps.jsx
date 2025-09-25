import React from 'react';

// This component assumes Tailwind CSS and Font Awesome are loaded globally.

const Steps = () => {
    // Data for the timeline steps
    const stepsData = [
        { icon: 'fas fa-user-plus', title: 'Registration On The Platform', description: 'Nam in lectus eget nisl aliquam ultrices. Aliquam at efficitur nulla. Cras sodales eu nibh vel scelerisque.' },
        { icon: 'fas fa-check-circle', title: 'Passing Verification', description: 'Nam in lectus eget nisl aliquam ultrices. Aliquam at efficitur nulla. Cras sodales eu nibh vel scelerisque.' },
        { icon: 'fas fa-edit', title: 'Creating An Application For a Loan', description: 'Nam in lectus eget nisl aliquam ultrices. Aliquam at efficitur nulla. Cras sodales eu nibh vel scelerisque.' },
        { icon: 'fas fa-university', title: 'Financing a Loan', description: 'Nam in lectus eget nisl aliquam ultrices. Aliquam at efficitur nulla. Cras sodales eu nibh vel scelerisque.' },
        { icon: 'fas fa-bell', title: 'Activating a Loan', description: 'Nam in lectus eget nisl aliquam ultrices. Aliquam at efficitur nulla. Cras sodales eu nibh vel scelerisque.' },
        { icon: 'fas fa-paw', title: 'Receiving Funds', description: 'Nam in lectus eget nisl aliquam ultrices. Aliquam at efficitur nulla. Cras sodales eu nibh vel scelerisque.' },
    ];

    return (
        <section className="py-20 bg-[var(--secondary-bg)] overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="flex justify-between items-center mb-20 md:mb-28">
                     <h2 className="text-3xl md:text-4xl font-bold text-white">Few Steps For a Loan</h2>
                     <div className="hidden md:flex flex-col items-center cursor-pointer group">
                        <span className="text-xs text-[var(--text-secondary)] tracking-widest group-hover:text-white transition-colors">SCROLL DOWN</span>
                        <div className="w-8 h-8 rounded-full border border-white/20 mt-2 flex items-center justify-center group-hover:border-white transition-colors">
                            <i className="fas fa-arrow-down text-white/40 group-hover:text-white transition-colors"></i>
                        </div>
                     </div>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* The vertical line for mobile view */}
                    <div className="md:hidden absolute w-0.5 h-full bg-white/10 left-6 top-0"></div>

                    {stepsData.map((step, index) => (
                        <div key={index} className={`relative flex items-start md:items-center mb-16 md:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            
                            {/* Content Block */}
                            <div className={`w-full md:w-1/2 pl-16 md:px-8 ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <p className="text-lg font-bold text-[var(--accent-cyan)] mb-2">
                                    0{index + 1}. {step.title}
                                </p>
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Icon - positioned in the center for desktop */}
                            <div className="absolute md:relative left-0 md:left-auto flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                    <i className={`${step.icon} text-[var(--accent-cyan)] text-xl`}></i>
                                </div>
                            </div>
                            
                            {/* Empty div for spacing on desktop */}
                            <div className="hidden md:block w-1/2 px-8"></div>
                            
                            {/* Connector Line SVG */}
                            {index !== stepsData.length - 1 && (
                                <div className={`hidden md:block absolute top-1/2 w-1/2 h-32 ${index % 2 === 0 ? 'left-1/2' : 'right-1/2 -scale-x-100'}`}>
                                     <svg width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1C55.2386 1 100 45.7614 100 101V119" stroke="url(#line-gradient)" strokeOpacity="0.5" strokeWidth="2"/>
                                        <defs>
                                            <linearGradient id={`line-gradient`}>
                                                <stop offset="0%" stopColor="rgba(0, 229, 255, 0.8)" />
                                                <stop offset="100%" stopColor="rgba(0, 229, 255, 0)" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Steps;

