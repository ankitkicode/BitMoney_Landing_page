import React from 'react';

// This component assumes Tailwind CSS and Font Awesome are loaded globally.

const Features = () => {
    // Data for the features timeline
    const featuresData = [
        { 
            title: 'Lending', 
            description: 'Unique platform for lending and investment with a safety fund and cooperation with world-wide arbitration.', 
            imageUrl: '/images/time1.png' 
        },
        { 
            title: 'Exchange Money', 
            description: 'Exchange between all popular currencies with a couple of clicks. Instant send from one currency to another.', 
            imageUrl: '/images/time2.png' 
        },
        { 
            title: 'Investment', 
            description: 'Improved system of borrower\'s verification. Providing verification services for other services.', 
            imageUrl: '/images/time3.png' 
        },
        { 
            title: 'Online Wallet', 
            description: 'Keep your money, exchange your money, invest your money, pay services and make purchases.', 
            imageUrl: '/images/time4.png' 
        },
    ];

    return (
        <>
          
        
          <section className="py-20 bg-[var(--secondary-bg)] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Our Features</h2>

        <div className="relative">
          {/* Central vertical line for desktop view */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-white/10 -translate-x-1/2"></div>

          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              // Base classes for flex layout, stacks on mobile, row on desktop
              className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-28
                ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
              `}
            >
              {/* Text Content */}
              <div className={`md:w-1/2 md:px-10 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{feature.description}</p>
                <button className="px-6 py-2 rounded-full text-xs font-semibold btn-gradient transform hover:-translate-y-1 transition-transform duration-300">
                  READ MORE
                </button>
              </div>

              {/* Image Content */}
              <div className={`md:w-1/2 flex justify-center mt-8 md:mt-0 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                <img 
                  src={feature.imageUrl} 
                  alt={feature.title} 
                  className="rounded-lg shadow-lg max-w-[280px] sm:max-w-xs w-full"
                />
              </div>

              {/* Timeline dot (desktop only) */}
              <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[var(--accent-cyan)] border-4 border-[var(--secondary-bg)] shadow-[0_0_15px_rgba(0,238,255,0.5)] z-10"></div>

              {/* Horizontal connector line (desktop only) */}
              <div
                className={`hidden md:block absolute top-1/2 h-0.5 bg-white/10 w-1/2
                  ${index % 2 === 0 ? 'left-1/2' : 'right-1/2'}
                `}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
        </>
    );
};

export default Features;

