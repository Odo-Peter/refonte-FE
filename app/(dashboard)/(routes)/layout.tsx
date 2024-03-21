'use client';

import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import { ClickProvider } from '@/contexts/ContextProviders';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClickProvider>
      <section className="h-full relative w-full">
        <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 w-[16rem] overflow-y-auto">
          <div>
            <SideBar />
          </div>
        </div>

        <div className="md:ml-[16rem]">
          <NavBar />
          {children}
        </div>
      </section>
    </ClickProvider>
  );
};

export default DashboardLayout;
