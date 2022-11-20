import { Col, Row } from 'antd';
import clsx from 'clsx';
import Banner from 'components/Banner';
import ReadMore from 'components/ReadMore';
import Spacing from 'components/Spacing';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import FeetBoat from './FeetBoat';
import FeetTrade from './FeetTrade';
import styles from './styles.module.less';
const Feet = () => {
  const { t } = useTranslation();

  const { query } = useRouter();
  return (
    <>
      {query.id === '1' && <FeetTrade />}
      {!query.id && (
        <div className={styles.feet}>
          <Banner
            title="IDS Vietnam Head Office Relocation"
            time={'28 October, 2022'}
            image={'/images/feets/image-1.png'}
          ></Banner>
          <Spacing>
            <div className="bold text-20">
              We are proud to officially announce the relocation of the head office in Vietnam, from Danang city to the
              metropolitan area – Phu My Hung, a residential area with international standards in highly civilized and
              intellectual communities with a rich culture for a global citizen over Vietnam.
            </div>
            <div className="divider-x-black mt-32 mb-32"></div>
            <div className="mb-20 text-16">
              The change of IDS Vietnam head office represents the strategic vision of the leadership team, particularly
              Phu My Hung, lying at the heart of Ho Chi Minh city, known as a major centre for finance, media,
              technology, education, and transportation of Vietnam. We have seen an overwhelming increase in project
              activities over the last several years, so this naturally led to our new office relocation in Ho Chi Minh
              city. It will enable us to intensively connect with a wide networks of international buying representative
              offices and competent manufacturers in neighboring provinces of Ho Chi Minh city.
            </div>
            <div className="mb-99">
              With this new head office location, it will be much more convenient for our international partners when
              visiting and working in Vietnam.
            </div>
            <div className={styles.clientSay}>
              <Row gutter={[84, 0]}>
                <Col className={styles.left} xs={24} sm={24} md={24} lg={9}>
                  <div className={styles.wrapImage}>
                    <div className={styles.bg}></div>
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
                <Col className={clsx(styles.right, 'text-16 relative')} xs={24} sm={24} md={24} lg={15}>
                  <div className={clsx(styles.wrapImage, 'relative top-25 index-10')}>
                    <Image
                      priority={true}
                      className={styles.image}
                      width={59}
                      height={48}
                      src="/images/comma-blur.png"
                      alt="comma"
                    ></Image>
                  </div>
                  <div className={clsx(styles.text, 'mb-20')}>
                    We would like to sincerely thank all our clients for supporting us so far! In the end, everything we
                    do, we do to serve you better and provide you with the best results possible. And the new head
                    office is proving to be effective in this right from the start!
                  </div>
                  <div className="mb-32">Welcome to visit our new head office!</div>
                  <div className={clsx(styles.name, 'bolder mb-10 ')}>Joe Nguyen</div>
                  <div className={clsx(styles.profile, 'uppercase text-13')}>CHAIRMAN OF IDS NETWORK</div>
                </Col>
              </Row>
            </div>
            <div className={styles.wrapDivider}>
              <Image priority={true} alt="divider" width={22} height={111} src="/images/divider.png" />
            </div>
            <div className="red text-20 bolder">You might also like</div>
            <div className="divider-x-black mb-38 mt-20"></div>
            <Row className="mb-99" gutter={[32, 0]}>
              <Col className="d-flex f-column" xs={24} md={24} lg={8}>
                <img className="cover w-100 mb-8" src="/images/news/image-8.png" alt="" />
                <div className="bold text-20 mb-14">
                  Container rates ease, but empty containers remain a big issue across the globe
                </div>
                <div className="d-flex f-between mb-8 mt-auto">
                  <span>28 October, 2022</span>
                  <ReadMore />
                </div>
              </Col>
              <Col className="d-flex f-column" xs={24} md={24} lg={8}>
                <img className="cover w-100 mb-8" src="/images/news/image-9.png" alt="" />
                <div className="bold text-20 mb-14">
                  Omicron’s effect on shipping & the empty container issue affecting Australian ports
                </div>
                <div className="d-flex f-between mb-8 mt-auto">
                  <span>28 October, 2022</span>
                  <ReadMore />
                </div>
              </Col>
              <Col className="d-flex f-column" xs={24} md={24} lg={8}>
                <img className="cover w-100 mb-8" src="/images/news/image-10.png" alt="" />
                <div className="bold text-20 mb-14">
                  The top shipping delays, fees and events impacting Australia in 2022
                </div>
                <div className="d-flex f-between mb-8 mt-auto">
                  <span>28 October, 2022</span>
                  <ReadMore />
                </div>
              </Col>
            </Row>
          </Spacing>
        </div>
      )}
      {query.id === '2' && <FeetBoat></FeetBoat>}
    </>
  );
};

export default Feet;
