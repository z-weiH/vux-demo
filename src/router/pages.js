let pages = [
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
];

export default pages