import React from 'react';

const Badge = ({ status }) => {
  const colors = {
    ONGOING: 'bg-purple-600 text-white',
    COMPLETED: 'bg-green-500 text-white',
    UPCOMING: 'bg-orange-500 text-white',
  };

  return (
    <span className={`px-2 py-1 text-[10px] font-bold tracking-wider rounded uppercase ${colors[status] || 'bg-gray-500 text-white'}`}>
      {status}
    </span>
  );
};

export default Badge;