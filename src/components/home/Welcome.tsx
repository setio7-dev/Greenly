"use client"
import React from 'react'
import bgWelcome from '../../../public/image/home/bg-welcome.svg'
import truck from '../../../public/image/home/truck.png'
import suggest from '../../../public/image/home/suggest.png'
import search from '../../../public/image/home/search.png'
import Image from 'next/image'

export default function Welcome() {
  return (
    <div className='flex flex-col items-center justify-start min-h-screen font-poppins lg:my-10 my-6 container lg:pb-0 pb-20 mx-auto'>
      <div className="w-[95vw] h-[84vh] bg-cover flex relative justify-between mt-2 items-center display-none" style={{ backgroundImage: `url(${bgWelcome.src})` }} data-aos="fade-up" data-aos-duration="800">
        <h1 className='font-[700] -mt-30 text-[48px] ml-20 text-white'>Jelajahi Gaya Hidup <br /> Rendah Emisi</h1>
        <Image src={truck.src} className='bounce' width={640} height={640} alt='image'/>
        <Image src={search.src} className='absolute cursor-pointer hover:scale-105 scale-100 duration-300 left-0 bottom-0' width={500} height={200} alt='image'/>
      </div>
      <div className="min-h-screen w-full flex flex-col justify-center px-4 items-center gap-6 display-flex" data-aos="fade-up" data-aos-duration="800">
        <div className="flex flex-col gap-6 -mt-12">
          <Image src={truck.src} width={300} height={300} className='mx-auto bounce' alt='image'/>
          <h1 className='font-[600] text-[28px] text-center text-[#00AD03]'>Jelajahi Gaya Hidup Rendah Emisi</h1>
        </div>
        <p className='text-[14px] font-[400] text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut dignissimos nulla explicabo optio delectus provident quos, laboriosam reiciendis alias, ab numquam, non autem! Corrupti dolorum, nostrum natus aliquam adipisci voluptatum.</p>
        <Image src={search.src} className='mt-6' width={260} height={260} alt='image'/>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center lg:pb-16 lg:gap-16 gap-6 lg:mt-20 -mt-6">
        <Image src={suggest} className='lg:w-[550px] w-[280px]' width={550} height={500} alt='suggest' data-aos="fade-right" data-aos-duration="800" data-aos-delay="100"/>
        <div className="flex flex-col items-start lg:w-[520px] w-[320px]" data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">
          <h1 className='lg:text-[32px] text-[24px] font-[600] text-[#00AD03]'>Ayo Cek Emisi Karbon Kamu Sekarang!</h1>
          <p className='lg:text-[14px] text-[12px] font-[400] mt-4 text-justify'>Langkah awal mengurangi karbon dimulai dari menghitung emisi karbon pribadi kita berapa banyak tiap tahunnya. Caranya mudah, tinggal masukin data aktivitas harian mulai dari pilihan transportasi, penggunaan listrik dan peralatan elektronik, serta pilihan menu makan. <br /> <br /> Hasil hitunganya bisa dilihat langsung. Kamu juga bisa bandingin emisi kamu dengan rata-rata orang Indonesia, ASEAN, Global, atau bahkan dengan teman kamu yang juga mencoba kalkulator jejakkarbonku.id</p>
          <button className='font-[600] border-3 text-[#00AD03] border-[#00AD03] rounded-lg mt-6 px-4 py-3 text-[16px] w-full lg:w-auto hover:scale-105 hover:bg-[#00AD03] hover:text-white duration-300 cursor-pointer'>Mulai Hitung Emisi Karbon Kamu!</button>
        </div>
      </div>
    </div>
  )
}
