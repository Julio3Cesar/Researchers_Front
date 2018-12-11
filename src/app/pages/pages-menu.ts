import { NbMenuItem } from '@nebular/theme';

var authChildren = function(){
  if(localStorage.getItem("email") == null){
    return [{
      title: 'Login',
      link: '/auth/login',
    }, {
      title: 'Register',
      link: '/auth/register',
    }];
  } else {
    return [{
      title: 'Register',
      link: '/auth/register',
    }];
  }
};

var recordsChildren = function(){
  if(localStorage.getItem("email") != null){
    return {
      title: 'Records',
      icon: 'ion-filing',
      children: [
        {
          title: 'Show',
          link: 'records/researches',
        },
      ]
    }
  } else {
    return {
      title: 'Records',
      icon: 'ion-filing',
      children: [
        {
          title: 'Show',
          link: '/auth/login',
        },
      ]
    };
  }
};

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
    icon: 'ion-clipboard',
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
    recordsChildren(),
  {
    title: 'Auth',
    icon: 'nb-locked',
    children:
      authChildren(),
  },
];

