import { defineConfig } from 'umi';
const routes = require('./src/router');

export default defineConfig({
  publicPath: '/static/',
  hash: true,
  history: {
    type: 'hash',
  },

  routes: routes,
});
