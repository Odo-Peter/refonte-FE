import { X } from 'lucide-react';

import { useClicked } from '@/contexts/ContextProviders';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AdminProfileCard = () => {
  const { handleViewClick } = useClicked();

  return (
    <div className="fixed pb-8 flex flex-col left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 bg-gray-50 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
      <div className="relative w-full h-32 rounded-t-sm bg-gradient-to-r from bg-cyan-600 to to-blue-700">
        <div>
          <Avatar className="absolute -bottom-10 h-24 w-24 border-[3px] border-gray-50 left-[50%] -translate-x-[50%]">
            <AvatarImage src="/avatar1.jpg" alt="user-profile" />
            <AvatarFallback>PO</AvatarFallback>
          </Avatar>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              type="button"
              onClick={handleViewClick}
              className="flex items-center justify-center absolute right-0 top-0  w-6 h-6 bg-red-600 hover:bg-red-500 rounded-tr-sm rounded-bl-sm"
            >
              <X className="text-gray-50 h-4 w-4 font-bold" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-[10px]">Close</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="mt-8 mb-2 flex flex-col px-8">
        <h4 className="font-bold text-xl text-gray-900">View Modal Card</h4>
        <p className="text-sm font-semibold text-muted-foreground">
          peter@mail.com
        </p>
        <p className="text-xs text-muted-foreground">(+234) 9068101500</p>
      </div>
    </div>
  );
};

export default AdminProfileCard;
