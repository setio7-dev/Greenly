"use client"
import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import tree from '../../../public/image/home/tree.png'
import water from '../../../public/image/home/water.png'
import air from '../../../public/image/home/air.png'
import dirt from '../../../public/image/home/dirt.png'

const CategoryData = [
  {
    id: 1,
    image: tree,
    title: "Pohon",
    desc: "Pohon adalah tumbuhan yang batangnya berkayu dan bercabang. Batang pohon utama berdiri dan berukuran lebih besari dibanding cabang-cabangnya.",
    link: "/pohon",
    width: 220,
  },
  {
    id: 2,
    image: water,
    title: "Air",
    desc: "Air adalah senyawa kimia dengan rumus H₂O, terdiri dari dua atom hidrogen dan satu atom oksigen yang terikat secara kovalen. ",
    link: "/air",
    width: 110,
  },
  {
    id: 3,
    image: dirt,
    title: "Tanah",
    desc: "Tanah adalah lapisan teratas dari kerak bumi yang terdiri dari mineral, bahan organik, air, dan udara.",
    link: "/tanah",
    width: 200,
  },
  {
    id: 4,
    image: air,
    title: "Udara",
    desc: "Udara adalah atmosfer yang mengelilingi bumi, campuran gas yang tidak berwarna, tidak berbau, dan tidak berasa.",
    link: "/udara",
    width: 200,
  },
]

export default function Category() {
  return (
    <div className='w-full container mx-auto px-4 font-poppins pb-26' data-aos="fade-up" data-aos-duration="800">
      <h1 className='text-[#00AD03] lg:text-[36px] text-[28px] lg:w-full w-[300px] mx-auto font-[600] text-center mb-14'>Pilih Kategori Lingkungan!</h1>
      
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect='coverflow'
        centeredSlides={true}
        grabCursor={true}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: false,
        }}
        breakpoints={{
        0: {
          slidesPerView: 1.1,
          centeredSlides: true,
        },
        640: {
          slidesPerView: 1.5,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      >
        {CategoryData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)] lg:w-[360px] w-full min-h-[460px] rounded-lg px-6 py-10 flex flex-col items-start justify-center text-center shadow-md mx-auto">
              <Image src={item.image} alt='image' width={item.width} height={160} className="mb-4 mx-auto"/>
              <h1 className="text-white text-[28px] font-[600]">{item.title}</h1>
              <p className="text-white text-sm mt-2 text-[12px] text-justify">{item.desc}</p>
              <Link href={item.link} className='w-full mt-8 cursor-pointer'>
                <button className='w-full h-[40px] rounded-md text-[#AEA46B] bg-white'>Pilih</button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
