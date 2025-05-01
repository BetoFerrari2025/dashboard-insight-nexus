import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { BarChart3, LayoutDashboard, Package, Layers, PlugZap, Menu, X } from 'lucide-react';
import { useMobileOrTablet } from '@/hooks/use-mobile';

const Sidebar = () => {
  const isMobileOrTablet = useMobileOrTablet();
  const [open, setOpen] = useState<boolean>(false);
  
  const handleLinkClick = () => {
    if (isMobileOrTablet && open) {
      setOpen(false);
    }
  };
  
  const SidebarContent = () => (
    <div className="flex flex-col h-full p-4">
      <div className="flex h-14 items-center px-4 py-2 border-b dark:border-gray-700 mb-4">
        <h2 className="text-lg font-semibold text-marketing-dark dark:text-gray-100">CartZAP</h2>
      </div>
      
      <ScrollArea className="flex-1 w-full">
        <div className="space-y-2">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 py-2">PRINCIPAL</p>
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
            <span>Resumo</span>
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
            <span>Campanhas</span>
          </NavLink>

          <NavLink
            to="/products"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              )
            }
          >
            <Package size={16} />
            <span>Produtos</span>
          </NavLink>
          
          <NavLink
            to="/layers"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              )
            }
          >
            <Layers size={16} />
            <span>Funil</span>
          </NavLink>
          
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 py-2 mt-6">CONFIGURAÇÕES</p>
          
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
            <PlugZap size={16} />
            <span>Integrações</span>
          </NavLink>
          
          {/* Version tag at the bottom */}
          <div className="absolute bottom-4 left-4 text-xs text-gray-500 dark:text-gray-400">
            v1.0.0
          </div>
        </div>
      </ScrollArea>
    </div>
  );
  
  if (isMobileOrTablet) {
    return (
      <>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              {!open ? <Menu /> : <X />}
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
    <div className="hidden md:block w-64 border-r dark:border-gray-700 bg-white dark:bg-[#273149] transition-colors">
      <SidebarContent />
    </div>
  );
};

export default Sidebar;
