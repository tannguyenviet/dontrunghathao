import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.less';

const Spacing = ({ children, className }: any) => {
  return <div className={clsx(styles.spacing, className)}>{children}</div>;
};

export default Spacing;
