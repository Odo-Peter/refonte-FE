import { X } from 'lucide-react';

import { useClicked } from '@/contexts/ContextProviders';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const DeleteAdminCard = () => {
  const { handleDeleteClick, adminDetails } = useClicked();

  return (
    <div className="fixed flex flex-col left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] gap-4 bg-gray-50 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg">
      <div className="relative w-full h-32 rounded-t-lg bg-gradient-to-r from bg-[#a00000] to to-[#c62128]">
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
              onClick={handleDeleteClick}
              className="flex items-center justify-center absolute right-0 top-0  w-6 h-6 hover:bg-red-600 rounded-tr-lg rounded-bl-sm"
            >
              <X className="text-gray-50 h-4 w-4 font-bold" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-[10px]">Close</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="mt-8 flex flex-col px-7">
        <h4 className="font-bold text-xl text-gray-900 mb-4">
          Are you absolutely sure?
        </h4>
        <p className="text-sm font-semibold text-gray-600">
          This action cannot be undone. This will permanently delete this
          administrator&apos;s account and remove their data from our servers.
        </p>

        <div className="flex flex-col font-medium gap-y-1 text-muted-foreground text-sm my-4">
          <h5 className="font-bold text-gray-800">Account Details</h5>
          <p>
            Name: <span>{adminDetails.name}</span>
          </p>
          <p>
            Email: <span>{adminDetails.email}</span>
          </p>
          <p>
            Contact: <span>{adminDetails.contactNumber}</span>
          </p>
          <p>
            id: <span>{adminDetails.id}</span>
          </p>
        </div>

        <div className="flex items-center justify-end gap-x-6 mt-4 mb-8">
          <button
            type="button"
            onClick={handleDeleteClick}
            className="py-3 w-28 text-[13px] font-semibold bg-gray-900/10 rounded-md hover:bg-gray-900/20"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() =>
              console.log('TODO: Do some deleting on the api or something')
            }
            className="py-3 w-28 text-[13px] font-semibold bg-red-500 rounded-md hover:bg-red-600 text-gray-50"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAdminCard;
