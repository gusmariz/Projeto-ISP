import React from "react";
import { BarChart3, Headphones, Home, Menu, Users, Wifi } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  collapsed,
  setCollapsed,
}) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "custumers", label: "Clientes", icon: Users },
    { id: "plans", label: "Planos", icon: Wifi },
    { id: "support", label: "Suporte", icon: Headphones },
  ];

  return (
    <div
      className={`bg-white shadow-lg h-screen fixed left-0 top-0 z-40 transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-800">GraceNet</span>
            </div>
          )}
          <button
            type="button"
            title="Menu"
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                isActive ? 'bg-blue-50 border-r-2 border-blue-600 text-blue-600' : 'text-gray-700'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
              {!collapsed && (
                <span className={`ml-3 font-medium ${isActive ? 'text-blue-600' : 'text-gray-700'}`}>
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
