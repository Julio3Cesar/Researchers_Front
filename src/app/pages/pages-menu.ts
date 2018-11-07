import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Researches',
    icon: 'nb-compose',
    children: [
      {
        title: 'Create',
        link: '/research/create',
        home: true,
      },
    ]
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
    ],
  },
];
