import React from 'react';

const MetricCard = ({ title, value, trend, details }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-gray-600 mb-4">{title}</h3>
      <div className="flex items-baseline gap-4 mb-4">
        <span className="text-4xl font-bold text-gray-900">{value}</span>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-sm text-red-500">+{trend}%</span>
            <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </div>
          <div className="relative w-24 h-12">
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 96 48" preserveAspectRatio="none">
                {/* Red line */}
                <path
                  d="M0,36 C24,12 48,36 96,0"
                  stroke="#EF4444"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Gradient area */}
                <path
                  d="M0,36 C24,12 48,36 96,0 L96,48 L0,48 Z"
                  fill="url(#redGradient)"
                />
                <defs>
                  <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#EF4444" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 text-xs text-gray-400">
              +{trend}% Past month
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-1">
        {details.map((detail, index) => (
          <div key={index} className="flex justify-between text-sm text-gray-600">
            <span>{detail.label}</span>
            <span>{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MetricCard;