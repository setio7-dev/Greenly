/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React, { useEffect, useState } from 'react'
import { useGlobalSplashContext } from '../context/SplashContext';
import { usePathname } from 'next/navigation';
import { dropdownList } from '../data/Element';
import Image from 'next/image';

export default function SplashScreenInner() {
    const { items, addItem, removeItem } = useGlobalSplashContext();
    const thisRoute = usePathname();
    const [splash, setSplash] = useState(true);

    useEffect(() => {
        const fetchArray = () => {
            const filteredItems = dropdownList.filter(item => item.path === thisRoute);
            addItem(filteredItems[0]);
            return filteredItems;
        }

        const fetchSplash = async() => {
          await new Promise(resolve => setTimeout(resolve, 3000));
          setSplash(false);
        }

        fetchArray();
        fetchSplash();
    }, [thisRoute, addItem]);
        
  return (
    <div className={`w-full flex items-center justify-center fixed flex-col z-50 duration-1000 overflow-hidden ${splash == false ? 'h-[0vh] opacity-0' : 'h-[100vh] opacity-100'}`} style={{ backgroundColor: `${items[0]?.splash}`}}>
      <Image src={items[0]?.logo} width={300} height={300} alt='image'/>
    </div>
  )
}
