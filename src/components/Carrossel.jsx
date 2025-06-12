import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function Carrossel() {
  return (
    <section className="carrossel">
      <motion.h2
        className="carrossel__titulo"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Te amo para sempre!
      </motion.h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="slide"
        grabCursor
        centeredSlides
        slidesPerView="7"
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop
      >
        <SwiperSlide><img src="/assets/foto1.jpg" alt="Foto 1" /></SwiperSlide>
        <SwiperSlide><img src="/assets/foto2.jpg" alt="Foto 2" /></SwiperSlide>
        <SwiperSlide><img src="/assets/foto3.jpg" alt="Foto 3" /></SwiperSlide>
        <SwiperSlide><img src="/assets/foto4.jpg" alt="Foto 4" /></SwiperSlide>
        <SwiperSlide><img src="/assets/foto5.jpg" alt="Foto 5" /></SwiperSlide>
        <SwiperSlide><img src="/assets/foto6.png" alt="Foto 6" /></SwiperSlide>
        <SwiperSlide><img src="/assets/foto7.jpg" alt="Foto 7" /></SwiperSlide>
        <SwiperSlide><img src="/assets/foto1.jpg" alt="Foto 1" /></SwiperSlide>
        <SwiperSlide><img src="/assets/foto2.jpg" alt="Foto 2" /></SwiperSlide>
        <SwiperSlide><img src="/assets/foto3.jpg" alt="Foto 3" /></SwiperSlide>
        <SwiperSlide><img src="/assets/foto4.jpg" alt="Foto 4" /></SwiperSlide>
        <SwiperSlide><img src="/assets/foto5.jpg" alt="Foto 5" /></SwiperSlide>
        <SwiperSlide><img src="/assets/foto6.png" alt="Foto 6" /></SwiperSlide>
        <SwiperSlide><img src="/assets/foto7.jpg" alt="Foto 7" /></SwiperSlide>
      </Swiper>
    </section>
  );
}
