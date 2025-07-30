"use client"
import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex lg:flex-row flex-col-reverse justify-center items-center w-full mb-12 lg:px-0 px-6 h-[110vh] lg:h-screen mx-auto lg:gap-30 gap-10 lg:pt-10 pt-24'>
      <div className="lg:w-[600px] w-full flex flex-col gap-6" data-aos="fade-right" data-aos-duration="900">
        <h1 className='text-transparent bg-clip-text bg-[linear-gradient(160deg,_#BDFF00_0%,_#00AD03_81%)] font-[600] lg:text-[42px] text-[24px]'>Aksi Kecil, Dampak Besar Untuk Lingkungan</h1>
        <p className='lg:text-[16px] text-[14px] text-justify'>Nggak perlu nunggu jadi superhero buat bantu bumi. Mulai aja dari hal kecil: tanam pohon. Bayangkan, satu pohon yang kamu tanam hari ini bisa melindungi udara untuk generasi esok. Temukan inspirasi, fakta menarik, dan cara-cara sederhana merawat lingkungan di sini. Mari bergerak bersama — karena perubahan dimulai dari kamu!</p>
      </div>
      <div className="relative" data-aos="fade-left" data-aos-duration="900">
        <Image width={500} height={500} className='lg:w-[480px] bounce h-auto w-[260px]' src='/image/tree/tree.png' alt='tree'/>
        <div className="w-80 h-80 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full -z-10 bg-[linear-gradient(90deg,_#98CD00_18%,_#B6F500_80%)] blur-3xl opacity-50 shadow-[0_0_120px_#98CD00]"></div>
      </div>
    </div>
  )
}
