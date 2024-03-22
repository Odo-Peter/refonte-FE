'use client';

import { BellIcon, ChevronDown, MailIcon, Menu } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import SearchBar from '../SearchBar';
import UserAvatar from '../UserAvatar';

interface NavButtonProps {
  title?: string;
  icon?: any;
  customFunc?: () => void;
  dotColor?: string;
}

const NavButton = ({ title, customFunc, icon, dotColor }: NavButtonProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger
        type="button"
        onClick={() => customFunc!()}
        className="relative p-2 opacity-85 hover:opacity-100"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-1 top-1"
        />
        {icon}
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-[10px]">{title}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between sticky top-0 left-0 px-4 md:px-8 py-4 shadow-xl z-50 bg-white">
      <div>
        <button
          type="button"
          onClick={() => console.log('TODO: remove side bar')}
        >
          <Menu className="h-6 w-6 bg-opacity-90 text-gray-800 hover:opacity-100 cursor-pointer" />
        </button>
      </div>
      <SearchBar />
      <div className="flex gap-x-2 md:gap-x-3 items-center">
        <NavButton
          title="Notification"
          icon={<BellIcon className="h-5 w-5 text-gray-800" />}
          dotColor="orange"
          customFunc={() => console.log('clicked Notification')}
        />
        <NavButton
          title="Chats"
          icon={<MailIcon className="h-5 w-5 text-gray-800" />}
          dotColor="green"
          customFunc={() => console.log('clicked Messages')}
        />

        <div
          className="flex gap-x-1 items-center opacity-90 hover:opacity-100 w-full cursor-pointer"
          onClick={() => console.log('TODO: Handle a drop down here')}
        >
          <UserAvatar />
          <p className="text-sm font-semibold">Peter</p>
          <button className="p-2 hover:bg-gray-950/10 rounded-full">
            {' '}
            <ChevronDown className="w-4 h-4" />{' '}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
