import Carousel, { CarouselRef } from 'antd/lib/carousel';
import NextIcon from 'assets/svg/Next';
import PreviousIcon from 'assets/svg/Previous';
import Slider from 'components/Carousel/Carousel';
import React, { useRef, useState } from 'react';
import styles from './styles.module.less';

const OurProject = () => {
  const [currentSlide, setCurrentSlide] = useState<any>(0);
  const carouselRef = useRef<CarouselRef>(null);
  const goNext = () => {
    carouselRef.current?.next();
  };

  const goPrev = () => {
    carouselRef.current?.prev();
  };
  return (
    <div className={styles.ourProject}>
      <div className={styles.bgLeft}></div>
      <div className={styles.bgRight}></div>
      <div className={styles.left}>
        <div className={styles.titleProject}>Our Projects</div>
        <div className={styles.text}>
          IDS always wants to be a companion in order to achieve collaborative experiences that create the existent
          value.
        </div>
        <div className={styles.wrapArrows}>
          <span onClick={goNext} className={styles.arrow}>
            <PreviousIcon />
            <span>Previous&nbsp;/</span>
          </span>
          <span onClick={goPrev} className={styles.arrow}>
            <span>&nbsp;Next</span>
            <NextIcon />
          </span>
        </div>
      </div>
      {/* <div className={styles.right}>44444</div> */}
      <div className={styles.wrapSlider}>
        <Carousel
          ref={carouselRef}
          dots={false}
          draggable={true}
          arrows={true}
          swipeToSlide={true}
          className={styles.slider}
          slidesToShow={3}
          autoplay={true}
          centerPadding={'10px'}
        >
          <div className={styles.itemCarousel}>
            <div className={styles.wrapItem}>
              <img src="/images/carousel-1.png" alt="" />
            </div>
          </div>
          <div className={styles.itemCarousel}>
            <div className={styles.wrapItem}>
              <img src="/images/carousel-1.png" alt="" />
            </div>
          </div>
          <div className={styles.itemCarousel}>
            <div className={styles.wrapItem}>
              <img src="/images/carousel-1.png" alt="" />
            </div>
          </div>
          <div className={styles.itemCarousel}>
            <div className={styles.wrapItem}>
              <img src="/images/carousel-1.png" alt="" />
            </div>
          </div>
        </Carousel>
      </div>
      <button onClick={goNext}>Next</button>
    </div>
  );
};

export default OurProject;
