import { Col, Row } from 'antd';
import PhoneIcon from 'assets/svg/Phone';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import styles from './styles.module.less';
const Footer = () => {
  const handleScroll = (sectionId:string) =>{
    console.log('zooo');
    // const selector = "#" + sectionId ;
    const element = document.getElementById(sectionId);
    console.log({sectionId},{element},element?.offsetTop);
    
    window?.scrollTo({
      top: element?.offsetTop-120,
      left: 0,
      behavior: 'smooth'
    });
  }
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
                <strong>AUS-Sydney:</strong> +61417202439
                <br /> <strong>Daniel Hearn</strong>
              </div>
            </div>
            <div className={styles.cardContact}>
              <div className={clsx(styles.wrapImage, styles.hidden)}>
                <Image objectFit="contain" width={20} height={20} alt="phone" src="/images/phone.png"></Image>
              </div>
              <div className={styles.text}>
                <strong>AUS-Melbourne:</strong> +61411139957 <br /> <strong>Joe Nguyen</strong>
              </div>
            </div>
            <div className={styles.cardContact}>
              <div className={clsx(styles.wrapImage, styles.hidden)}>
                <Image objectFit="contain" width={20} height={20} alt="phone" src="/images/phone.png"></Image>
              </div>
              <div className={styles.text}>
                <strong>VN:</strong> +84905325555 <br /> <strong>Hua Hai Long</strong>
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
                  <Image alt='facebook' width={32} height={32} src="/images/facebook.png"></Image>
                </a>
              </div>
              <div className={styles.wrapImage}>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/intelligent-direct-sourcing-group">
                  <Image alt='linkedin' width={32} height={32} src="/images/linkedin.png"></Image>
                </a>
              </div>
              <div className={styles.wrapImage}>
                <a target="_blank" rel="noreferrer" href="https://instagram.com/idsnetworks?igshid=YmMyMTA2M2Y=">
                  <Image alt='instagram' width={32} height={32} src="/images/instagram.png"></Image>
                </a>
              </div>
            </div>
          </Col>
          <Col className={clsx(styles.listSection)} sm={24} md={12} lg={8} xl={6}>
            <div className={styles.row}>
              <div onClick={()=>{handleScroll('aboutUs')}}className={styles.text}>About Us</div>
              <div onClick={()=>{handleScroll('journey')}} className={styles.text}>Journey</div>
            </div>
            <div className={styles.row}>
              <div onClick={()=>{handleScroll('whyIDS')}} className={styles.text}>WHY IDS</div>
              <div onClick={()=>{handleScroll('product')}} className={styles.text}>Product</div>
            </div>
            <div className={styles.row}>
              <div onClick={()=>{handleScroll('project')}} className={styles.text}>Projects</div>
              <div onClick={()=>{handleScroll('team')}} className={styles.text}>Team</div>
            </div>
            <div className={styles.row}>
              <div onClick={()=>{handleScroll('client')}} className={styles.text}>Clients</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
