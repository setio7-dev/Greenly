"use client"
import React from 'react'
import bgWelcome from '../../../public/image/home/bg-welcome.svg'
import globe from '../../../public/image/home/globe.png'
import suggest from '../../../public/image/home/suggest.png'
import search from '../../../public/image/home/search.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Welcome() {
  return (
    <div className='flex flex-col items-center justify-start min-h-screen font-poppins lg:pb-10 lg:pt-28 pb-24 pt-12 container mx-auto'>
      <div className="w-full max-w-[1280px] h-auto py-8 bg-cover flex relative justify-between mt-2 items-center display-none" style={{ backgroundImage: `url(${bgWelcome.src})` }} data-aos="fade-up" data-aos-duration="800">
        <h1 className='font-[700] -mt-30 text-[48px] ml-20 text-white'>Jelajahi Gaya Hidup <br /> Rendah Emisi</h1>
        <Image src={globe.src} className='bounce' width={450} height={300} alt='image'/>
        <a href="#tentangkami">
          <Image src={search.src} className='absolute cursor-pointer hover:scale-105 scale-100 duration-300 left-0 bottom-0' width={500} height={200} alt='image'/>
        </a>
      </div>
      <div className="min-h-screen w-full flex flex-col justify-center px-4 items-center gap-4 display-flex" data-aos="fade-up" data-aos-duration="800">
        <div className="flex flex-col gap-10 -mt-8">
          <Image src={globe.src} width={260} height={260} className='mx-auto bounce' alt='image'/>
          <h1 className='font-[600] text-[28px] text-center text-[#58C229]'>Jelajahi Gaya Hidup Rendah Emisi</h1>
        </div>
        <p className='text-[14px] font-[400] text-center w-[300px]'>Temukan cara hidup yang lebih ramah lingkungan dengan mengurangi jejak karbon harianmu. Mulai dari transportasi hingga energi, setiap langkah kecil berarti untuk bumi kita.</p>
        <a href="#tentangkami">
          <Image src={search.src} className='mt-6' width={260} height={260} alt='image'/>
        </a>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center lg:pb-16 lg:gap-16 gap-6 lg:mt-20 -mt-6" id='tentangkami'>
        <Image src={suggest} className='lg:w-[550px] w-[280px]' width={550} height={500} alt='suggest' data-aos="fade-right" data-aos-duration="800" data-aos-delay="100"/>
        <div className="flex flex-col items-start lg:w-[520px] w-[320px]" data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">
          <h1 className='lg:text-[32px] text-[24px] font-[600] text-[#437655]'>Ayo Cek Emisi Karbon Kamu Sekarang!</h1>
          <p className='lg:text-[14px] text-[12px] font-[400] mt-4 text-justify'>Langkah awal mengurangi karbon dimulai dari menghitung emisi karbon pribadi kita berapa banyak tiap tahunnya. Caranya mudah, tinggal masukin data aktivitas harian mulai dari pilihan transportasi, penggunaan listrik dan peralatan elektronik, serta pilihan menu makan. <br /> <br /> Hasil hitunganya bisa dilihat langsung. Kamu juga bisa bandingin emisi kamu dengan rata-rata orang Indonesia, ASEAN, Global, atau bahkan dengan teman kamu yang juga mencoba kalkulator jejakkarbonku.id</p>
          <Link href='/cek-emisi'>
            <button className='font-[600] border-3 text-[#0F3C39] border-[#437655] rounded-lg mt-6 px-4 py-3 text-[16px] w-full lg:w-auto hover:scale-105 hover:bg-[#437655] hover:text-white duration-300 cursor-pointer'>Mulai Hitung Emisi Karbon Kamu!</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
