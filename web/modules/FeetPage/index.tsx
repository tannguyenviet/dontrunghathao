import { Col, Row } from 'antd';
import clsx from 'clsx';
import Banner from 'components/Banner';
import ReadMore from 'components/ReadMore';
import Spacing from 'components/Spacing';
import FeetAuto from 'modules/FeetAuto';
import { New } from 'modules/NewsPage/components/HottestNews';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import FeetAgricultural from './FeetAgriCulture';
import FeetBoat from './FeetBoat';
import FeetIDS from './FeetIDS';
import FeetTrade from './FeetTrade';
import styles from './styles.module.less';
interface Props {
  news: New[];
}
const Feet = ({news}:Props) => {
  const { t } = useTranslation();

  const { query } = useRouter();
  return (
    <>
      {query.id === '2' && <FeetTrade news={news} />}
      {query.id === '1' && <FeetIDS  news={news}/>}
      {query.id === '3' && <FeetBoat news={news}></FeetBoat>}
      {query.id === '4' && <FeetAgricultural news={news} />}
    </>
  );
};

export default Feet;
