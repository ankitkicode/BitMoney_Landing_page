import React from 'react';
import ImageCard from './ImageCard'; 

const Advantages = () => {
  const advantagesData = [
    { imageSrc: '/icons/icon1.png', title: 'Blockchain Technology' },
    { imageSrc: '/icons/icon2.png', title: 'Advanced Security System' },
    { imageSrc: '/icons/icon3.png', title: 'Multicurrency Coins' },
    { imageSrc: '/icons/icon4.png', title: 'Internal Exchange' },
    { imageSrc: '/icons/icon5.png', title: 'Safety Fund' },
    { imageSrc: '/icons/icon6.png', title: 'Cooperation With Arbitration' },
  ];

  return (
    <section className="py-20 bg-[var(--primary-bg)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Advantage of the Project
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantagesData.map((adv, index) => (
            <ImageCard key={index} imageSrc={adv.imageSrc} title={adv.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
