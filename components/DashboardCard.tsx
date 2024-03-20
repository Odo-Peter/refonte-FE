import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

interface DashboardProps {
  cardTitle: string;
  icon: any;
  href: string;
  totalNumber: string;
}

const DashboardCard = ({
  cardTitle,
  icon,
  totalNumber,
  href,
}: DashboardProps) => {
  return (
    <div className=" bg-gray-500/10 border shadow-md hover:shadow-xl hover:cursor-pointer p-3 rounded-md w-fit">
      <div className="flex items-center gap-x-4">
        <div className="flex items-center justify-center p-2 rounded-full bg-gray-800/10">
          {icon}
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold text-lg ">{cardTitle}</h4>
          <p className="text-sm text-gray-500 pr-2">
            Total on the platform:{' '}
            <span className="font-bold text-gray-800 text-base">
              {totalNumber}
            </span>
          </p>

          <Link
            href={href}
            className="flex items-center py-2 px-3 opacity-90 hover:opacity-100 hover:underline text-gray-600 bg-gray-800/10 hover:bg-gray-950/10 justify-between text-xs mt-3 rounded-md"
          >
            View details{' '}
            <span>
              {' '}
              <ArrowRight className="h-4 w-4" />{' '}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
