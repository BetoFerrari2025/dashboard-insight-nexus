
import React from 'react';
import { 
  Home, 
  BarChart2, 
  ShoppingBag, 
  Users, 
  Settings, 
  ChevronLeft, 
  Flag, 
  Shield, 
  Link, 
  CodesandboxIcon, 
  LayoutDashboard, 
  Puzzle, 
  Ruler, 
  Percent, 
  DollarSign, 
  FileText, 
  Bell, 
  CreditCard, 
  User, 
  Cog, 
  Share2, 
  HeadphonesIcon, 
  SmartphoneIcon, 
  History, 
  Activity 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { usePermissions } from '@/hooks/usePermissions';

const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const location = useLocation();
  const { user } = useAuth();
  const { isAdmin } = usePermissions();

  return (
    <div className={cn(
      "h-screen bg-[#273149] dark:bg-[#273149] text-white transition-all duration-300",
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

      <div className="mt-6 flex flex-col h-[calc(100%-80px)] overflow-y-auto">
        <SidebarItem 
          icon={LayoutDashboard} 
          text="Resumo" 
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
          icon={CodesandboxIcon} 
          text="Google" 
          to="/google" 
          active={location.pathname === '/google'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={Link} 
          text="UTMs" 
          to="/utms" 
          active={location.pathname === '/utms'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={Puzzle} 
          text="Integrações" 
          to="/integrations" 
          active={location.pathname.startsWith('/integrations')} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={Ruler} 
          text="Regras" 
          to="/rules" 
          active={location.pathname === '/rules'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={Percent} 
          text="Taxas" 
          to="/taxes" 
          active={location.pathname === '/taxes'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={DollarSign} 
          text="Despesas" 
          to="/expenses" 
          active={location.pathname === '/expenses'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={FileText} 
          text="Relatórios" 
          to="/reports" 
          active={location.pathname === '/reports'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={Bell} 
          text="Notificações" 
          to="/notifications" 
          active={location.pathname === '/notifications'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={CreditCard} 
          text="Assinatura" 
          to="/subscription" 
          active={location.pathname === '/subscription'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={User} 
          text="Minha conta" 
          to="/account" 
          active={location.pathname === '/account'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={Cog} 
          text="Avançado" 
          to="/advanced" 
          active={location.pathname === '/advanced'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={Share2} 
          text="Indique e Ganhe 10%" 
          to="/refer" 
          active={location.pathname === '/refer'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={HeadphonesIcon} 
          text="Suporte" 
          to="/support" 
          active={location.pathname === '/support'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={SmartphoneIcon} 
          text="Aplicativo" 
          to="/app" 
          active={location.pathname === '/app'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={History} 
          text="Retrospectiva" 
          to="/retrospective" 
          active={location.pathname === '/retrospective'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={Activity} 
          text="Status" 
          to="/status" 
          active={location.pathname === '/status'} 
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
    <RouterLink to={to} className={cn(
      "flex items-center px-4 py-2.5 cursor-pointer transition-colors text-sm",
      active ? "bg-blue-600" : "hover:bg-gray-700"
    )}>
      <Icon className="h-5 w-5 min-w-5" />
      {!collapsed && <span className="ml-3 whitespace-nowrap overflow-hidden text-ellipsis">{text}</span>}
    </RouterLink>
  );
};

export default Sidebar;
