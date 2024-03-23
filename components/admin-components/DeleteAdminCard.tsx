import { X } from 'lucide-react';

import { useClicked } from '@/contexts/ContextProviders';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '../ui/button';

const DeleteAdminCard = () => {
  const { handleDeleteClick, adminDetails } = useClicked();

  return (
    <div className="fixed flex flex-col left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] gap-4 bg-gray-50 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg">
      <div>
        <button
          type="button"
          onClick={handleDeleteClick}
          className="flex items-center justify-center absolute right-0 top-0  w-6 h-6 hover:bg-red-600 text-gray-800 hover:text-gray-50 rounded-tr-lg rounded-bl-sm"
        >
          <X className="h-4 w-4 font-bold" />
        </button>
      </div>

      <div className="px-8">
        <div className="flex justify-between mt-8 mb-2">
          <div className="flex flex-col">
            <h4 className="font-bold text-xl text-gray-900">
              {adminDetails.name}
            </h4>
            <p className="text-xs font-light text-muted-foreground mb-2">
              id: {adminDetails.id}
            </p>
            <p className="text-sm font-semibold text-muted-foreground">
              {adminDetails.email}
            </p>
            <p className="text-xs text-muted-foreground">
              {adminDetails.contactNumber}
            </p>
          </div>
          <div className="flex flex-col gap-y-2 items-end justify-between">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/avatar1.jpg" alt="user-profile" />
              <AvatarFallback>PO</AvatarFallback>
            </Avatar>
            <p className="text-xs text-muted-foreground">Joined 2/12/24</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col px-7">
        <h4 className="font-bold text-xl text-gray-900 mb-4">
          Are you absolutely sure?
        </h4>
        <p className="text-sm font-semibold text-gray-600">
          This action cannot be undone. This will permanently delete this
          administrator&apos;s account and remove their data from our servers.
        </p>

        <div className="flex items-center justify-end gap-x-6 my-6">
          {/* <button
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
            className="py-3 w-28 text-[13px] font-semibold bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md"
          >
            Continue
          </button> */}
          <Button
            onClick={handleDeleteClick}
            variant={'outline'}
            className="hover:bg-gray-900/10 w-28"
            type="button"
          >
            Cancel
          </Button>
          <Button
            onClick={() =>
              console.log('TODO: Do some deleting on the api or something')
            }
            variant={'destructive'}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90 w-28"
            type="button"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAdminCard;
