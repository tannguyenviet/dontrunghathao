import { Col, Row } from 'antd';
import React from 'react';
import styles from './styles.module.less';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <Row>
        <Col lg={14}>
          {/* <Image src='/images/'></Image>   */}
          <p>MEL: Level 1, Suite 1, 182 Victoria Parade, East Melbourne 3002, Victoria, Australia</p>
          <p>SYD: Level 26 - 1 Bligh Street, Sydney, 2000, Australia</p>
          <p>HCM: No. 16, 02 Street, Hung Gia 5, Phu My Hung, Tan Phong Ward, 07 District, Ho Chi Minh City</p>
          <p>DN: 01 Le Dinh Tham, Hoa Thuan Dong Ward, Hai Chau District, Da Nang City</p>
        </Col>
        <Col lg={5}>
          <Row></Row>
        </Col>
        <Col lg={5}>
          <Row></Row>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;