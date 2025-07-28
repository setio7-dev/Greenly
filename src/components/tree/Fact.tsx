'use client'
import React from 'react'
import Image from 'next/image'

export default function Fact() {
  return (
    <div className='flex flex-col items-center font-poppins min-h-screen mb-20 -mt-12'>
      <h1 className="font-[600] text-[32px]">
        Pohon juga memiliki banyak {''}
        <span className="relative inline-block">
          fakta unik
          <span className="absolute left-0 bottom-[1px] w-full h-[20px] -z-10 bg-[linear-gradient(170deg,_#BDFF00_0%,_#00AD03_81%)] rounded-full"></span>
        </span>
      </h1>
      <div className="flex justify-center items-center gap-12 text-white">
        <div className="flex flex-col mt-16 justify-center items-center gap-28">
          <div className="bg-cover relative object-cover w-[580px] h-[180px] flex justify-center items-center gap-6" style={{backgroundImage: `url('/image/tree/comment.png')`}}>
            <div className="w-[300px] mr-12">
              <h1 className='font-[500] text-[18px]'>1 pohon dewasa dapat menghasilkan oksigen untuk 2-4 orang setiap hari</h1>
              <p className='font-[400] mt-2 text-[16px]'>Source : Satupersenindonesia.or.id</p>
            </div>
            <Image width={200} height={200} className='absolute bottom-[-20px] right-[-60px]' src='/image/tree/fact1.png' alt='fact'/>
          </div>
          <div className="bg-cover relative object-cover w-[580px] h-[180px] flex justify-center items-center gap-6" style={{backgroundImage: `url('/image/tree/comment.png')`}}>
            <div className="w-[300px] mr-12">
              <h1 className='font-[500] text-[20px]'>Penyerapan karbon lebih optimal 57% di hutan campuran</h1>
            </div>
            <Image width={220} height={220} className='absolute bottom-[-46px] right-[-60px]' src='/image/tree/fact3.png' alt='fact'/>
          </div>
        </div>
        <div className="bg-cover relative object-cover w-[580px] h-[180px] flex justify-center items-center gap-6" style={{backgroundImage: `url('/image/tree/comment-reverse.png')`}}>
          <Image width={200} height={200} className='absolute bottom-[-20px] left-[-60px]' src='/image/tree/fact2.png' alt='fact'/>
          <div className="w-[280px] ml-12">
            <h1 className='font-[500] text-[18px]'>satu pohon rata-rata mampu menyerap ± 22 kg CO₂ per tahun</h1>
            <p className='font-[400] mt-2 text-[16px]'>Source : Liputan6.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
