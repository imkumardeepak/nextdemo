// components/StatsCard.js
import React from 'react';

const StatsCard = ({ icon, bgColor, title, value, footer, positive }) => {
  return (
    <div className="overflow-x-auto  bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
  <div>
    <p className="text-gray-900">{title}</p>
    <p className="text-2xl font-bold">{value}</p>
    <p className={`mt-2 text-sm ${positive ? 'text-green-500' : 'text-red-500'}`}>
      {footer}
    </p>
  </div>
  <div
    className={`rounded-full p-3 ${bgColor} text-white flex-shrink-0`}
  >
    {icon}
  </div>
</div>



  );
};

export default StatsCard;
