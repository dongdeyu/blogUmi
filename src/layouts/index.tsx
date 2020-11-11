import React, { useEffect } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
const { Header, Content, Footer } = Layout;
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
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
        <Row>
          <Col flex="100px"></Col>
          <Col flex="auto">
            <Menu theme="light" mode="horizontal">
              <Menu.Item key="1" icon={<MailOutlined />}>
                首页
              </Menu.Item>
              <Menu.Item key="2">全部文章</Menu.Item>
              <Menu.Item key="3">学无止境</Menu.Item>
              <Menu.Item key="4">慢生活</Menu.Item>
              <Menu.Item key="5">关于我的</Menu.Item>
              <Menu.Item key="6">留言板</Menu.Item>
            </Menu>
          </Col>
        </Row>
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
