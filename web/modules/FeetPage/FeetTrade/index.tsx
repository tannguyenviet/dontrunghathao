import Banner from 'components/Banner';
import Spacing from 'components/Spacing';
import React from 'react';
import styles from './styles.module.less';
const FeetTrade = () => {
  return (
    <div className={styles.feetTrade}>
      <Banner
        title={
          <>
            Vietnam’s Free Trade <br /> Agreements – Opportunities for Your Business
          </>
        }
        image="/images/feets/image-3.png"
        time={'28 October, 2022'}
      ></Banner>
      <Spacing className="mx-60">
        <div className='mb-38'>
          Free trade agreements (FTAs) are when two or more countries agree on the terms of trade between them. They
          determine the value of tariffs and duties that countries impose on imports and exports. In 2007, with
          Vietnam’s ascension into the World Trade Organization (WTO) – it took a significant step integrating with
          world trade and subsequently entering into several free trade agreements.
        </div>
        <div>
          Over the past few years, Vietnam has been active in signing bilateral trade agreements with countries
          throughout the world. Additionally, due to its membership in the Association of Southeast Asian Nations
          (ASEAN), Vietnam has become a party to several FTAs that the regional trade bloc has signed.
        </div>
      </Spacing>
      <div className='w-100'></div>
    </div>
  );
};

export default FeetTrade;
