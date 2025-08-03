'use client'
import React from 'react'
import Image from 'next/image'

export default function Fact() {
  return (
    <div className='flex flex-col items-center font-poppins min-h-screen mb-32 -mt-12 lg:px-0 px-6' id='fakta'>
      <h1 className="font-[600] lg:text-[32px] text-[24px] lg:text-start text-center" data-aos="fade-up" data-aos-duration="800">
        Tanah juga memiliki banyak {''}
        <span className="relative inline-block">
          fakta unik
          <span className="absolute left-0 bottom-[1px] w-full lg:h-[20px] h-[14px] -z-10 bg-[#CE8686] rounded-full"></span>
        </span>
      </h1>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-12 text-white">
        <div className="flex flex-col mt-16 justify-center items-center lg:gap-28 gap-50 lg:mr-0 mr-12">
          <div data-aos="fade-up" data-aos-duration="800">
            <div className="bg-cover relative hover:-translate-y-4 duration-500 object-cover w-[320px] lg:w-[580px] lg:h-[180px] h-[100px] flex justify-center items-center gap-6" style={{backgroundImage: `url('/image/dirt/comment.png')`}}>
              <div className="lg:w-[300px] w-[220px] lg:mr-12 mr-2">
                <h1 className='font-[500] lg:text-[18px] text-[12px]'>Lebih dari 95% makanan yang kita konsumsi berasal dari tanah yang sehat dan subur</h1>
                <p className='font-[400] mt-2 lg:text-[16px] text-[10px]'>Source : greeners.co</p>
              </div>
              <Image width={200} height={200} className='absolute lg:w-[200px] w-[100px] bottom-[-8px] lg:right-[-60px] right-[-40px]' src='/image/dirt/fact1.png' alt='fact'/>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">            
            <div className="bg-cover relative hover:-translate-y-4 duration-500 object-cover w-[320px] lg:w-[580px] lg:h-[180px] h-[100px] flex justify-center items-center gap-6" style={{backgroundImage: `url('/image/dirt/comment.png')`}}>
              <div className="lg:w-[300px] w-[220px] lg:mr-12 mr-2">
                <h1 className='font-[500] lg:text-[20px] text-[12px]'>40% Tanah di Dunia Sudah Terdegradasi</h1>
                <p className='font-[400] mt-2 lg:text-[16px] text-[10px]'>Source : forestdigest.com</p>
              </div>
              <Image width={220} height={220} className='absolute lg:w-[260px] w-[140px] lg:bottom-[-46px] bottom-[-24px] lg:right-[-60px] right-[-40px]' src='/image/dirt/fact3.png' alt='fact'/>
            </div>
          </div>
        </div>
        <div className='lg:ml-0 ml-12' data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">          
          <div className="bg-cover relative hover:-translate-y-4 duration-500 object-cover w-[320px] lg:w-[580px] lg:h-[200px] h-[120px] lg:mt-0 -mt-76 flex justify-center items-center gap-6" style={{backgroundImage: `url('/image/dirt/comment-reverse.png')`}}>
            <Image width={200} height={200} className='absolute lg:w-[180px] w-[100px] bottom-[10px] lg:left-[-40px] left-[-40px]' src='/image/dirt/fact2.png' alt='fact'/>
            <div className="lg:w-[280px] w-[220px] ml-12">
              <h1 className='font-[500] lg:text-[18px] text-[12px]'>24 Miliar Ton Tanah Subur Hilang Setiap Tahun</h1>
              <p className='font-[400] mt-2 lg:text-[16px] text-[10px]'>Source : satuplatform.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
