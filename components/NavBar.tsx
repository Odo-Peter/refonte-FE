"use client"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
import { BellIcon, MailIcon, Menu } from 'lucide-react';

import SearchBar from './SearchBar';
import UserAvatar from './UserAvatar';

interface NavButtonProps {
    title?: string;
    icon?: any;
    customFunc?: () => void;
    color?: string;
    dotColor?: string;
}

const NavButton = ({ title, customFunc, icon, color, dotColor }: NavButtonProps) => (
    
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger type="button"
        onClick={() => customFunc!()}
        style={{ color }}
        className="relative p-2 opacity-85 hover:opacity-100">
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-1 top-1"
        />
        {icon}
      </TooltipTrigger>
    <TooltipContent>
      <p className='text-[10px]'>{title}</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
  );

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between sticky top-0 left-0 px-4 md:px-8 py-4 shadow-xl z-50 bg-white'>
        <div>
          <button>
            <Menu className="h-6 w-6 bg-opacity-90 hover:opacity-100 cursor-pointer" />
          </button>
        </div>
        <SearchBar />
        <div className='flex gap-x-2 md:gap-x-3 items-center'>
            <NavButton title='Notification' color='gray' icon={ <BellIcon className='h-5 w-5' />} dotColor='orange' customFunc={() => console.log('clicked Notification')} />
            <NavButton title='Chats' color='gray' icon={ <MailIcon className='h-5 w-5' />} dotColor='green' customFunc={() => console.log('clicked Messages')} />

            <div className='flex gap-x-1 items-center opacity-90 hover:opacity-100 w-full cursor-pointer' onClick={() => console.log('TODO: Handle a drop down here')}>
                <UserAvatar />
                <p className='text-sm font-semibold'>Peter</p>
            </div>
        </div>
    </nav>
  )
}

export default NavBar