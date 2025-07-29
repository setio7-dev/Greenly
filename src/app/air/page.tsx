'use client'
import Navbar from '@/components/Navbar'
import Community from '@/components/water/Community'
import Fact from '@/components/water/Fact'
import Home from '@/components/water/Home'
import Impact from '@/components/water/Impact'
import Solution from '@/components/water/Solution'
import Threat from '@/components/water/Threat'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Fact/>
      <Threat/>
      <Impact/>
      <Solution/>
      <Community/>
    </div>
  )
}
