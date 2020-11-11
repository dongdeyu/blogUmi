/*
 *
 * auther：dongdeyu
 * desciption:swiper components
 * time:2020.11.11
 * */

import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { Carousel } from 'antd';

const contentStyle: IInputInlineStyle = {
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width: '100%',
};
interface IInputInlineStyle {
  color?: string;
  lineHeight?: string | number;
  textAlign?: any;
  background?: string;
  width?: string;
}

export default function MySwiper(props: any) {
  console.log(props);
  useEffect(() => {}, []);
  return (
    <div className={styles.home}>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <img className={styles.swiperImg} src="banner1.jpg" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img className={styles.swiperImg} src="banner2.jpg" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img className={styles.swiperImg} src="banner3.jpg" />
          </h3>
        </div>
      </Carousel>
    </div>
  );
}
