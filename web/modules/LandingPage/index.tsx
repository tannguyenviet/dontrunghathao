import React, { useRef } from 'react';
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
import OurProject from 'components/OurProject';
import NextIcon from 'assets/svg/Next';
import PhoneIcon from 'assets/svg/Phone';
import EmailIcon from 'assets/svg/Email';
import dynamic from 'next/dynamic';
const Animator = dynamic(
  import('react-scroll-motion').then((it) => it.Animator),
  { ssr: false }
);

import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from 'react-scroll-motion';

const LandingPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const account = useAppSelector(getAccount);
  const { loginWithRedirect, logout, user } = useAuth0();
  const ZoomInScrollOut = batch(FadeIn(), ZoomIn());
  return (
    <ScrollContainer>
      <div className={clsx(styles.container)}>
        <Animator animation={ZoomInScrollOut}>
          <div className={clsx(styles.sourcing)}>
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
              <div className={styles.script}>
                IDS (Intelligent Direct Sourcing) was founded with the goal of making a connection between worldwide B2B
                (Business to Business) clients and manufacturers in Vietnam so as to reach the greatest standards of
                quality, turnaround time and value.
              </div>
              <div className={styles.wrapButton}>
                <button>CONTACT US</button>
              </div>
            </div>
          </div>
        </Animator>

        <div className={clsx(styles.wrapDivider, styles.dividerShort)}>
          <Image priority={true} alt="divider" width={22} height={111} src="/images/divider.png" />
        </div>

        <div className={styles.spacing}>
          <div className={styles.aboutUs}>
            <Row>
              <Col sm={24} md={12}>
                <div className={styles.wrapImage}>
                  <Image objectFit="contain" width={459} height={451} alt="ship" src="/images/ship.png" />
                </div>
              </Col>
              <Col className={styles.right} sm={24} md={12}>
                <div className={styles.aboutTitle}>About Us</div>
                <div className={styles.text}>
                  {`With the perspective of "Making the development of the source of goods and the purchase process
                straightforward and efficient", we always strive to handle the demand of locating sources and acquiring
                a diversity of goods from foreign partners, while also accompanying Vietnamese manufacturers to utilize
                the positive aspects and potentials of Vietnamese commodity elites.`}
                </div>
                <div className={styles.text}>
                  Vietnam, which is a country with a strong institutional foundation, lots of resources as well as
                  reasonable prices, has been actively integrating into the global economy through a broad system of
                  FTAs.
                </div>
                <div className={styles.text}>
                  In the current advantageous macro-environment, IDS's goal is to assist international purchasing units
                  in clarifying and systematizing purchase plans in order to achieve optimal efficiency.
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={clsx(styles.wrapDivider)}>
          <Image priority={true} alt="divider" width={22} height={111} src="/images/divider.png" />
        </div>
        <div className={clsx(styles.spacing, 'container-fluid')}>
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
                <div className={styles.title}>Our Journey</div>
                <div className={styles.text}>
                  The journey of IDS began in 2021, inspired by the tenacity of the disastrous effects of the Covid-19
                  pandemic. With a team that has both the foresight and the willingness to learn, IDS is constantly
                  expanding its supply network across Vietnam, which is the ideal destination for purchase plans in the
                  new context.
                  <br />
                  <br />
                  Currently, IDS has not only its headquarters located in Ho Chi Minh City (Vietnam), but also two
                  offices in Melbourne (Australia) and Da Nang (Vietnam). We are confident that we can support
                  international partners, especially those in North America and Australia, accessing the supply service
                  easily, efficiently, and quickly.
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row className={styles.floatImage}>
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
              <span>INTERNATIONAL BUYER</span>
              <span>Australia</span>
              <span>North American</span>
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
              src="/images/hands.png"
            />
          </Col>
        </Row>
        <div className={styles.spacing}>
          <Row gutter={[114, 0]} className={styles.offices}>
            <Col className={styles.text} sm={24} md={10}>
              {`IDS has established and consolidated relationships with hundreds of factories producing a wide range of
            goods after one year of operation, such as 5B – Solar Reinvented, VBP Interior, Aldi Supermarket, Austdoor
            Group JSC, Watt EV. Thanks to the goal of diversifying our services, we have thrived and carefully examined
            Vietnam's supply industry.`}
            </Col>
            <Col className={styles.contents} sm={24} md={14}>
              <div className={styles.rank}>
                <span>#4</span>
                <span className={styles.text}>OFFICES</span>
              </div>
              <div className={styles.places}>
                <div className={styles.space}>
                  <div>Australia</div>
                  <div className={styles.mainText}>SYDNEY</div>
                </div>
                <div className={styles.space}>
                  <div>Australia</div>
                  <div className={styles.mainText}>MELBOURNE</div>
                </div>
                <div className={styles.space}>
                  <div>Vietnam</div>
                  <div className={styles.mainText}>DANANG</div>
                </div>
                <div className={styles.space}>
                  <div>Vietnam</div>
                  <div className={styles.mainText}>HO CHI MINH</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.spacing}>
          <div className={styles.visionMission}>
            <Row className={styles.section}>
              <Col className={styles.left} xs={24} sm={24} md={14}>
                <div className={styles.wrapImage}>
                  <Image objectFit="contain" width={526} height={347} src="/images/truck.png" alt="truck"></Image>
                </div>
              </Col>
              <Col xs={24} sm={24} md={10} className={styles.right}>
                <div className={styles.sectionTitle}>Vision</div>
                <div className={styles.text}>
                  The top business providing <br /> supply chain services in Vietnam
                </div>
              </Col>
            </Row>
            <Row className={clsx(styles.section, styles.missionSection)}>
              <Col xs={24} sm={24} md={11} lg={11} className={styles.right}>
                <div className={styles.sectionTitle}>Mission</div>
                <div className={styles.text}>
                  {`IDS is a bridge that creates value for the possibility of developing international enterprises and businesses in Vietnam. We provide the greatest service experience to B2B clients (Business to Business) with the criterion "Quality - Speed – Value”. `}
                </div>
              </Col>
              <Col xs={24} sm={24} className={styles.left} md={13} lg={13}>
                <div className={styles.wrapImage}>
                  <Image objectFit="contain" width={526} height={347} src="/images/shipper.png" alt="truck"></Image>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* <div className={styles.spacingVision}>
        <div className={styles.vision}>
          <Row>
            <Col className={styles.left} md={24} lg={10}>
              <div className={styles.division}>
                <div className={styles.divisionTitle}>Vision</div>
                <div className={styles.text}>The top business providing supply chain services in Vietnam</div>
              </div>
              <div className={styles.division}>
                <div className={styles.divisionTitle}>Mission</div>
                <div className={styles.text}>
                  {` IDS is a bridge that creates value for the possibility of developing international enterprises and
                  businesses in Vietnam. We provide the greatest service experience to B2B clients (Business to
                  Business) with the criterion "Quality - Speed – Value”. `}
                </div>
              </div>
            </Col>
            <Col className={styles.right} md={24} lg={14}>
              <div className={styles.wrapImage}>
                <Image
                  priority={true}
                  sizes="fill"
                  objectFit="cover"
                  src="/images/overview.png"
                  alt="overview"
                  width={796}
                  height={403}
                ></Image>
              </div>
            </Col>
          </Row>
        </div>
      </div> */}
        <div className={styles.spacing}>
          <div className={styles.coreValue}>
            <div className={styles.coreTitle}>Core Values</div>
            <Row gutter={[20, 0]} className={styles.features}>
              <Col className={styles.feature}>
                <Image priority={true} alt="feature" width={40} height={40} src={'/images/feature-1.png'}></Image>
                <div className={styles.featureTitle}>intergrity</div>
                <div className={styles.text}>The foundations of being successful. </div>
              </Col>
              <Col className={styles.feature}>
                <Image priority={true} alt="feature" width={40} height={40} src={'/images/feature-2.png'}></Image>
                <div className={styles.featureTitle}>Trustworthiness</div>
                <div className={styles.text}>Trustworthiness comes first. </div>
              </Col>
              <Col className={styles.feature}>
                <Image priority={true} alt="feature" width={40} height={40} src={'/images/feature-3.png'}></Image>
                <div className={styles.featureTitle}>SPEED</div>
                <div className={styles.text}>Value is created by speed control. </div>
              </Col>
              <Col className={styles.feature}>
                <Image priority={true} alt="feature" width={40} height={40} src={'/images/feature-4.png'}></Image>
                <div className={styles.featureTitle}>Innovation </div>
                <div className={styles.text}>Upgrade the standard day by day. </div>
              </Col>
              <Col className={styles.feature}>
                <Image priority={true} alt="feature" width={40} height={40} src={'/images/feature-5.png'}></Image>
                <div className={styles.featureTitle}>Creativity </div>
                <div className={styles.text}>Every problem has a solution.</div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles.thinking}>
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
            <Image priority={true} width={98} height={80} className={styles.comma} src="/images/comma.png" alt="" />
            <span>When you think of product sourcing made easy, think of us!</span>
            <span className={styles.smallTitle}>- From IDS team -</span>
          </div>
        </div>
        <div className={styles.wrapDivider}>
          <Image priority={true} alt="divider" width={22} height={111} src="/images/divider.png" />
        </div>
        <div className={styles.wrapWhy}>
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
                  <div className={styles.whyTitle}>WHY IDS?</div>
                  <div className={styles.features}>
                    <Row className={styles.feature}>
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
                        <div className={styles.featureTitle}>Network</div>
                      </Col>
                      <Col sm={24} md={10} className={styles.text}>
                        Intensive network with Vietnam leading manufacturers
                      </Col>
                    </Row>
                    <Row className={styles.feature}>
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
                        <div className={styles.featureTitle}>Specialize</div>
                      </Col>
                      <Col sm={24} md={10} className={styles.text}>
                        Indepth understanding of products and Vietnam business manner
                      </Col>
                    </Row>
                    <Row className={styles.feature}>
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
                        <div className={styles.featureTitle}>Professional</div>
                      </Col>
                      <Col sm={24} md={10} className={styles.text}>
                        {` Professional assistance to all buyer’s visit          `}
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

        <div className={styles.gallery}>
          <div className={clsx(styles.item, styles.item1)}>
            <span className={styles.titleProduct}>
              Product <br /> Diversity
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
              <div className={styles.itemTitle}>Timber & wood</div>
              <div className={styles.wrapContact}>
                <a href="">Contact US</a>
                <NextIcon />
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
              <div className={styles.itemTitle}>Industrial products</div>
              <div className={styles.wrapContact}>
                <a href="">Contact US</a>
                <NextIcon />
              </div>
            </div>
          </div>
          <div className={clsx(styles.item, styles.item4)}>
            <Image
              priority={true}
              width={'477px'}
              height={'498px'}
              className={styles.comma}
              src="/images/grid-3.png"
              alt=""
            />
            <div className={styles.wrapContent}>
              <div className={styles.itemTitle}>Building & construction materials</div>
              <div className={styles.wrapContact}>
                <a href="">Contact US</a>
                <NextIcon />
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
              <div className={styles.itemTitle}>FLY ASH</div>
              <div className={styles.wrapContact}>
                <a href="">Contact US</a>
                <NextIcon />
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
              <div className={styles.itemTitle}>Agricultural products</div>
              <div className={styles.wrapContact}>
                <a href="">Contact US</a>
                <NextIcon />
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(styles.wrapDivider, styles.hiddenMd)}>
          <Image priority={true} alt="divider" width={22} height={111} src="/images/divider.png" />
        </div>
        <div className={styles.spacing}>
          <OurProject />
        </div>

        <div className={styles.wrapDivider}>
          <Image priority={true} alt="divider" width={22} height={111} src="/images/divider.png" />
        </div>
        <div className={styles.spacing}>
          <div className={styles.ourTeam}>
            <div className={styles.teamTitle}>Our Team</div>
            <div className={styles.description}>
              IDS has a group of knowledgeable experts that enable us to offer each client the suitable services they
              need. Strong human resources who are eager to learn and always follow the core value “Trustworthiness –
              Integrity – Speed – Innovation – Creativity” is the background to serve clients.
              <br />
              <br />
              IDS connects to the source of product supply easily.
            </div>
            <Row gutter={[16, 0]} className={styles.listCard}>
              <Col className={styles.card} xs={24} sm={12} md={12} lg={6}>
                <div className={styles.wrapCard}>
                  <div className={styles.header}>
                    <span className={styles.name}>Joe Nguyen</span>
                    <span className={styles.wrapImages}>
                      <span className={styles.wrapIcon}>
                        <PhoneIcon />
                      </span>
                      <span className={styles.wrapIcon}>
                        <EmailIcon />
                      </span>
                    </span>
                  </div>
                  <div className={styles.job}>Company President</div>
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
                  <div className={styles.script}>
                    Market volatility causes significant challenges to procurement, we are here to help you master the
                    game.
                  </div>
                </div>
              </Col>
              <Col className={styles.card} xs={24} sm={12} md={12} lg={6}>
                <div className={styles.wrapCard}>
                  <div className={styles.header}>
                    <span className={styles.name}>Hua Hai Long</span>
                    <span className={styles.wrapImages}>
                      <span className={styles.wrapIcon}>
                        <PhoneIcon />
                      </span>
                      <span className={styles.wrapIcon}>
                        <EmailIcon />
                      </span>
                    </span>
                  </div>
                  <div className={styles.job}>Company President</div>
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
                  <div className={styles.script}>
                    A strong desire to flourish, the connection creates value and being willing to learn are the basis
                    which links IDS’s clients to the development of the firm.
                  </div>
                </div>
              </Col>
              <Col className={styles.card} xs={24} sm={12} md={12} lg={6}>
                <div className={styles.wrapCard}>
                  <div className={styles.header}>
                    <span className={styles.name}>Tran Cong Hau</span>
                    <span className={styles.wrapImages}>
                      <span className={styles.wrapIcon}>
                        <PhoneIcon />
                      </span>
                      <span className={styles.wrapIcon}>
                        <EmailIcon />
                      </span>
                    </span>
                  </div>
                  <div className={styles.job}>Company President</div>
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
                  <div className={styles.script}>
                    We work for you as an extension of your business in helping you thrive sustainably.
                  </div>
                </div>
              </Col>
              <Col className={styles.card} xs={24} sm={12} md={12} lg={6}>
                <div className={styles.wrapCard}>
                  <div className={styles.header}>
                    <span className={styles.name}>Daniel Hearn</span>
                    <span className={styles.wrapImages}>
                      <span className={styles.wrapIcon}>
                        <PhoneIcon />
                      </span>
                      <span className={styles.wrapIcon}>
                        <EmailIcon />
                      </span>
                    </span>
                  </div>
                  <div className={styles.job}>Company President</div>
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
                  <div className={styles.script}>
                    We work for you as an extension of your business in helping you thrive sustainably.
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles.wrapDivider}>
          <Image priority={true} alt="divider" width={22} height={111} src="/images/divider.png" />
        </div>
        <div className={styles.spacing}>
          <div className={styles.clientSay}>
            <div className={styles.clientTitle}>What do our clients say?</div>
            <Row gutter={[84, 0]}>
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
                <div className={styles.text}>
                  It has been a privilege working with Joe and Kenny, especially when the Covid-19 pandemic took a heavy
                  toll on all businesses worldwide. IDS helped us to pull up a miracle: 60 containers of goods delivered
                  successfully within 5 totally-woking-online months from the scratch
                </div>
                <div className={styles.name}>Matthew Vocale</div>
                <div className={styles.profile}>Chief Supply Chain Office of 5B</div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles.contactUs}>
          {/* <div className={styles.bg}>12512</div> */}
          <div className={styles.spacing}>
            <Row gutter={[93, 0]}>
              <Col md={14}>
                <div className={styles.header}>
                  <div className={styles.wrapImage}>
                    <Image src="/images/vector-horizon.png" alt="vector" width={235} height={22} />
                  </div>
                  <span className={styles.contactTitle}>CONTACT US</span>
                </div>
                <div className={styles.text}>Subscribe For Newsletter</div>
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
                  <Col span={4}>
                    <button>SUBMIT</button>
                  </Col>
                </Row>
              </Col>
              <Col className={styles.wrapSocial} md={10}>
                <div className={styles.social}>
                  <span>SEE MORE ABOUT US</span>
                  <div className={styles.listIcon}>
                    <a className={styles.wrapImage} href="">
                      <Image alt="facebook" width={20} height={40} src="/images/facebook.png"></Image>
                    </a>
                    <a className={styles.wrapImage} href="">
                      <Image alt="instagram" width={37} height={37} src="/images/linkedin.png"></Image>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </ScrollContainer>
  );
};

export default LandingPage;
