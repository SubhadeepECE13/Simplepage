import React from 'react';
import { Bell, MessageSquare } from 'lucide-react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import MetricCard from './components/MetricCard';
import ScheduleCard from './components/ScheduleCard';
import AnnouncementCard from './components/AnnouncementCard';
import ActivityCard from './components/ActivityCard';

function App() {
  const scheduleItems = [
    { title: 'Review candidate applications', time: 'Today - 11:30 AM', isPriority: true },
    { title: 'Interview with candidates', time: 'Today - 10:30 AM' },
    { title: 'Short meeting with product designer from IT Department', time: 'Today - 09:15 AM' },
  ];

  const announcements = [
    { title: 'Outing schedule for every department', time: '5 Minutes ago', isPinned: true },
    { title: 'Meeting HR Department', time: 'Yesterday, 12:30 PM' },
    { 
      title: 'IT Department need two more talents for UX/UI Designer position',
      time: 'Yesterday, 09:15 AM'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-center h-16">
              {/* Left Section: Logo and Search Bar */}
              <div className="flex items-center gap-4">
                {/* Logo */}
                {/* <img src="/logo.svg" alt="Logo" className="h-8" /> */}

                {/* Search Bar */}
                <div className="relative flex items-center w-80 bg-white border border-gray-300 rounded-full shadow-md px-4 py-2">
                  <input
                    type="text"
                    placeholder="Search"
                    className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 19a8 8 0 100-16 8 8 0 000 16zm0 0l6 6"
                    />
                  </svg>
                </div>
              </div>

              {/* Right Section: Notifications and User Profile */}
              <div className="flex items-center gap-4">
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <Bell className="w-6 h-6" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <MessageSquare className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-3">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User avatar"
                  />
                  <span className="font-medium">Admirra John</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard</h1>
          
          <div className="grid grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                  title="Available Position"
                  value="24"
                  subtitle="4 Urgently needed"
                  gradient="orange"
                />
                <StatCard
                  title="Job Open"
                  value="10"
                  subtitle="4 Active hiring"
                  gradient="blue"
                />
                <StatCard
                  title="New Employees"
                  value="24"
                  subtitle="4 Department"
                  gradient="pink"
                />
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MetricCard
                  title="Total Employees"
                  value="216"
                  trend={2}
                  details={[
                    { label: "Men", value: "120 Men" },
                    { label: "Women", value: "96 Women" },
                  ]}
                />
                <MetricCard
                  title="Talent Request"
                  value="16"
                  trend={5}
                  details={[
                    { label: "Men", value: "6 Men" },
                    { label: "Women", value: "10 Women" },
                  ]}
                />
              </div>

              {/* Announcement Section */}
              <AnnouncementCard announcements={announcements} />
            </div>

            {/* Right Column */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <ActivityCard
                time="10:40 AM, Fri 10 Sept 2021"
                title="You Posted a New Job"
                description="Kindly check the requirements and terms of work and make sure everything is right."
                activityCount={12}
              />
              <ScheduleCard items={scheduleItems} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
