'use client'
import Solution from '@/components/home/Solution'
import Accordion from '@/components/home/Accordion'
import Article from '@/components/home/Article'
import Category from '@/components/home/Category'
import Graphic from '@/components/home/Graphic'
import Impact from '@/components/home/Impact'
import Welcome from '@/components/home/Welcome'
import React from 'react'
import Navbar from '@/components/Navbar'
import Chatbot from '@/components/home/Chatbot'
import Game from '@/components/home/Game'
import Footer from '@/components/Footer'
import SplashScreen from './ui/SplashScreen'

export default function page() {
  return (
    <div className='font-poppins'>
      <SplashScreen/>
      <Navbar/>
      <Welcome/>
      <Impact/>
      <Accordion/>
      <Chatbot/>
      <Article/>
      <Category/>
      <Graphic/>
      <Game/>
      <Solution/>
      <Footer/>
    </div>
  )
}
