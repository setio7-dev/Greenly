/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { scanResult } from '@/app/data/ScanResult'
import warning from '../../../../public/image/scan/result/warning.png'
import { useScan } from '@/app/context/scanContext'
import Loading from '@/app/ui/Loading'

export default function Page() {
    const [dataResult, setDataResult] = useState<ScanResultItem[]>([]);
    const { result } = useScan();
    const [loading, setLoading] = useState(true);
    const [selectedPrimary, setSelectedPrimary] = useState(1);
    const [howPrimary, setHowPrimary] = useState<any>({});
    const [imagePrimary, setImagePrimary] = useState("");
    const [imageChildren, setImageChildren] = useState<any>([]);
    const [id, setId] = useState(1);

    interface RecycleItem {
      id: number
      image: string
    }

    interface HowItem {
      id: number
      title: string
      desc: string
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
      how: HowItem[]
      iframe: string
    }

    useEffect(() => {
       const fetchDataResult = () => {
          const found = scanResult.find(
            (item) => item.data.toLowerCase() === result.toLowerCase()
          )
      
          if (found) {
            setId(found.id - 1)
            setDataResult([found])
          }
        }

        const fetchLoading = async() => {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setLoading(false);
        }

        const filteredPrimaryData = () => {
            const data = scanResult[id].how.find((item) => selectedPrimary === item.id);
            if (data) {
              setHowPrimary(data);
            }
        };

        const filteredImage = () => {
            const data = scanResult[id].recycle.find((item) => selectedPrimary === item.id);
            if (data) {
              setImagePrimary(data.image);
            }

            const dataChildren = scanResult[id].recycle.filter((item) => item.id !== selectedPrimary);
            setImageChildren(dataChildren);
        }

        fetchDataResult();
        fetchLoading();
        filteredPrimaryData();
        filteredImage();
    }, [result, selectedPrimary, id]);
  return (
    <div className='flex relative flex-col items-center lg:justify-center justify-start lg:py-0 py-2 min-h-screen font-poppins bg-white'>
        <div className="w-full flex justify-between h-[11vh] lg:h-[14vh] items-center lg:px-20 pt-6 px-6 top-0 relative z-30">
           <Link href="/scan/pilih" className="flex justify-center gap-1 cursor-pointer items-center">
               <i className="bx bx-chevron-left text-[24px] lg:text-[36px]" />
               <h1 className="font-poppins font-[600] text-[18px] lg:text-[24px]">Kembali</h1>
           </Link>
       </div>              
       <div className="flex lg:flex-row flex-col justify-center items-start lg:gap-24 gap-14 lg:pt-12 pt-6 pb-14 lg:px-0 px-6" data-aos="fade-up" data-aos-duration="1000">
        <div className="flex flex-col gap-6 justify-center items-center">
            <div className="flex flex-col gap-6 justify-center items-center">
                <Image src={dataResult[0]?.image} width={300} height={300} alt='image'/>
                <h1 className='font-[600] text-[24px]'>{dataResult[0]?.title}</h1>
                <div className="flex justify-center items-center bg-[#EACDCD] p-3 rounded-2xl">
                    <Image src={warning.src} width={30} height={30} alt='image' className='mr-2'/>
                    <p className='lg:text-[14px] text-[12px] text-[#FD3D3A] font-[600]'>Hati-Hati! Hal-hal yang tidak dapat diurai oleh alam.</p>
                </div>
            </div>        
            <iframe height="250" className='rounded-lg lg:w-[440px] w-full' src={dataResult[0]?.iframe} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>    
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
       <div className="flex lg:flex-row flex-col justify-center items-center lg:px-0 px-6 mt-4 lg:pb-14 pb-20 gap-14 relative z-30">
        <div className="flex flex-col items-start justify-start gap-6 lg:w-[400px] w-full">
            <h1 className='font-[600] text-[#036600] lg:text-[28px] text-[22px]'>{howPrimary.title}</h1>
            <p className='font-[400] text-[14px] text-black'>{howPrimary.desc}</p>
            <a href={howPrimary?.link} target='_blank'>
                <button className='bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)] rounded-full px-6 py-2 text-white font-[500] text-[14px] cursor-pointer mt-4'>Lihat lainnya</button>
            </a>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center gap-6">
            <Image src={imagePrimary} width={500} height={400} alt='image' className='lg:w-[500px] h-auto w-[300px]'/>
            <div className="flex flex-col gap-4">
                {imageChildren.map((item: any) => (
                    <div className="" key={item.id}>
                        <Image src={item.image} width={400} height={100} alt='image' className='rounded-lg lg:w-[160px] h-auto w-full cursor-pointer hover:scale-105 duration-300' onClick={() => setSelectedPrimary(item.id)}/>
                    </div>
                ))}
            </div>
        </div>
       </div>

       <div className={`${loading ? 'opacity-100 z-50' : 'opacity-0 z-0'} absolute duration-900`}>
        <Loading/>
       </div>
    </div>
  )
}
