import Image from 'next/image';
import React from 'react';

const OverServicesCard = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
      <Image fill src={imageSrc} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
    </div>
  );
}

export default OverServicesCard;
