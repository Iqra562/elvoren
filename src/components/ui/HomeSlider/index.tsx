"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'

import slide1 from '@/assets/homeImages/slide1.webp'
import slide2 from '@/assets/homeImages/slide2.webp'
import slide3 from '@/assets/homeImages/slide3.jpg'
import slide4 from '@/assets/homeImages/slide4.webp'
import slide5 from '@/assets/homeImages/slide5.webp'
import slide6 from '@/assets/homeImages/slide6.avif'
import slide7 from '@/assets/homeImages/slide7.jpg'
import slide8 from '@/assets/homeImages/slide8.jpg'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './style.css'

const slides = [
  slide1,
 slide2,
  slide4,
   slide6,
   slide8  
];
export default function Slider() {
  return (
    <>
      <style>{`
        .slide-btn {
          padding: 10px 40px;
          background: #fff;
          color: #000;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
        }

        .content {
          position: absolute;
          bottom: 40%;
          left: 10%;
          transform: translateY(50px);
          opacity: 0;
          z-index: 10;
          color: #fff;
        }

        .swiper-slide-active .content {
          animation: dropIn 1s ease forwards;
          animation-delay: 0.4s;
        }

        @keyframes dropIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(90px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .home-swiper .swiper-slide {
          position: relative;
          height: 100vh;
        }
      `}</style>

      <Swiper
        spaceBetween={30}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        fadeEffect={{ crossFade: false }}
        speed={500}
        navigation={false}
        pagination={{ clickable: true }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="home-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='container w-20 p-20' >

            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              fill
              style={{ objectFit: 'cover', objectPosition: 'start' }}
              priority={index === 0}
              />
          
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}