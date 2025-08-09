/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import { dropdownList } from '../data/Element';
import Image from 'next/image';

export default function SplashScreen() {
    const thisRoute = usePathname();
    const [splash, setSplash] = useState(true);
    const [thisItem, setThisItem] = useState<any>([]);

    useEffect(() => {
        const fetchArray = () => {
          const filteredItems = dropdownList.filter(item => item.path === thisRoute);
          const isAlreadyInContext = thisItem.some((item: { path: string; }) => item.path === thisRoute);
          
          if (!isAlreadyInContext && filteredItems.length > 0) {
            setThisItem(filteredItems);
          }
        };

        const fetchSplash = async() => {
          await new Promise(resolve => setTimeout(resolve, 2000));
          setSplash(false);
        }

        fetchArray();
        fetchSplash();
    }, [thisRoute, thisItem]);
        
  return (
    <div className={`w-full font-poppins ${thisItem[0]?.label === "Beranda" ? 'text-[#036600]' : 'text-white'} flex items-center justify-center fixed flex-col z-50 overflow-hidden ${splash == false ? 'h-[0vh] opacity-0 duration-1000' : 'h-[100vh] opacity-100'}`} style={{ background: `${thisItem[0]?.splash}`}}>
      <Image src={thisItem[0]?.logo} className={`bounce-show ${thisItem[0]?.label === "Beranda" ? "lg:w-[400px] w-[300px]" : 'lg:w-[300px]  w-[200px]'} h-auto`} width={800} height={300} alt='image'/>
      <h1 className='font-[500] lg:text-[30px] text-[24px] mt-6'>{thisItem[0]?.label}</h1>
      <p className='lg:text-[20px] text-[16px] mt-2'>Memuat...</p>
    </div>
  )
}
