import React, { useEffect } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import styles from './index.less';
const routes = require('../router');

const BasicLayout: React.FC = (props: any) => {
  const route = routes.filter((route: any) => {
    return route.path === props.match.path;
  })[0];
  const title = route ? route.title : '';
  return (
    <div className={styles.layout}>
      <Header>
        <div className="logo" />
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout">
        <div className="site-layout-background" style={{ minHeight: 1200 }}>
          {props.children}
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Copyright © dongdeyu.com 版权所有 | 京ICP备11111111号
      </Footer>
    </div>
  );
};

export default BasicLayout;
