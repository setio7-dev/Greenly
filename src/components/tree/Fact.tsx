'use client'
import React from 'react'
import Image from 'next/image'

export default function Fact() {
  return (
    <div className='flex flex-col items-center font-poppins min-h-screen mb-20 lg:-mt-12 mt-0 lg:px-0 px-6'>
      <h1 className="font-[600] lg:text-[32px] text-[24px] lg:text-start text-center" data-aos="fade-up" data-aos-duration="800">
        Pohon juga memiliki banyak {''}
        <span className="relative inline-block">
          fakta unik
          <span className="absolute left-0 bottom-[1px] w-full h-[20px] -z-10 bg-[linear-gradient(170deg,_#BDFF00_0%,_#00AD03_81%)] rounded-full"></span>
        </span>
      </h1>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-12 text-white">
        <div className="flex flex-col mt-16 justify-center items-center lg:gap-28 gap-46">
          <div className="bg-cover relative object-cover w-[320px] lg:w-[580px] lg:h-[180px] h-[100px] flex justify-center items-center gap-6" style={{backgroundImage: `url('/image/tree/comment.png')`}} data-aos="fade-up" data-aos-duration="800">
            <div className="lg:w-[300px] w-[220px] lg:mr-12 mr-2">
              <h1 className='font-[500] lg:text-[18px] text-[12px]'>1 pohon dewasa dapat menghasilkan oksigen untuk 2-4 orang setiap hari</h1>
              <p className='font-[400] mt-2 lg:text-[16px] text-[10px]'>Source : Satupersenindonesia.or.id</p>
            </div>
            <Image width={200} height={200} className='absolute lg:w-[220px] w-[120px] bottom-[-14px] lg:right-[-60px] right-[-40px]' src='/image/tree/fact1.png' alt='fact'/>
          </div>
          <div className="bg-cover relative object-cover w-[320px] lg:w-[580px] lg:h-[180px] h-[100px] flex justify-center items-center gap-6" style={{backgroundImage: `url('/image/tree/comment.png')`}} data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <div className="lg:w-[300px] w-[220px] lg:mr-12 mr-2">
              <h1 className='font-[500] lg:text-[20px] text-[12px]'>Penyerapan karbon lebih optimal 57% di hutan campuran</h1>
              <p className='font-[400] mt-2 lg:text-[16px] text-[10px]'>Source : naturebasedsolution</p>
            </div>
            <Image width={220} height={220} className='absolute lg:w-[220px] w-[120px] lg:bottom-[-46px] bottom-[-24px] lg:right-[-60px] right-[-40px]' src='/image/tree/fact3.png' alt='fact'/>
          </div>
        </div>
        <div className="bg-cover relative object-cover w-[320px] lg:w-[580px] lg:h-[180px] h-[100px] lg:mt-0 -mt-72 flex justify-center items-center gap-6" style={{backgroundImage: `url('/image/tree/comment-reverse.png')`}} data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <Image width={200} height={200} className='absolute lg:w-[220px] w-[120px] bottom-[-20px] lg:left-[-60px] left-[-40px]' src='/image/tree/fact2.png' alt='fact'/>
          <div className="lg:w-[280px] w-[220px] ml-12">
            <h1 className='font-[500] lg:text-[18px] text-[12px]'>satu pohon rata-rata mampu menyerap ± 22 kg CO₂ per tahun</h1>
            <p className='font-[400] mt-2 lg:text-[16px] text-[10px]'>Source : Liputan6.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
