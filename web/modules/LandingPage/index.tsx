import React from 'react';
import styles from './styles.module.less';
import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { getAccount } from '../../store/ducks/account/slice';
import { useAppSelector } from 'hooks/reduxHook';
import { Button, Col, Row } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import { typeList } from 'antd/lib/message';
import { imageOptimizer } from 'next/dist/server/image-optimizer';
import { text } from 'stream/consumers';
import clsx from 'clsx';

const LandingPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const account = useAppSelector(getAccount);
  const { loginWithRedirect, logout, user } = useAuth0();
  console.log({ account, user });
  const myLoader = ({ src, width, quality }: any) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>{t('common.home')}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button
        onClick={() => {
          router.replace({ pathname, query }, asPath, { locale: 'jp' });
        }}
      >
        Change Japan
      </Button>
      <Button onClick={() => loginWithRedirect()}> Login</Button>
      <Button onClick={() => logout({returnTo:'http://localhost:3000'})}> Logout</Button> */}

      <div className={clsx(styles.sourcing, styles.root)}>
        <div className={styles.floatIconLeft}>
          <img src="/images/float-icon.png" alt="" />
        </div>
        <div className={styles.floatIconRight}>
          <img src="/images/float-icon-right.png" alt="" />
        </div>
        <div className={styles.smallTitle}>Intelligent direct sourcing group</div>
        <div className={styles.title}>
          Sourcing Made <br /> Easy & Effective
        </div>
        <div className={styles.script}>
          IDS (Intelligent Direct Sourcing) was founded with the goal of making a connection between worldwide B2B
          clients and manufacturers in Vietnam so as to reach the greatest standards of quality, turnaround time and
          value.
          <br /> <br /> With the perspective of "Making the development of the source of goods and the purchase process
          straightforward and efficient", we always strive to handle the demand of locating sources and acquiring a
          diversity of goods from foreign partners, while also accompanying Vietnamese manufacturers to utilize the
          positive aspects and potentials of Vietnamese commodity elites.
        </div>
        <div className={styles.wrapButton}>
          <button>CONTACT US</button>
        </div>
      </div>
      <div className={styles.wrapDivider}>
        <img src="/images/divider.png" alt="" />
      </div>

      <Row gutter={[40, 0]} className={clsx(styles.ourJourney, styles.root)}>
        <Col className={styles.wrapImageLeft} span={10}>
          <img
            className={styles.imageLeft}
            src="/images/rectangle.png"
            alt="Picture of the author"
            width={426}
            height={492}
          />
        </Col>
        <Col span={14} className={styles.wrapText}>
          <div className={styles.left}>
            <div className={styles.title}>Our Journey</div>
            <div className={styles.text}>
              The journey of IDS began in 2021, inspired by the tenacity of the disastrous effects of the Covid-19
              pandemic. With a team that has both the foresight and the willingness to learn, IDS is constantly
              expanding its supply network across Vietnam, which is the ideal destination for purchase plans in the new
              context.
              <br />
              <br />
              Currently, IDS has not only its headquarters located in Ho Chi Minh City (Vietnam), but also two offices
              in Melbourne (Australia) and Da Nang (Vietnam). We are confident that we can support international
              partners, especially those in North America and Australia, accessing the supply service easily,
              efficiently, and quickly.
            </div>
          </div>
        </Col>
      </Row>
      <Row className={styles.floatImage}>
        <Col className={clsx(styles.wrapImage, styles.largeTitle)} span={14}>
          <img src="/images/internationalbuyer.png" />
          <div className={styles.textBuyer}>
            <span>INTERNATIONAL BUYER</span>
            <span>Australia</span>
            <span>North American</span>
          </div>
        </Col>
        <Col className={styles.wrapImage} span={5}>
          <img src="/images/employee.png" />
        </Col>
        <Col className={styles.wrapImage} span={5}>
          <img src="/images/hands.png" />
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;
