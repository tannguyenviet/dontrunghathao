import { Col, Row } from 'antd';
import clsx from 'clsx';
import ReadMore from 'components/ReadMore';
import Spacing from 'components/Spacing';
import Image from 'next/image';
import React from 'react';
import styles from './styles.module.less';
const HottestNews = () => {
  return (
    <Spacing className={clsx(styles.news)}>
      <div className="text-35 bolder red mb-20">Hottest News</div>
      <Row gutter={[20, 0]}>
        <Col lg={12}>
          <div>
            <img className="cover w-100" src="/images/news/image-1.png" alt="" />
          </div>
          <span className="mb-8 mt-8">28 October, 2022</span>
          <div className="mb-8 bolder text-20 mb-12">
            The top shipping delays, fees and events impacting Australia in 2022
          </div>
          <div className="mb-8">
            With the perspective of "Making the development of the source of goods and the purchase process
            straightforward and efficient", we always strive to handle the demand of locating source.
          </div>
          <div className='mb-8'>
            <ReadMore></ReadMore>
          </div>
        </Col>
        <Col lg={12}>
          <Row gutter={[16, 0]}>
            <Col span={9}>
              <img className="cover w-100" src="/images/news/image-2.png" alt="" />
            </Col>
            <Col span={15}>
              <span className="mb-8">28 October, 2022</span>
              <div className="bolder text-16">The top shipping delays, fees and events impacting Australia in 2022</div>
              <ReadMore />
            </Col>
          </Row>
          <div className="divider-x my-32"></div>
          <Row gutter={[16, 0]}>
            <Col span={9}>
              <img className="cover w-100" src="/images/news/image-3.png" alt="" />
            </Col>
            <Col span={15}>
              <span className="mb-8">28 October, 2022</span>
              <div className="bolder text-16">The top shipping delays, fees and events impacting Australia in 2022</div>
              <ReadMore />
            </Col>
          </Row>
          <div className="divider-x my-32"></div>
          <Row className='mb-99' gutter={[16, 0]}>
            <Col span={9}>
              <img className="cover w-100" src="/images/news/image-4.png" alt="" />
            </Col>
            <Col span={15}>
              <span className="mb-8">28 October, 2022</span>
              <div className="bolder text-16">The top shipping delays, fees and events impacting Australia in 2022</div>
              <ReadMore />
            </Col>
          </Row>
        </Col>
      </Row>
    </Spacing>
  );
};

export default HottestNews;
