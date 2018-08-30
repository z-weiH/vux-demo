let pages = [
  {
    path : '/',
    component : resolve => require(['@/views/root'], resolve), 
    children : [
      {
        path : 'index',
        component : resolve => require(['@/views/index'], resolve), 
      },
      {
        path : 'shoucang',
        component : resolve => require(['@/views/shoucang'], resolve), 
      },
      {
        path : 'wode',
        component : resolve => require(['@/views/wode'], resolve), 
      },
    ],
  },
];

export default pages