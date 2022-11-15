import { Col, Row } from 'antd';
import ReadMore from 'components/ReadMore';
import Spacing from 'components/Spacing';
import React from 'react';

const SubNews = () => {
  return (
    <>
      <Spacing>
        <div className="red text-20 bolder">Exporting News</div>
        <div className="divider-x-black mb-38 mt-20"></div>
        <Row className="mb-99" gutter={[32, 0]}>
          <Col className="d-flex f-column" xs={24} md={24} lg={8}>
            <img className="cover w-100 mb-8" src="/images/news/image-5.png" alt="" />
            <div className="bold text-20 mb-14">
              Container rates ease, but empty containers remain a big issue across the globe
            </div>
            <div className="d-flex f-between mb-8 mt-auto">
              <span>28 October, 2022</span>
              <ReadMore link='/feet?id=1' />
            </div>
          </Col>
          <Col className="d-flex f-column" xs={24} md={24} lg={8}>
            <img className="cover w-100 mb-8" src="/images/news/image-6.png" alt="" />
            <div className="bold text-20 mb-14">
              Omicron’s effect on shipping & the empty container issue affecting Australian ports
            </div>
            <div className="d-flex f-between mb-8 mt-auto">
              <span>28 October, 2022</span>
              <ReadMore />
            </div>
          </Col>
          <Col className="d-flex f-column" xs={24} md={24} lg={8}>
            <img className="cover w-100 mb-8" src="/images/news/image-7.png" alt="" />
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
      <Spacing>
        <div className="red text-20 bolder">Insights</div>
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
    </>
  );
};

export default SubNews;
