import { Col, Row } from 'antd';
import clsx from 'clsx';
import Spacing from 'components/Spacing';
import React from 'react';
import styles from './styles.module.less';
const BannerBackground = ({ src, title, text, bgGrey300, revert }: any) => {
  return (
    <Spacing
      className={clsx(
        styles.BannerBackground,
        [bgGrey300 && 'bgGrey300'],

        'py-80 backgroundFull my-60'
      )}
    >
      <Row className={clsx([revert && 'row-revert'])} gutter={[32, 0]}>
        <Col lg={12} md={24}>
          <img className="cover w-100" src={src} alt="" />
        </Col>
        <Col className="f-center f-align-start f-column" lg={12} md={24}>
          <div className="text-30 bolder mb-20">{title}</div>
          <div className="text-16">{text}</div>
        </Col>
      </Row>
    </Spacing>
  );
};

export default BannerBackground;
