import React from 'react';

// This component assumes Tailwind CSS is loaded globally.

const Advantages = () => {
    // Data for the advantages cards, now using image paths for icons
    const advantagesData = [
        { iconUrl: '/icons/icon1.png', title: 'Blockchain Technology' },
        { iconUrl: '/icons/icon2.png', title: 'Advanced Security System' },
        { iconUrl: '/icons/icon3.png', title: 'Multicurrency Coins' },
        { iconUrl: '/icons/icon4.png', title: 'Internal Exchange' },
        { iconUrl: '/icons/icon5.png', title: 'Safety Fund' },
        { iconUrl: '/icons/icon6.png', title: 'Cooperation With Arbitration' },
    ];

    // Note: I have used placeholder images. You should replace the `iconUrl` values 
    // with your actual paths, e.g., '/icons/blockchain.png', '/icons/security.png', etc.

    return (
        <section className="py-20 bg-[var(--primary-bg)]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-white text-center mb-16">Advantage of the Project</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantagesData.map((adv, index) => (
                        <div key={index} className="p-8 text-center card-bg transform hover:-translate-y-2 transition-transform duration-300">
                            {/* The subtle glow effect at the top of the card */}
                            <div className="card-glow"></div>
                            
                            {/* Icon container */}
                            <div className="mb-6 flex justify-center items-center h-20">
                                <img src={adv.iconUrl} alt={`${adv.title} icon`} className="h-16 w-16" />
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-3xl font-semibold text-white">{adv.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantages;

