import React, { useEffect, useState } from 'react';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from 'firebase-config';
import Banner from 'components/Banner';
import { New } from 'modules/NewsPage/components/HottestNews';
import Spacing from 'components/Spacing';
import ReadMore from 'components/ReadMore';
import { Row, Col } from 'antd';

interface Props {
  newPost: New;
  news: New[];
}
const FeetAuto = ({ newPost, news }: Props) => {
  console.log({ news });
  return (
    <div>
      {newPost && <Banner image={newPost.backgroundImage} time="27-24 Octobo" title={newPost.mainTitle} />}
      <Spacing>
        {newPost.contents.map((content) => (
          <>
            <div className="text-30 bold mt-99 mb-32">{content.title}</div>
            {content.texts.map((text) => (
              <div className="mb-20">{text}</div>
            ))}
            <img className="w-100 cover mb-40" src={content.image} alt="" />
          </>
        ))}
        <div className="red text-20 bolder">Insights</div>
        <div className="divider-x-black mb-38 mt-20"></div>
        <Row className="mb-99" gutter={[32, 32]}>
          {news?.map((post) => (
            <Col className="d-flex f-column" xs={24} md={24} lg={6}>
              <img className="cover w-100 mb-8" src="/images/feets/image-1.png" alt="" />
              <div className="bold text-20 mb-14">{post.mainTitle}</div>
              <div className="d-flex f-between mb-8 mt-auto">
                <span>28 October, 2022</span>
                <ReadMore link={`/news/${post.id}`} />
              </div>
            </Col>
          ))}
        </Row>
      </Spacing>
    </div>
  );
};

export default FeetAuto;
