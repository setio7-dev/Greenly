import React from 'react'
import Image from 'next/image'
import go from '../../../public/image/home/go.png'
import background from '../../../public/image/home/background.png'

const ImpactData = [
    {
        id: 1,
        title: "Masalah Kesehatan",
        desc: "Polusi udara dapat meningkatkan risiko berbagai penyakit pernapasan, mulai dari asma, bronkitis, hingga kanker paru-paru. Anak-anak, ibu hamil, dan lansia yang paling rentan terdampak kualitas udara yang buruk."
    },
    {
        id: 2,
        title: "Dampak Lingkungan",
        desc: "Pencemaran udara tidak hanya mencemari udara yang kita hirup, tetapi juga merusak ekosistem, mencemari tanah dan air, serta mempercepat laju perubahan iklim yang memicu bencana alam dan cuaca ekstrem."
    },
    {
        id: 3,
        title: "Kerugian Ekonomi",
        desc: "Tingginya polusi udara berdampak pada meningkatnya biaya kesehatan masyarakat. Selain itu, produktivitas kerja menurun karena tingginya angka sakit akibat kualitas udara yang buruk."
    },
];

export default function Impact() {
  return (
    <div className="h-auto pb-20 font-poppins text-white">
        <div className='flex lg:flex-row flex-col justify-center items-center lg:gap-12 gap-8 lg:px-0 px-4'>
          <div className="" data-aos="fade-up" data-aos-duration="800">
            <div className="lg:w-[500px] transition-all duration-200 hover:scale-105 w-full lg:h-[530px] h-[420px] bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)] rounded-md py-18 lg:px-14 px-8">
              <p className='text-[24px]'>Namun,</p>
              <p className='font-[600] text-[30px] lg:w-[270px] w-full'>Mengapa Polusi Udara Indonesia Sangat Tinggi?</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-12 gap-8">
                <div className="" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                  <div className="lg:w-[280px] transition-all duration-200 hover:scale-105 w-full h-[400px] bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)] rounded-md px-10 flex flex-col justify-center items-start gap-4">
                      <p className='text-[18px]'>Penyebab utama polusi udara yaitu</p>
                      <p className='text-[54px] leading-14 font-[700]'>EMISI GAS</p>
                      <p className='text-[18px]'>dari sektor <br /><span className='font-[600]'>transportasi</span></p>
                  </div>
                </div>
                <div className="" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                  <div className="lg:w-[280px] transition-all duration-200 hover:scale-105 w-full h-[400px] bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)] rounded-md px-10 flex flex-col justify-center items-start gap-4">
                      <p className='text-[18px]'>Sektor pendukung polusi udara yaitu</p>
                      <p className='text-[38px] leading-10 my-3 font-[700]'><span className='text-[28px]'>PEMBAKARAN</span> SAMPAH</p>
                      <p className='text-[18px]'>dari emisi <br /><span className='font-[600]'>rumah tangga</span></p>
                  </div>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="300">
              <div className="p-[4px] cursor-pointer h-auto lg:w-full w-[80vw] mx-auto rounded-xl bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)] group hover:scale-105 duration-200" >
                <div className="bg-white lg:h-[100px] h-[70px] rounded-xl py-4 lg:px-10 px-6 relative flex flex-col justify-center items-start">
                  <p className='text-[#036600] font-poppins font-[600] text-[18px] lg:text-[30px]'>Cari tau lebih lanjut</p>
                  <Image src={go} width={100} height={100} alt='go' className='lg:w-[36px] lg:h-[36px] w-[26px] group-hover:rotate-45 duration-200 h-[26px] absolute bottom-4 right-4 cursor-pointer'/>
                </div>
              </div>
            </div>
          </div>
        </div>  
        <div className="w-full lg:h-screen h-[190vh] object-cover bg-cover -mt-12" style={{backgroundImage: `url(${background.src})`}}>
            <div className="bg-white rounded-b-lg w-[94vw] lg:h-[58vh] h-auto lg:pb-0 pb-20 flex flex-col justify- gap-10 pt-26 mx-auto">
                <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:gap-0 gap-2 lg:px-20 px-6">
                    <p className='lg:text-[42px] lg:w-[320px] w-full lg:text-start text-center text-[24px] font-[700] text-[#036600]' data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">DAMPAK POLUSI UDARA</p>
                    <p className='lg:text-end text-center lg:text-[18px] text-[12px] text-black lg:w-[600px] w-auto' data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">Perubahan iklim membuat suhu global naik, memicu gelombang panas, kekeringan ekstrem, dan kebakaran hutan lebih sering.</p>
                </div>
                <div className="flex lg:flex-row flex-col justify-center items-center gap-10" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                    {ImpactData.map((item) => (
                        <div key={item.id} className="lg:w-[360px] w-[280px] duration-400 transi h-auto px-6 py-12 shadow-2xl rounded-lg border-4 border-gray-200 hover:border-[#58C229] cursor-pointer hover:-translate-y-4 bg-white text-black flex flex-col gap-6">
                            <h1 className='text-center text-[18px] font-[500]'>{item.title}</h1>
                            <p className='text-[13px] text-justify text-[#212121]'>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>      
    </div>
  )
}
