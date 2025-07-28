import React from 'react'
import Image from 'next/image'
import community1 from '../../../public/image/tree/community1.png'
import community2 from '../../../public/image/tree/community2.png'
import community3 from '../../../public/image/tree/community3.png'

const CommunityData = [
    {
        id: 1,
        img: community1,
        path: "/"
    },
    {
        id: 2,
        img: community2,
        path: "/"
    },
    {
        id: 3,
        img: community3,
        path: "/"
    },
];

export default function Community() {
  return (
    <div className='pb-24 font-poppins'>
      <div className="">
        <h1 className="font-[600] text-center text-[32px]">
          <span className="relative inline-block">
            Bergerak Bersama
            <span className="absolute left-0 bottom-[1px] w-full h-[20px] -z-10 bg-[linear-gradient(170deg,_#BDFF00_0%,_#00AD03_81%)] rounded-full"></span>
          </span>
          {' '} untuk {' '}
          <span className="relative inline-block">
            Bumi
            <span className="absolute left-0 bottom-[1px] w-full h-[20px] -z-10 bg-gradient-to-r bg-[linear-gradient(170deg,_#BDFF00_0%,_#00AD03_81%)] rounded-full"></span>
          </span>
          {' '} yang Lebih Hijau {' '}
        </h1>
      </div>
      <div className="grid place-items-center h-auto pb-20">
        <div className="grid grid-cols-3 gap-20 mt-16">
          {CommunityData.map((item) => (
            <div className="bg-[#D9D9D9] w-[240px] h-[300px] flex flex-col justify-center items-center rounded-md" key={item.id}>
              <Image width={180} height={180} alt="image" className='w-[200px] h-auto' src={item.img} />
              <button className='bg-[#AEA46B] text-white px-10 py-2 cursor-pointer rounded-lg text-[16px]'>Bergabung</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
