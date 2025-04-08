import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, User, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children
}) => {
  const {
    user,
    logout
  } = useAuth();
  const {
    theme,
    toggleTheme
  } = useTheme();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return <div className="flex h-screen bg-gray-50 dark:bg-[#141f37] transition-colors">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white dark:bg-[#273149] shadow-sm border-b dark:border-gray-700 transition-colors">
          <div className="flex justify-between items-center px-6 py-4">
            <h1 className="text-xl font-semibold text-marketing-dark dark:text-white">Dashboard
-
Principal</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-300 transition-colors" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-500 dark:text-gray-300" />
                  <span className="text-sm font-medium dark:text-white">{user?.name}</span>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout} className="flex items-center gap-1 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700">
                <LogOut className="h-4 w-4" />
                <span>Sair</span>
              </Button>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-[#141f37] transition-colors">
          <div className="dark:text-white">
            {children}
          </div>
        </main>
      </div>
    </div>;
};
export default DashboardLayout;