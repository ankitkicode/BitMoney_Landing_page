import React from 'react';
import SudDivider from './SudDivider';

// Yah component maanta hai ki Tailwind CSS aur Font Awesome global roop se load kiye gaye hain.

// Roadmap timeline ke liye data
const roadmapData = [
  {
    year: "2022",
    items: [
      { title: "Idea", description: "September - October", icon: "fas fa-lightbulb" },
      { title: "Market Research", description: "(4Q 2022) August 2022", icon: "fas fa-cogs" },
    ],
  },
  {
    year: "2022",
    items: [
      { title: "Formation of foundersteam Business plan", description: "(1Q 2022)", icon: "fas fa-users" },
      { title: "Start of Platform Development", description: "(2Q 2022)", icon: "fas fa-server" },
    ],
  },
    {
    year: "2022",
    items: [
        { title: 'WhitePaper Landing page', description: '(3Q 2022)', icon: 'fas fa-wrench' },
        { title: 'Pre-Sale Launch Platform in beta test mode', description: '(4Q 2022)', icon: 'fas fa-file-alt' },
    ]
  },
  {
    year: "2022",
    items: [
      { title: "ICO Launch Identification Systems work with API Partners", description: "(1Q 2022)", icon: "fas fa-rocket" },
      { title: "Launch the Platform in Full mode", description: "(2Q 2022)", icon: "fas fa-desktop" },
    ],
  },
  {
    year: "2022",
    items: [
      { title: "Establishing Representative Office", description: "(4Q 2022)", icon: "fas fa-briefcase" },
    ],
  },
];

// Ek "Milestone" card ke liye sub-component
const MilestoneCard = ({ item, isLast }) => (
    <div className="relative pl-16 py-4 group">
        {/* Dot aur vertical line */}
        <div className="absolute left-0 top-0 h-full w-0.5 bg-[var(--border-color)]">
            {!isLast && <div className="h-full w-full bg-gradient-to-b from-[var(--accent-cyan)] to-[var(--accent-blue)] group-hover:from-[var(--accent-cyan)] group-hover:to-[var(--accent-cyan)] transition-all duration-300"></div>}
        </div>
        <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[var(--primary-bg)] border-2 border-[var(--accent-cyan)] flex items-center justify-center">
            <div className="w-3 h-3 bg-[var(--accent-cyan)] rounded-full shadow-[0_0_12px_var(--accent-cyan)]"></div>
        </div>

        {/* Card ka content */}
        <div className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-2xl border border-transparent group-hover:border-[var(--border-color)] transition-all duration-300 transform group-hover:scale-105">
            <div className="flex items-center gap-5">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--secondary-bg)] flex-shrink-0 flex items-center justify-center shadow-lg">
                    <i className={`${item.icon} text-[var(--accent-cyan)] text-2xl md:text-3xl`}></i>
                </div>
                <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">{item.title}</h3>
                    <p className="text-[var(--text-secondary)] text-sm">{item.description}</p>
                </div>
            </div>
        </div>
    </div>
);


const Roadmap = () => {
  return (
    <section className="relative pt-24 bg-[var(--primary-bg)] overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
              Development of Bit Money Platform
            </h2>
            <p className="text-center text-[var(--text-secondary)] mb-20 text-lg">(Road Map)</p>
            
            <div className="max-w-4xl mx-auto mb-24 p-2 bg-black/20 rounded-xl shadow-2xl border border-[var(--border-color)] backdrop-blur-sm">
                <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                    <iframe 
                        src="https://www.youtube.com/embed/Gc2en3nHxA4?si=RjZgP6YgQh7wZ9nC" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>

            {/* Timeline Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
                {roadmapData.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="flex flex-col">
                        <div className="text-3xl font-bold text-center md:text-left text-[var(--accent-cyan)] p-4 mb-4 sticky top-4 bg-[var(--primary-bg)]/80 backdrop-blur-sm rounded-xl">
                            {section.year}
                        </div>
                        <div className="relative">
                            {section.items.map((item, itemIndex) => (
                                <MilestoneCard 
                                    key={itemIndex} 
                                    item={item} 
                                    isLast={itemIndex === section.items.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <SudDivider/>
    </section>
  );
};

export default Roadmap;

