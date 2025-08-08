'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Community from '@/components/dirt/Community'
import Fact from '@/components/dirt/Fact'
import Home from '@/components/dirt/Home'
import Impact from '@/components/dirt/Impact'
import Solution from '@/components/dirt/Solution'
import Threat from '@/components/dirt/Threat'
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
