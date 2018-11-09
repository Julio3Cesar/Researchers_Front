import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
{
    title: 'Researchers',
    icon: 'nb-person',
    children: [
      {
        title: 'Show',
        link: 'researchers/show',
      },
    ]
  },
  {
    title: 'Researches',
    icon: 'nb-compose',
    children: [
      {
        title: 'Show',
        link: 'researches/show',
        home: true,
      },
      {
        title: 'Create',
        link: 'researches/create',
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
