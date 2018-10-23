let pages = [
  {
    path : '/',
    redirect : '/index',
  },
  {
    path : '/index',
    component : resolve => require(['@/views/index'], resolve),
    meta : {
      weight : 1,
    },
  },
  {
    path : '/shoucang',
    component : resolve => require(['@/views/shoucang'], resolve),
    meta : {
      weight : 2,
    },
  },
  {
    path : '/wode',
    component : resolve => require(['@/views/wode'], resolve),
    meta : {
      weight : 3,
    },
  },
  {
    path : '/arb',
    component : resolve => require(['@/views/arb/index'], resolve),
    children : [
      {
        path : 'login',
        component : resolve => require(['@/views/arb/login'], resolve),
        meta : {
          title : '账号登录'
        },
      }
    ],
  },
];

export default pages