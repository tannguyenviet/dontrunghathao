import { Col, Row } from 'antd';
import PhoneIcon from 'assets/svg/Phone';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import styles from './styles.module.less';
const Footer = () => {
  const handleScroll = (sectionId: string) => {
    // const selector = "#" + sectionId ;
    const element = document.getElementById(sectionId);

    window?.scrollTo({
      top: element?.offsetTop - 120,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={styles.footer}>
      <div className={styles.spacing}>
        <Row>
          <Col md={24} lg={24} xl={13} className={styles.location}>
            <div className={styles.wrapText}>
              <div className={styles.lineText}>
                <div className={clsx(styles.wrapImage)}>
                  <Image objectFit="cover" width={24} height={24} alt="location" src="/images/location.png"></Image>
                </div>
                <p>31 Patch Circuit, Laverton North 3026 Melbourne, Victoria, Australia </p>
              </div>
              <div className={styles.lineText}>
                <div className={clsx(styles.wrapImage)}>
                  <Image objectFit="cover" width={24} height={24} alt="location" src="/images/location.png"></Image>
                </div>
                <p>135/31 Trần Hưng Đạo, Phường Cầu Ông Lãnh, Quận 1, Việt Nam </p>
              </div>
              <div className={styles.lineText}>
                <div className={clsx(styles.wrapImage)}>
                  <Image objectFit="cover" width={24} height={24} alt="location" src="/images/location.png"></Image>
                </div>
                <p>2929 Westheimer Road  702 Houston, TX. 77098  US </p>
              </div>
            </div>
          </Col>
          <Col className={styles.contact} sm={24} md={12} lg={8} xl={5}>
            {/* <div className={styles.cardContact}>
              <div className={styles.wrapImage}>
                <Image width={20} height={20} alt="phone" src="/images/phone.png"></Image>
              </div>
              <div className={styles.text}>
                <strong>AUS-Sydney:</strong> +61417202439
                <br /> <strong>Daniel Hearn</strong>
              </div>
            </div> */}
            <div className={styles.cardContact}>
              <div className={clsx(styles.wrapImage)}>
                <Image objectFit="contain" width={20} height={20} alt="phone" src="/images/phone.png"></Image>
              </div>
              <div className={styles.text}>
                <strong>AUS-Australia:</strong> +61411139957 <br /> <strong>Joe Nguyen</strong>
              </div>
            </div>
            <div className={styles.cardContact}>
              <div className={clsx(styles.wrapImage, styles.hidden)}>
                <Image objectFit="contain" width={20} height={20} alt="phone" src="/images/phone.png"></Image>
              </div>
              {/* <div className={styles.text}>
                <strong>Vietnam:</strong> +84905325555 <br /> <strong>Hua Hai Long</strong>
              </div> */}
            </div>
            <div className={styles.cardContact}>
              <div className={clsx(styles.wrapImage)}>
                <Image objectFit="contain" width={20} height={20} alt="phone" src="/images/email.png"></Image>
              </div>
              <div className={styles.text}>business@ids-networks.com.au</div>
            </div>
            <div className={clsx(styles.cardContact, styles.wrapIcon)}>
              <div className={styles.wrapImage}>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/intelligentdirectsourcing">
                  <Image alt="facebook" width={32} height={32} src="/images/facebook.png"></Image>
                </a>
              </div>
              <div className={styles.wrapImage}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/intelligent-direct-sourcing-group"
                >
                  <Image alt="linkedin" width={32} height={32} src="/images/linkedin.png"></Image>
                </a>
              </div>
              <div className={styles.wrapImage}>
                <a target="_blank" rel="noreferrer" href="https://instagram.com/idsnetworks?igshid=YmMyMTA2M2Y=">
                  <Image alt="instagram" width={32} height={32} src="/images/instagram-5.png"></Image>
                </a>
              </div>
            </div>
          </Col>
          <Col className={clsx(styles.listSection)} sm={24} md={12} lg={8} xl={6}>
            <div className={styles.row}>
              <div
                onClick={() => {
                  handleScroll('aboutUs');
                }}
                className={styles.text}
              >
                <a href="">About Us</a>
              </div>
              <div
                onClick={() => {
                  handleScroll('journey');
                }}
                className={styles.text}
              >
                <a href="">Journey</a>
              </div>
            </div>
            <div className={styles.row}>
              <div
                onClick={() => {
                  handleScroll('whyIDS');
                }}
                className={styles.text}
              >
                <a href="">Why IDS</a>
              </div>
              <div
                onClick={() => {
                  handleScroll('product');
                }}
                className={styles.text}
              >
                <a href="">Products</a>
              </div>
            </div>
            <div className={styles.row}>
              <div
                onClick={() => {
                  handleScroll('project');
                }}
                className={styles.text}
              >
                <a href="">Projects</a>
              </div>
              <div
                
                className={styles.text}
              >
                <a href="/news">News</a>
              </div>
            </div>
            <div className={styles.row}>
              <div
                onClick={() => {
                  handleScroll('client');
                }}
                className={styles.text}
              >
                <a href="">Team</a>
              </div>
              <div
                onClick={() => {
                  handleScroll('client');
                }}
                className={styles.text}
              >
                <a href="">Clients</a>
              </div>
            </div>

          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
