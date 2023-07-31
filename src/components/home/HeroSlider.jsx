"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css/bundle";
import SingleHeroSlider from "./SingleHeroSlider";
import mainSlider from "@/data/mainSlider";

const HeroSlider = () => {
  return (
    <section className="main-slider">
      <Swiper
        slidesPerView={1}
        loop
        navigation
        effect="fade"
        autoplay
        modules={[Navigation, EffectFade, Autoplay]}
      >
        {mainSlider.map((slider) => (
          <SwiperSlide key={slider.id}>
            <SingleHeroSlider slider={slider} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
