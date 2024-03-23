import { X } from 'lucide-react';

import { useClicked } from '@/contexts/ContextProviders';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AdminProfileCard = () => {
  const { handleViewClick } = useClicked();

  return (
    <div className="fixed pb-8 flex flex-col left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] gap-4 bg-gray-50 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg">
      <div className="relative w-full h-32 rounded-t-lg bg-gradient-to-r from bg-cyan-600 to to-blue-700">
        <div>
          <Avatar className="absolute -bottom-10 h-24 w-24 border-[3px] border-gray-50 left-[50%] -translate-x-[50%]">
            <AvatarImage src="/avatar1.jpg" alt="user-profile" />
            <AvatarFallback>PO</AvatarFallback>
          </Avatar>
        </div>

        <button
          type="button"
          onClick={handleViewClick}
          className="flex items-center justify-center absolute right-0 top-0  w-6 h-6 hover:bg-red-600 rounded-tr-lg rounded-bl-sm"
        >
          <X className="text-gray-50 h-4 w-4 font-bold" />
        </button>
      </div>

      <div className="px-8">
        <div className="flex justify-between mt-8 mb-2">
          <div className="flex flex-col">
            <h4 className="font-bold text-2xl text-gray-900">Peter Odo</h4>
            <p className="text-xs font-light text-muted-foreground mb-2">
              id: 75edgdsf637qlsdsdt08ilm2
            </p>
            <p className="text-sm font-semibold text-muted-foreground">
              peter@mail.com
            </p>
            <p className="text-xs text-muted-foreground">(+234) 9068101500</p>
            {/* <p className="text-sm font-semibold text-muted-foreground">
          peter@mail.com
        </p>
        <p className="text-xs text-muted-foreground">(+234) 9068101500</p> */}
          </div>

          <div className="flex items-end">
            <p className="text-xs text-muted-foreground">Joined 2/12/24</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfileCard;
