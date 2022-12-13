import { Col, Row } from 'antd';
import LastedNews from 'components/LastedNews';
import ReadMore from 'components/ReadMore';
import Spacing from 'components/Spacing';
import React from 'react';
import { New } from '../components/HottestNews';

interface Props {
  news: New[];
}

const SubNews = ({ news }: Props) => {
  return (
    <>
      <Spacing>
        <div className="red text-20 bolder">All News</div>
        <div className="divider-x-black mb-38 mt-20"></div>
        <LastedNews fullNews news={news} />
      </Spacing>
    </>
  );
};

export default SubNews;
