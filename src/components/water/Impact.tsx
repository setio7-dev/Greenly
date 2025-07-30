"use client"
import React from 'react'
import Image from 'next/image'
import vector1 from '../../../public/image/tree/impact/vector1.png'
import vector2 from '../../../public/image/tree/impact/vector2.png'
import vector3 from '../../../public/image/tree/impact/vector3.png'
import vector4 from '../../../public/image/tree/impact/vector4.png'
import vector5 from '../../../public/image/tree/impact/vector5.png'
import vector6 from '../../../public/image/tree/impact/vector6.png'
import img1 from '../../../public/image/water/impact/img1.png'
import img2 from '../../../public/image/water/impact/img2.png'
import img3 from '../../../public/image/water/impact/img3.png'
import img4 from '../../../public/image/water/impact/img4.png'
import img5 from '../../../public/image/water/impact/img5.png'
import img6 from '../../../public/image/water/impact/img6.png'

const ImpactDataMobile = [
  {
    id: 1,
    image: img1,
    title: " Ikan Mati & Rantai Makanan Rusak",
    desc: "Air yang terkontaminasi racun membuat ikan dan mikroorganisme mati. Ini memutus rantai makanan dan mengganggu keseimbangan ekosistem air."
  },
  {
    id: 2,
    image: img2,
    title: "Wabah Penyakit Menyebar",
    desc: "Air kotor jadi sarang bakteri & virus penyebab diare, kolera, hingga hepatitis. Masyarakat tanpa akses air bersih paling rentan terdampak."
  },
  {
    id: 3,
    image: img3,
    title: "Krisis Air Bersih",
    desc: "Sumber air bersih makin sedikit akibat pencemaran. Saat musim kemarau tiba, banyak daerah kekeringan dan harus beli air."
  },
  {
    id: 4,
    image: img4,
    title: "Air Tanah Tercemar Permanen",
    desc: "Racun kimia dari limbah bisa meresap ke dalam tanah dan mencemari sumur. Air tidak bisa diminum dan proses pemulihan sangat sulit."
  },
  {
    id: 5,
    image: img5,
    title: "Kerugian Ekonomi & Sosial",
    desc: "Nelayan kehilangan penghasilan, wisata air ditutup, dan biaya pengolahan air makin mahal. Kehidupan masyarakat ikut terdampak."
  },
  {
    id: 6,
    image: img6,
    title: "Gangguan Iklim Mikro",
    desc: "Air yang tercemar mengganggu penguapan alami dan siklus hujan, memengaruhi pola tanam dan pertanian lokal."
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
            <span className="absolute left-0 bottom-[1px] w-full lg:h-[20px] h-[14px] -z-10 bg-[#6EC7F0] rounded-full"></span>
          </span>
          {' '} ambil {' '}
          <span className="relative inline-block">
            langkah
            <span className="absolute left-0 bottom-[1px] w-full lg:h-[20px] h-[14px] -z-10 bg-gradient-to-r bg-[#6EC7F0] rounded-full"></span>
          </span>
          {' '} kecilnya
        </h1>
        <h1 className="font-[600] display-none-block text-center lg:text-[32px] text-[24px] lg:mt-0 mt-4">
          Rasakan {''}
          <span className="relative inline-block">
            dampak
            <span className="absolute left-0 bottom-[1px] w-full lg:h-[20px] h-[14px] -z-10 bg-gradient-to-r bg-[#6EC7F0] rounded-full"></span>
          </span>
          {' '} besarnya {' '}
        </h1>
      </div>
      <div className="mt-16 font-poppins">
        <h1 className='lg:text-[24px] display-none-block text-[18px] w-fit mx-auto z-20 relative font-[600] text-white lg:px-18 px-12 py-2 rounded-xl bg-[radial-gradient(circle,_rgba(0,151,220,1)_40%,_rgba(110,199,240,1)_100%)]' data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">DAMPAK</h1>
        {/* Desktop */}
        <div className="flex flex-col gap-4 display-none -mt-2 items-start lg:px-0 lg:w-auto w-[320px] lg:overflow-x-visible overflow-x-auto">
           <div className="flex justify-center items-start">
             <div style={{ backgroundImage: `url(${vector1.src})` }} className="flex relative -mr-10 justify-start items-center gap-4 object-cover w-[650px] bg-center bg-cover min-h-[210px]" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
               <div className="-mt-12 flex flex-col items-center gap-2 ml-10 w-[360px]">
                 <p className='text-[20px] font-[500]'> Ikan Mati & Rantai Makanan Rusak</p>
                 <p className='text-justify text-[14px]'>Air yang terkontaminasi racun membuat ikan dan mikroorganisme mati. Ini memutus rantai makanan dan mengganggu keseimbangan ekosistem air.</p>
               </div>
               <Image src={img1} width={200} height={200} alt='impact1' className='w-[190px] absolute right-14 -bottom-2'/>
             </div>
             <div style={{ backgroundImage: `url(${vector2.src})` }} className="flex relative -ml-10 justify-start items-center gap-4 object-cover w-[650px] bg-center bg-cover min-h-[280px]" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
               <div className="-mt-8 flex flex-col items-center gap-2 ml-30 w-[320px]">
                 <p className='text-[20px] font-[500]'>Wabah Penyakit Menyebar</p>
                 <p className='text-justify text-[14px]'>Air kotor jadi sarang bakteri & virus penyebab diare, kolera, hingga hepatitis. Masyarakat tanpa akses air bersih paling rentan terdampak.</p>
               </div>
               <Image src={img2} width={200} height={200} alt='impact1' className='w-[240px] absolute -right-8 -bottom-8'/>
             </div>
           </div>
           <div className="flex justify-center gap-14 items-start -mt-10">
             <div style={{ backgroundImage: `url(${vector3.src})` }} className="flex relative -mr-0 -mt-22 justify-end items-center gap-4 object-cover w-[620px] bg-center bg-cover min-h-[280px]" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
               <Image src={img3} width={200} height={200} alt='impact1' className='w-[200px] absolute left-0 top-4'/>
               <div className="flex flex-col items-center gap-2 mr-10 w-[380px]">
                 <p className='text-[20px] font-[500]'>Krisis Air Bersih</p>
                 <p className='text-justify text-[14px]'>Sumber air bersih makin sedikit akibat pencemaran. Saat musim kemarau tiba, banyak daerah kekeringan dan harus beli air.</p>
               </div>
             </div>
             <div style={{ backgroundImage: `url(${vector4.src})` }} className="flex relative -ml-0 justify-end items-center gap-4 object-cover w-[540px] bg-center bg-cover min-h-[280px]" data-aos="fade-left" data-aos-duration="800" data-aos-delay="300">
               <Image src={img4} width={200} height={200} alt='impact1' className='w-[200px] absolute -left-10 top-2'/>
               <div className="-mt-2 flex flex-col items-center gap-2 mr-16">
                 <p className='text-[20px] font-[500]'>Air Tanah Tercemar Permanen</p>
                 <p className='w-[320px] text-justify text-[14px]'>Racun kimia dari limbah bisa meresap ke dalam tanah dan mencemari sumur. Air tidak bisa diminum dan proses pemulihan sangat sulit.</p>
               </div>
             </div>
           </div>
           <div className="flex justify-center gap-2 items-start -mt-18">
             <div style={{ backgroundImage: `url(${vector5.src})` }} className="flex relative -mr-0 justify-start -mt-20 items-center gap-4 object-cover w-[560px] bg-center bg-cover min-h-[280px]" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
               <div className="mt-6 flex flex-col items-center gap-2 ml-10 w-[280px]">
                 <p className='text-[20px] font-[500]'>Kerugian Ekonomi & Sosial</p>
                 <p className='text-justify text-[14px]'>Nelayan kehilangan penghasilan, wisata air ditutup, dan biaya pengolahan air makin mahal. Kehidupan masyarakat ikut terdampak.</p>
               </div>
               <Image src={img5} width={200} height={200} alt='impact1' className='w-[230px] absolute right-8 -bottom-8'/>
             </div>
             <div style={{ backgroundImage: `url(${vector6.src})` }} className="flex relative -ml-6 justify-end items-center gap-4 object-cover w-[670px] bg-center bg-cover min-h-[200px]" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
               <Image src={img6} width={200} height={200} alt='impact1' className='w-[180px] absolute -left-2 -bottom-4'/>
               <div className="mt-10 flex flex-col items-center gap-2 mr-16 w-[420px]">
                 <p className='text-[20px] font-[500]'>Gangguan Iklim Mikro</p>
                 <p className='text-justify text-[14px]'>Hilangnya hutan mempengaruhi ekonomi & budaya masyarakat adat yang bergantung pada hutan untuk pangan, obat, dan kehidupan sehari-hari.</p>
               </div>
             </div>
           </div>
        </div>

        {/* Mobile */}
        <div className="flex display-flex mb-8 flex-col gap-8 justify-center items-center">
          {ImpactDataMobile.map((item) => (
            <div className="bg-[#D9D9D9] rounded-lg w-[320px] min-h-[400px] p-6 flex flex-col gap-8 justify-center items-center" key={item.id} data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <Image src={item.image} width={160} height={160} alt='image'/>
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

