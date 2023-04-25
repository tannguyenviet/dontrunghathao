import { Col, Row } from 'antd';
import clsx from 'clsx';
import ReadMore from 'components/ReadMore';
import Spacing from 'components/Spacing';
import Image from 'next/image';
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import styles from './styles.module.less';
import { db } from 'firebase-config';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { useRouter } from 'next/router';

export interface Content {
  image: string;
  texts: string[];
  title: string;
}

export interface New {
  id: string;
  backgroundImage: string;
  contents: Content[];
  mainTitle: string;
  script?: string;
  time?: any;
  isCustom?: boolean;
}
export interface Props {
  news: New[];
}

const HottestNews = ({ news }: Props) => {
  const lastedNews = useMemo(() => {
    const mixingNews = [
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
    return mixingNews.slice(1, 4);
  }, [news]);

  return (
    <Spacing className={clsx(styles.news)}>
      <div className="text-35 bolder red mb-20">News</div>
      <Row gutter={[20, 0]}>
        <Col lg={12}>
          <a
            className="h-100 mb-99"
            href={
              news[0].isCustom
                ? `/feet?id=${news[0].id}&title=${news[0].mainTitle.split(' ').join('-')}`
                : `/news/${news[0].id}&title=${news[0].mainTitle.split(' ').join('-')}`
            }
            // target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img className="cover w-100" src={news[0]?.backgroundImage} alt="" />
            </div>
            <span className="mb-8 mt-8">28 October, 2022</span>
            <div className="mb-8 bolder text-20 mb-12">{news[0]?.mainTitle}</div>
            <div className="mb-8">{news[0]?.script}</div>
            <div className="mb-8">
              <ReadMore></ReadMore>
            </div>
          </a>
        </Col>
        <Col lg={12}>
          {lastedNews.map((post) => (
            <Fragment key={'lasted-post' + post.id}>
              <a
                className="h-100 mb-99"
                href={
                  post.isCustom
                    ? `/feet?id=${post.id}&title=${post.mainTitle.split(' ').join('-')}`
                    : `/news/${post.id}&title=${post.mainTitle.split(' ').join('-')}`
                }
                // target="_blank"
                rel="noopener noreferrer"
              >
                <Row gutter={[16, 0]}>
                  <Col span={9}>
                    <img
                      className="cover w-100"
                      src={post.backgroundImage.split('/upload').join('/upload/q_auto/h_180,w_320')}
                      alt=""
                    />
                  </Col>
                  <Col span={15}>
                    <span className="mb-8">{post.time}</span>
                    <div className="bolder text-16">{post.mainTitle}</div>
                    <ReadMore />
                  </Col>
                </Row>
                <div className="divider-x my-32"></div>
              </a>
            </Fragment>
          ))}
          {/* {lastedNews.map((post) => {
            <Fragment>

            </Fragment>
          })} */}
        </Col>
      </Row>
    </Spacing>
  );
};

export default HottestNews;
