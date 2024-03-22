import { useClicked } from '@/contexts/ContextProviders';

import AdminProfileCard from '../admin-components/AdminProfileCard';
import UpdateAdminCard from '../admin-components/UpdateAdminCard';
import DeleteAdminCard from '../admin-components/DeleteAdminCard';

const ModalContainer = () => {
  const { view, update, toDelete } = useClicked();

  return (
    <div className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
      {view && <AdminProfileCard />}
      {update && <UpdateAdminCard />}
      {toDelete && <DeleteAdminCard />}
    </div>
  );
};

export default ModalContainer;
