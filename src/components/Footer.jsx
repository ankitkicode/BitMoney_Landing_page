import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-[var(--primary-bg)] border-t border-white/10 pt-20 pb-8">
            <div className="container mx-auto px-6 md:px-12 text-center">
                
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold text-white mb-8">Subscribe to us!</h2>

                    <div className="flex justify-center space-x-4 mb-8">
                        <a href="#" className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-blue)]/80 to-[var(--accent-cyan)]/80 text-white text-2xl transform hover:-translate-y-1 transition-transform duration-300 shadow-lg hover:shadow-[0_0_20px_var(--accent-cyan)]"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-blue)]/80 to-[var(--accent-cyan)]/80 text-white text-2xl transform hover:-translate-y-1 transition-transform duration-300 shadow-lg hover:shadow-[0_0_20px_var(--accent-cyan)]"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-blue)]/80 to-[var(--accent-cyan)]/80 text-white text-2xl transform hover:-translate-y-1 transition-transform duration-300 shadow-lg hover:shadow-[0_0_20px_var(--accent-cyan)]"><i className="fab fa-telegram-plane"></i></a>
                        <a href="#" className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-blue)]/80 to-[var(--accent-cyan)]/80 text-white text-2xl transform hover:-translate-y-1 transition-transform duration-300 shadow-lg hover:shadow-[0_0_20px_var(--accent-cyan)]"><i className="fab fa-bitcoin"></i></a>
                        <a href="#" className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-blue)]/80 to-[var(--accent-cyan)]/80 text-white text-2xl transform hover:-translate-y-1 transition-transform duration-300 shadow-lg hover:shadow-[0_0_20px_var(--accent-cyan)]"><i className="fas fa-envelope"></i></a>
                    </div>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input 
                            type="email" 
                            placeholder="Enter Your Email Address" 
                            className="flex-grow w-full bg-[var(--secondary-bg)] border border-[var(--border-color)] rounded-full px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent-cyan)] transition-all" 
                        />
                        <button type="submit" className="btn-gradient px-8 py-3 rounded-full font-bold text-sm">
                            SUBSCRIBE
                        </button>
                    </form>
                </div>
                
                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-[var(--text-secondary)]">
                    <p className="mb-4 md:mb-0">&copy; 2022-2023 BIT MONEY | ALL RIGHTS RESERVED. DESIGN BY <a href="#" className="text-[var(--accent-cyan)] hover:underline">WEBSTROT</a></p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-[var(--accent-cyan)] transition-colors">WHITEPAPER</a>
                        <a href="#" className="hover:text-[var(--accent-cyan)] transition-colors">TERMS OF SERVICE</a>
                        <a href="#" className="hover:text-[var(--accent-cyan)] transition-colors">PRIVACY POLICY</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

