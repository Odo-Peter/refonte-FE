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
  },
  {
    cardTitle: 'Students',
    href: '/students',
    icon: GraduationCap,
    totalNumber: '30',
  },
  {
    cardTitle: 'Courses',
    href: '/courses',
    icon: BookKeyIcon,
    totalNumber: '14',
  },
  {
    cardTitle: 'Applications',
    href: '/applications',
    icon: AppWindow,
    totalNumber: '12',
  },
  {
    cardTitle: 'Enrollment',
    href: '/enrollment',
    icon: Scroll,
    totalNumber: '29',
  },
  {
    cardTitle: 'Earnings',
    href: '/earnings',
    icon: BadgeDollarSign,
    totalNumber: '30K',
  },
];

// cardTitle, icon, totalNumber
