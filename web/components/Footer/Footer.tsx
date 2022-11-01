import { Col, Row } from 'antd';
import React from 'react';
import styles from './styles.module.less';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <Row>
        <Col lg={14}></Col>
        <Col lg={10}></Col>
      </Row>
    </div>
  );
};

export default Footer;
