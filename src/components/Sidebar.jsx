import React from 'react';
import { LayoutGrid, Users, Calendar, UserCircle, Building2, HeadphonesIcon, Settings } from 'lucide-react';
import Logo from '../assets/Frame 88.png'; // Import the logo

const Sidebar = () => {
  const mainMenuItems = [
    { icon: <LayoutGrid className="w-5 h-5" />, label: 'Dashboard', active: true },
    { icon: <Users className="w-5 h-5" />, label: 'Recruitment' },
    { icon: <Calendar className="w-5 h-5" />, label: 'Schedule' },
    { icon: <UserCircle className="w-5 h-5" />, label: 'Employee' },
    { icon: <Building2 className="w-5 h-5" />, label: 'Department' },
  ];

  const otherMenuItems = [
    { icon: <HeadphonesIcon className="w-5 h-5" />, label: 'Support' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-white border-r h-screen fixed left-0 top-0">
      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-center gap-2 mb-8">
          {/* <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            
          </div> */}
          <img src={Logo} alt="Logo" className="h-15 w-auto" />
        </div>

        <div className="space-y-6">
          {/* Main Menu Section */}
          <div>
            <p className="text-xs text-gray-400 mb-4">MAIN MENU</p>
            <nav className="space-y-1">
              {mainMenuItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                    item.active
                      ? 'text-red-500 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Other Menu Section */}
          <div>
            <p className="text-xs text-gray-400 mb-4">OTHER</p>
            <nav className="space-y-1">
              {otherMenuItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
