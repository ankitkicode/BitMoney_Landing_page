import React from 'react';

// This component assumes Tailwind CSS and Font Awesome are loaded globally.

const Stats = () => {
    // Data for the statistics cards
    const statsData = [
        { icon: 'fab fa-bitcoin', title: 'Bitcoin', value: '4.160651 BTC' },
        { icon: 'fab fa-ethereum', title: 'Ethereum', value: '3.245000 ETH' },
        { icon: 'fas fa-dollar-sign', title: 'Dollar (USD)', value: '58634.000 USD' },
        { icon: 'fas fa-wallet', title: 'Total USD', value: '111969.062 USD' },
        { icon: 'fas fa-tags', title: 'Token Sale', value: '346636.775' },
    ];
    
    return (
        <section className="py-16 bg-[var(--primary-bg)] -mt-1 relative">
            <div className="container mx-auto px-4">
                {/* Grid layout for the cards, responsive for different screen sizes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {statsData.map((stat, index) => (
                        <div 
                            key={index} 
                            className="p-6 card-bg flex flex-col justify-start transform hover:-translate-y-2 transition-transform duration-300"
                        >
                            {/* Glow line at top */}
                            <div className="card-glow"></div>
                             
                            {/* Top section: Icon + Title */}
                            <div className="flex items-center mb-6">
                                <div className="w-11 h-11 rounded-full bg-[var(--accent-cyan)]/10 flex-shrink-0 flex items-center justify-center mr-4">
                                    <i className={`${stat.icon} text-xl text-[var(--accent-cyan)]`}></i>
                                </div>
                                <h3 className="text-base font-bold text-white/90">{stat.title}</h3>
                            </div>

                            {/* Bottom section: Value Button */}
                            <div className="w-full text-center cursor-pointer ">
                                <button 
                                    className="text-sm font-bold text-white px-4 py-3 rounded-full btn-gradient inline-block w-full
                                    transform transition duration-300 ease-in-out
                                    hover:scale-110 hover:shadow-[0_0_20px_rgba(0,238,255,0.7)]"
                                >
                                    {stat.value}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
