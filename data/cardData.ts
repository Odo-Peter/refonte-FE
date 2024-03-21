import {
  AppWindow,
  BadgeDollarSign,
  BookKeyIcon,
  GraduationCap,
  Scroll,
  User,
} from 'lucide-react';

export const cardData = [
  {
    cardTitle: 'Admins',
    href: '/admins',
    icon: User,
    totalNumber: '02',
    cardColor: 'hsl(195, 64%, 52%)',
  },
  {
    cardTitle: 'Students',
    href: '/students',
    icon: GraduationCap,
    totalNumber: '30',
    cardColor: 'hsl(15, 100%, 70%)',
  },
  {
    cardTitle: 'Courses',
    href: '/courses',
    icon: BookKeyIcon,
    totalNumber: '14',
    cardColor: 'hsl(348, 100%, 68%)',
  },
  {
    cardTitle: 'Applications',
    href: '/applications',
    icon: AppWindow,
    totalNumber: '12',
    cardColor: 'hsl(43, 74%, 55%)',
  },
  {
    cardTitle: 'Enrollment',
    href: '/enrollment',
    icon: Scroll,
    totalNumber: '29',
    cardColor: 'hsl(264, 64%, 52%)',
  },
  {
    cardTitle: 'Earnings',
    href: '/earnings',
    icon: BadgeDollarSign,
    totalNumber: '30K',
    cardColor: 'hsl(145, 58%, 45%)',
  },
];
