import { NbMenuItem } from '@nebular/theme';

var toManageChildren = function(){
  if(localStorage.getItem("email") != null){
    return [{
        title: 'My researches',
        link: 'to-manage/my-researches',
      },
      {
        title: 'My account',
        link: 'to-manage/my-account',
      },
      {
        title: 'Delete my account',
        link: 'to-manage/delete-my-account',
      }];
  } else {
    return [{
      title: 'Login',
      link: '/auth/login',
    }];
  }
};

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

var records = function(){
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
        link: 'researches/create/0',
      },
    ]
  },
    records(),
  {
    title: 'To Manage',
    icon: 'nb-home',
    children:
      toManageChildren(),
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children:
      authChildren(),
  },
];

