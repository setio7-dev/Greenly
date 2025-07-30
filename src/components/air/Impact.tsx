"use client"
import React from 'react'
import Image from 'next/image'
import vector1 from '../../../public/image/air/impact/vector1.png'
import vector2 from '../../../public/image/air/impact/vector2.png'
import vector3 from '../../../public/image/air/impact/vector3.png'
import vector4 from '../../../public/image/air/impact/vector4.png'
import vector5 from '../../../public/image/air/impact/vector5.png'
import vector6 from '../../../public/image/air/impact/vector6.png'
import img1 from '../../../public/image/air/impact/img1.png'
import img2 from '../../../public/image/air/impact/img2.png'
import img3 from '../../../public/image/air/impact/img3.png'
import img4 from '../../../public/image/air/impact/img4.png'
import img5 from '../../../public/image/air/impact/img5.png'
import img6 from '../../../public/image/air/impact/img6.png'

const ImpactDataMobile = [
  {
    id: 1,
    image: img1,
    title: "Penyakit Pernapasan & Kanker Paru",
    desc: "Udara kotor mengandung partikel halus dan zat kimia berbahaya. Ini dapat menyebabkan asma, bronkitis kronis, hingga kanker paru-paru."
  },
  {
    id: 2,
    image: img2,
    title: " Hujan Asam Merusak Tanaman",
    desc: "Polutan seperti sulfur dioksida menciptakan hujan asam. Akibatnya, daun tanaman rusak dan tanah menjadi asam."
  },
  {
    id: 3,
    image: img3,
    title: "Perubahan Iklim Semakin Cepat",
    desc: "Gas rumah kaca dari polusi mempercepat pemanasan global. Ini mengganggu iklim dan memperparah bencana alam."
  },
  {
    id: 4,
    image: img4,
    title: "Produktivitas & Konsentrasi Menurun",
    desc: "Menghirup udara tercemar membuat tubuh cepat lelah. Fokus belajar dan kerja ikut terganggu."
  },
  {
    id: 5,
    image: img5,
    title: "Gangguan Mental & Kognitif",
    desc: "Paparan polutan tinggi dikaitkan dengan stres dan gangguan memori. Beberapa studi juga menghubungkannya dengan risiko demensia."
  },
  {
    id: 6,
    image: img6,
    title: "Merusak Bangunan & Material",
    desc: "Polutan asam mempercepat korosi pada bangunan dan logam. Ini memperpendek umur infrastruktur dan menambah biaya perawatan."
  },
]

export default function Impact() {
  return (
    <div className='flex flex-col items-center font-poppins lg:mt-0 -mt-4 min-h-screen mb-20 lg:px-0 px-6 pb-20'>
      <div className="" data-aos="fade-up" data-aos-duration="800">
        <h1 className="font-[600] text-center lg:text-[32px] text-[24px]" >
          Kenali {''}
          <span className="relative inline-block">
            masalahnya
            <span className="absolute left-0 bottom-[1px] w-full lg:h-[20px] h-[14px] -z-10 bg-[#7499BB] rounded-full"></span>
          </span>
          {' '} ambil {' '}
          <span className="relative inline-block">
            langkah
            <span className="absolute left-0 bottom-[1px] w-full lg:h-[20px] h-[14px] -z-10 bg-gradient-to-r bg-[#7499BB] rounded-full"></span>
          </span>
          {' '} kecilnya
        </h1>
        <h1 className="font-[600] display-none-block text-center lg:text-[32px] text-[24px] lg:mt-0 mt-4">
          Rasakan {''}
          <span className="relative inline-block">
            dampak
            <span className="absolute left-0 bottom-[1px] w-full lg:h-[20px] h-[14px] -z-10 bg-gradient-to-r bg-[#7499BB] rounded-full"></span>
          </span>
          {' '} besarnya {' '}
        </h1>
      </div>
      <div className="mt-16 font-poppins">
        <h1 className='lg:text-[24px] display-none-block text-[18px] w-fit mx-auto z-20 relative font-[600] text-white lg:px-18 px-12 py-2 rounded-xl bg-[radial-gradient(circle,_#6BB3F6_0%,_#7597B8_100%)]' data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">DAMPAK</h1>
        {/* Desktop */}
        <div className="flex flex-col gap-4 display-none -mt-2 items-start lg:px-0 lg:w-auto w-[320px] lg:overflow-x-visible overflow-x-auto">
           <div className="flex justify-center items-start">
             <div style={{ backgroundImage: `url(${vector1.src})` }} className="flex relative -mr-10 justify-start items-center gap-4 object-cover w-[650px] bg-center bg-cover min-h-[210px]" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
               <div className="-mt-16 flex flex-col items-center gap-2 ml-10 w-[380px]">
                 <p className='text-[20px] font-[500]'>Penyakit Pernapasan & Kanker Paru</p>
                 <p className='text-justify text-[14px]'>Udara kotor mengandung partikel halus dan zat kimia berbahaya. Ini dapat menyebabkan asma, bronkitis kronis, hingga kanker paru-paru.</p>
               </div>
               <Image src={img1} width={200} height={200} alt='impact1' className='w-[200px] absolute bottom-[-4px] right-14'/>
             </div>
             <div style={{ backgroundImage: `url(${vector2.src})` }} className="flex relative -ml-10 justify-start items-center gap-4 object-cover w-[650px] bg-center bg-cover min-h-[280px]" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
               <div className="-mt-8 flex flex-col items-center gap-2 ml-30 w-[320px]">
                 <p className='text-[20px] font-[500]'> Hujan Asam Merusak Tanaman</p>
                 <p className='text-justify text-[14px]'>Polutan seperti sulfur dioksida menciptakan hujan asam. Akibatnya, daun tanaman rusak dan tanah menjadi asam.</p>
               </div>
               <Image src={img2} width={200} height={200} alt='impact1' className='w-[260px] absolute -right-12 -bottom-4'/>
             </div>
           </div>
           <div className="flex justify-center gap-14 items-start -mt-10">
             <div style={{ backgroundImage: `url(${vector3.src})` }} className="flex relative -mr-0 -mt-22 justify-end items-center gap-4 object-cover w-[620px] bg-center bg-cover min-h-[280px]" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
               <Image src={img3} width={200} height={200} alt='impact1' className='w-[200px] absolute left-0 top-4'/>
               <div className="flex flex-col items-center gap-2 mr-10 w-[360px]">
                 <p className='text-[20px] font-[500]'>Perubahan Iklim Semakin Cepat</p>
                 <p className='text-justify text-[14px]'>Gas rumah kaca dari polusi mempercepat pemanasan global. Ini mengganggu iklim dan memperparah bencana alam.</p>
               </div>
             </div>
             <div style={{ backgroundImage: `url(${vector4.src})` }} className="flex relative -ml-0 justify-end items-center gap-4 object-cover w-[540px] bg-center bg-cover min-h-[280px]" data-aos="fade-left" data-aos-duration="800" data-aos-delay="300">
               <Image src={img4} width={200} height={200} alt='impact1' className='w-[200px] absolute -left-20 top-4'/>
               <div className="-mt-2 flex flex-col items-center gap-2 mr-16">
                 <p className='text-[20px] font-[500]'>Produktivitas & Konsentrasi Menurun</p>
                 <p className='w-[320px] text-justify text-[14px]'>Menghirup udara tercemar membuat tubuh cepat lelah. Fokus belajar dan kerja ikut terganggu.</p>
               </div>
             </div>
           </div>
           <div className="flex justify-center gap-2 items-start -mt-18">
             <div style={{ backgroundImage: `url(${vector5.src})` }} className="flex relative -mr-0 justify-start -mt-20 items-center gap-4 object-cover w-[560px] bg-center bg-cover min-h-[280px]" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
               <div className="mt-6 flex flex-col items-center gap-2 ml-10 w-[300px]">
                 <p className='text-[20px] font-[500]'>Gangguan Mental & Kognitif</p>
                 <p className='text-justify text-[14px]'>Paparan polutan tinggi dikaitkan dengan stres dan gangguan memori. Beberapa studi juga menghubungkannya dengan risiko demensia.</p>
               </div>
               <Image src={img5} width={200} height={200} alt='impact1' className='w-[220px] absolute right-4 -bottom-8'/>
             </div>
             <div style={{ backgroundImage: `url(${vector6.src})` }} className="flex relative -ml-6 justify-end items-center gap-4 object-cover w-[670px] bg-center bg-cover min-h-[200px]" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
               <Image src={img6} width={200} height={200} alt='impact1' className='w-[220px] absolute left-6 -bottom-4'/>
               <div className="mt-10 flex flex-col items-center gap-2 mr-24 w-[340px]">
                 <p className='text-[20px] font-[500]'>Merusak Bangunan & Material</p>
                 <p className='text-justify text-[14px]'>Polutan asam mempercepat korosi pada bangunan dan logam. Ini memperpendek umur infrastruktur dan menambah biaya perawatan.</p>
               </div>
             </div>
           </div>
        </div>

        {/* Mobile */}
        <div className="flex display-flex mb-8 flex-col gap-8 justify-center items-center">
          {ImpactDataMobile.map((item) => (
            <div className="bg-[#D9D9D9] rounded-lg w-[320px] min-h-[400px] p-6 flex flex-col gap-8 justify-center items-center" key={item.id} data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <Image src={item.image} width={180} height={180} alt='image'/>
              <div className="flex flex-col justify-center items-center gap-2">
                <h1 className='font-[500] text-[20px] text-center'>{item.title}</h1>
                <p className='font-[400] text-[14px] text-justify'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

