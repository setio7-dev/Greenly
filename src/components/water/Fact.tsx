'use client'
import React from 'react'
import Image from 'next/image'

export default function Fact() {
  return (
    <div className='flex flex-col items-center font-poppins min-h-screen mb-32 lg:-mt-12 mt-6 lg:px-0 px-6' id='fakta'>
      <h1 className="font-[600] lg:text-[32px] text-[24px] lg:text-start text-center" data-aos="fade-up" data-aos-duration="800">
        Air juga memiliki banyak {''}
        <span className="relative inline-block">
          fakta unik
          <span className="absolute left-0 bottom-[1px] w-full lg:h-[20px] h-[14px] -z-10 bg-[#6EC7F0] rounded-full"></span>
        </span>
      </h1>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-12 text-white">
        <div className="flex flex-col mt-16 justify-center items-center lg:gap-28 gap-46 lg:mr-0 mr-12">
          <div data-aos="fade-up" data-aos-duration="800">
            <div className="bg-cover relative hover:-translate-y-4 duration-500 object-cover w-[320px] lg:w-[580px] lg:h-[180px] h-[100px] flex justify-center items-center gap-6" style={{backgroundImage: `url('/image/water/comment.png')`}}>
              <div className="lg:w-[300px] w-[220px] lg:mr-12 mr-2">
                <h1 className='font-[500] lg:text-[18px] text-[12px]'>Tubuh manusia mengandung air sekitar 60 - 70 % dari berat tubuhnya</h1>
                <p className='font-[400] mt-2 lg:text-[16px] text-[10px]'>Source : kms.kemkes.go.id</p>
              </div>
              <Image width={200} height={200} className='absolute lg:w-[220px] w-[120px] bottom-[-10px] lg:right-[-60px] right-[-40px]' src='/image/water/fact1.png' alt='fact'/>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">            
            <div className="bg-cover relative hover:-translate-y-4 duration-500 object-cover w-[320px] lg:w-[580px] lg:h-[180px] h-[100px] flex justify-center items-center gap-6" style={{backgroundImage: `url('/image/water/comment.png')`}}>
              <div className="lg:w-[300px] w-[220px] lg:mr-12 mr-2">
                <h1 className='font-[500] lg:text-[20px] text-[12px]'>Penyerapan karbon lebih optimal 57% di hutan campuran</h1>
                <p className='font-[400] mt-2 lg:text-[16px] text-[10px]'>Source : naturebasedsolution</p>
              </div>
              <Image width={220} height={220} className='absolute lg:w-[220px] w-[120px] lg:bottom-[-46px] bottom-[-24px] lg:right-[-30px] right-[-40px]' src='/image/water/fact3.png' alt='fact'/>
            </div>
          </div>
        </div>
        <div className='lg:ml-0 ml-12'  data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">          
          <div className="bg-cover relative hover:-translate-y-4 duration-500 object-cover w-[320px] lg:w-[580px] lg:h-[200px] h-[120px] lg:mt-0 -mt-74 flex justify-center items-center gap-6" style={{backgroundImage: `url('/image/water/comment-reverse.png')`}}>
            <Image width={200} height={200} className='absolute lg:w-[220px] w-[120px] bottom-[-0px] lg:left-[-60px] left-[-40px]' src='/image/water/fact2.png' alt='fact'/>
            <div className="lg:w-[280px] w-[220px] ml-12">
              <h1 className='font-[500] lg:text-[18px] text-[12px]'>satu pohon rata-rata mampu menyerap ± 22 kg CO₂ per tahun</h1>
              <p className='font-[400] mt-2 lg:text-[16px] text-[10px]'>Source : Liputan6.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
