/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React, { useEffect } from 'react'
import { useGlobalSplashContext } from '../context/SplashContext';
import { usePathname } from 'next/navigation';
import { dropdownList } from '../data/Element';

export default function SplashScreenInner() {
    const { items, addItem, removeItem } = useGlobalSplashContext();
    const thisRoute = usePathname();

    useEffect(() => {
        const fetchArray = () => {
            const filteredItems = dropdownList.filter(item => item.path === thisRoute);
            addItem(filteredItems[0]);
            return filteredItems;
        }

        fetchArray()
    }, [thisRoute, addItem]);
        
  return (
    <div className={`w-full h-screen flex items-center justify-center fixed flex-col z-50`}>
      
    </div>
  )
}
