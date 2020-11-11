let isSubApp = false;
import { history } from 'umi';
console.log(1230);
export function modifyClientRenderOpts(memo: any) {
  return {
    ...memo,
    rootElement: isSubApp ? 'sub-root' : memo.rootElement,
  };
}

export function patchRoutes({ routes }) {
  routes.unshift({
    path: '/foo',
    exact: true,
    component: require('@/extraRoutes/foo').default,
  });
}

export function render(oldRender) {
  fetch('/api/auth').then(auth => {
    if (auth.isLogin) {
      oldRender();
    } else {
      history.push('/login');
      oldRender();
    }
  });
}
export function onRouteChange({ matchedRoutes: any }) {
  if (matchedRoutes.length) {
    document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
  }
}
