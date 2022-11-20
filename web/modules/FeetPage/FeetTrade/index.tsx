import { Col, Row } from 'antd';
import clsx from 'clsx';
import Banner from 'components/Banner';
import BannerBackground from 'components/BannerBackground';
import ReadMore from 'components/ReadMore';
import Spacing from 'components/Spacing';
import Image from 'next/image';
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
        image="/images/feets/image-2.png"
        time={'28 October, 2022'}
      ></Banner>
      <Spacing className="my-60">
        <div className="mb-38  text-16">
          Free trade agreements (FTAs) are when two or more countries agree on the terms of trade between them. They
          determine the value of tariffs and duties that countries impose on imports and exports. In 2007, with
          Vietnam’s ascension into the World Trade Organization (WTO) – it took a significant step integrating with
          world trade and subsequently entering into several free trade agreements.
        </div>
        <div className=" text-16">
          Over the past few years, Vietnam has been active in signing bilateral trade agreements with countries
          throughout the world. Additionally, due to its membership in the Association of Southeast Asian Nations
          (ASEAN), Vietnam has become a party to several FTAs that the regional trade bloc has signed.
        </div>
      </Spacing>
      <BannerBackground
        src={'/images/feets/handshake.png'}
        title={'FTAs – The benefits'}
        text="The benefits of the free trade agreements will enable Vietnam’s economic development to continue to shift away from exporting low-tech manufacturing products and primary goods to more complex high-tech goods like electronics, machinery, vehicles, and medical devices."
      />
      <Spacing className="text-16">
        <div>
          This can be done in two ways – first, through more diversified sourcing partners through larger trade networks
          and cheaper imports of intermediate goods from partner countries, which should boost the competitiveness of
          Vietnam’s exports.
        </div>
        <div className="mb-20">
          Second – through partnership with foreign firms that can transfer the knowledge and technology needed to make
          the jump into higher value-added production. An example of this is the recently launched VSmart phone
          manufactured by Vietnamese conglomerate Vingroup.
        </div>
        <div className="mb-20">
          Vietnam is touted as a low-cost manufacturer with several companies such as Samsung and Nokia setting up shop
          to manufacture and then export electronics, but the latest example shows how Vietnam can develop its own
          products from the transfer of know-how technology.
        </div>
        <div className="mb-20">
          With recent trade agreements such as the Comprehensive and Progressive Agreement for Trans-Pacific Partnership
          (CPTPP), EU-Vietnam FTA (EVFTA), UK-Vietnam FTA (UKVFTA) in effect, and the upcoming Regional Comprehensive
          Economic Partnership (RCEP) – Vietnam seems to prioritize international trade integration trade partners
          outside ASEAN.
        </div>
        <div className="mb-20">
          Such trade agreements will allow Vietnam to take advantage of the reduced tariffs, both within the ASEAN
          Economic Community (AEC) and with the EU and US to attract exporting companies to produce in Vietnam and
          export to partners outside ASEAN.
        </div>
        <div className="mb-20">
          The EVFTA Report 2018 by the European Chamber of Commerce (EuroCham) in Vietnam revealed that 72 percent of
          EuroCham members believed that the EVFTA will make Vietnam more competitive and turn it into a hub for
          European businesses.
        </div>
        <div className="mb-20">
          Vietnam’s entry into these trade deals will also ensure alignment with national standards ranging from
          employee rights to environmental protection. Both the CPTPP and EVFTA require Vietnam to conform to the
          International Labor Organization (ILO) standards. Chan Lee from the ILO noted that this is an opportunity for
          Vietnam to modernize its labor laws and industrial relations systems.
        </div>
        <div className="bold text-30 my-40">Challenges posed by FTAs</div>
        <img className="w-100 cover mb-40" src="./images/feets/chess.png" alt="" />
        <div className="mb-20">
          The FTAs may also come with some added downsides. Such agreements are likely to trigger aggressive competition
          from foreign rivals on local businesses – particularly in the agriculture sector including meat and dairy
          products from the EU, Australia, and Canada.
        </div>
        <div className="mb-20">
          If local firms do not adapt, make use of new market opportunities and potential partnerships with foreign
          firms – they could find competing in the market challenging.
        </div>
        <div className="mb-40">
          The Vietnamese government would also need to continue on its path of reforms – strengthening the banking
          sector, removing corruption, refining legal and tax structures, and improving trade facilitation.
        </div>
        <div>
          <Row>
            <Col className="bgRed white px-40 f-center f-align-start f-column  py-40 " lg={12} md={24}>
              <div className="bold text-30 mb-20 ">Future growth from FTAs</div>
              <div>
                Vietnam’s Ministry of Planning and Investment forecast that the CPTPP could increase Vietnam’s GDP by
                1.3 percentage points by 2035, while the EVFTA could boost GDP by 15 percent. These trade deals along
                with already signed and upcoming FTAs are likely to ensure that Vietnam remains competitive in the
                short-to-medium term.
              </div>
            </Col>
            <Col lg={12} md={24}>
              <img className="cover w-100 " src="/images/feets/clock.png" alt="" />
            </Col>
          </Row>
        </div>
        <div className="bolder text-30 mt-80 mb-40 text-center">
          Choosing a professional service to evaluate FTAs for your business
        </div>
        <div>
          Finding one’s way through the legalese that many of these FTAs use to spell out their rules and regulations
          can often be cumbersome. This often is one of the most cited reasons why businesses fail to take advantage of
          the benefits available to them. Therefore, it is strongly suggested that businesses and investors consult with
          a professional service with strong experience in the region. This will allow a business to have a reliable,
          and clear source of information before making an investment.
        </div>
      </Spacing>

      <div className={clsx('w-1320 my-60', styles.wrap)}>
        <div className={clsx('w-100 relative')}>
          <img className={clsx('w-100 cover min-height-200 ', styles.image)} src="/images/feets/boat.png" alt="" />
          <div className={clsx('absolute f-center f-column top-0 h-100 text-18  text-center', styles.text)}>
            <div className="bold mb-10 px-40 ">
              With experienced staff from IDS, who have indepth insight into production and manufacturing in Vietnam, we
              are confident to support you with your procurement plan in Vietnam. Let IDS experts be extending hands of
              you when it comes to sourcing in Vietnam!
            </div>
            <div>- From IDS team -</div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.wrapDivider)}>
        <Image priority={true} alt="divider" width={22} height={111} src="/images/divider.png" />
      </div>
      <Spacing>
        <div className="red text-20 bolder">Insights</div>
        <div className="divider-x-black mb-38 mt-20"></div>
        <Row className="mb-99" gutter={[32, 0]}>
          <Col className="d-flex f-column" xs={24} md={24} lg={6}>
            <img className="cover w-100 mb-8" src="/images/feets/image-1.png" alt="" />
            <div className="bold text-20 mb-14">IDS Vietnam Head Office Relocation</div>
            <div className="d-flex f-between mb-8 mt-auto">
              <span>28 October, 2022</span>
              <ReadMore link='/feet'  />
            </div>
          </Col>
          <Col className="d-flex f-column" xs={24} md={24} lg={6}>
            <img className="cover w-100 mb-8" src="/images/feets/image-2.png" alt="" />
            <div className="bold text-20 mb-14">Vietnam’s Free Trade Agreements – Opportunities for Your Business</div>
            <div className="d-flex f-between mb-8 mt-auto">
              <span>28 October, 2022</span>
              <ReadMore link='/feet?id=1'  />
            </div>
          </Col>
          <Col className="d-flex f-column" xs={24} md={24} lg={6}>
            <img className="cover w-100 mb-8" src="/images/feets/image-3.png" alt="" />
            <div className="bold text-20 mb-14">An Introduction to Vietnam’s Import and Export Industries</div>
            <div className="d-flex f-between mb-8 mt-auto">
              <span>28 October, 2022</span>
              <ReadMore  />
            </div>
          </Col>
          <Col className="d-flex f-column" xs={24} md={24} lg={6}>
            <img className="cover w-100 mb-8" src="/images/feets/image-4.png" alt="" />
            <div className="bold text-20 mb-14">Vietnam agricultural product exports</div>
            <div className="d-flex f-between mb-8 mt-auto">
              <span>28 October, 2022</span>
              <ReadMore   />
            </div>
          </Col>
        </Row>
      </Spacing>
    </div>
  );
};

export default FeetTrade;
