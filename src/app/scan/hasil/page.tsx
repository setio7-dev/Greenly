"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { scanResult } from '@/app/data/ScanResult'
import warning from '../../../../public/image/scan/result/warning.png'
import { useScan } from '@/app/context/scanContext'

export default function Page() {
    const [dataResult, setDataResult] = useState<ScanResultItem[]>([]);
    const { result } = useScan();

    interface RecycleItem {
      id: number
      title: string
      image: string
      link: string
    }

    interface ScanResultItem {
      id: number
      image: string
      title: string
      desc: string
      tips: string
      impact1: string
      impact2: string
      recycle: RecycleItem[]
    }

    useEffect(() => {
        const fetchDataResult = () => {
            const filteredData = scanResult.filter((item) => {
                const data = item.data.toLowerCase() == result.toLowerCase();
                return data;
            });

            setDataResult(filteredData);
        }

        fetchDataResult();
    }, [result]);
  return (
    <div className='flex relative flex-col items-center lg:justify-center justify-start lg:py-0 py-2 min-h-screen font-poppins bg-white'>
      <div className="w-full flex justify-between h-[11vh] lg:h-[14vh] items-center lg:px-20 pt-6 px-6 top-0 relative cursor-pointer z-30">
           <Link href="/scan" className="flex justify-center gap-1 cursor-pointer items-center">
               <i className="bx bx-chevron-left text-[24px] lg:text-[36px]" />
               <h1 className="font-poppins font-[600] text-[18px] lg:text-[24px]">Kembali</h1>
           </Link>
       </div>
       <div className="flex lg:flex-row flex-col justify-center items-start lg:gap-24 gap-14 lg:pt-12 pt-6 pb-14 lg:px-0 px-6">
        <div className="flex flex-col gap-6 justify-center items-center">
            <div className="flex flex-col gap-6 justify-center items-center">
                <Image src={dataResult[0]?.image} width={300} height={300} alt='image'/>
                <h1 className='font-[600] text-[24px]'>{dataResult[0]?.title}</h1>
                <div className="flex justify-center items-center bg-[#EACDCD] p-3 rounded-2xl">
                    <Image src={warning.src} width={30} height={30} alt='image' className='mr-2'/>
                    <p className='lg:text-[14px] text-[12px] text-[#FD3D3A] font-[600]'>Hati-Hati! Hal-hal yang tidak dapat diurai oleh alam.</p>
                </div>
            </div>
            <div className="flex flex-col gap-6 mt-8">
                <div className="flex flex-col gap-4 mb-4">
                    <h1 className='font-[600] text-[24px]'>Cara Mendaur Ulang</h1>
                    <p className='font-[400] lg:text-[14px] text-[12px] lg:w-[420px] text-justify w-full'>Adapun berbagai cara untuk mendaur ulang sampah plastik menjadi barang yang berguna antara lain:</p>
                </div>
                {dataResult[0]?.recycle.map((item) => (
                    <a href={item.link} className="flex flex-col gap-4" key={item.id} target='_blank'>
                        <p className='font-[400] lg:text-[16px] text-[14px] lg:w-[420px] w-full'>- {item.title}</p>
                        <Image src={item.image} width={500} height={200} alt='image' className='lg:w-[420px] w-[300px] h-[200px] object-cover rounded-lg mb-2'/>
                    </a>
                ))}
            </div>
        </div>
        <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2 lg:w-[620px] w-full">
                <h1 className='lg:text-[26px] text-[20px] font-[600]'>Apa itu {dataResult[0]?.title}</h1>
                <p className='lg:text-[14px] text-[12px] font-[400] text-justify'>{dataResult[0]?.desc}</p>
            </div>
            <div className="flex flex-col gap-2 lg:w-[620px] w-full">
                <h1 className='lg:text-[26px] text-[20px] font-[600]'>Tips Mengurangi Dampak Buruk {dataResult[0]?.title}</h1>
                <p className='lg:text-[14px] text-[12px] font-[400] text-justify'>{dataResult[0]?.tips}</p>
            </div>
            <div className="flex flex-col gap-2 lg:w-[620px] w-full">
                <h1 className='lg:text-[26px] text-[20px] font-[600]'>Dampak {dataResult[0]?.title} bagi Lingkungan dan Kesehatan</h1>
                <p className='lg:text-[14px] text-[12px] font-[400] text-justify mt-4'><span className='font-[600]'>Lingkungan:</span> {dataResult[0]?.impact1}</p>
                <p className='lg:text-[14px] text-[12px] font-[400] text-justify mt-4'><span className='font-[600]'>Kesehatan:</span> {dataResult[0]?.impact2}</p>
            </div>
        </div>
       </div>
    </div>
  )
}
