"use client"
import React from 'react'
import Image from 'next/image'
import solution1 from '../../../public/image/home/solution1.png'
import solution2 from '../../../public/image/home/solution2.png'
import solution3 from '../../../public/image/home/solution3.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-cards'

export default function Solution() {
  return (
    <div className='w-full container mx-auto font-poppins lg:pb-38 pb-28 px-6 lg:px-16 flex justify-between items-center gap-8 flex-col lg:flex-row'>
      <div className="flex flex-col gap-4 w-[300px] lg:w-[600px]" data-aos="fade-right" data-aos-duration="800">
        <h1 className='text-[#437655] font-[600] lg:text-[38px] text-[24px] leading-tight lg:w-[400px] w-auto'>
          Solusi Pencegahan Emisi Karbon
        </h1>
        <p className='lg:text-[16px] text-[14px] text-justify'>
          Dengan adanya emisi karbon di Indonesia yang berdampak cukup signifikan, kami memberikan beberapa solusi untuk mencapai tujuan kami yaitu meminimalisir jejak karbon: langkah mudah gaya hidup berkelanjutan. Mari mulailah jejak perjalanan yang ramah lingkungan dengan berkontribusi yang baik.
        </p>
      </div>

      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className='w-full lg:max-w-[400px] max-w-[260px] ml-auto '
        data-aos="fade-left" data-aos-duration="800"
      >
        <SwiperSlide className='flex justify-center items-center'>
          <Image src={solution1} alt='solution1' width={400} height={400} className="rounded-xl " />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <Image src={solution2} alt='solution2' width={400} height={400} className="rounded-xl " />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <Image src={solution3} alt='solution3' width={400} height={400} className="rounded-xl " />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
