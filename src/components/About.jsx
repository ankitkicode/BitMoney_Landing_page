import React from 'react';
import SudDivider from './SudDivider';


const About = () => {
    return (
        <section className="pt-17 bg-[var(--primary-bg)] md:h-[70vh] h-fit  ">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">About The Project</h2>
                        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                            Bit Money is a lending and investment, multicurrency and multifunctional online platform based on blockchain technology. There investors and borrowers meet each other and have the opportunity to lend money on mutually beneficial.
                        </p>
                        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                            Bit Money is a unique service that allows individuals to access loans from the comfort of their home in fiat currencies or crypto-currencies.
                        </p>
                        <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                            Bit Money is a multi-functional platform which allows each participant to keep money in a multi-currency online wallet, buy and sell currency on the exchange, invest money, get a loan in a convenient currency.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="px-8 py-3 rounded-full text-sm font-bold btn-outline">WHITEPAPER</button>
                            <button className="px-8 py-3 rounded-full text-sm font-bold btn-gradient">BUY TOKENS NOW!</button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img 
                            src="./images/about.png" 
                            className="rounded-lg shadow-2xl max-w-full h-auto" 
                            alt="Illustration of people using a financial technology platform"
                        />
                    </div>
                </div>
            </div>
        <SudDivider />

        </section>
    );
};

export default About;

