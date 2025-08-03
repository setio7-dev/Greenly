'use client'
import Solution from '@/components/home/Solution'
import Accordion from '@/components/home/Accordion'
import Article from '@/components/home/Article'
import Category from '@/components/home/Category'
import Graphic from '@/components/home/Graphic'
import Impact from '@/components/home/Impact'
import Welcome from '@/components/home/Welcome'
import React from 'react'

export default function page() {
  return (
    <div className='font-poppins'>
      <Welcome/>
      <Impact/>
      <Accordion/>
      <Article/>
      <Category/>
      <Graphic/>
      <Solution/>
    </div>
  )
}
