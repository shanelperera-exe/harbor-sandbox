import { Outlet } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';
import SideNav from './SideNav';

export default function DashboardLayout() {
  return (
    <div className="h-screen flex flex-col w-full bg-white dark:bg-[#090909] text-gray-900 dark:text-white font-sans transition-colors duration-300">
      <DashboardHeader />
      <div className="flex flex-row flex-grow overflow-hidden relative">
        <SideNav />
        <main className="flex-grow overflow-auto relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
