'use client';

import { useState } from 'react';

import { Minus, Plus, X } from 'lucide-react';

import { useClicked } from '@/contexts/ContextProviders';

import { dateConverter } from '@/helpers/dateConverter';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

import EditAdminForm from './EditAdminForm';

const UpdateAdminCard = () => {
  const [openForm, setOpenForm] = useState<boolean>(false);

  const { handleUpdateClick, adminDetails } = useClicked();

  return (
    <div className="fixed pb-8 flex flex-col left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] gap-4 bg-gray-50 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg overflow-x-hidden max-h-screen">
      <button
        type="button"
        onClick={handleUpdateClick}
        className="flex items-center justify-center absolute right-0 top-0  w-6 h-6 hover:bg-red-600 text-gray-800 hover:text-gray-50 rounded-tr-lg rounded-bl-sm"
      >
        <X className="h-4 w-4 font-bold" />
      </button>

      <div className="px-8">
        <div className="flex justify-between mt-8 mb-2">
          <div className="flex flex-col">
            <h4 className="font-bold text-xl text-gray-900">
              {adminDetails.name}
            </h4>
            <p className="text-xs font-light text-muted-foreground mb-2">
              id: {adminDetails._id}
            </p>
            <p className="text-sm font-semibold text-muted-foreground">
              Email: {adminDetails.email}
            </p>
            <p className="text-xs text-muted-foreground">
              Contact: {adminDetails.contactNumber || 'Not available'}
            </p>
          </div>
          <div className="flex flex-col gap-y-2 items-end justify-between">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/avatar1.jpg" alt="user-profile" />
              <AvatarFallback>PO</AvatarFallback>
            </Avatar>
            <p className="text-xs text-muted-foreground">
              Joined: {dateConverter(adminDetails.createdAt)}
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <Button
              onClick={() => setOpenForm((prev) => !prev)}
              variant={'ghost'}
              className="w-1/2 mt-4 text-muted-foreground text-xs text-right border-gray-300"
            >
              Proceed to edit{' '}
              {!openForm ? (
                <Plus className="w-4 h-4 ml-2" />
              ) : (
                <Minus className="w-4 h-4 ml-2" />
              )}
            </Button>
          </div>

          {openForm && <EditAdminForm />}
        </div>
      </div>
    </div>
  );
};

export default UpdateAdminCard;
