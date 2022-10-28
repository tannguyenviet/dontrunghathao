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
import Carousel from 'components/Carousel/Carousel';
import Slider from 'components/Carousel/Carousel';

const LandingPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const account = useAppSelector(getAccount);
  const { loginWithRedirect, logout, user } = useAuth0();
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
        <div className={styles.bgImage}>
          <img src="/images/bg.png" alt="" />
        </div>
        <div className={styles.floatIconLeft}>
          <img src="/images/float-icon.png" alt="" />
        </div>
        <div className={styles.floatIconRight}>
          <img src="/images/float-icon-right.png" alt="" />
        </div>
        <div className={clsx(styles.wrapContent, styles.spacing)}>
          <div className={styles.smallTitle}>Intelligent direct sourcing group</div>
          <div className={styles.title}>
            Sourcing Made <br /> Easy & Effective
          </div>
          <div className={styles.script}>
            IDS (Intelligent Direct Sourcing) was founded with the goal of making a connection between worldwide B2B
            clients and manufacturers in Vietnam so as to reach the greatest standards of quality, turnaround time and
            value.
            <br /> <br />
            {`With the perspective of "Making the development of the source of goods and the purchase process
          straightforward and efficient", we always strive to handle the demand of locating sources and acquiring a
          diversity of goods from foreign partners, while also accompanying Vietnamese manufacturers to utilize the
          positive aspects and potentials of Vietnamese commodity elites.`}
          </div>
          <div className={styles.wrapButton}>
            <button>CONTACT US</button>
          </div>
        </div>
      </div>
      <div className={styles.wrapDivider}>
        <img src="/images/divider.png" alt="" />
      </div>

      <div className={styles.spacing}>
        <Row gutter={[40, 0]} className={clsx(styles.ourJourney)}>
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
                expanding its supply network across Vietnam, which is the ideal destination for purchase plans in the
                new context.
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
      </div>
      <Row className={styles.floatImage}>
        <Col className={clsx(styles.wrapImage, styles.largeTitle)} span={14}>
          <div className={styles.bgImage}>
            <img src="/images/global-group.svg" alt="global-group" />
          </div>
          <img className={styles.image} src="/images/internationalbuyer.png" />
          <div className={styles.textBuyer}>
            <span>INTERNATIONAL BUYER</span>
            <span>Australia</span>
            <span>North American</span>
          </div>
        </Col>
        <Col className={styles.wrapImage} span={5}>
          <img className={styles.image} src="/images/employee.png" />
        </Col>
        <Col className={styles.wrapImage} span={5}>
          <img className={styles.image} src="/images/hands.png" />
        </Col>
      </Row>
      <div className={styles.spacing}>
        <Row gutter={[114, 0]} className={styles.offices}>
          <Col span={10}>
            {`IDS has established and consolidated relationships with hundreds of factories producing a wide range of
            goods after one year of operation, such as 5B – Solar Reinvented, VBP Interior, Aldi Supermarket, Austdoor
            Group JSC, Watt EV. Thanks to the goal of diversifying our services, we have thrived and carefully examined
            Vietnam's supply industry.`}
          </Col>
          <Col className={styles.contents} span={14}>
            <div className={styles.rank}>
              <span>#4</span>
              <span className={styles.text}>OFFICES</span>
            </div>
            <div className={styles.places}>
              <div className={styles.space}>
                <div>Australia</div>
                <div className={styles.mainText}>SYSNEY</div>
              </div>
              <div className={styles.space}>
                <div>Australia</div>
                <div className={styles.mainText}>SYSNEY</div>
              </div>
              <div className={styles.space}>
                <div>Australia</div>
                <div className={styles.mainText}>SYSNEY</div>
              </div>
              <div className={styles.space}>
                <div>Australia</div>
                <div className={styles.mainText}>SYSNEY</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.thinking}>
        <img className={styles.bgImage} src="/images/when-you.svg" alt="when-you-banner" />
        <div className={styles.contentImage}>
          <img className={styles.comma} src="/images/comma.png" alt="" />
          <span>When you think of product sourcing made easy, think of us!</span>
          <span className={styles.smallTitle}>- From IDS team -</span>
        </div>
      </div>
      <div className={styles.spacing}>
        <Row gutter={[57, 0]}>
          <Col span={6}></Col>
          <Col span={18}></Col>
        </Row>
      </div>

      <div className={styles.ourProject}>
        <div className={styles.bgLeft}></div>
        <div className={styles.bgRight}></div>
        <div className={styles.left}>
          <div className={styles.titleProject}>Our Projects</div>
          <div className={styles.text}>IDS always wants to be a companion in order to achieve collaborative experiences that create the existent value.</div>
        </div>
        {/* <div className={styles.right}>44444</div> */}
        <div className={styles.wrapSlider}>
         <Slider/>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
