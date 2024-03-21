'use client';

import { ColumnDef } from '@tanstack/react-table';

import { toast } from 'react-toastify';

import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export type AdminsData = {
  id: string;
  name: string;
  contactNumber: string;
  email: string;
  joined: string;
};

export const columns: ColumnDef<AdminsData>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className="ml-2 h-3 w-3" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <ArrowUpDown className="ml-2 h-3 w-3" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'contactNumber',
    header: 'Contact',
  },
  {
    accessorKey: 'joined',
    header: 'Joined',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const admin = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                toast.success(`Successfully copied ${admin.id}`, {
                  position: 'top-center',
                });
                return navigator.clipboard.writeText(admin.id);
              }}
            >
              Copy admin ID
            </DropdownMenuItem>

            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() =>
                console.log('TODO: Implement open specific admin page')
              }
            >
              View admin details
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() =>
                console.log('TODO: Implement open specific admin page')
              }
            >
              Update admin details
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() =>
                console.log('TODO: Implement open specific admin page')
              }
            >
              Delete admin
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
