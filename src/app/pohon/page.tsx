'use client'
import Navbar from '@/components/Navbar'
import Community from '@/components/tree/Community'
import Fact from '@/components/tree/Fact'
import Home from '@/components/tree/Home'
import Impact from '@/components/tree/Impact'
import Solution from '@/components/tree/Solution'
import Threat from '@/components/tree/Threat'
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
