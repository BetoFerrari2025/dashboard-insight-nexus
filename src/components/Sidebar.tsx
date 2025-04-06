
import React from 'react';
import { Home, BarChart2, ShoppingBag, Users, Settings, ChevronLeft, Flag, Shield, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { usePermissions } from '@/hooks/usePermissions';
import { useTheme } from '@/hooks/useTheme';

const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const location = useLocation();
  const { user } = useAuth();
  const { isAdmin } = usePermissions();
  const { theme, setTheme } = useTheme();

  return (
    <div className={cn(
      "h-screen bg-[#273149] dark:bg-[#1e2538] text-white transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4 flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/2ffcae49-a601-4789-8659-a9d1f29720dc.png" 
              alt="Trackify Logo" 
              className="h-10" 
            />
          </div>
        )}
        {collapsed && (
          <div className="mx-auto">
            <img 
              src="/lovable-uploads/2ffcae49-a601-4789-8659-a9d1f29720dc.png" 
              alt="Trackify Logo" 
              className="h-8 w-auto" 
            />
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
        <SidebarItem 
          icon={Home} 
          text="Dashboard" 
          to="/" 
          active={location.pathname === '/'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={Flag} 
          text="Campanhas" 
          to="/campaigns" 
          active={location.pathname === '/campaigns'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={BarChart2} 
          text="Analytics" 
          to="/analytics" 
          active={location.pathname === '/analytics'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={ShoppingBag} 
          text="Produtos" 
          to="/products" 
          active={location.pathname === '/products'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={Users} 
          text="Clientes" 
          to="/customers" 
          active={location.pathname === '/customers'} 
          collapsed={collapsed} 
        />
        
        {isAdmin && (
          <SidebarItem 
            icon={Shield} 
            text="Administração" 
            to="/admin" 
            active={location.pathname === '/admin'} 
            collapsed={collapsed} 
          />
        )}
        
        <SidebarItem 
          icon={Settings} 
          text="Configurações" 
          to="/settings" 
          active={location.pathname === '/settings'} 
          collapsed={collapsed} 
        />

        {/* Theme Toggle */}
        <div className={cn(
          "flex items-center px-4 py-3 cursor-pointer hover:bg-gray-700 transition-colors mt-4",
          collapsed ? "justify-center" : "justify-between"
        )}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          {!collapsed && <span className="ml-3">{theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}</span>}
        </div>
      </div>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.FC<any>;
  text: string;
  to: string;
  active?: boolean;
  collapsed?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, text, to, active = false, collapsed = false }) => {
  return (
    <Link to={to} className={cn(
      "flex items-center px-4 py-3 cursor-pointer transition-colors",
      active ? "bg-blue-600" : "hover:bg-gray-700"
    )}>
      <Icon className="h-5 w-5" />
      {!collapsed && <span className="ml-3">{text}</span>}
    </Link>
  );
};

export default Sidebar;
