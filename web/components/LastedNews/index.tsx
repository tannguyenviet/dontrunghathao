import { Col, Row } from 'antd';
import Card from 'antd/lib/card/Card';
import clsx from 'clsx';
import ReadMore from 'components/ReadMore';
import { New } from 'modules/NewsPage/components/HottestNews';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import styles from './styles.module.less';
interface Props {
  news: New[];
  fullNews?: boolean;
}
const LastedNews = ({ news, fullNews }: Props) => {
  const [page, setPage] = useState(1);

  const mixingNews = useMemo(() => {
    return [
      ...news,
      {
        id: '1',
        backgroundImage:
          'https://res.cloudinary.com/dveexa3ua/image/upload/v1669554166/ids-networks/new-custom-1_nhzpnl.png',
        mainTitle: 'IDS Vietnam Head Office Relocation',
        isCustom: true,
        contents: [],
        time: '28 October, 2022',
      },
      {
        id: '2',
        backgroundImage:
          'https://res.cloudinary.com/dveexa3ua/image/upload/v1669554165/ids-networks/new-custom-2_ml4jex.png',
        mainTitle: 'Vietnam’s Free Trade Agreements – Opportunities for Your Business',
        isCustom: true,
        contents: [],
        time: '28 October, 2022',
      },
      {
        id: '3',
        backgroundImage:
          'https://res.cloudinary.com/dveexa3ua/image/upload/v1669554234/ids-networks/new-custom-3_c88xyy.png',
        mainTitle: 'An Introduction to Vietnam’s Import and Export Industries',
        isCustom: true,
        contents: [],
        time: '28 October, 2022',
      },
      {
        id: '4',
        backgroundImage:
          'https://res.cloudinary.com/dveexa3ua/image/upload/v1669554191/ids-networks/new-custom-4_ppefyh.png',
        mainTitle: 'Vietnam agricultural product exports',
        isCustom: true,
        contents: [],
        time: '28 October, 2022',
      },
    ];
  }, [news]);

  const fourNewsLasted = useMemo(() => {
    return fullNews ? mixingNews.slice(0, page * 4) : mixingNews.slice(0, 4);
  }, [news, page]);
  return (
    <>
      <Row className={clsx(styles.lastedNews, 'mb-32')} gutter={[32, 32]}>
        {fourNewsLasted?.map((post: New) => (
          <Col key={'post' + post.id} className="d-flex f-column" xs={24} sm={12} md={12} lg={6}>
            <a
              className="h-100"
              href={
                post.isCustom
                  ? `/feet?id=${post.id}&title=${post.mainTitle.split(' ').join('-')}`
                  : `/news/${post.id}&title=${post.mainTitle.split(' ').join('-')}`
              }
              // target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                className="h-100 d-flex f-column"
                hoverable
                cover={
                  <img alt="example" src={post.backgroundImage.split('upload/').join('upload/q_auto/h_180,w_320/')} />
                }
              >
                <div className="mt-auto d-flex f-column h-100">
                  <div className="bold text-20 mb-14">{post.mainTitle}</div>
                  <div className="d-flex f-between mb-8 mt-auto">
                    <span>{post.time}</span>
                    <ReadMore />
                  </div>
                </div>
              </Card>
            </a>

            {/* <img className="cover w-100 mb-8" src={post.backgroundImage} alt="" />
        <div className="bold text-20 mb-14">{post.mainTitle}</div>
        <div className="d-flex f-between mb-8 mt-auto">
          <span>28 October, 2022</span>
          <ReadMore link={`/news/${post.id}`} />
        </div> */}
          </Col>
        ))}
      </Row>
      {fullNews && fourNewsLasted.length >= page * 4 && (
        <div className={clsx(styles.loadmore, 'f-center mb-32')}>
          <button onClick={() => setPage(page + 1)}>Load more</button>
        </div>
      )}
    </>
  );
};

export default LastedNews;
