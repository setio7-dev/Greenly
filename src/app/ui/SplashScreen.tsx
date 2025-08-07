"use client"
import React from 'react'
import { GlobalSplashProvider } from '../context/SplashContext'
import SplashScreenInner from './SplashScreenInner'

export default function SplashScreen() {
  return (
    <GlobalSplashProvider>
        <SplashScreenInner />
    </GlobalSplashProvider>
  )
}
