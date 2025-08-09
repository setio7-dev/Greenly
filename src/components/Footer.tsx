"use client"
import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo/logo-white.png'
import twitter from '../../public/logo/twitter.png'
import linkedin from '../../public/logo/linkedin.png'
import facebook from '../../public/logo/facebook.png'
import instagram from '../../public/logo/instagram.png'

export default function Footer() {
  return (
    <div className='bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)] relative w-full min-h-[60vh] rounded-t-4xl p-6 flex lg:flex-row flex-col justify-center lg:gap-14 gap-10 items-center text-white font-poppins'>
      <div className="flex flex-col gap-6 lg:mt-0 -mt-12">
        <Image src={logo.src} width={200} height={200} alt='image' className='lg:w-[200px] w-[120px] h-auto'/>
        <p className='font-[400] text-[14px] display-none-block mb-2 w-[700px]'>Lewat Greenly, kita bangun masa depan yang lebih hijau, satu aksi kecil setiap hari. Setiap langkah kecil kita untuk lingkungan adalah harapan besar bagi generasi mendatang.</p>
        <div className="flex items-center justify-between gap-6 bg-white lg:w-[360px] w-[300px] py-1 pr-2 pl-6 rounded-full">
            <input type="text" className='text-black text-[12px] border-none outline-0 w-full' placeholder='Masukkan Email Kamu' />
            <button className='bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)] rounded-full text-[14px] px-8 py-1'>Kirim</button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className=' font-[500] text-[24px]'>Tentang Kami</h1>
        <p className='font-[400] lg:text-[14px] text-[12px] lg:w-[440px] w-auto lg:text-start text-justify'>Kami adalah pengembang website dari SMK Negeri Mandiri 26 Jakarta yang mengikuti perlomba T8CHNOFEST</p>
        <div className="flex items-center gap-2 mt-2">
            <Image src={twitter.src} width={40} height={40} alt='image' className='lg:w-[40px] w-[30px] h-auto'/>
            <Image src={facebook.src} width={40} height={40} alt='image' className='lg:w-[40px] w-[30px] h-auto'/>
            <Image src={instagram.src} width={40} height={40} alt='image' className='lg:w-[40px] w-[30px] h-auto'/>
            <Image src={linkedin.src} width={40} height={40} alt='image' className='lg:w-[40px] w-[30px] h-auto'/>
        </div>
      </div>
      <p className='lg:text-[14px] text-[12px] font-[400] w-max bottom-6 absolute lg:right-6 left-1/2 -translate-x-1/2'>Copyright © 2025 Boneka Pertahanan</p>
    </div>
  )
}
