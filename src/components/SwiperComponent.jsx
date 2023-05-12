import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper';
import styles from './SwiperComponent.module.css';

function SwiperComponent({ list }) {
  return (
    <>
      {list.length > 0 && (
        <div className='container'>
          <Swiper
            style={{ marginTop: '100px' }}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={4}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className='mySwiper'
          >
            {list.map((photo) => {
              return (
                <>
                  <SwiperSlide className={styles.photoGrid} key={photo.name}>
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className={styles.photoImage}
                    />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      )}
    </>
  );
}

export default SwiperComponent;
