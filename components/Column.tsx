/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { ColumnDef } from '@tanstack/react-table';
import { toast } from 'react-toastify';

import { useClicked } from '@/contexts/ContextProviders';

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
import { gql, useMutation } from '@apollo/client';

// export const REMOVE_ADMIN = gql`
//   mutation DeleteAdmin($deleteAdminId: String!) {
//     deleteAdmin(id: $deleteAdminId)
//   }
// `;

// export const deleteAdmin = (adminId: string) => {
//   const [removeAdmin] = useMutation(REMOVE_ADMIN, {
//     refetchQueries: [
//       {
//         query: gql`
//           query GetAdmins {
//             getAdmins {
//               admins {
//                 _id
//                 name
//                 email
//                 contactNumber
//                 role
//                 createdAt
//                 updatedAt
//               }
//             }
//           }
//         `,
//       },
//     ],
//   });

//   removeAdmin({ variables: { id: adminId } });
// };

export type AdminsData = {
  _id: string;
  name: string;
  contactNumber: string;
  email: string;
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
    id: 'actions',
    cell: ({ row }) => {
      const admin = row.original;
      // console.log(admin);
      const {
        handleViewClick,
        handleUpdateClick,
        handleDeleteClick,
        handleAdminDetails,
      } = useClicked();

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
                toast.success(`Successfully copied ${admin._id}`, {});
                return navigator.clipboard.writeText(admin._id);
              }}
            >
              Copy admin ID
            </DropdownMenuItem>

            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                handleAdminDetails(admin);
                handleViewClick();
              }}
            >
              View admin details
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                handleAdminDetails(admin);
                handleUpdateClick();
              }}
            >
              Update admin details
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                handleAdminDetails(admin);
                handleDeleteClick();
              }}
            >
              Delete admin
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
