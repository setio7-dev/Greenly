'use client'
import Navbar from '@/components/Navbar'
import Community from '@/components/dirt/Community'
import Fact from '@/components/dirt/Fact'
import Home from '@/components/dirt/Home'
import Impact from '@/components/dirt/Impact'
import Solution from '@/components/dirt/Solution'
import Threat from '@/components/dirt/Threat'
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
