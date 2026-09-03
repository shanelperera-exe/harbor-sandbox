import { Outlet } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';

export default function DashboardLayout() {
  return (
    <div className="h-screen flex flex-col w-full bg-white dark:bg-[#090909] text-gray-900 dark:text-white font-sans transition-colors duration-300">
      <DashboardHeader />
      <main className="flex-grow overflow-auto relative">
        <Outlet />
      </main>
    </div>
  );
}
