'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Community from '@/components/tree/Community'
import Fact from '@/components/tree/Fact'
import Home from '@/components/tree/Home'
import Impact from '@/components/tree/Impact'
import Solution from '@/components/tree/Solution'
import Threat from '@/components/tree/Threat'
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
