"use client"
import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex lg:flex-row flex-col-reverse justify-center items-center w-full mb-12 lg:px-0 px-6 h-[110vh] lg:h-screen mx-auto lg:gap-24 gap-10 lg:pt-10 pt-24'>
      <div className="lg:w-[600px] w-full flex flex-col gap-6" data-aos="fade-right" data-aos-duration="900">
        <h1 className='text-[#0097DC] font-[600] lg:text-[42px] text-[24px]'>Jaga Kualitasnya, Selamatkan Masa Depan</h1>
        <p className='lg:text-[16px] text-[14px] text-justify'>Nggak perlu jadi ilmuwan buat selamatin air bersih. Cukup mulai dari kebiasaan kecil: kurangi plastik, hemat air, dan jaga saluran pembuangan. Bayangkan, tiap tetes yang kamu hemat hari ini bisa jadi penyambung hidup untuk banyak orang esok hari. Temukan fakta mengejutkan, tips ramah lingkungan, dan aksi kecil yang berdampak besar. Yuk, rawat air bersama — karena perubahan besar selalu dimulai dari yang sederhana.</p>
      </div>
      <div className="relative" data-aos="fade-left" data-aos-duration="900">
        <Image width={500} height={500} className='lg:w-[500px] bounce h-auto w-[300px]' src='/image/water/water.png' alt='tree'/>
        <div className="lg:w-80 w-60 h-60 lg:h-80 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full -z-10 bg-[#0097DC] blur-3xl opacity-50 shadow-[0_0_120px_#98CD00]"></div>
      </div>
    </div>
  )
}
