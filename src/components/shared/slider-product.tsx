'use client'

import {
  A11y,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules'
import {
  Swiper,
  SwiperProps,
  SwiperSlide,
  SwiperSlideProps,
} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export const SliderProduct = ({ ...props }: SwiperProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      spaceBetween={30}
      slidesPerView={6}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      effect="fade"
      {...props}
    />
  )
}

export const SwiperSlideProvider = ({ ...props }: SwiperSlideProps) => {
  return <SwiperSlide {...props} />
}
