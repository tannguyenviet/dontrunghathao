import { Carousel } from 'antd';
import React, { FC, useRef, useState } from 'react';
import styles from './styles.module.less';
import { CarouselRef } from 'antd/lib/carousel';
const Slider = () => {

  const [currentSlide,setCurrentSlide] = useState<any>(0);
  const carouselRef = useRef<CarouselRef>(null);
  const goNext = () => {
    carouselRef.current?.next();
  };

  const goPrev = () => {
    carouselRef.current?.prev();
  };
  return (
    <>
        <Carousel
      ref={carouselRef}
      dots={false}
      draggable={true}
      arrows={true}
      swipeToSlide={true}
      className={styles.slider}
      slidesToShow={3}
      autoplay={true}
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
    <div>
    <button className={styles.btnFLoat} onClick={()=>{goPrev()}}>Previous</button>
    </div>
    <div>
    <button className={styles.btnFLoat} onClick={()=>{goNext()}}>Next</button>
    </div>
    </>

  );
};

export default Slider;
