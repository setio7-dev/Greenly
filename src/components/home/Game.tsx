"use client"
import React from 'react'
import game from '../../../public/image/home/game.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Game() {
  return (
    <div className='flex flex-col items-center justify-start h-auto font-poppins lg:pb-12 pb-24 container mx-auto'>
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center lg:pb-16 lg:gap-16 gap-6 lg:mt-20 -mt-6" id='tentangkami'>
        <div className="flex flex-col items-start lg:w-[520px] w-[320px]" data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">
          <h1 className='lg:text-[32px] text-[24px] font-[600] text-[#437655]'>Berani tantang dirimu?</h1>
          <p className='lg:text-[14px] text-[12px] font-[400] mt-4 text-justify'>Melalui game seru ini, kamu bisa belajar cara menjaga lingkungan dengan cara yang menyenangkan dan interaktif. Mulai dari memilah sampah sesuai dengan jenisnya, hingga mengurangi sampah. Semua bisa kamu lakukan di dalam permainan. <br /> <br /> Tak hanya menghibur, game ini juga mengajakmu untuk lebih peduli terhadap bumi tempat kita tinggal. Jadi, tunggu apa lagi? Ayo main dan jadi pahlawan lingkungan dari sekarang!</p>
          <Link href='/permainan'>
            <button className='font-[600] border-3 text-[#437655] border-[#437655] rounded-lg mt-6 px-4 py-2 text-[16px] w-full lg:w-auto hover:scale-105 hover:bg-[#437655] hover:text-white duration-300 cursor-pointer'>Mulai Bermain</button>
          </Link>
        </div>
        <Image src={game.src} className='lg:w-[550px] w-[280px]' width={550} height={500} alt='suggest' data-aos="fade-right" data-aos-duration="800" data-aos-delay="100"/>
      </div>
    </div>
  )
}
