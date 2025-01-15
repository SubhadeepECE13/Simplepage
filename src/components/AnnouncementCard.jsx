import React from 'react';
import { MoreHorizontal, Pin } from 'lucide-react';

const AnnouncementCard = ({ announcements }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold">Announcement</h3>
        <button className="text-sm text-gray-500 flex items-center gap-2">
          Today, 13 Sep 2021
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <div key={index} className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">{announcement.title}</h4>
              <p className="text-sm text-gray-500">{announcement.time}</p>
            </div>
            <div className="flex gap-2">
              {announcement.isPinned && (
                <button>
                  <Pin className="w-5 h-5 text-gray-400" />
                </button>
              )}
              <button>
                <MoreHorizontal className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-2 text-red-500 text-sm font-medium">
        See All Announcement
      </button>
    </div>
  );
};

export default AnnouncementCard;