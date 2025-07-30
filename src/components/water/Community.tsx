import React from 'react'
import Image from 'next/image'
import community1 from '../../../public/image/water/community1.png'
import community2 from '../../../public/image/water/community2.png'
import community3 from '../../../public/image/water/community3.png'

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
    <div className='pb-24 font-poppins' id='komunitas'>
      <div className="" data-aos="fade-up" data-aos-duration="800">
        <h1 className="font-[600] text-center lg:text-[32px] text-[24px]">
          <span className="relative inline-block">
            Satu Aksi, Sejuta Tetes
            <span className="absolute left-0 bottom-[1px] w-full lg:h-[20px] h-[14px] -z-10 bg-[#6EC7F0] rounded-full"></span>
          </span>
        </h1>
      </div>
      <div className="grid place-items-center h-auto pb-20">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:gap-20 mt-16">
          {CommunityData.map((item) => (
            <div className="bg-[#D9D9D9] lg:w-[240px] w-[300px] h-[300px] pb-6 flex flex-col justify-center gap-2 items-center rounded-md" key={item.id} data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              <Image width={180} height={180} alt="image" className='w-[200px] h-auto' src={item.img} />
              <button className='bg-[radial-gradient(circle,_rgba(0,151,220,1)_0%,_rgba(110,199,240,1)_100%)] text-white px-10 py-2 cursor-pointer rounded-lg text-[16px]'>Bergabung</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
