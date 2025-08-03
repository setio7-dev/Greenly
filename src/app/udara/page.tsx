'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Community from '@/components/air/Community'
import Fact from '@/components/air/Fact'
import Home from '@/components/air/Home'
import Impact from '@/components/air/Impact'
import Solution from '@/components/air/Solution'
import Threat from '@/components/air/Threat'
import React from 'react'

export default function page() {
  return (
    <div className='font-poppins'>
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
