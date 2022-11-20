import { Col, Row } from 'antd';
import clsx from 'clsx';
import Banner from 'components/Banner';
import BannerBackground from 'components/BannerBackground';
import Spacing from 'components/Spacing';
import React from 'react';
import styles from './styles.module.less';
const FeetBoat = () => {
  return (
    <div className={styles.feetBoat}>
      <Banner
        title={
          <>
            An Introduction to Vietnam’s <br /> Import and Export Industries
          </>
        }
        image="/images/feets/image-3.png"
        time={'28 October, 2022'}
      ></Banner>
      <Spacing className="text-16">
        <div>
          With its rising costs, China is no longer the go-to destination for many businesses, and Vietnam has arisen as
          a serious competitor. Recent trends show that the number of orders shifting from China to Vietnam has seen a
          significant increase.
        </div>
        <div className="mb-20">
          For example, China’s Pearl River Delta, long known as one of the key factory centers for the world’s
          manufacturers (particularly those from Hong Kong) has now become too costly for many companies to stay in the
          region.
        </div>
        <div className="mb-20">
          In the past few years, a growing number of businesses have relocated their operations from China to Vietnam in
          an attempt to escape rising costs and an increasingly complex regulatory environment.
        </div>
        <div className="mb-20">
          Given the recent trade war between China and the US, alongside Vietnam’s recent free trade agreements such as
          the RCEP, the EVFTA, and the UKVFTA the country is steadily becoming more open to international trade and
          investment.
        </div>
        <div className="mb-20">
          Located in a strategic position for foreign companies with operations throughout Southeast Asia, Vietnam is an
          ideal export hub to reach other ASEAN markets.
        </div>
        <div className="mb-20">
          Compared with other developing markets in the region, Vietnam is emerging as the clear leader in low-cost
          manufacturing and sourcing, with the country’s manufacturing sector accounting for 25 percent of the country’s
          total GDP in 2021.
        </div>
        <div className="mb-20">
          Currently, labor costs in Vietnam are approximately 50 percent of those in China at US$2.99 per hour compared
          to US$6.50 per hour respectively, and around 40 percent of those reported in Thailand and the Philippines.
          With the country’s workforce growing annually, Vietnamese workers are comparatively inexpensive, young, and,
          increasingly, highly skilled.
        </div>
        <div className="mb-20">
          Another driving force behind Vietnam’s growing popularity is the country’s collection of free trade
          agreements.
        </div>
        <div className="mb-20">
          The RCEP, which came into force on January 1, 2022, has also fostered the entry of goods exported in and out
          of Vietnam as it reduces cost, improves market access as well as offers streamlined customs procedures.
        </div>
        <div className="mb-20">
          In terms of regulatory and financial incentives, Vietnam has become increasingly investor-friendly in recent
          years –the government has taken such actionss as reforming its financial sector, streamlining business
          regulations, and improving the quality of its workforce.
        </div>
        <div className="mb-20">
          Since the mid-2000s, the Vietnamese government has offered extremely competitive financial incentives to
          businesses seeking to set up operations in the country, in addition to a zero percent withholding tax on
          dividends remitted overseas and a low corporate income tax (CIT) rate of 20 percent. These advantages have
          enabled Vietnam to become a premier “sourcing economy” in the eyes of many companies.
        </div>
      </Spacing>
      <BannerBackground
        src={'/images/feets/flag.png'}
        title={'Current state of Vietnam’s economy'}
        text="Vietnam is seeing strong growth on multiple fronts. Of particular interest to investors has been the continuing growth of Vietnam’s domestic consumer market, which has been developing by leaps and bounds.
        This growth is expected to continue for some time to come – domestic consumption is predicted to increase at a rate of 20 percent per year. With a population of over 97 million and Southeast Asia’s fastest-growing middle class, Vietnam clearly represents an important market for foreign goods. Compared to 2017, the US has overtaken China for being the largest export market for Vietnam.
        "
      />
      <Spacing>
        <div className="text-20 bold mt-80 mb-16">Export Markets & Export Value (2021)</div>
        <Row className="mb-60" gutter={[24, 24]}>
          <Col className={clsx(styles.card)} span={6} xs={12} md={12} lg={6}>
            <div className="bgWhite pl-24 py-24">
              <div className="text-16">US</div>
              <div className="text-20 bold">$96.3B</div>
            </div>
          </Col>
          <Col className={clsx(styles.card)} span={6} xs={12} md={12} lg={6}>
            <div className="bgWhite pl-24 py-24">
              <div className="text-16">China</div>
              <div className="text-20 bold">$56B</div>
            </div>
          </Col>
          <Col className={clsx(styles.card)} span={6} xs={12} md={12} lg={6}>
            <div className="bgWhite pl-24 py-24">
              <div className="text-16">South Korea</div>
              <div className="text-20 bold">$22B</div>
            </div>
          </Col>
          <Col className={clsx(styles.card)} span={6} xs={12} md={12} lg={6}>
            <div className="bgWhite pl-24 py-24">
              <div className="text-16">Japan</div>
              <div className="text-20 bold">$20.1B</div>
            </div>
          </Col>
        </Row>
        <div className="text-20 bold mt-80 mb-16">Import Markets & Import Value (2021)</div>
        <Row className="mb-60" gutter={[24, 24]}>
          <Col className={clsx(styles.card)} span={6} xs={12} md={12} lg={6}>
            <div className="bgWhite pl-24 py-24">
              <div className="text-16">China</div>
              <div className="text-20 bold">$56.2B</div>
            </div>
          </Col>
          <Col className={clsx(styles.card)} span={6} xs={12} md={12} lg={6}>
            <div className="bgWhite pl-24 py-24">
              <div className="text-16">South Korea</div>
              <div className="text-20 bold">$22.7B</div>
            </div>
          </Col>
          <Col className={clsx(styles.card)} span={6} xs={12} md={12} lg={6}>
            <div className="bgWhite pl-24 py-24">
              <div className="text-16">Japan</div>
              <div className="text-20 bold">$20.7B</div>
            </div>
          </Col>
          <Col className={clsx(styles.card)} span={6} xs={12} md={12} lg={6}>
            <div className="bgWhite pl-24 py-24">
              <div className="text-16">US</div>
              <div className="text-20 bold">$15.3B</div>
            </div>
          </Col>
        </Row>
        <div className="text-30 bold mt-99 mb-30">Industry Snapshots</div>

        <div className="mb-20">
          While Vietnam is widely known for being a prime location for investors operating in the textile industry,
          there are many other business areas that are seeing significant growth in the country. Interestingly, Vietnam
          is well on its way to becoming a key location for high-technology manufacturing, with companies like Samsung,
          LG Electronics, Nokia, and Intel making multi-billion dollar investments into the country. Other business
          areas include information and communications technology, automotive, and medical devices.
        </div>
        <div className="mb-20">
          Bilateral trade between Vietnam and the US hit a new record high in 2021, with a total of US$111.56 billion,
          up nearly US$21 billion year-on-year as per the General Department of Customs.
        </div>
        <div className="mb-20">
          The US also had the second-highest import-export turnover with Vietnam at US$100 billion, followed by China.
        </div>
        <Row gutter={[32, 32]}>
          <Col lg={12}>
            <img className="cover w-100" src="/images/feets/chart-4.png" alt="" />
          </Col>
          <Col lg={12}>
            <img className="cover w-100" src="/images/feets/chart-5.png" alt="" />
          </Col>
        </Row>
      </Spacing>
      <BannerBackground
        revert
        src={'/images/feets/table.png'}
        title={'Textiles and Garments '}
        text="Textiles consistently rank among Vietnam’s leading export industries, with over 6000 textiles and garments manufacturing companies, employing upwards of 2.5 million workers. The growth of the garment industry has been impressive and plays an important role in the economic growth of the country. In 2020, Vietnam surpassed Bangladesh to become the world’s second largest exporter of ready made garments (RMG). Further, the industry had an export market share of 7.05 percent in 2020, an increase from 5.54 percent of 2016.
        "
      />
      <BannerBackground
        bgGrey300
        src={'/images/feets/chart-2.png'}
        title={'Electronics '}
        text="Vietnam has emerged as an important electronics exporter, with electrical and electronic products overtaking coffee, textiles, and rice to become the country’s top export item. Samsung is Vietnam’s largest exporter and has helped the country achieve a trade surplus for the first time in many years.
        Exports of smartphones and computer parts now account for more in export earnings than oil and garments. Samsung has turned Vietnam into a global manufacturing base for its products, producing almost a third of the firm’s output. Samsung has invested over US$17.5 billion into the country as of 2021.
        
        "
      />
      <BannerBackground
        revert
        src={'/images/feets/chart-1.png'}
        title={'Pharmaceuticals'}
        text="Vietnam Exports of pharmaceutical products - data, historical chart and statistics - was last updated in November of 2022, according to the United Nations COMTRADE database on international trade.
        The future looks to be very interesting for the pharmaceutical industry in Vietnam. Vietnam’s pharmaceutical market is projected to increase to US$7.7 billion in 2021 and US$16.1 billion in 2026. Driving this market growth is the Vietnamese government’s goal of achieving universal health coverage, combined with a growing market of consumers who want accessible healthcare.
        "
      />
      <BannerBackground
        bgGrey300
        src={'/images/feets/cars.png'}
        title={'Automotive'}
        text="Vietnam is becoming an important market for auto sales: the Vietnamese automobile market is expected to sell 1.7-1.85 million units by 2035. In the foreseeable future, an estimated 750,000-800,000 units are expected to be sold by 2025.

        Although the nation’s rate of car ownership per capita is still much lower than other markets in Asia (only around 5.7 percent of Vietnamese households owned a car in 2020), Vietnam is still one of the countries with the fastest-growing purchasing power for personal cars over the past ten years. 9 percent of Vietnamese households are expected to own a car by 2025 – equivalent to the current level of India and the Philippines. By 2030, car ownership will reach 30%. Tax reductions on imported cars and increased income are attributed to the growth.
        
        
        "
      />
      <BannerBackground
        revert
        src={'/images/feets/coffee.png'}
        title={'Coffee'}
        text="Vietnam is currently, the world’s second-largest coffee exporter, behind only Brazil. In 2021, the export value for Vietnam’s coffee reached US$3.1 billion. The industry plays an important role in Vietnam’s agriculture economy and is an export oriented industry with more than 90 percent of production volume exported. To increase its value, the government has been promoting the shift from exporting beans to processed coffee.

        Many experts believe that Vietnam has the potential to overtake Brazil due to its favorable climate conditions and lower-cost production.
        "
      />
      <BannerBackground
        bgGrey300
        src={'/images/feets/tech.png'}
        title={'Ecommerce'}
        text="Vietnam is quickly becoming a prime market for foreign investment in e-commerce activities. The country’s rapidly growing economy and middle class are, in turn, spawning a strong consumer culture and increasing levels of disposable income. The pandemic has accentuated the demand for electronic retail as delivery, ride-sharing, and e-wallets gradually become a norm for the Vietnamese, especially among the youth.
        "
      />
    </div>
  );
};

export default FeetBoat;
