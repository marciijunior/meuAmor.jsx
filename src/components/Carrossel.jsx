import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

function Carrossel() {
  const fotos = [
    { src: '/assets/foto1.jpg', title: '', subtitle: '' },
    { src: '/assets/foto2.jpg', title: '', subtitle: '' },
    { src: '/assets/foto3.jpg', title: '', subtitle: '' },
    { src: '/assets/foto4.jpg', title: '', subtitle: '' },
    { src: '/assets/foto5.jpg', title: '', subtitle: '' },
    { src: '/assets/foto6.png', title: '', subtitle: '' },
    { src: '/assets/foto7.jpg', title: '', subtitle: '' },
  ];

  return (
    <motion.section 
      className="carrossel-wrapper-novo"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <h2 data-swiper-parallax="-300">Nossas Memórias:</h2>
      <Swiper
        style={{
          '--swiper-navigation-color': '#8c4a5f',
          '--swiper-pagination-color': '#8c4a5f',
        }}
        speed={800}
        parallax={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        modules={[Parallax, Pagination, Navigation, Autoplay, EffectFade]}
        className="meuSwiper-novo"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'backgroundImage': 'url(/assets/foto1.jpg)', // Pode usar uma imagem de fundo genérica aqui
          }}
          data-swiper-parallax="-23%"
        ></div>

        {fotos.map((foto, index) => (
          <SwiperSlide key={index}>
            <img src={foto.src} alt={foto.title} className="slide-imagem" />
            <div className="slide-texto">
              <div className="titulo" data-swiper-parallax="-300">{foto.title}</div>
              <div className="subtitulo" data-swiper-parallax="-200">{foto.subtitle}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}

export default Carrossel;