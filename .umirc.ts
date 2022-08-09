import { defineConfig } from '@umijs/max';
// umi4 max 的东西几乎都要显式开启 参考：https://umijs.org/docs/introduce/upgrade-to-umi-4
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  mock: {
    include: ['src/pages/**/_mock.ts'],
  },
  request: {},
  dva: {},
  layout: {
    title: '@umijs/max',
    locale: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'yarn',
});
