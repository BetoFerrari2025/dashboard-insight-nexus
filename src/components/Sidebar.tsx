
import React from 'react';
import { Home, BarChart2, ShoppingBag, Users, Settings, ChevronLeft, Flag } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className={cn(
      "h-screen bg-[#1A1F2C] text-white transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4 flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center">
            <div className="h-8 w-8 bg-marketing-blue rounded-md flex items-center justify-center">
              <span className="text-white font-bold">U</span>
            </div>
            <span className="ml-2 font-bold text-lg">UTM.ify</span>
          </div>
        )}
        {collapsed && (
          <div className="h-8 w-8 bg-marketing-blue rounded-md flex items-center justify-center mx-auto">
            <span className="text-white font-bold">U</span>
          </div>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "text-white p-1 rounded hover:bg-gray-700",
            collapsed && "mx-auto"
          )}
        >
          <ChevronLeft className={cn(
            "transition-transform",
            collapsed && "rotate-180"
          )} />
        </button>
      </div>

      <div className="mt-6">
        <SidebarItem icon={Home} text="Dashboard" active={true} collapsed={collapsed} />
        <SidebarItem icon={Flag} text="Campanhas" collapsed={collapsed} />
        <SidebarItem icon={BarChart2} text="Analytics" collapsed={collapsed} />
        <SidebarItem icon={ShoppingBag} text="Produtos" collapsed={collapsed} />
        <SidebarItem icon={Users} text="Clientes" collapsed={collapsed} />
        <SidebarItem icon={Settings} text="Configurações" collapsed={collapsed} />
      </div>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.FC<any>;
  text: string;
  active?: boolean;
  collapsed?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, text, active = false, collapsed = false }) => {
  return (
    <div className={cn(
      "flex items-center px-4 py-3 cursor-pointer transition-colors",
      active ? "bg-blue-600" : "hover:bg-gray-700"
    )}>
      <Icon className="h-5 w-5" />
      {!collapsed && <span className="ml-3">{text}</span>}
    </div>
  );
};

export default Sidebar;
