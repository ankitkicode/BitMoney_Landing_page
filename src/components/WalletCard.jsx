import React from 'react'


const WalletCard = ({ icon, imageSrc, name, value, symbol, gradientFrom = 'from-cyan-500', gradientTo = 'to-teal-500' }) => {
  return (
    <div className="bg-[#10122D] p-6 rounded-xl shadow-lg relative overflow-hidden flex flex-col justify-between h-48 w-full">
      {/* Top gradient glow */}
      <div className={`absolute top-0 left-0 right-0 h-3 bg-gradient-to-r  btn-gradient w-[90%] mx-auto rounded-2xl`}></div>

      {/* Card content */}
      <div className="flex items-center space-x-4">
        {icon && <div className="w-10 h-10">{icon}</div>}
        {imageSrc && <img src={imageSrc} alt={name} className="w-13 h-13 object-contain rounded-full" />}
        <h3 className="text-white text-lg font-semibold">{name}</h3>
      </div>

      {/* Value display */}
      <div className="mt-auto">
        <div className={` btn-gradient text-white font-bold py-2 px-5 rounded-full inline-block text-lg shadow-md`}>
          <span>{value} {symbol}</span>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;