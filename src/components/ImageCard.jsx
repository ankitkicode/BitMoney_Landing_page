import React from 'react';

const ImageCard = ({ imageSrc, title }) => {
  return (
    <div className="group bg-[#10122D] mx-auto p-6 rounded-xl shadow-lg relative overflow-hidden flex flex-col items-center justify-center text-center h-64 w-[90%]  transition-all duration-300 ease-in-out  hover:-translate-y-2">
      
      {/* Top glow effect */}
      <div className="absolute top-0 left-0 right-0 h-2 btn-gradient"></div>
      
      {/* Card content */}
      <div className="mb-4">
        <img src={imageSrc} alt={title} className="w-20 h-20 object-contain mx-auto" />
      </div>
      <h3 className="text-white text-2xl font-semibold">{title}</h3>
      
      {/* Bottom glow effect - visible on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 btn-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
    </div>
  );
};

export default ImageCard;
