import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const NewsCard = ({ article }) => (
  <div className="bg-[var(--primary-bg)] rounded-2xl border border-[var(--border-color)] shadow-lg h-full flex flex-col overflow-hidden group">
    <div className="overflow-hidden">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="text-[var(--text-secondary)] text-xs mb-3 flex items-center">
        <span className="mr-2 text-[var(--accent-cyan)]">📅</span>
        <span>{article.date}</span>
      </div>

      <h3 className="text-lg font-bold text-white mb-3 flex-grow">
        {article.title}
      </h3>

      <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
        {article.description}
      </p>

      <a
        href="#"
        className="text-[var(--accent-cyan)] text-sm font-semibold inline-flex items-center group-hover:text-white transition-colors"
      >
        READ MORE →
      </a>
    </div>
  </div>
);

const News = () => {
  const newsData = [
    {
      date: "January 29, 2022",
      title: "Report about the team's trip to the road show",
      imageUrl: "images/news1.jpg",
      description:
        "Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop's ern of Lorem Ipsum Proin gravida.",
    },
    {
      date: "January 29, 2022",
      title: "Report about the team's trip to the road show",
      imageUrl: "/images/news2.jpg",
      description:
        "Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop's ern of Lorem Ipsum Proin gravida.",
    },
    {
      date: "January 29, 2022",
      title: "Report about the team's trip to the road show",
      imageUrl: "/images/news3.jpg",
      description:
        "Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop's ern of Lorem Ipsum Proin gravida.",
    },
    {
      date: "February 05, 2022",
      title: "New partnerships announced for Q2 expansion",
      imageUrl: "/images/news1.jpg",
      description:
        "Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop's ern of Lorem Ipsum Proin gravida.",
    },
  ];

  return (
    <section className="py-24 bg-[var(--secondary-bg)] relative">
      <div className="container mx-auto px-6 md-px-12">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Latest News
        </h2>

        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: ".news-prev",
            nextEl: ".news-next",
          }}
        >
          {newsData.map((article, index) => (
            <SwiperSlide key={index} style={{ height: "auto" }}>
              <NewsCard article={article} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-6 mt-6 md:hidden">
          <button className="news-prev bg-white/20 hover:bg-cyan-400 text-white rounded-full w-10 h-10 flex items-center justify-center">
            ‹
          </button>
          <button className="news-next bg-white/20 hover:bg-cyan-400 text-white rounded-full w-10 h-10 flex items-center justify-center">
            ›
          </button>
        </div>

        <div className="hidden md:block">
          <button className="news-prev absolute z-20 left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-cyan-400 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl">
            ‹
          </button>
          <button className="news-next absolute z-20 right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-cyan-400 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl">
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
