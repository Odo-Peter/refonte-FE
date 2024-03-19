import {
  AreaChart,
  BarChart3,
  BookKeyIcon,
  CalendarClock,
  EditIcon,
  GraduationCap,
  Kanban,
  LayoutDashboardIcon,
  LineChart,
  PieChart,
  User,
} from 'lucide-react';

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'overview',
        icon: LayoutDashboardIcon,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'admins',
        icon: User,
      },
      {
        name: 'students',
        icon: GraduationCap,
      },
      {
        name: 'courses',
        icon: BookKeyIcon,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'kanban',
        icon: Kanban,
      },
      {
        name: 'calendar',
        icon: CalendarClock,
      },
      {
        name: 'editor',
        icon: EditIcon,
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'line',
        icon: LineChart,
      },
      {
        name: 'area',
        icon: AreaChart,
      },

      {
        name: 'bar',
        icon: BarChart3,
      },
      {
        name: 'pie',
        icon: PieChart,
      },
    ],
  },
];
