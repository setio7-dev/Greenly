"use client"
import React, { useState, useRef } from 'react'
import camera from '../../../../public/image/scan/camera.png'
import Image from 'next/image'
import Link from 'next/link'
import Webcam from 'react-webcam'

export default function Page() {
  const webcamRef = useRef(null)
  const [facingMode, setFacingMode] = useState('environment')
  const [file, setFile] = useState(null)

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot()
    setFile(imageSrc)
  }

  return (
    <div className='flex relative flex-col items-center lg:justify-center justify-start lg:py-0 py-2 min-h-screen font-poppins bg-[linear-gradient(170deg,_#BDFF00_0%,_#00AD03_81%)]'>
      <div className="w-full text-white flex justify-between h-[11vh] lg:h-[14vh] items-center lg:px-20 px-4 pt-6 top-0 lg:fixed relative cursor-pointer z-30">
        <Link href="/scan/pilih" className="flex justify-center gap-1 cursor-pointer items-center">
          <i className="bx bx-chevron-left text-[20px] lg:text-[36px]" />
          <h1 className="font-poppins font-[600] text-[16px] lg:text-[24px]">Kembali</h1>
        </Link>
        <button
          onClick={() => setFacingMode(prev => prev === 'environment' ? 'user' : 'environment')}
          className="px-3 py-1 lg:px-4 lg:py-2 bg-white text-black rounded-lg font-semibold text-sm lg:text-base"
        >
          {facingMode === 'environment' ? 'Depan' : 'Belakang'}
        </button>
      </div>

      <div className="w-[90vw] lg:w-[86vw] border-2 border-white h-[60vh] lg:h-[70vh] bg-black rounded-lg overflow-hidden mt-6 flex items-center justify-center">
        <Webcam
          ref={webcamRef}
          className="w-full h-full object-cover"
          screenshotFormat="image/jpeg"
          videoConstraints={{ facingMode }}
        />
      </div>

      <div
        onClick={capture}
        className="absolute bottom-10 border-2 border-white bg-[#00AD03] rounded-full p-4 lg:p-5 hover:scale-95 duration-300 cursor-pointer"
      >
        <Image src={camera.src} width={100} height={100} alt='image' className='w-[32px] lg:w-[40px] cursor-pointer h-auto' />
      </div>

      {file && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="relative bg-white p-2 lg:p-4 rounded-lg">
            <button
              onClick={() => setFile(null)}
              className="absolute -top-3 -right-3 bg-[linear-gradient(170deg,_#BDFF00_0%,_#00AD03_81%)] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold"
            >
              ×
            </button>
            <Image
              src={file}
              alt="Preview"
              width={800}
              height={800}
              className="max-w-[90vw] max-h-[80vh] lg:max-w-[80vw] lg:max-h-[80vh] object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}
