import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TimerBox = ({ value, label }) => (
  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex flex-col justify-center items-center bg-white/5 border-2 border-dashed border-white/20 rounded-xl backdrop-blur-sm">
    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-[10px] sm:text-xs text-gray-400 tracking-wider mt-1">
      {label.toUpperCase()}
    </span>
  </div>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-31T23:59:59");

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center lg:justify-end items-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
      <TimerBox value={timeLeft.days} label="Days" />
      <TimerBox value={timeLeft.hours} label="Hours" />
      <TimerBox value={timeLeft.minutes} label="Minutes" />
      <TimerBox value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

// ----------------- Slide Content -----------------
const HeroSlideContent = ({ title, social }) => (
  <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 h-full">
    {/* Left */}
    <div className="text-center lg:text-left order-2 lg:order-1">
      {social && (
        <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 mb-6">
          <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:bg-cyan-400 hover:text-white transition-all duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:bg-cyan-400 hover:text-white transition-all duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:bg-cyan-400 hover:text-white transition-all duration-300">
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:bg-cyan-400 hover:text-white transition-all duration-300">
            <i className="fab fa-bitcoin"></i>
          </a>
          <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:bg-cyan-400 hover:text-white transition-all duration-300">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      )}

      <h1
        className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-extrabold text-white leading-snug sm:leading-tight mb-6 sm:mb-8"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h1>

      <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
        <button className="px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-bold btn-outline">
          WHITEPAPER
        </button>
        <button className="px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-bold btn-gradient">
          BUY TOKENS NOW!
        </button>
      </div>
    </div>

    <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
      <CountdownTimer />
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center dots-bg py-16 sm:py-20 lg:py-28">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        className="w-full h-full"
      >
        <SwiperSlide>
          <HeroSlideContent
            social={true}
            title="Bit Money - Lending &<br />Investment Platform"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlideContent
            social={true}
            title="Secure & Transparent<br />Crypto Investments"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlideContent
            social={true}
            title="Join The Future of<br />Decentralized Finance"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
