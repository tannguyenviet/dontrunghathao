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
            <div className={styles.wrapImage}>
              <Image objectFit="cover" width={24} height={24} alt="location" src="/images/location.png"></Image>
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
              <div className={styles.text}>
                <strong>AUS:</strong> +61411139957
                <br /> <strong>Mr.Joe</strong>
              </div>
            </div>
            <div className={styles.cardContact}>
              <div className={clsx(styles.wrapImage, styles.hidden)}>
                <Image objectFit="contain" width={20} height={20} alt="phone" src="/images/phone.png"></Image>
              </div>
              <div className={styles.text}>
                <strong>VN:</strong> +84905325555 <br /> <strong>Mr.Long</strong>
              </div>
            </div>
            <div className={styles.cardContact}>
              <div className={clsx(styles.wrapImage)}>
                <Image objectFit="contain" width={20} height={20} alt="phone" src="/images/email.png"></Image>
              </div>
              <div className={styles.text}>business@ids-networks.com</div>
            </div>
            <div className={clsx(styles.cardContact, styles.wrapIcon)}>
              <div className={styles.wrapImage}>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/intelligentdirectsourcing">
                  <Image width={32} height={32} alt="facebook" src="/images/facebook.png"></Image>
                </a>
              </div>
              <div className={styles.wrapImage}>
                <a target="_blank" rel="noreferrer" href="https://instagram.com/idsnetworks?igshid=YmMyMTA2M2Y=">
                  <Image alt='linkedin' width={32} height={32} src="/images/linkedin.png"></Image>
                </a>
              </div>
              <div className={styles.wrapImage}>
                <a target="_blank" rel="noreferrer" href="https://instagram.com/idsnetworks?igshid=YmMyMTA2M2Y=">
                  <Image alt='instagram' width={32} height={32} src="/images/instagram-2.png"></Image>
                </a>
              </div>
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
