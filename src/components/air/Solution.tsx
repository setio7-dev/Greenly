/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react'
import { AirAccordion } from '@/app/data/Accordion'
import Image from 'next/image';
import solution from '../../../public/image/air/solution.png'

export default function Solution() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index: any) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

  return (
    <div className='font-poppins min-h-screen flex flex-col items-center pb-28 lg:px-0 px-6 lg:-mt-12 -mt-26' id='aksi'>
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center lg:gap-64 gap-6">
        <p className='lg:w-[620px] w-full lg:text-[16px] text-[12px] text-justify' data-aos="fade-right" data-aos-duration="800">Kita sering dengar bahwa krisis tanah bukan lagi ancaman masa depan — tapi sedang terjadi saat ini. Tanah kehilangan kesuburannya, tercemar sampah dan bahan kimia, dan tak lagi mampu menumbuhkan pangan seperti dulu. Tapi, kita masih punya harapan. Lewat langkah kecil dalam kehidupan sehari-hari, kita bisa bantu pulihkan dan lindungi tanah. Mulai dari cara kita mengelola sampah, memilih pupuk, hingga mengompos sisa makanan — semua itu punya dampak besar untuk masa depan yang lebih subur.</p>
        <h1 className='text-transparent bg-clip-text bg-[radial-gradient(circle,_#6BB3F6_0%,_#7597B8_100%)] font-[800] text-[26px] lg:text-[42px] text-shadow-xl text-center lg:text-right' data-aos="fade-left" data-aos-duration="800">AKSI KECIL, <br /> DAMPAK BESAR</h1>
      </div>
      <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" className='lg:text-[24px] text-[20px] mt-18 w-fit font-[600] text-white lg:px-14 px-8 py-2 rounded-xl bg-[radial-gradient(circle,_#6BB3F6_0%,_#7597B8_100%)]'>SOLUSI PENANGANAN</h1>
      <div className="mt-[60px]">
        <div className='flex lg:flex-row flex-col lg:items-start items-center justify-center lg:gap-[40px] gap-8' data-aos-duration="800">
          <div data-aos="fade-up" data-aos-duration="900">
            <Image src={solution} width={500} height={500} alt='solution' className='lg:w-[300px] w-[160px] h-auto rounded-2xl transition-transform duration-500 hover:scale-105'/>
          </div>
          <div className=''>
            {AirAccordion.map((item, i) => (
              <div key={i} className='mt-5' data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
                <div className={`bg-gray-200 w-[330px] lg:w-[660px] rounded-2xl overflow-hidden transition-all duration-700 bg-gray1 block mx-auto ${activeIndex === i ? 'max-h-[500px]' : 'lg:max-h-[65px] max-h-[80px]'} ${activeIndex !== null ? 'shadow-lg' : ''}`}>
                  <div 
                    className='flex justify-between items-center p-4 cursor-pointer font-poppins transition-all duration-500 hover:bg-gray-300 hover:text-purple focus:text-purple' 
                    onClick={() => handleToggle(i)} 
                  >
                    <h1 className='text-lg font-semibold transition-all duration-500 lg:text-[18px] text-[16px] lg:w-full w-[250px]'>{item.title}</h1>
                    <i className={`bx ${activeIndex === i ? 'bx-chevron-up' : 'bx-chevron-up rotate-180'} text-3xl transition-transform duration-500 font-poppins1 text-[33px]`}></i>
                  </div>
                  <div className={`p-4 transition-opacity duration-500 ${activeIndex === i ? 'opacity-100' : 'opacity-0'}`}>
                    <p className='lg:w-[500px] font-poppins2 lg:text-[15px] text-[13px] text-justify'>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
