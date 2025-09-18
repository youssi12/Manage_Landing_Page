 import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// images
import anisha from '../assets/images/avatar-anisha.png';
import ali from '../assets/images/avatar-ali.png';
import richard from '../assets/images/avatar-richard.png';
import shanai from '../assets/images/avatar-shanai.png';

import TestimonialCard from "./TestimonialCard";

export default function TestimonialSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={1} // default
      breakpoints={{
        768: { slidesPerView: 3, spaceBetween: 40 }, // >= md
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
    >
      <SwiperSlide><TestimonialCard pic={anisha} name="Anisha Li" text="Manage has supercharged our team’s workflow..." /></SwiperSlide>
      <SwiperSlide><TestimonialCard pic={ali} name="Ali Bravo" text="We have been able to cancel so many other subscriptions..." /></SwiperSlide>
      <SwiperSlide><TestimonialCard pic={richard} name="Richard Watts" text="Manage allows us to provide structure and process..." /></SwiperSlide>
      <SwiperSlide><TestimonialCard pic={shanai} name="Shanai Gough" text="Their software allows us to track, manage and collaborate..." /></SwiperSlide>
    </Swiper>
  )
}
