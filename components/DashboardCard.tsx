import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';

interface DashboardProps {
  cardTitle: string;
  icon: any;
  href: string;
  totalNumber: string;
  cardColor: string;
}

const DashboardCard = ({
  cardTitle,
  icon,
  totalNumber,
  href,
  cardColor,
}: DashboardProps) => {
  return (
    <div
      style={{ backgroundColor: `${cardColor}` }}
      className="border shadow-md hover:shadow-xl hover:cursor-pointer p-3 rounded-md w-fit text-gray-50"
    >
      <div className="flex items-center gap-x-4">
        <div className="flex items-center justify-center p-3 rounded-full bg-gray-50/10">
          {icon}
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold text-lg">{cardTitle}</h4>
          <p className="text-sm text-gray-100 pr-2">
            Total on the platform:{' '}
            <span className="font-bold text-gray-100">{totalNumber}</span>
          </p>

          <Link
            href={href}
            className="flex items-center py-2 px-1 opacity-90 hover:opacity-100 text-gray-100 hover:underline justify-between text-xs mt-3 rounded-md"
          >
            View details{' '}
            <span>
              {' '}
              <ArrowRight className="h-4 w-4 hover:text-white" />{' '}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
