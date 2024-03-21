import Header from '@/components/Header';
import DashboardCard from '@/components/DashboardCard';
import { cardData } from '@/data/cardData';

const Dashboard = () => {
  // const date = new Date();

  return (
    <section className="relative flex flex-col p-8 mt-3 mx-3 bg-white h-full rounded">
      <Header title="Dashboard overview" category="Dashboard" />

      <div className="flex flex-col mb-8 gap-2 md:flex-row md:items-center justify-between">
        <div className="flex flex-col gap-y-1">
          <h2 className="font-semibold text-gray-600">
            Hey Peter, welcome to your dashboard
          </h2>
          <p className="text-gray-400 text-xs">
            Here&apos;s an overview of what&apos;s trending on the platform
            today
          </p>
        </div>

        <div className="absolute top-4 right-4">
          <p className="text-gray-400 text-xs">Tuesday, 10th March, 2024</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 lg:gap-x-10 gap-y-8">
        {cardData.map((data) => (
          <DashboardCard
            key={data.href}
            cardTitle={data.cardTitle}
            totalNumber={data.totalNumber}
            cardColor={data.cardColor}
            href={data.href}
            icon={<data.icon className="h-[28px] w-[28px] text-gray-50" />}
          />
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
