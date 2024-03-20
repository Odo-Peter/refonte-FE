import Header from '@/components/Header';
import { columns } from '@/components/Column';
import { DataTable } from '@/components/DataTable';

import { admins } from '@/data/tableData';

const Admins = () => {
  return (
    <section className="relative flex flex-col p-8 mt-3 mx-3 bg-white h-full rounded">
      <Header title="Peter Odo" category="peter@mail.com" />

      <div className="absolute top-4 right-4">
        <p className="text-gray-400 text-xs">Tuesday, 10th March, 2024</p>
      </div>

      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold text-gray-600">
            All active administrators
          </h2>
          <div className="container mx-auto py-10">
            <DataTable columns={columns} data={admins} />
          </div>
        </div>
        <div>Add New Admin</div>
        <div>Find Specific Admin</div>
        <div>Update Admins Info</div>
        <div>Delete Admins</div>
      </div>
    </section>
  );
};

export default Admins;
