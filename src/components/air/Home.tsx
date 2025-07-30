"use client"
import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex lg:flex-row flex-col-reverse justify-center items-center w-full mb-12 lg:px-0 px-6 h-[110vh] lg:h-screen mx-auto lg:gap-30 gap-10 lg:pt-10 pt-24'>
      <div className="lg:w-[600px] w-full flex flex-col gap-6" data-aos="fade-right" data-aos-duration="900">
        <h1 className='bg-clip-text text-transparent bg-[radial-gradient(circle,_#6BB3F6_0%,_#7597B8_100%)] font-[600] lg:text-[42px] text-[24px]'>Aksi Kecil, Dampak Besar Untuk Lingkungan</h1>
        <p className='lg:text-[16px] text-[14px] text-justify'>Nggak perlu jadi ahli lingkungan buat jaga kualitas udara. Cukup mulai dari kebiasaan kecil: kurangi kendaraan pribadi, tanam tanaman penyaring polusi, dan hindari bakar sampah. Bayangkan, tiap langkah kecil hari ini bisa bikin udara lebih layak untuk generasi esok. Temukan fakta mengejutkan, cara-cara sederhana, dan aksi harian yang berdampak besar. Yuk, rawat udara bersama — karena setiap napas layak diperjuangkan.</p>
      </div>
      <div className="relative" data-aos="fade-left" data-aos-duration="900">
        <Image width={500} height={500} className='lg:w-[500px] bounce h-auto w-[260px]' src='/image/air/air.png' alt='tree'/>
        <div className="lg:w-80 w-60 h-60 lg:h-80 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full -z-10 bg-[#6BB3F6] blur-3xl opacity-50 shadow-[0_0_120px_#98CD00]"></div>
      </div>
    </div>
  )
}
