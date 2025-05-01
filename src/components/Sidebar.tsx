
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  Menu, 
  X, 
  LayoutDashboard, 
  BarChart3, 
  Package, 
  Globe, 
  FileCode, 
  Cog, 
  Landmark, 
  Receipt, 
  FileBarChart2, 
  Bell,
  CreditCard, 
  User, 
  Settings,
  Share2,
  LifeBuoy,
  Smartphone,
  Clock,
  Activity
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Sidebar = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  
  const handleLinkClick = () => {
    if (isMobile && open) {
      setOpen(false);
    }
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  
  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="flex h-14 items-center px-4 py-2 border-b dark:border-gray-700 mb-4 justify-between">
        <h2 className={cn("text-lg font-semibold text-marketing-dark dark:text-gray-100", collapsed && "hidden")}>CartZAP</h2>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleCollapse} 
          className="hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {collapsed ? <Menu size={16} /> : <X size={16} />}
        </Button>
      </div>
      
      <ScrollArea className="flex-1 w-full px-2">
        <div className="space-y-1">
          <NavLink
            to="/"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              )
            }
          >
            <LayoutDashboard size={16} />
            {!collapsed && <span>Resumo</span>}
          </NavLink>
          
          <NavLink
            to="/campaigns"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              )
            }
          >
            <BarChart3 size={16} />
            {!collapsed && <span>Campanhas</span>}
          </NavLink>

          <NavLink
            to="/google"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              )
            }
          >
            <Globe size={16} />
            {!collapsed && <span>Google</span>}
          </NavLink>

          <NavLink
            to="/utms"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              )
            }
          >
            <FileCode size={16} />
            {!collapsed && <span>UTMs</span>}
          </NavLink>

          <NavLink
            to="/integrations"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              )
            }
          >
            <Cog size={16} />
            {!collapsed && <span>Integrações</span>}
          </NavLink>

          <NavLink
            to="/rules"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              )
            }
          >
            <Settings size={16} />
            {!collapsed && <span>Regras</span>}
          </NavLink>

          <NavLink
            to="/taxes"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              )
            }
          >
            <Landmark size={16} />
            {!collapsed && <span>Taxas</span>}
          </NavLink>

          <NavLink
            to="/expenses"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              )
            }
          >
            <Receipt size={16} />
            {!collapsed && <span>Despesas</span>}
          </NavLink>

          <NavLink
            to="/reports"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              )
            }
          >
            <FileBarChart2 size={16} />
            {!collapsed && <span>Relatórios</span>}
          </NavLink>

          <NavLink
            to="/notifications"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              )
            }
          >
            <Bell size={16} />
            {!collapsed && <span>Notificações</span>}
          </NavLink>

          <NavLink
            to="/subscription"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              )
            }
          >
            <CreditCard size={16} />
            {!collapsed && <span>Assinatura</span>}
          </NavLink>

          <NavLink
            to="/account"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              )
            }
          >
            <User size={16} />
            {!collapsed && <span>Minha conta</span>}
          </NavLink>

          <NavLink
            to="/advanced"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              )
            }
          >
            <Settings size={16} />
            {!collapsed && <span>Avançado</span>}
          </NavLink>

          <NavLink
            to="/referral"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              )
            }
          >
            <Share2 size={16} />
            {!collapsed && <span>Indique e Ganhe 10%</span>}
          </NavLink>

          <NavLink
            to="/support"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              )
            }
          >
            <LifeBuoy size={16} />
            {!collapsed && <span>Suporte</span>}
          </NavLink>

          <NavLink
            to="/app"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              )
            }
          >
            <Smartphone size={16} />
            {!collapsed && <span>Aplicativo</span>}
          </NavLink>

          <NavLink
            to="/retrospective"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              )
            }
          >
            <Clock size={16} />
            {!collapsed && <span>Retrospectiva</span>}
          </NavLink>

          <NavLink
            to="/status"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              )
            }
          >
            <Activity size={16} />
            {!collapsed && <span>Status</span>}
          </NavLink>
        </div>
      </ScrollArea>
      
      {/* Version tag at the bottom */}
      <div className="p-4 text-xs text-gray-500 dark:text-gray-400 border-t dark:border-gray-700">
        v1.0.0
      </div>
    </div>
  );
  
  if (isMobile) {
    return (
      <>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0 border-r dark:border-gray-700 bg-white dark:bg-[#273149]">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </>
    );
  }

  return (
    <div className={cn(
      "transition-all duration-300 border-r dark:border-gray-700 bg-white dark:bg-[#273149]", 
      collapsed ? "w-16" : "w-64"
    )}>
      <SidebarContent />
    </div>
  );
};

export default Sidebar;
