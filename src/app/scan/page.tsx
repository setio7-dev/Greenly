"'use client'"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cloud from '../../../public/image/scan/cloud.png'

export default function Page() {
  return (
    <div className='flex flex-col text-white items-center justify-center h-screen font-poppins bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)]'>
      <div className="w-full flex justify-between h-[11vh] lg:h-[14vh] items-center lg:px-20 pt-6 px-6 top-0 fixed cursor-pointer z-30">
        <Link href="/" className="flex justify-center gap-1 cursor-pointer items-center">
          <i className="bx bx-chevron-left text-[24px] lg:text-[36px]" />
          <h1 className="font-poppins font-[600] text-[18px] lg:text-[24px]">Kembali</h1>
        </Link>
      </div>
      <div className="text-center relative z-20 flex flex-col gap-2 lg:px-0 px-6" data-aos="fade-up" data-aos-duration="1000">
        <h1 className='font-[600] lg:text-[58px] text-[32px]'>Scan SampahMu!</h1>
        <p className='font-[400] lg:text-[18px] text-[12px] lg:w-[660px] w-full'>Selamat datang di fitur Scan SampahMu! Di sini, kamu bisa mengetahui jenis sampahmu dan melihat ide daur ulangnya menjadi kreasi yang bermanfaat. Temukan cara cerdas untuk mendaur ulang dan ubah limbah jadi karya kreatif bersama Greenly.</p>
        <Link href="/scan/pilih">
            <button className='text-[#00AD03] font-[600] mt-8 bg-white rounded-xl px-12 py-2 border-2 border-white lg:text-[20px] text-[14px] hover:bg-transparent hover:text-white duration-200 cursor-pointer w-fit mx-auto'>Mulai</button>
        </Link>
      </div>
      <div className="absolute z-0 bottom-0 w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <Image src={cloud.src} width={900} height={600} alt='image' className='lg:w-full lg:h-auto w-auto object-cover h-[70vh]'/>
      </div>
    </div>
  )
}
