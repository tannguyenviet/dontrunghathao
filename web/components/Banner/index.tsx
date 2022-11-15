import clsx from 'clsx';
import Spacing from 'components/Spacing';
import React from 'react';
import styles from './styles.module.less';

const Banner = ({ title, time, image }:any) => {
  return (
    <div className={clsx(styles.banner, 'w-100 m-auto mb-99')}>
      <img className="cover w-100" src={image} alt="" />
      <Spacing>
        <div className={clsx(styles.textFloat, 'white d-flex f-column')}>
          <span className="mb-8 mt-8">{time}111</span>
          <div className="text-35 white">{title}</div>
        </div>
      </Spacing>
    </div>
  );
};

export default Banner;
