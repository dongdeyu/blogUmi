const routes = [
  /********************************* 首页  **************************************/
  { path: '/', component: '@/pages/home/index', title: '首页', exact: true },
  {
    path: '/home',
    component: '@/pages/home/index',
    title: '首页',
    exact: true,
  },
];
module.exports = routes;
