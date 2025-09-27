import React from 'react';
import WalletCard from './WalletCard';
import SudDivider from './SudDivider';

const Stats = () => {
  const cardData = [
    {
      name: 'Bitcoin',
      value: '4.160651',
      symbol: 'BTC',
       imageSrc: '/icons/bit.png',

      gradientFrom: 'from-yellow-500',
      gradientTo: 'to-orange-500',
    },
    {
      name: 'Ethereum',
      value: '3.245000',
      symbol: 'ETH',
     
      imageSrc: '/icons/eth.png',
    
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-indigo-500',
    },
    {
      name: 'USD',
      value: '58634.00',
      symbol: 'USD',
      imageSrc: '/icons/dller.png',
      gradientFrom: 'from-green-400',
      gradientTo: 'to-teal-500',
    },
    {
      name: 'Total USD',
      value: '346636.775',
      symbol: 'USD',
    //   icon: (
    //     <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    //       <circle cx="20" cy="20" r="20" fill="none" stroke="#F7931A" strokeWidth="2" />
    //       <circle cx="20" cy="20" r="16" fill="#F7931A" />
    //       <path
    //         d="M25.32 25.03c.53-.54.84-1.35.79-2.16v-9.4c0-.85-.3-1.66-.84-2.2-.53-.53-1.32-.82-2.12-.82h-6.9l-.32-2.9h9.7v-3.06h-10.6l-.57 5.17h6.75l.32 2.9h-7.06l-.57 5.17h7.7c.8 0 1.58-.3 2.12-.84z"
    //         fill="white"
    //       />
    //     </svg>
    //   ),
      imageSrc: '/icons/usdt.png',

      gradientFrom: 'from-purple-500',
      gradientTo: 'to-pink-500',
    },
     {
      name: 'Token Sale',
      value: '346636.775',
      symbol: '',
        imageSrc: '/icons/token.png',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-pink-500',
    },
    
  ];

  return (
   <section className="py-16 bg-[var(--primary-bg)] -mt-1 relative">
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {cardData.map((card, index) => (
            <WalletCard
              key={index}
              name={card.name}
              value={card.value}
              symbol={card.symbol}
              icon={card.icon}
              imageSrc={card.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
