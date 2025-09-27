import React from 'react';


const Tokens = () => {
  const bonusData = [
    { time: '1 day', bonus: '35%' },
    { time: '2 - 4 Days', bonus: '20%' },
    { time: '5 - 13 Days', bonus: '10%' },
    { time: '14 - 31 Day', bonus: '0%' },
  ];

  return (
    <section className="py-24 bg-[var(--secondary-bg)]">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className='text-center text-4xl mb-10 font-bold '>Rounds of Sale of Tokens
</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          <div className="bg-[var(--primary-bg)] p-8 rounded-2xl border border-[var(--border-color)] flex flex-col items-center text-center shadow-lg">
            <div className="px-6 py-2 bg-[var(--accent-blue)] text-white font-bold rounded-lg mb-6">
              PRE-SALE
            </div>
            <p className="text-[var(--text-secondary)] text-sm mb-1">Target - to Raise USD 500,000</p>
            <div className="bg-white/5 w-full text-center py-3 px-6 rounded-lg border border-[var(--border-color)] mb-8">
              <span className="font-bold text-white text-lg">Price 1 BIT - $0.25</span>
            </div>
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-cyan)]/10 flex flex-col items-center justify-center border-2 border-[var(--border-color)] mb-4">
              <span className="text-5xl font-bold text-[var(--accent-cyan)]">20%</span>
              <span className="text-[var(--text-secondary)] text-sm">Special Bonus</span>
            </div>
          </div>

          <div className="bg-[var(--primary-bg)] p-8 rounded-2xl border border-[var(--border-color)] flex flex-col items-center text-center shadow-lg">
            <div className="px-12 py-2 bg-white/10 text-white font-bold rounded-lg mb-6 border border-[var(--border-color)]">
              ICO
            </div>
            <p className="text-[var(--text-secondary)] text-sm mb-1">Target - to Raise USD 20,000,000</p>
            <div className="btn-gradient w-full text-center py-3 px-6 rounded-lg shadow-[0_0_20px_rgba(0,229,255,0.4)] mb-8">
              <span className="font-bold text-black text-lg">Price 1 BIT - $1.00</span>
            </div>
            
            <h4 className="font-bold text-white mb-4">Bonus for ICO:</h4>
            <div className="w-full space-y-2">
              {bonusData.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm bg-white/5 px-4 py-2 rounded-md">
                  <span className="text-[var(--text-secondary)]">Time</span>
                  <span className="text-white font-semibold">{item.time}</span>
                  <span className="text-[var(--text-secondary)]">Bonus</span>
                  <span className="text-[var(--accent-cyan)] font-bold">{item.bonus}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
            <p className="text-[var(--text-secondary)] leading-relaxed">
                The sale of tokens It is a long established fact that a reader will be distracted by the <a href="#" className="text-[var(--accent-cyan)] hover:underline">readable content of a page</a> when looking at its layout. There are many variations of passages of Lorem Ipsum available. There are many variations of passages.
            </p>
        </div>

      </div>
    </section>
  );
};

export default Tokens;
