import React, { useState, useEffect, useRef } from 'react';
import { Users, CheckSquare, FileEdit, Landmark, Bell, Wallet } from "lucide-react";

const TimelineItem = ({ data, isLeft, isLast }) => {
  const { icon, num, title, description } = data;
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  const sideClass = isLeft ? 'md:flex-row-reverse' : 'md:flex-row';
  const animationClass = isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-10';

  return (
    <div
      ref={itemRef}
      className={`relative flex items-center w-full my-6 md:my-10 transition-all duration-700 ease-out ${animationClass} ${sideClass}`}
    >
      <div className={`w-full md:w-5/12 p-6 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl shadow-2xl`}>
         <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-[var(--accent-cyan)]">{num}</div>
            <h3 className="text-white font-bold text-xl">{title}</h3>
         </div>
        <p className="text-gray-400 mt-3 text-sm">{description}</p>
      </div>

       <div className={`w-full md:w-2/12 flex justify-center`}>
         <div className="relative z-10 bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center border-2 border-[var(--accent-cyan)] shadow-[0_0_20px_rgba(0,255,255,0.4)]">
           {icon}
         </div>
       </div>
       
       <div className="hidden md:block md:w-5/12"></div>
    </div>
  );
};


export default function LoanTimeline() {
  const timelineData = [
    { num: "01", title: "Registration", description: "Sign up and create your secure account on our platform in just a few minutes.", icon: <Users size={28} className="text-[var(--accent-cyan)]" /> },
    { num: "02", title: "Verification", description: "Complete our streamlined identity verification process to ensure security.", icon: <CheckSquare size={28} className="text-[var(--accent-cyan)]" /> },
    { num: "03", title: "Loan Application", description: "Fill out our simple application form with your desired loan details.", icon: <FileEdit size={28} className="text-[var(--accent-cyan)]" /> },
    { num: "04", title: "Financing", description: "Our system processes your application and secures financing for your loan.", icon: <Landmark size={28} className="text-[var(--accent-cyan)]" /> },
    { num: "05", title: "Activation", description: "Once approved and financed, your loan is activated and ready to be used.", icon: <Bell size={28} className="text-[var(--accent-cyan)]" /> },
    { num: "06", title: "Receiving Funds", description: "The funds are disbursed directly to your account, ready for you to use.", icon: <Wallet size={28} className="text-[var(--accent-cyan)]" /> },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0a0a1a] font-sans p-4 sm:p-8 flex flex-col items-center justify-center overflow-hidden">
        
        <div className="z-10 text-center mb-20">
            <h1 className="text-3xl font-bold text-white  ">
                Loan Application Steps
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Follow these simple steps to get your loan approved and funded quickly and securely.</p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto">
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 h-[calc(100%-2rem)] w-1 bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent"></div>

            <div className="flex flex-col items-center">
              {timelineData.map((item, index) => (
                <TimelineItem
                  key={index}
                  data={item}
                  isLeft={index % 2 === 0}
                  isLast={index === timelineData.length - 1}
                />
              ))}
            </div>
        </div>
    </div>
  );
}

