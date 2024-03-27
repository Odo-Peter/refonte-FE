'use client';

import { gql, useQuery } from '@apollo/client';

import { useClicked } from '@/contexts/ContextProviders';

import Header from '@/components/Header';
import { columns } from '@/components/Column';

import { DataTable } from '@/components/common/DataTable';
import TableSkeletonCard from '@/components/common/TableSkeletonCard';

import AdminForm from '@/components/admin-components/AdminForm';
import ModalContainer from '@/components/ui/ModalContainer';

import { GET_ADMINS } from '@/helpers/graphql-queries/admin-queries/adminQuery';

const Admins = () => {
  const { view, update, toDelete } = useClicked();
  const { data, loading, error } = useQuery(GET_ADMINS);

  return (
    <section className="relative flex flex-col p-8 mt-3 mx-3 bg-white h-full rounded">
      {(view || update || toDelete) && <ModalContainer />}
      <Header title="Peter Odo" category="peter@mail.com" />

      <div className="absolute top-4 right-4">
        <p className="text-gray-400 text-xs">Tuesday, 10th March, 2024</p>
      </div>

      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold text-gray-600">
            All active administrators
          </h2>
          <div className="container mx-auto py-8">
            {loading ? (
              <TableSkeletonCard />
            ) : data?.getAdmins?.admins ? (
              <DataTable columns={columns} data={data?.getAdmins?.admins} />
            ) : (
              error && (
                <div>
                  Something is wrong, implement error handling {error.message}
                </div>
              )
            )}
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-gray-600">Add new administrator</h2>
          <div className="container mx-auto">
            <AdminForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admins;
