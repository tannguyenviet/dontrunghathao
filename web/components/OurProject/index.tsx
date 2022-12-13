import Carousel, { CarouselRef } from 'antd/lib/carousel';
import NextIcon from 'assets/svg/Next';
import PreviousIcon from 'assets/svg/Previous';
import Slider from 'components/Carousel/Carousel';
import { getDatabase, onValue, ref } from 'firebase/database';
import { collection, getDocs } from 'firebase/firestore';
import { getImageSize } from 'next/dist/server/image-optimizer';
import React, { useEffect, useRef, useState } from 'react';
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

  const database = getDatabase();
  const [projectImages, setProjectImages] = useState<string[]>([]);

  const starCountRef = ref(database, 'project/projects');
  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      // updateStarCount(postElement, data);
      setProjectImages(data);
    });
  }, []);

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
          <span onClick={goPrev} className={styles.arrow}>
            <PreviousIcon />
            <span>Previous&nbsp;/</span>
          </span>
          <span onClick={goNext} className={styles.arrow}>
            <span>&nbsp;Next</span>
            <NextIcon color="#8a1722" />
          </span>
        </div>
      </div>
      {/* <div className={styles.right}>44444</div> */}
      <div className={styles.wrapSlider}>
        <Carousel
          ref={carouselRef}
          dots={false}
          draggable={true}
          swipeToSlide={true}
          className={styles.slider}
          slidesToShow={3}
          autoplay={true}
          centerPadding={'10px'}
        >
          {projectImages.map((image, index) => {
            return (
              <div key={'projects' + index} className={styles.itemCarousel}>
                <div className={styles.wrapItem}>
                  <img src={image.split('/upload').join('/upload/w_1020,h_1264,c_fill/')} alt="" />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <button className={styles.hidden} onClick={goNext}>
        Next
      </button>
    </div>
  );
};

export default OurProject;
