'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Community from '@/components/water/Community'
import Fact from '@/components/water/Fact'
import Home from '@/components/water/Home'
import Impact from '@/components/water/Impact'
import Solution from '@/components/water/Solution'
import Threat from '@/components/water/Threat'
import React from 'react'
import SplashScreen from '../ui/SplashScreen'

export default function page() {
  return (
    <div className='font-poppins'>
      <SplashScreen/>
      <Navbar/>
      <Home/>
      <Fact/>
      <Threat/>
      <Impact/>
      <Solution/>
      <Community/>
      <Footer/>
    </div>
  )
}
