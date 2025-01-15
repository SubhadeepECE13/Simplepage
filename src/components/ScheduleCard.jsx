import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const ScheduleCard = ({ items }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold">Upcoming Schedule</h3>
        <button className="text-sm text-gray-500 flex items-center gap-2">
          Today, 13 Sep 2021
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-gray-500">Priority</p>
        {items.map((item, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center">
            <div>
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.time}</p>
            </div>
            <button>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2 text-red-500 text-sm font-medium">
        Create a New Schedule
      </button>
    </div>
  );
};

export default ScheduleCard;