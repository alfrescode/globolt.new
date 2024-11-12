import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface SidebarProps {
  menuItems: MenuItem[];
  activeSection: string;
  setActiveSection: (section: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  menuItems,
  activeSection,
  setActiveSection,
  isSidebarOpen
}) => {
  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 ${
        isSidebarOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          {isSidebarOpen ? (
            <h1 className="text-xl font-bold text-gray-800">Panel</h1>
          ) : (
            <span className="text-xl font-bold">📊</span>
          )}
        </div>
        
        <nav className="flex-1 overflow-y-auto">
          <ul className="py-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors ${
                      activeSection === item.id
                        ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600'
                        : ''
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {isSidebarOpen && (
                      <span className="ml-3 text-sm font-medium">{item.label}</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;