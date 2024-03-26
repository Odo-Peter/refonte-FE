import { Skeleton } from '../ui/skeleton';

const TableSkeletonCard = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <Skeleton className="h-10 w-[250px] rounded-md" />
        <Skeleton className="h-10 w-[120px] rounded-md" />
      </div>
      <div className="">
        <Skeleton className="h-[250px] w-full" />
      </div>
    </div>
  );
};

export default TableSkeletonCard;
