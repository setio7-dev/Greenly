"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import bot1 from '../../../public/logo/bot1.png'
import bot2 from '../../../public/logo/bot2.png'

export default function Page() {
  return (
    <div className='flex flex-col text-white items-center justify-center min-h-screen font-poppins bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)]'>
      <div className="w-full text-white flex justify-between h-[11vh] lg:h-[14vh] items-center lg:px-20 pt-6 px-6 top-0 lg:fixed relative cursor-pointer z-30">
          <Link href="/" className="flex justify-center gap-1 cursor-pointer items-center">
              <i className="bx bx-chevron-left text-[24px] lg:text-[36px]" />
              <h1 className="font-poppins font-[600] text-[18px] lg:text-[24px]">Kembali</h1>
          </Link>
      </div>
      <div className="flex lg:flex-row flex-col justify-center lg:px-0 px-6 text-black items-center gap-10 lg:pt-20 py-10" data-aos="fade-up" data-aos-duration="1000">
        <div className="flex flex-col bg-white rounded-xl p-8 gap-4 lg:w-[400px] w-full">
            <Image src={bot1.src} width={100} height={100} alt='bot1' className='lg:w-[100px] w-[80px] mx-auto mb-6 h-auto' />
            <h1 className='font-[600] text-[26px]'>Chatbot AI</h1>
            <p className='font-[400] text-[12px] text-justify'>Kamu bisa berbicara langsung dengan chatbot AI untuk mengenali jenis sampahmu dan mendapatkan ide daur ulang yang unik. Dapatkan inspirasi unik untuk mengubah limbah jadi sesuatu yang berguna bersama Greenly.</p>
            <Link href="/chatbot">
                <button className='text-white cursor-pointer border-2 hover:text-[#00AD03] border-[#00AD03] duration-200 hover:bg-transparent rounded-lg bg-[#00AD03] text-[18px] font-[600] w-full py-2'>Pilih</button>
            </Link>
        </div>
        <div className="flex flex-col bg-white rounded-xl p-8 gap-4 lg:w-[400px] w-full">
            <Image src={bot2.src} width={100} height={100} alt='bot1' className='lg:w-[90px] w-[70px] mx-auto mb-6 h-auto' />
            <h1 className='font-[600] text-[26px]'>Scan Sampahmu</h1>
            <p className='font-[400] text-[12px] text-justify'>Kamu bisa mengetahui jenis sampahmu dan melihat ide daur ulangnya menjadi kreasi yang bermanfaat. Temukan cara cerdas untuk mendaur ulang dan ubah limbah jadi karya kreatif bersama Greenly.</p>
            <Link href="/scan">
                <button className='text-white cursor-pointer border-2 hover:text-[#00AD03] border-[#00AD03] duration-200 hover:bg-transparent rounded-lg bg-[#00AD03] text-[18px] font-[600] w-full py-2'>Pilih</button>
            </Link>
        </div>
      </div>
    </div>
  )
}
