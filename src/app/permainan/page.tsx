"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import smartBin from '../../../public/image/game/smart-bin.png'
import monsterJunk from '../../../public/image/game/monster-junk.png'

export default function Page() {
  return (
    <div className='bg-white font-poppins relative w-full min-h-screen flex flex-col justify-center items-center gap-8'>
      <div className="w-full top-0 flex bg-white text-black justify-between h-[11vh] lg:h-[12vh] items-center lg:px-14 px-6 cursor-pointer z-30">
         <Link href="/" className="flex justify-center gap-1 cursor-pointer items-center">
           <i className="bx bx-chevron-left text-[24px] lg:text-[36px]" />
           <h1 className="font-poppins text-[18px] font-[600] lg:text-[20px]">Kembali</h1>
         </Link>
       </div>
       <div className="flex flex-col justify-center items-center gap-10 pb-20 lg:px-0 px-6" data-aos="fade-up" data-aos-duration="900">
            <div className="relative border-2 border-white rounded-[26px]">
                <Image src={smartBin.src} width={1200} height={600} alt='image' className='lg:w-[1200px] lg:rounded-[0px] rounded-[26px] lg:h-auto w-full h-[40vh] bg-cover object-cover'/>
                <div className="flex justify-between items-center absolute bottom-[0.2px] lg:px-10 px-6 h-[12vh] w-full rounded-[26px] bg-white/20 backdrop-blur-md">
                    <p className="text-white font-[600] lg:text-[28px] text-[20px]">Smart Bin</p>
                    <Link href="/kenali-sampah">
                        <div className="p-[2px] rounded-lg bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)] inline-block cursor-pointer">
                          <button className="bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)] text-white font-[500] lg:text-[18px] text-[12px] cursor-pointer lg:px-10 px-6 py-2 rounded-lg w-full h-full">
                            Mainkan
                          </button>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="relative border-2 border-white rounded-[26px]">
                <Image src={monsterJunk.src} width={1200} height={600} alt='image' className='lg:w-[1200px] lg:rounded-[0px] rounded-[26px] lg:h-auto w-full h-[40vh] bg-cover object-cover'/>
                <div className="flex justify-between items-center absolute bottom-[0.2px] lg:px-10 px-6 h-[12vh] w-full rounded-[26px] bg-white/20 backdrop-blur-md">
                    <p className="text-white font-[600] lg:text-[28px] text-[20px]">Monster Junk</p>
                    <Link href="/monster-junk">
                      <div className="p-[2px] rounded-lg bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)] inline-block cursor-pointer">
                        <button className="bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)] text-white font-[500] lg:text-[18px] text-[12px] cursor-pointer lg:px-10 px-6 py-2 rounded-lg w-full h-full">
                          Mainkan
                        </button>
                      </div>
                    </Link>
                </div>
            </div>
       </div>
    </div>
  )
}
