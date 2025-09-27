import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BottomToTopWave from "./BottomToTopWave";

const TimerBox = ({ value, label }) => (
  <div className=" md:w-28 md:h-36 w-16 h-28 flex flex-col justify-center items-center bg-white/5 border-2 border-dashed border-white/20 rounded-xl backdrop-blur-sm">
    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-xs sm:text-sm md:text-base text-gray-400 tracking-wider mt-2">
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
    <div className="flex justify-center lg:justify-end items-center gap-2 flex-wrap">
      <TimerBox value={timeLeft.days} label="Days" />
      <TimerBox value={timeLeft.hours} label="Hours" />
      <TimerBox value={timeLeft.minutes} label="Minutes" />
      <TimerBox  value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

const HeroSlideContent = ({ title, social }) => (
  <div className="container bg-[var(--primary-bg)]] mx-auto px-8 md:px-20 pt-15 grid grid-cols-1 lg:grid-cols-2 items-center gap-2 sm:gap-12 h-full">
    <div className="text-center lg:text-left order-2 lg:order-1">
      {social && (
        <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-5 mb-6 pt-6">
          <a href="#" className="md:w-12 md:h-12 w-10 h-10   flex items-center justify-center rounded-full border-2 border-white/30 text-white/70 hover:bg-cyan-400 hover:text-white transition-all duration-300">
            <i className="fab fa-facebook-f text-lg"></i>
          </a>
          <a href="#" className="md:w-12 md:h-12 w-10 h-10  flex items-center justify-center rounded-full border-2 border-white/30 text-white/70 hover:bg-cyan-400 hover:text-white transition-all duration-300">
            <i className="fab fa-twitter text-lg"></i>
          </a>
          <a href="#" className="md:w-12 md:h-12 w-10 h-10  flex items-center justify-center rounded-full border-2 border-white/30 text-white/70 hover:bg-cyan-400 hover:text-white transition-all duration-300">
            <i className="fab fa-telegram-plane text-lg"></i>
          </a>
          <a href="#" className="md:w-12 md:h-12 w-10 h-10  flex items-center justify-center rounded-full border-2 border-white/30 text-white/70 hover:bg-cyan-400 hover:text-white transition-all duration-300">
            <i className="fab fa-bitcoin text-lg"></i>
          </a>
          <a href="#" className="md:w-12 md:h-12 w-10 h-10  flex items-center justify-center rounded-full border-2 border-white/30 text-white/70 hover:bg-cyan-400 hover:text-white transition-all duration-300">
            <i className="fas fa-envelope text-lg"></i>
          </a>
        </div>
      )}

      <h1
        className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-extrabold text-white leading-snug sm:leading-tight mb-6 sm:mb-8"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h1>

      <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
        <button className="px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-bold btn-gradient">
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
  const prevRefMobile = useRef(null);
  const nextRefMobile = useRef(null);
  const prevRefDesktop = useRef(null);
  const nextRefDesktop = useRef(null);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center py-16 sm:py-20 lg:py-28 z-10 md:overflow-hidden">
      <BottomToTopWave />

      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = [
            prevRefMobile.current,
            prevRefDesktop.current,
          ];
          swiper.params.navigation.nextEl = [
            nextRefMobile.current,
            nextRefDesktop.current,
          ];
          swiper.navigation.init();
          swiper.navigation.update();
        }}
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

        <div className="flex justify-center gap-6 mt-6 md:hidden">
          <button
            ref={prevRefMobile}
            className="bg-white/20 hover:bg-cyan-400 text-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            ‹
          </button>
          <button
            ref={nextRefMobile}
            className="bg-white/20 hover:bg-cyan-400 text-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            ›
          </button>
        </div>

        <div className="hidden md:block">
          <button
            ref={prevRefDesktop}
            className="absolute z-20 left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-cyan-400 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl"
          >
            ‹
          </button>
          <button
            ref={nextRefDesktop}
            className="absolute z-20 right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-cyan-400 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl"
          >
            ›
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;







