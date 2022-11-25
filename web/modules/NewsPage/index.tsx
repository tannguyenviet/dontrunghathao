import Spacing from 'components/Spacing';
import React, { useEffect, useState } from 'react';
import HottestNews from './components/HottestNews';
import SubNews from './SubNews';
import { db } from 'firebase-config';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { Spin } from 'antd';

const NewsPage = ({ news }: any) => {
  return (
    <div className="mt-80">
      <HottestNews news={news}></HottestNews>
      <SubNews news={news} />
    </div>
  );
};

export default NewsPage;
