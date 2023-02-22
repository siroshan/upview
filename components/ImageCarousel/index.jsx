import Image from 'next/image';
import { useState } from 'react';
import { Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './index.module.scss';

const ImageCarousel = ({ images }) => {
  const [thumb, setThumb] = useState(null);

  const slides = images.map((image, index) => (
    <SwiperSlide key={index} className={styles.img_container}>
      <Image
        src={image.image}
        alt='product image'
        width={600}
        height={400}
        style={{ objectFit: 'contain' }}
      />
    </SwiperSlide>
  ));

  const thumbs = images.map((image, index) => (
    <SwiperSlide key={index} className={styles.img_container}>
      <Image
        src={image.image}
        alt='product image'
        width={80}
        height={80}
        style={{ objectFit: 'contain' }}
      />
    </SwiperSlide>
  ));

  return (
    <div>
      <div className={styles.swiper_container}>
        <Swiper
          modules={[Thumbs]}
          spaceBetween={50}
          thumbs={{
            swiper: thumb && !thumb.destroyed ? thumb : null,
            slideThumbActiveClass: styles.active_thumb,
          }}
        >
          {slides}
        </Swiper>
      </div>
      <div className={styles.thumb_container}>
        <Swiper
          modules={[Thumbs]}
          slidesPerView={'auto'}
          spaceBetween={20}
          onSwiper={setThumb}
        >
          {thumbs}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageCarousel;
