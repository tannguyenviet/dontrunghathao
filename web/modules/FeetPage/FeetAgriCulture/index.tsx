import { Col, Row } from 'antd';
import clsx from 'clsx';
import Banner from 'components/Banner';
import BannerBackground from 'components/BannerBackground';
import LastedNews from 'components/LastedNews';
import Spacing from 'components/Spacing';
import { New } from 'modules/NewsPage/components/HottestNews';
import Image from 'next/image';
import React from 'react';
import styles from './styles.module.less';
interface Props {
  news: New[];
}
const FeetAgricultural = ({news}:Props) => {
  return (
    <div className="bgGrey300">
      <Banner
        title="IDS Vietnam Head Office Relocation"
        time={'28 October, 2022'}
        image={'https://res.cloudinary.com/dveexa3ua/image/upload/v1669554191/ids-networks/new-custom-4_ppefyh.png'}
      ></Banner>

      <Spacing>
        <div className="bold text-20">
          Agricultural products play an important role in export in Vietnam, contributing greatly to the country’s
          annual export value. Despite the tough time impacted by the Covid-19 pandemic, Vietnam continues to show
          resilience when seeing a remarkable increase in agricultural products to the global market.
        </div>
      </Spacing>
      <BannerBackground
        src={'/images/feets/agricultural.png'}
        text={
          <div>
            <div>
              According to the Ministry of Agriculture and Rural Development (MARD), agricultural, forestry, and
              fisheries export turnover was assessed at almost 17.9 billion USD in the first four months of the year, up
              15.6 percent over the same period the previous year.
            </div>
            <br></br>
            <div>
              Coffee, rice, vegetables, shrimp, and wood products were among the five product groupings with export
              values exceeding one billion USD in the first four months of the year. Coffee, rubber, pepper, cassava and
              cassava products, pangasius, shrimp, wood, and wood products all had increased export values compared to
              the same period the previous year.
            </div>
            <br></br>
            Specifically, coffee export value reached nearly 1.7 billion USD (up 59.4 percent); rubber reached about USD
            869 million (up 10.9 percent); pepper about 367 million USD (up 29.6 percent). Cassava and cassava products
            reached USD 574 million (up 29.5 percent). Meanwhile, timber and wood products reached nearly 5.5 billion
            USD (up 4.5 percent). Rattan, bamboo, and sedge mats reached 339 million USD (up 22.7 percent).
          </div>
        }
      />
      <BannerBackground
        revert
        bgGrey300
        src={'/images/feets/statistic.png'}
        title={'Pharmaceuticals'}
        text="Vietnam Exports of pharmaceutical products - data, historical chart and statistics - was last updated in November of 2022, according to the United Nations COMTRADE database on international trade.
        The future looks to be very interesting for the pharmaceutical industry in Vietnam. Vietnam’s pharmaceutical market is projected to increase to US$7.7 billion in 2021 and US$16.1 billion in 2026. Driving this market growth is the Vietnamese government’s goal of achieving universal health coverage, combined with a growing market of consumers who want accessible healthcare.
        "
      />
      <Spacing className='mb-99'>
        <div className="red text-20 bolder">Insights</div>
        <div className="divider-x-black mb-38 mt-20"></div>
        <LastedNews news={news}/>
      </Spacing>
    </div>
  );
};

export default FeetAgricultural;
