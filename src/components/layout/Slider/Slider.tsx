import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import styles from "./Slider.module.scss";

const Slider = () => {
  return (
    <div className={styles.Slider}>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.mySwiperSlide}></SwiperSlide>
        <SwiperSlide className={styles.mySwiperSlide}></SwiperSlide>
        <SwiperSlide className={styles.mySwiperSlide}></SwiperSlide>
        <SwiperSlide className={styles.mySwiperSlide}></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
