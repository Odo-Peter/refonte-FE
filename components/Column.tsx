'use client';

import { ColumnDef } from '@tanstack/react-table';

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
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'contactNumber',
    header: 'Contact',
  },
  {
    accessorKey: 'joined',
    header: 'Joined',
  },
];
