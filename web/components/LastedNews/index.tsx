import { Col, Row } from 'antd';
import Card from 'antd/lib/card/Card';
import clsx from 'clsx';
import ReadMore from 'components/ReadMore';
import { New } from 'modules/NewsPage/components/HottestNews';
import React, { useMemo } from 'react';
import styles from './styles.module.less';
interface Props {
  news: New[];
}
const LastedNews = ({ news }: Props) => {
  const fourNewsLasted = useMemo(() => {
    if (news.length <= 4) {
      return news;
    }
    const sufferNews = news.sort(()=>0.5 - Math.random());
    return sufferNews
  }, [news]);
  console.log({fourNewsLasted});
  
  return (
    <Row className={clsx(styles.lastedNews, 'mb-99')} gutter={[32, 32]}>
      {fourNewsLasted?.map((post) => (
        <Col className="d-flex f-column" xs={24} sm={12} md={12} lg={6}>
          <Card className="h-100 d-flex f-column" hoverable cover={<img alt="example" src={post.backgroundImage} />}>
            <div className="mt-auto d-flex f-column h-100">
              <div className="bold text-20 mb-14">{post.mainTitle}</div>
              <div className="d-flex f-between mb-8 mt-auto">
                <span>28 October, 2022</span>
                <ReadMore link={`/news/${post.id}`} />
              </div>
            </div>
          </Card>
          {/* <img className="cover w-100 mb-8" src={post.backgroundImage} alt="" />
        <div className="bold text-20 mb-14">{post.mainTitle}</div>
        <div className="d-flex f-between mb-8 mt-auto">
          <span>28 October, 2022</span>
          <ReadMore link={`/news/${post.id}`} />
        </div> */}
        </Col>
      ))}
      {}
    </Row>
  );
};

export default LastedNews;
