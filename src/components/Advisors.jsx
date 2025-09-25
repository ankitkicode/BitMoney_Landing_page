import React from 'react';
// Swiper React components aur modules ko import karein
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper styles ko import karein
import 'swiper/css';
import 'swiper/css/pagination';

// Yah component maanta hai ki Tailwind CSS aur Font Awesome global roop se load kiye gaye hain.

// Advisor card ke liye sub-component
const AdvisorCard = ({ advisor }) => (
    <div className="bg-[var(--secondary-bg)] p-8 rounded-2xl border border-[var(--border-color)] text-center shadow-lg h-full flex flex-col">
        <div className="card-glow"></div>
        
        {/* Advisor ki Image aur Details */}
        <div className="flex items-center justify-center md:justify-start md:text-left gap-5 mb-5">
            <img src={advisor.imageUrl} alt={advisor.name} className="w-20 h-20 rounded-full border-2 border-[var(--accent-cyan)] object-cover" />
            <div className="flex-grow">
                <h3 className="text-xl font-bold text-white">{advisor.name}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{advisor.title}</p>
                 {/* Social Media Icons */}
                <div className="flex justify-center md:justify-start space-x-3 mt-2">
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--accent-blue)] text-white hover:opacity-80 transition-opacity"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--accent-blue)] text-white hover:opacity-80 transition-opacity"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--accent-blue)] text-white hover:opacity-80 transition-opacity"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>

        {/* Advisor ka Description */}
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed text-center md:text-left">
            {advisor.description}
        </p>
    </div>
);


const Advisors = () => {
    // Advisors ke liye data
    const advisorsData = [
        {
            name: 'Mason Liam',
            title: '(Co-Founder & CEO)',
            imageUrl: 'https://placehold.co/100x100/e2e8f0/334155?text=ML',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less'
        },
        {
            name: 'Jammy Doe',
            title: '(Co-Founder & CEO)',
            imageUrl: 'https://placehold.co/100x100/e2e8f0/334155?text=JD',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less'
        },
        {
            name: 'Alex Ray',
            title: '(Lead Developer)',
            imageUrl: 'https://placehold.co/100x100/e2e8f0/334155?text=AR',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less'
        },
        {
            name: 'Mia Wong',
            title: '(Marketing Head)',
            imageUrl: 'https://placehold.co/100x100/e2e8f0/334155?text=MW',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less'
        },
        {
            name: 'John Smith',
            title: '(Blockchain Expert)',
            imageUrl: 'https://placehold.co/100x100/e2e8f0/334155?text=JS',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less'
        },
        {
            name: 'Jane Foster',
            title: '(UI/UX Designer)',
            imageUrl: 'https://placehold.co/100x100/e2e8f0/334155?text=JF',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less'
        }
    ];

    return (
        <section className="py-24 bg-[var(--primary-bg)]">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-4xl font-bold text-white text-center mb-16">Our Advisors</h2>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="mySwiper"
                >
                    {advisorsData.map((advisor, index) => (
                        <SwiperSlide key={index} style={{ height: 'auto' }}>
                            <AdvisorCard advisor={advisor} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Advisors;

