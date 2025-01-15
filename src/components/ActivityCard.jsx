import React from 'react';

const ActivityCard = ({ time, title, description, activityCount }) => {
  return (
    <div className="bg-[#1B204A] text-white rounded-xl p-6">
      <p className="text-sm text-gray-400">{time}</p>
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-sm text-gray-300 mt-2">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-300">Today you makes {activityCount} Activity</p>
        <button className="px-4 py-2 bg-red-500 rounded-lg text-sm font-medium">
          See All Activity
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;