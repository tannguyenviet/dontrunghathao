import { Col, Row } from 'antd';
import PhoneIcon from 'assets/svg/Phone';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import styles from './styles.module.less';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.spacing}>
        <Row>
          <Col md={24} lg={24} xl={13} className={styles.location}>
            <div>
              <div className={styles.wrapImage}>
                <Image objectFit="contain" width={18} height={22} alt="location" src="/images/location.png"></Image>
              </div>
            </div>

            <div className={styles.wrapText}>
              <p>MEL: Level 1, Suite 1, 182 Victoria Parade, East Melbourne 3002, Victoria, Australia</p>
              <p>SYD: Level 26 - 1 Bligh Street, Sydney, 2000, Australia</p>
              <p>HCM: No. 16, 02 Street, Hung Gia 5, Phu My Hung, Tan Phong Ward, 07 District, Ho Chi Minh City</p>
              <p>DN: 01 Le Dinh Tham, Hoa Thuan Dong Ward, Hai Chau District, Da Nang City</p>
            </div>
          </Col>
          <Col className={styles.contact} sm={24} md={12} lg={8} xl={5}>
            <div className={styles.cardContact}>
              <div className={styles.wrapImage}>
                <Image width={20} height={20} alt="phone" src="/images/phone.png"></Image>
              </div>
              <div className={styles.text}>AUS: +61411139957</div>
            </div>
            <div className={styles.cardContact}>
              <div className={clsx(styles.wrapImage, styles.hidden)}>
                <Image objectFit="contain" width={20} height={16} alt="phone" src="/images/email.png"></Image>
              </div>
              <div className={styles.text}>VN: +84905325555</div>
            </div>
            <div className={styles.cardContact}>
              <div className={clsx(styles.wrapImage, styles.hidden)}>
                <Image objectFit="contain" width={20} height={16} alt="phone" src="/images/email.png"></Image>
              </div>
              <div className={styles.text}>business@ids.com</div>
            </div>
          </Col>
          <Col className={clsx(styles.listSection, styles.hiddenMd)} sm={24} md={12} lg={8} xl={6}>
            <div className={styles.row}>
              <div className={styles.text}>OUR JOURNEY</div>
              <div className={styles.text}>OUR LEADERS</div>
            </div>
            <div className={styles.row}>
              <div className={styles.text}>WHY IDS</div>
              <div className={styles.text}>OUR CLIENTS</div>
            </div>
            <div className={styles.row}>
              <div className={styles.text}>PRODUCT DIVERSITY</div>
              <div className={styles.text}>CONTACT US</div>
            </div>

            <div className={styles.row}>
              <div className={styles.text}>OUR PROJECT</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;