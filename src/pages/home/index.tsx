import React from 'react';
import styles from './index.less';
import Layout from '@/layouts/index';
import MySwiper from '@/component/Swiper/index';

export default (props: any) => {
  console.log(9);
  return (
    <Layout {...props}>
      <div>
        <MySwiper />
      </div>
    </Layout>
  );
};
