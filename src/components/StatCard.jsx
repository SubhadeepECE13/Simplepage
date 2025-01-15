import React from 'react';

const StatCard = ({ title, value, subtitle, gradient }) => {
  const gradientClasses = {
    pink: 'bg-gradient-to-br from-pink-50 to-pink-100',
    blue: 'bg-gradient-to-br from-blue-50 to-blue-100',
    orange: 'bg-gradient-to-br from-orange-50 to-orange-100'
  };

  return (
    <div className={`rounded-xl p-6 ${gradientClasses[gradient]}`}>
      <h3 className="text-gray-600 mb-2">{title}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold text-gray-900">{value}</span>
      </div>
      {subtitle && (
        <p className="text-sm text-red-500 mt-2">{subtitle}</p>
      )}
    </div>
  );
}

export default StatCard;