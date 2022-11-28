import React, { Fragment, useEffect, useState } from 'react';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from 'firebase-config';
import Banner from 'components/Banner';
import { New } from 'modules/NewsPage/components/HottestNews';
import Spacing from 'components/Spacing';
import ReadMore from 'components/ReadMore';
import { Row, Col } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Card from 'antd/lib/card/Card';
import LastedNews from 'components/LastedNews';
import dayjs from 'dayjs';
interface Props {
  newPost: New;
  news: New[];
}
const FeetAuto = ({ newPost, news }: Props) => {
  console.log({ news });

  return (
    <div>
      {newPost && <Banner image={newPost.backgroundImage} time={newPost.time} title={newPost.mainTitle} />}
      <Spacing>
        {newPost?.contents.map((content,index) => (
          <Fragment key={index}>
            <div className="text-30 bold mt-99 mb-32">{content.title}</div>
            {content.texts.map((text) => (
              <div className="mb-20">{text}</div>
            ))}
            <img className="w-100 cover mb-40" src={content.image} alt="" />
          </Fragment>
        ))}
        <div className="red text-20 bolder">Insights</div>
        <div className="divider-x-black mb-38 mt-20"></div>
        <LastedNews news={news} />
      </Spacing>
    </div>
  );
};

export default FeetAuto;
