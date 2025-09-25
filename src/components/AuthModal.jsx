import React, { useState, useEffect } from 'react';

// Yah component maanta hai ki Tailwind CSS aur Font Awesome global roop se load kiye gaye hain.

// Input field ke liye ek reusable component
const FormInput = ({ id, type, placeholder, icon }) => (
    <div className="relative mb-4">
        <i className={`fas ${icon} absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]`}></i>
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className="w-full bg-white/5 border border-[var(--border-color)] rounded-lg py-3 pr-4 pl-10 text-white placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-cyan)] transition-all"
        />
    </div>
);

// Login/Register Modal component
const AuthModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('login');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md" onClick={onClose}>
            <div className="bg-[var(--secondary-bg)] rounded-2xl border border-[var(--border-color)] shadow-2xl w-full max-w-md m-4" onClick={e => e.stopPropagation()}>
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-white transition-colors">
                    <i className="fas fa-times text-xl"></i>
                </button>

                {/* Tabs */}
                <div className="flex border-b border-[var(--border-color)]">
                    <button 
                        onClick={() => setActiveTab('login')}
                        className={`w-1/2 py-4 font-bold transition-all ${activeTab === 'login' ? 'text-[var(--accent-cyan)] border-b-2 border-[var(--accent-cyan)]' : 'text-[var(--text-secondary)]'}`}
                    >
                        LOGIN
                    </button>
                    <button 
                        onClick={() => setActiveTab('register')}
                        className={`w-1/2 py-4 font-bold transition-all ${activeTab === 'register' ? 'text-[var(--accent-cyan)] border-b-2 border-[var(--accent-cyan)]' : 'text-[var(--text-secondary)]'}`}
                    >
                        REGISTER
                    </button>
                </div>

                {/* Form Content */}
                <div className="p-8">
                    {activeTab === 'login' ? (
                        <form>
                            <FormInput id="login-email" type="email" placeholder="Email Address" icon="fa-envelope" />
                            <FormInput id="login-password" type="password" placeholder="Password" icon="fa-lock" />
                            <button type="submit" className="w-full mt-4 btn-gradient py-3 rounded-lg font-bold">LOGIN</button>
                        </form>
                    ) : (
                        <form>
                            <FormInput id="reg-name" type="text" placeholder="Name" icon="fa-user" />
                            <FormInput id="reg-email" type="email" placeholder="Email Address" icon="fa-envelope" />
                            <FormInput id="reg-password" type="password" placeholder="Password" icon="fa-lock" />
                            <FormInput id="reg-referral" type="text" placeholder="Referral Code" icon="fa-gift" />
                            <FormInput id="reg-wallet" type="text" placeholder="Wallet Address" icon="fa-wallet" />
                            <button type="submit" className="w-full mt-4 btn-gradient py-3 rounded-lg font-bold">REGISTER</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthModal;