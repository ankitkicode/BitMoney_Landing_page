import React from 'react';
// Swiper React components aur modules ko import karein
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Swiper styles ko import karein
import 'swiper/css';
import 'swiper/css/navigation';

// Yah component maanta hai ki Tailwind CSS aur Font Awesome global roop se load kiye gaye hain.

// News card ke liye sub-component
const NewsCard = ({ article }) => (
    <div className="bg-[var(--primary-bg)] rounded-2xl border border-[var(--border-color)] shadow-lg h-full flex flex-col overflow-hidden group">
        {/* News Image */}
        <div className="overflow-hidden">
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
            {/* News Meta: Date */}
            <div className="text-[var(--text-secondary)] text-xs mb-3 flex items-center">
                <i className="fas fa-calendar-alt mr-2 text-[var(--accent-cyan)]"></i>
                <span>{article.date}</span>
            </div>
            
            {/* News Title */}
            <h3 className="text-lg font-bold text-white mb-3 flex-grow">{article.title}</h3>
            
            {/* News Description */}
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                {article.description}
            </p>

            {/* Read More Link */}
            <a href="#" className="text-[var(--accent-cyan)] text-sm font-semibold inline-flex items-center group-hover:text-white transition-colors">
                READ MORE <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
            </a>
        </div>
    </div>
);


const News = () => {
    // News articles ke liye data
    const newsData = [
        {
            date: 'January 29, 2022',
            title: "Report about the team's trip to the road show",
            imageUrl: 'images/news1.jpg',
            description: 'Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop\'s ern of Lorem Ipsum Proin gravida.'
        },
        {
            date: 'January 29, 2022',
            title: "Report about the team's trip to the road show",
            imageUrl: '/images/news2.jpg',
            description: 'Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop\'s ern of Lorem Ipsum Proin gravida.'
        },
        {
            date: 'January 29, 2022',
            title: "Report about the team's trip to the road show",
            imageUrl: '/images/news3.jpg',
            description: 'Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop\'s ern of Lorem Ipsum Proin gravida.'
        },
        {
            date: 'February 05, 2022',
            title: "New partnerships announced for Q2 expansion",
            imageUrl: '/images/news1.jpg',
            description: 'Nam nec tellus a odio tincidunt auctor are odio sed non mauris. This is Photoshop\'s ern of Lorem Ipsum Proin gravida.'
        }
    ];

    return (
        <section className="py-24 bg-[var(--secondary-bg)]">
            <div className="container mx-auto px-6 md-px-12">
                <h2 className="text-4xl font-bold text-white text-center mb-16">Latest News</h2>

                <Swiper
                    modules={[Autoplay, Navigation]}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="mySwiper"
                >
                    {newsData.map((article, index) => (
                        <SwiperSlide key={index} style={{ height: 'auto' }}>
                            <NewsCard article={article} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default News;

