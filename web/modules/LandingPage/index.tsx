import React, { useEffect, useRef } from 'react';
import styles from './styles.module.less';
import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { getAccount } from '../../store/ducks/account/slice';
import { useAppSelector } from 'hooks/reduxHook';
import { Button, Col, Row, Tooltip } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import { typeList } from 'antd/lib/message';
import { imageOptimizer } from 'next/dist/server/image-optimizer';
import { text } from 'stream/consumers';
import clsx from 'clsx';
import Carousel from 'components/Carousel/Carousel';
import Slider from 'components/Carousel/Carousel';
import OurProject from 'components/OurProject';
import NextIcon from 'assets/svg/Next';
import PhoneIcon from 'assets/svg/Phone';
import EmailIcon from 'assets/svg/Email';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
const LandingPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  // const account = useAppSelector(getAccount);
  const { loginWithRedirect, logout, user } = useAuth0();
  const aboutUsRef = useRef(null);
  useEffect(() => {
    const query = router.query?.act;
    if (query) {
      handleScroll(query as string);
    }
  }, [router]);

  const handleScroll = (sectionId: string) => {
    // const selector = "#" + sectionId ;
    const element = document.getElementById(sectionId);
    window?.scrollTo({
      top: element?.offsetTop - 120,
      left: 0,
      behavior: 'smooth',
    });
    // window.scrollTo(0, aboutUsRef?.offsetTop);
    // currentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start',top:'200px'});
  };
  return (
    <>
      <Header aboutUsRef={aboutUsRef} />
      <div className={clsx(styles.container)}>
        <div data-aos="fade-up" data-aos-duration="1200" className={clsx(styles.sourcing)}>
          <div className={styles.bgImage}>
            <Image objectFit="contain" priority={true} width={868} height={880} src="/images/bg.png" alt="" />
          </div>
          <div className={styles.floatIconLeft}>
            <Image priority={true} width={126} height={212} src="/images/float-icon.png" alt="" />
          </div>
          <div className={styles.floatIconRight}>
            <Image priority={true} width={126} height={212} src="/images/float-icon-right.png" alt="" />
          </div>
          <div className={clsx(styles.wrapContent, styles.spacing)}>
            <div className={styles.smallTitle}>{t('sourcing.intel')}</div>
            <div className={styles.title}>
              {t('sourcing.title1')} <br /> {t('sourcing.title2')}
            </div>
            <div className={styles.script}>{t('sourcing.des')}</div>
            <div className={styles.wrapButton}>
              <button
                onClick={() => {
                  handleScroll('contact');
                }}
              >
                {t('sourcing.contactBut')}
              </button>
            </div>
          </div>
        </div>

        <div className={clsx(styles.wrapDivider, styles.dividerShort)}>
          <Image priority={true} alt="divider" width={22} height={111} src="/images/divider.png" />
        </div>

        <div id="aboutUs" className={styles.spacing}>
          <div data-aos="fade-up" data-aos-duration="1200" className={styles.aboutUs}>
            <Row>
              <Col sm={24} md={12}>
                <div className={styles.wrapImage}>
                  <Image objectFit="contain" width={459} height={451} alt="ship" src="/images/ship.png" />
                </div>
              </Col>
              <Col className={styles.right} sm={24} md={12}>
                <div className={styles.aboutTitle}>{t('aboutUs.title')}</div>
                <div className={styles.text}>{t('aboutUs.des1')}</div>
                <div className={styles.text}>{t('aboutUs.des2')}</div>
                <br />
                <div className={styles.text}>{t('aboutUs.des4')}</div>
                <br />
                <div className={styles.text}>{t('aboutUs.des5')}</div>
                <br />
                <div className={styles.text}>{t('aboutUs.des6')}</div>
                <br />
                <div className={styles.text}>{t('aboutUs.des7')}</div>
                <br />
                <div className={styles.text}>{t('aboutUs.des8')}</div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={clsx(styles.wrapDivider)}>
          <Image priority={true} alt="divider" width={22} height={111} src="/images/divider.png" />
        </div>
        {/* <div data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000"> */}
        <div
          id="journey"
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className={clsx(styles.spacing, styles.wrapJourneyId)}
        >
          <Row gutter={[40, 0]} className={clsx(styles.ourJourney)}>
            <Col className={styles.wrapImageLeft} sm={24} md={10}>
              <Image
                priority={true}
                className={styles.imageLeft}
                src="/images/rectangle.png"
                alt="logistic"
                width={426}
                height={492}
                objectFit="cover"
              />
            </Col>
            <Col sm={24} md={14} className={styles.wrapText}>
              <div className={styles.left}>
                <div className={styles.title}>{t('ourJourney.title')}</div>
                <div className={styles.text}>
                  {t('ourJourney.des1')}
                  <br />
                  <br />
                  {t('ourJourney.des2')}
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" className={styles.floatImage}>
          <Col className={clsx(styles.wrapImage, styles.largeTitle)} span={14}>
            <div className={styles.bgImage}>
              <Image
                priority={true}
                objectFit="cover"
                width={905}
                height={574}
                src="/images/global-network.png"
                alt="global-group"
              />
            </div>
            <Image
              priority={true}
              objectFit="cover"
              width={823}
              height={316}
              alt="international"
              className={styles.image}
              src="/images/internationalbuyer.png"
            />
            <div className={styles.textBuyer}>
              <span>{t('ourJourney.buyersTitle')}</span>
              <span>{t('ourJourney.buyer1')}</span>
              <span>{t('ourJourney.buyer2')}</span>
            </div>
          </Col>
          <Col className={styles.wrapImage} span={5}>
            <Image
              priority={true}
              objectFit="cover"
              width={302}
              height={316}
              alt=" employee"
              className={styles.image}
              src="/images/employee.png"
            />
          </Col>
          <Col className={styles.wrapImage} span={5}>
            <Image
              priority={true}
              objectFit="cover"
              width={315}
              height={316}
              alt="hands"
              className={styles.image}
              src="/images/hand.png"
            />
          </Col>
        </Row>
        {/* </div> */}

        <div className={styles.spacing}>
          <Row gutter={[114, 0]} className={styles.offices}>
            <Col className={styles.text} sm={24} md={10}>
              {t('ourJourney.des3')}
            </Col>
            <Col className={styles.contents} sm={24} md={14}>
              <div className={styles.rank}>
                <span>#4</span>
                <span className={styles.text}>{t('offices.title')}</span>
              </div>
              <div className={styles.places}>
                <div className={styles.space}>
                  <div>{t('offices.country1')}</div>
                  <div className={styles.mainText}>{t('offices.office1')}</div>
                </div>
                <div className={styles.space}>
                  <div>{t('offices.country2')}</div>
                  <div className={styles.mainText}>{t('offices.office2')}</div>
                </div>
                <div className={styles.space}>
                  <div>{t('offices.country3')}</div>
                  <div className={styles.mainText}>{t('offices.office3')}</div>
                </div>
                <div className={styles.space}>
                  <div>{t('offices.country4')}</div>
                  <div className={styles.mainText}>{t('offices.office4')}</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.spacing}>
          <div className={styles.visionMission}>
            <Row data-aos="fade-left" data-aos-duration="1500" className={styles.section}>
              <Col className={styles.left} xs={24} sm={24} md={14}>
                <div className={styles.wrapImage}>
                  <Image objectFit="contain" width={526} height={347} src="/images/truck.png" alt="truck"></Image>
                </div>
              </Col>
              <Col xs={24} sm={24} md={10} className={styles.right}>
                <div className={styles.sectionTitle}>{t('vision.title')}</div>
                <div className={styles.text}>
                  {t('vision.des1')}
                  <br /> {t('vision.des2')}
                </div>
              </Col>
            </Row>
            <Row data-aos="fade-right" data-aos-duration="1500" className={clsx(styles.section, styles.missionSection)}>
              <Col xs={24} sm={24} md={11} lg={11} className={styles.right}>
                <div className={styles.sectionTitle}>{t('mission.title')}</div>
                <div className={styles.text}>{t('mission.des')}</div>
              </Col>
              <Col xs={24} sm={24} className={styles.left} md={13} lg={13}>
                <div className={styles.wrapImage}>
                  <Image objectFit="contain" width={526} height={347} src="/images/shipper.png" alt="truck"></Image>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.coreValue}>
            <div data-aos="zoom-in-down" data-aos-duration="1200" className={styles.coreTitle}>
              {t('coreValue.title')}
            </div>
            <Row gutter={[20, 0]} className={styles.features}>
              <Col data-aos="zoom-in-down" data-aos-duration="1500" className={styles.feature}>
                <Image priority={true} alt="feature" width={40} height={40} src={'/images/feature-1.png'}></Image>
                <div className={styles.featureTitle}>{t('coreValue.core1')}</div>
                <div className={styles.text}>{t('coreValue.desCore1')}</div>
              </Col>
              <Col data-aos="zoom-in-down" data-aos-duration="1800" className={styles.feature}>
                <Image priority={true} alt="feature" width={40} height={40} src={'/images/feature-2.png'}></Image>
                <div className={styles.featureTitle}>{t('coreValue.core2')}</div>
                <div className={styles.text}>{t('coreValue.desCore2')}</div>
              </Col>
              <Col data-aos="zoom-in-down" data-aos-duration="2100" className={styles.feature}>
                <Image priority={true} alt="feature" width={40} height={40} src={'/images/feature-3.png'}></Image>
                <div className={styles.featureTitle}>{t('coreValue.core3')}</div>
                <div className={styles.text}>{t('coreValue.desCore3')}</div>
              </Col>
              <Col data-aos="zoom-in-down" data-aos-duration="2400" className={styles.feature}>
                <Image priority={true} alt="feature" width={40} height={40} src={'/images/feature-4.png'}></Image>
                <div className={styles.featureTitle}>{t('coreValue.core4')} </div>
                <div className={styles.text}>{t('coreValue.desCore4')}</div>
              </Col>
              <Col data-aos="zoom-in-down" data-aos-duration="2700" className={styles.feature}>
                <Image priority={true} alt="feature" width={40} height={40} src={'/images/feature-5.png'}></Image>
                <div className={styles.featureTitle}>{t('coreValue.core5')} </div>
                <div className={styles.text}>{t('coreValue.desCore5')}</div>
              </Col>
            </Row>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1500" className={styles.thinking}>
          <Image
            priority={true}
            sizes="fill"
            objectFit="cover"
            width={1320}
            height={342}
            className={styles.bgImage}
            src="/images/banner.png"
            alt="grid-1-banner"
          />
          <div className={styles.contentImage}>
            <Image priority={true} width={72} height={64} className={styles.comma} src="/images/comma.png" alt="" />
            <span> When you think of product sourcing made easy, think of us! </span>
            <Image
              priority={true}
              width={72}
              height={64}
              className={styles.commaRotate}
              src="/images/comma.png"
              alt=""
            />

            <span className={styles.smallTitle}>- From IDS team -</span>
          </div>
        </div>
        <div className={styles.wrapDivider}>
          <Image priority={true} alt="divider" width={22} height={111} src="/images/divider.png" />
        </div>
        <div id="whyIDS" data-aos="zoom-in-down" data-aos-duration="1200" className={styles.wrapWhy}>
          <div className={styles.floatIconLeft}>
            <Image priority={true} width={126} height={212} src="/images/float-icon.png" alt="" />
          </div>
          <div className={styles.background}>
            <Image
              alt="background"
              width={1960}
              height={846}
              objectFit="cover"
              src="/images/background-why.png"
            ></Image>
          </div>
          <div className={styles.spacing}>
            <div className={styles.why}>
              <Row gutter={[54, 0]}>
                <Col className={styles.left} sm={24} md={24} lg={12}>
                  <div className={styles.wrapImage}>
                    <Image
                      priority={true}
                      objectFit="cover"
                      width={535}
                      height={535}
                      src="/images/handshake.png"
                      alt="handshake w"
                    ></Image>
                  </div>
                </Col>
                <Col className={styles.right} sm={24} md={24} lg={12}>
                  <div className={styles.whyTitle}>{t('whyIds.title')}</div>
                  <div className={styles.features}>
                    <Row data-aos="fade-left" data-aos-duration="1500" className={styles.feature}>
                      <Col sm={24} md={14} className={styles.leftFeature}>
                        <div className={styles.wrapImage}>
                          <Image
                            priority={true}
                            width={40}
                            height={40}
                            alt="why-feature"
                            src="/images/why-feature-1.png"
                          />
                        </div>
                        <div className={styles.featureTitle}>{t('whyIds.reason1')}</div>
                      </Col>
                      <Col sm={24} md={10} className={styles.text}>
                        {t('whyIds.des1')}
                      </Col>
                    </Row>
                    <Row data-aos="fade-left" data-aos-duration="1800" className={styles.feature}>
                      <Col sm={24} md={14} className={styles.leftFeature}>
                        <div className={styles.wrapImage}>
                          <Image
                            priority={true}
                            width={40}
                            height={40}
                            alt="why-feature"
                            src="/images/why-feature-2.png"
                          />
                        </div>
                        <div className={styles.featureTitle}>{t('whyIds.reason2')}</div>
                      </Col>
                      <Col sm={24} md={10} className={styles.text}>
                        {t('whyIds.des2')}
                      </Col>
                    </Row>
                    <Row data-aos="fade-left" data-aos-duration="2100" className={styles.feature}>
                      <Col sm={24} md={14} className={styles.leftFeature}>
                        <div className={styles.wrapImage}>
                          <Image
                            priority={true}
                            width={40}
                            height={40}
                            alt="why-feature"
                            src="/images/why-feature-3.png"
                          />
                        </div>
                        <div className={styles.featureTitle}>{t('whyIds.reason3')}</div>
                      </Col>
                      <Col sm={24} md={10} className={styles.text}>
                        {t('whyIds.des3')}
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className={styles.wrapDivider}>
          <Image priority={true} alt="divider" width={22} height={111} src="/images/divider.png" />
        </div>

        <div id="product" data-aos="fade-up" data-aos-duration="1500" className={styles.gallery}>
          <div className={clsx(styles.item, styles.item1)}>
            <span className={styles.titleProduct}>
              {t('productDiversity.title1')} <br /> {t('productDiversity.title2')}
            </span>
          </div>
          <div className={clsx(styles.item, styles.item2)}>
            <Image
              priority={true}
              width={'477px'}
              height={'498px'}
              className={styles.comma}
              src="/images/grid-1.png"
              alt=""
            />
            <div className={styles.wrapContent}>
              <div className={styles.itemTitle}>{t('productDiversity.product1')} </div>
              <div className={styles.wrapContact}>
                <a href="">{t('productDiversity.contact1')}</a>
                <Image src="/images/small-next.png" width={21} height={13.5}></Image>
              </div>
            </div>
          </div>
          <div className={clsx(styles.item, styles.item3)}>
            <Image
              priority={true}
              width={'477px'}
              height={'498px'}
              className={styles.comma}
              src="/images/grid-2.png"
              alt=""
            />
            <div className={styles.wrapContent}>
              <div className={styles.itemTitle}>{t('productDiversity.product2')}</div>
              <div className={styles.wrapContact}>
                <a href="">{t('productDiversity.contact2')}</a>
                <Image src="/images/small-next.png" width={21} height={13.5}></Image>
              </div>
            </div>
          </div>
          <div className={clsx(styles.item, styles.item4)}>
            <Image
              priority={true}
              width={'477px'}
              height={'498px'}
              className={styles.comma}
              src="/images/grid-6.png"
              alt=""
            />
            <div className={styles.wrapContent}>
              <div className={styles.itemTitle}>{t('productDiversity.product3')}</div>
              <div className={styles.wrapContact}>
                <a href="">{t('productDiversity.contact3')}</a>
                <Image src="/images/small-next.png" width={21} height={13.5}></Image>
              </div>
            </div>
          </div>
          <div className={clsx(styles.item, styles.item5)}>
            <Image
              priority={true}
              width={'477px'}
              height={'498px'}
              className={styles.comma}
              src="/images/grid-4.png"
              alt=""
            />
            <div className={styles.wrapContent}>
              <div className={styles.itemTitle}>{t('productDiversity.product4')}</div>
              <div className={styles.wrapContact}>
                <a href="">{t('productDiversity.contact4')}</a>
                <Image src="/images/small-next.png" width={21} height={13.5}></Image>
              </div>
            </div>
          </div>
          <div className={clsx(styles.item, styles.item6)}>
            <Image
              priority={true}
              width={'477px'}
              height={'498px'}
              className={styles.comma}
              src="/images/grid-5.png"
              alt=""
            />
            <div className={styles.wrapContent}>
              <div className={styles.itemTitle}>{t('productDiversity.product5')}</div>
              <div className={styles.wrapContact}>
                <a href="">{t('productDiversity.contact5')}</a>
                <Image src="/images/small-next.png" width={21} height={13.5}></Image>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(styles.wrapDivider, styles.hiddenMd)}>
          <Image priority={true} alt="divider" width={22} height={111} src="/images/divider.png" />
        </div>
        <div id="project" data-aos="zoom-in-up" data-aos-duration="800" className={styles.spacing}>
          <OurProject />
        </div>

        <div className={styles.wrapDivider}>
          <Image priority={true} alt="divider" width={22} height={111} src="/images/divider.png" />
        </div>
        <div id="team" className={styles.spacing}>
          <div className={styles.ourTeam}>
            <div className={styles.teamTitle}>{t('ourTeam.title')}</div>
            <div className={styles.description}>
              {t('ourTeam.des1')}
              <br />
              <br />
              {t('ourTeam.des2')}
            </div>
            <Row gutter={[16, 0]} className={styles.listCard}>
              <Col data-aos="fade-left" data-aos-duration="900" className={styles.card} xs={24} sm={12} md={12} lg={8}>
                <div className={styles.wrapCard}>
                  <div className={styles.header}>
                    <span className={styles.name}>{t('ourTeam.name1')}</span>
                    <span className={styles.wrapImages}>
                      <span
                        onClick={() => {
                          handleScroll('contact');
                        }}
                        className={styles.wrapIcon}
                      >
                        <PhoneIcon />
                      </span>

                      <Tooltip title="joe@ids-networks.com">
                        <span className={styles.wrapIcon}>
                          <EmailIcon />
                        </span>
                      </Tooltip>
                    </span>
                  </div>
                  <div className={styles.job}>{t('ourTeam.pos1')}</div>
                  <div className={styles.wrapAvatar}>
                    <Image
                      priority={true}
                      sizes={'fill'}
                      objectFit="cover"
                      alt="avatar"
                      src="/images/avatar-1.png"
                      className={styles.avatar}
                      width={222}
                      height={222}
                    />
                  </div>
                  <div className={styles.script}>{t('ourTeam.desPos1')}</div>
                </div>
              </Col>
              <Col data-aos="fade-left" data-aos-duration="1300" className={styles.card} xs={24} sm={12} md={12} lg={8}>
                <div className={styles.wrapCard}>
                  <div className={styles.header}>
                    <span className={styles.name}>{t('ourTeam.name2')}</span>
                    <span className={styles.wrapImages}>
                      <span
                        onClick={() => {
                          handleScroll('contact');
                        }}
                        className={styles.wrapIcon}
                      >
                        <PhoneIcon />
                      </span>
                      <Tooltip title="huahailong@ids-networks.com">
                        <span className={styles.wrapIcon}>
                          <EmailIcon />
                        </span>
                      </Tooltip>
                    </span>
                  </div>
                  <div className={styles.job}>{t('ourTeam.pos2')}</div>
                  <div className={styles.wrapAvatar}>
                    <Image
                      priority={true}
                      sizes={'fill'}
                      objectFit="cover"
                      alt="avatar"
                      src="/images/avatar-2.png"
                      className={styles.avatar}
                      width={222}
                      height={222}
                    />
                  </div>
                  <div className={styles.script}>{t('ourTeam.desPos2')}</div>
                </div>
              </Col>
              <Col data-aos="fade-left" data-aos-duration="1700" className={styles.card} xs={24} sm={12} md={12} lg={8}>
                <div className={styles.wrapCard}>
                  <div className={styles.header}>
                    <span className={styles.name}>{t('ourTeam.name3')}</span>
                    <span className={styles.wrapImages}>
                      <span
                        onClick={() => {
                          handleScroll('contact');
                        }}
                        className={styles.wrapIcon}
                      >
                        <PhoneIcon />
                      </span>
                      <Tooltip title="kennytran@ids-networks.com">
                        <span className={styles.wrapIcon}>
                          <EmailIcon />
                        </span>
                      </Tooltip>
                    </span>
                  </div>
                  <div className={styles.job}>{t('ourTeam.pos3')}</div>
                  <div className={styles.wrapAvatar}>
                    <Image
                      priority={true}
                      sizes={'fill'}
                      objectFit="cover"
                      alt="avatar"
                      src="/images/avatar-3.png"
                      className={styles.avatar}
                      width={222}
                      height={222}
                    />
                  </div>
                  <div className={styles.script}>{t('ourTeam.desPos3')}</div>
                </div>
              </Col>
              <Col data-aos="fade-left" data-aos-duration="2100" className={styles.card} xs={24} sm={12} md={12} lg={8}>
                <div className={styles.wrapCard}>
                  <div className={styles.header}>
                    <span className={styles.name}>{t('ourTeam.name4')}</span>
                    <span className={styles.wrapImages}>
                      <span
                        onClick={() => {
                          handleScroll('contact');
                        }}
                        className={styles.wrapIcon}
                      >
                        <PhoneIcon />
                      </span>
                      <Tooltip title="dan@ids-networks.com">
                        <span className={styles.wrapIcon}>
                          <EmailIcon />
                        </span>
                      </Tooltip>
                    </span>
                  </div>
                  <div className={styles.job}>{t('ourTeam.pos4')}</div>
                  <div className={styles.wrapAvatar}>
                    <Image
                      priority={true}
                      sizes={'fill'}
                      objectFit="cover"
                      alt="avatar"
                      src="/images/avatar-4.png"
                      className={styles.avatar}
                      width={222}
                      height={222}
                    />
                  </div>
                  <div className={styles.script}>{t('ourTeam.desPos4')}</div>
                </div>
              </Col>
              <Col data-aos="fade-left" data-aos-duration="2400" className={styles.card} xs={24} sm={12} md={12} lg={8}>
                <div className={styles.wrapCard}>
                  <div className={styles.header}>
                    <span className={styles.name}>{t('ourTeam.name5')}</span>
                    <span className={styles.wrapImages}>
                      <span
                        onClick={() => {
                          handleScroll('contact');
                        }}
                        className={styles.wrapIcon}
                      >
                        <PhoneIcon />
                      </span>
                      <Tooltip title="allan@ids-networks.com">
                        <span className={styles.wrapIcon}>
                          <EmailIcon />
                        </span>
                      </Tooltip>
                    </span>
                  </div>
                  <div className={styles.job}>{t('ourTeam.pos5')}</div>
                  <div className={styles.wrapAvatar}>
                    <Image
                      priority={true}
                      sizes={'fill'}
                      objectFit="cover"
                      alt="avatar"
                      src="/images/avatar.png"
                      className={styles.avatar}
                      width={222}
                      height={222}
                    />
                  </div>
                  <div className={styles.script}>{t('ourTeam.desPos5')}</div>
                </div>
              </Col>
              <Col data-aos="fade-left" data-aos-duration="2700" className={styles.card} xs={24} sm={12} md={12} lg={8}>
                <div className={styles.wrapCard}>
                  <div className={styles.header}>
                    <span className={styles.name}>{t('ourTeam.name6')}</span>
                    <span className={styles.wrapImages}>
                      <span
                        onClick={() => {
                          handleScroll('contact');
                        }}
                        className={styles.wrapIcon}
                      >
                        <PhoneIcon />
                      </span>
                      <Tooltip title="tommy@ids-networks.com">
                        <span className={styles.wrapIcon}>
                          <EmailIcon />
                        </span>
                      </Tooltip>
                    </span>
                  </div>
                  <div className={styles.job}>{t('ourTeam.pos6')}</div>
                  <div className={styles.wrapAvatar}>
                    <Image
                      priority={true}
                      sizes={'fill'}
                      objectFit="cover"
                      alt="avatar"
                      src="/images/avatar-6.png"
                      className={styles.avatar}
                      width={222}
                      height={222}
                    />
                  </div>
                  <div className={styles.script}>{t('ourTeam.desPos6')}</div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles.wrapDivider}>
          <Image priority={true} alt="divider" width={22} height={111} src="/images/divider.png" />
        </div>
        <div id="client" className={styles.spacing}>
          <div className={styles.clientSay}>
            <div data-aos="fade-right" data-aos-duration="1500" className={styles.clientTitle}>
              {t('clientSays.title')}
            </div>
            <Row data-aos="fade-left" data-aos-duration="1500" gutter={[84, 0]}>
              <Col className={styles.left} xs={24} sm={24} md={24} lg={9}>
                <div className={styles.wrapImage}>
                  <div className={styles.bg}>124512512</div>
                  <Image
                    priority={true}
                    className={styles.image}
                    width={384}
                    src="/images/smile-person.png"
                    alt="smile-person"
                    height={384}
                    objectFit="contain"
                  ></Image>
                </div>
              </Col>
              <Col className={styles.right} xs={24} sm={24} md={24} lg={15}>
                <div className={styles.wrapImage}>
                  <Image
                    priority={true}
                    className={styles.image}
                    width={59}
                    height={48}
                    src="/images/comma-blur.png"
                    alt="comma"
                  ></Image>
                </div>
                <div className={styles.text}>{t('clientSays.des')}</div>
                <div className={styles.name}>{t('clientSays.name')}</div>
                <div className={styles.profile}>{t('clientSays.desName')}</div>
              </Col>
            </Row>
          </div>
        </div>
        <div id="contact" className={styles.contactUs}>
          {/* <div className={styles.bg}>12512</div> */}
          <div className={styles.spacing}>
            <Row gutter={[93, 0]}>
              <Col md={16}>
                <div className={styles.header}>
                  <div className={styles.wrapImage}>
                    <Image src="/images/vector-horizon.png" alt="vector" width={235} height={22} />
                  </div>
                  <span className={styles.contactTitle}>{t('contactUs.title')}</span>
                </div>
                <div className={styles.text}>{t('contactUs.des')}</div>
                <Row gutter={[15, 20]}>
                  <Col className={styles.input} span={12}>
                    <input placeholder="First name" type="text" />
                  </Col>
                  <Col className={styles.input} span={12}>
                    <input placeholder="Last name" type="text" />
                  </Col>
                  <Col className={styles.input} span={12}>
                    <input placeholder="Email" type="text" />
                  </Col>
                  <Col className={styles.input} span={12}>
                    <input placeholder="Phone number" type="text" />
                  </Col>
                  <Col className={styles.input} span={24}>
                    <textarea placeholder="Tell us about your products and projects" />
                  </Col>
                  <Col span={5}>
                    <button>{t('contactUs.button')}</button>
                  </Col>
                </Row>
              </Col>
              {/* <Col className={styles.wrapSocial} md={10}>
          <div className={styles.social}>
              <span>{t('contactUs.seeMore')}</span>
              <div className={styles.listIcon}>
                <a className={styles.wrapImage} href="">
                  <Image alt="facebook" width={20} height={40} src="/images/facebook.png"></Image>
                </a>
                <a className={styles.wrapImage} href="">
                  <Image alt="instagram" width={37} height={37} src="/images/linkedin.png"></Image>
                </a>
              </div>
            </div> 
        </Col> */}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
