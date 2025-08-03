"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import popular1 from '../../../public/image/home/article/popular/popular1.png'
import popular2 from '../../../public/image/home/article/popular/popular2.png'
import popular3 from '../../../public/image/home/article/popular/popular3.webp'
import popular4 from '../../../public/image/home/article/popular/popular4.png'
import article1 from '../../../public/image/home/article/article1.png'
import article2 from '../../../public/image/home/article/article2.png'
import article3 from '../../../public/image/home/article/article3.png'
import article4 from '../../../public/image/home/article/article4.png'
import article5 from '../../../public/image/home/article/article5.png'
import article6 from '../../../public/image/home/article/article6.png'
import prev from '../../../public/image/home/article/prev.png'
import next from '../../../public/image/home/article/next.png'

const childrenPopular = [
  {
    id: 1,
    title: "Isu Emisi Karbon Tenggelam",
    desc: "Target NDC Indonesia dalam Konferensi Para Pihak/Conference of the...",
    image: popular2,
    date: "Jumat, 6 Juli 2025",
    link: "https://lestari.kompas.com/read/2025/06/20/164909786/isu-emisi-karbon-tenggelam?page=all"
  },
  {
    id: 2,
    title: "Pentingnya Dekarbonisasi Angkutan Barang",
    desc: "Upaya pengurangan emisi karbon dapat dimulai dari angkutan logistik. Peran...",
    image: popular3,
    date: "Kamis, 10 April 2025",
    link: "https://www.tempo.co/kolom/dekarbonisasi-transportasi-logistik-1229386"
  },
  {
    id: 3,
    title: "RI dan Inggris perkuat kolaborasi transportasi rendah emisi",
    desc: "Kementerian Perhubungan Republik...",
    image: popular4,
    date: "Kamis, 5 Juni 2024",
    link: "https://www.antaranews.com/berita/4879749/ri-dan-inggris-perkuat-kolaborasi-transportasi-rendah-emisi",
  },
];

const ArticleData = [
  {
    id: 1,
    title: "Emisi karbon global capai rekor tertinggi, RI tunjukkan tren penurunan",
    desc: "Global Carbon Budget melaporkan emisi karbon dari bahan bakar fosil diperkirakan mencapai rekor tertinggi pada 2024.",
    image: article1,
    date: "13 Desember 2024",
    link: "https://www.antaranews.com/berita/4464445/emisi-karbon-global-capai-rekor-tertinggi-ri-tunjukkan-tren-penurunan"
  },
  {
    id: 2,
    title: "Pengamat UGM : Target Nol Emisi Karbon di IKN Sulit Tercapai",
    desc: "Presiden Joko Widodo menunda berkantor di Ibu Kota Nusantara (IKN) pada Juli 2024 lalu, salah satu yang...",
    image: article2,
    date: "15 Agustus 2024",
    link: "https://ugm.ac.id/id/berita/pengamat-ugm-target-nol-emisi-karbon-di-ikn-sulit-tercapai/"
  },
  {
    id: 3,
    title: "Indonesia Masuk 10 Besar Penghasil Emisi Karbon Dunia",
    desc: "Laporan terbaru dari tim ilmuwan Global Carbon Project menyebutkan Indonesia jadi salah satu dari sepuluh...",
    image: article3,
    date: "06 Desember 2024",
    link: "https://betahita.id/news/detail/9605/indonesia-masuk-10-besar-penghasil-emisi-karbon-dunia.html?v=1701812357"
  },
  {
    id: 4,
    title: "Siapkah Indonesia Mewujudkan Netralitas Karbon?",
    desc: "Mimpi Indonesia merealisasikan target netralitas karbon pada tahun 2060 perlahan mulai muncul. Upaya ...",
    image: article4,
    date: "24 Juni 2025",
    link: "https://www.ums.ac.id/berita/teropong-jagat/siapkah-indonesia-mewujudkan-netralitas-karbon"
  },
  {
    id: 5,
    title: "Transportasi massal solusi tekan emisi karbon",
    desc: "Pengamat transportasi Ki Darmaningtyas menyebut sarana transportasi massal menjadi solusi untuk menekan emisi...",
    image: article5,
    date: "28 Januari 2025",
    link: "https://otomotif.antaranews.com/berita/3369039/transportasi-massal-solusi-tekan-emisi-karbon"
  },
  {
    id: 6,
    title: "Analisis Pengungkapan Emisi Karbon Perusahaan Indonesia",
    desc: "Emisi karbon dioksida (CO2) hanya mencakup pembakaran bahan bakar fosil (batu bara, minyak, dan gas)...",
    image: article6,
    date: "16 Mei 2025",
    link: "https://unair.ac.id/analisis-pengungkapan-emisi-karbon-perusahaan-indonesia/"
  },
];

export default function Article() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(ArticleData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = ArticleData.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className='pb-20 font-poppins' id='berita'>
      <div className="container mx-auto px-6 lg:px-16">
        <h1 className='lg:text-[36px] text-[24px] font-[600]' data-aos="fade-right" data-aos-duration="800">Artikel Populer</h1>
        <div className="mt-8 flex lg:flex-row flex-col justify-center items-center lg:gap-12 gap-10">
          <a target='_blank' href='https://indonesia.go.id/kategori/editorial/8789/butuh-dukungan-kolektif-turunkan-emisi-karbon?lang=1' className="flex flex-col gap-1 lg:w-[600px] w-full" data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
            <Image className='lg:w-[600px] w-ful mb-4 h-auto' src={popular1.src} width={600} height={600} alt='popular1'/>
            <p className='font-[400] lg:text-[16px] text-[14px] text-[#7A7A7A]'>Selasa, 26 November 2025</p>
            <h1 className='font-[600] lg:text-[28px] text-[20px]'>Butuh Dukungan Kolektif Turunkan Emisi Karbon.</h1>
            <p className='font-[400] text-justify text-[#7A7A7A] lg:text-[16px] text-[14px]'>Indonesia telah berhasil menurunkan emisi karbon bahan bakar fosil menjadi 733,2 juta ton pada 2023.</p>
          </a>
          <div className="flex flex-col lg:gap-4 gap-8">
            {childrenPopular.map((item) => (
              <a href={item.link} target='_blank' key={item.id} className="flex justify-center items-start gap-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <Image className='lg:w-[196px] w-[120px] lg:h-[196px] h-[150px] object-cover rounded-2xl' src={item.image} width={300} height={300} alt='image'/>
                <div className="flex flex-col gap-2 lg:w-[320px] w-[180px]">
                  <p className='font-[400] lg:text-[14px] text-[12px] text-[#7A7A7A]'>{item.date}</p>
                  <h1 className='font-[600] lg:text-[22px] text-[14px]'>{item.title}</h1>
                  <p className='font-[400] text-justify text-[#7A7A7A] lg:text-[16px] text-[12px]'>{item.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-16 mt-20">
        <h1 className='lg:text-[36px] text-[24px] font-[600]' data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">Artikel Terbaru</h1>
        <div className="flex flex-wrap justify-center items-center gap-12 mt-8" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
          {currentArticles.map((item) => (
            <a href={item.link} target='_blank' key={item.id} className="flex transition-all duration-400 hover:-translate-y-3 flex-col gap-1 cursor-pointer w-[350px]">
              <Image className='rounded-lg w-[350px] h-auto mb-4' src={item.image} width={350} height={350} alt='image'/>
              <p className='font-[400] text-[16px] text-[#7A7A7A]'>{item.date}</p>
              <h1 className='font-[500] text-[18px]'>{item.title}</h1>
              <p className='font-[400] text-justify text-[#7A7A7A] text-[14px]'>{item.desc}</p>
            </a>
          ))}
        </div>
        <div className="flex w-full justify-between mt-14">
          <Image onClick={handlePrev} className='cursor-pointer w-[130px] h-auto' src={prev} width={130} height={130} alt='prev'/>
          <div className="flex justify-center items-center gap-8">
            {Array.from({ length: totalPages }, (_, index) => (
              <p key={index} className={`${currentPage} === ${index + 1} ? 'font-bold' : 'text-black'`}>{index + 1}</p>
            ))}
          </div>
          <Image onClick={handleNext} className='cursor-pointer w-[130px] h-auto' src={next} width={130} height={130} alt='next'/>
        </div>
      </div>
    </div>
  )
}
