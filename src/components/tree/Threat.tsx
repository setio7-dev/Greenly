"use client"
import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import Image from 'next/image';

export default function Threat() {
  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);
  const handleFLip1 = () => {
    setFlip1(!flip1);
  }

  const handleFLip2 = () => {
    setFlip2(!flip2);
  }

  const handleFLip3 = () => {
    setFlip3(!flip3);
  }

  return (
    <div className='flex justify-center items-center gap-16 font-poppins min-h-auto mb-28'>
      <h1 className='text-[42px] font-[700] text-transparent bg-clip-text bg-[linear-gradient(160deg,_#BDFF00_0%,_#00AD03_81%)]'>ANCAMAN <br /> PENCEMARAN</h1>
      <div className="flex justify-center items-center gap-12 cursor-pointer">
        <ReactCardFlip isFlipped={flip1} flipDirection='horizontal'>
            <div onClick={handleFLip1} className="bg-[#AEA46B] w-[240px] h-[340px] rounded-xl flex justify-center items-center">
                <Image width={200} height={200} className='' src='/image/tree/flip1.png' alt='flip'/>
            </div>
            <div onClick={handleFLip1} className="bg-[#AEA46B] w-[240px] p-4 h-[340px] rounded-xl flex justify-center items-center">
                <h1 className='font-[600] text-[24px] text-center text-white'>Penebangan liar dan kebakaran hutan</h1>
            </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={flip2} flipDirection='horizontal'>
            <div onClick={handleFLip2} className="bg-[#AEA46B] w-[240px] h-[340px] rounded-xl flex justify-center items-center">
                <Image width={200} height={200} className='' src='/image/tree/flip2.png' alt='flip'/>
            </div>
            <div onClick={handleFLip2} className="bg-[#AEA46B] w-[240px] p-4 h-[340px] rounded-xl flex justify-center items-center">
                <h1 className='font-[600] text-[24px] text-center text-white'>Pencemaran udara memperlambat pertumbuhan pohon.</h1>
            </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={flip3} flipDirection='horizontal'>
            <div onClick={handleFLip3} className="bg-[#AEA46B] w-[240px] h-[340px] rounded-xl flex justify-center items-center">
                <Image width={200} height={200} className='' src='/image/tree/flip3.png' alt='flip'/>
            </div>
            <div onClick={handleFLip3} className="bg-[#AEA46B] w-[240px] p-4 h-[340px] rounded-xl flex justify-center items-center">
                <h1 className='font-[600] text-[24px] text-center text-white'>Sampah plastik di hutan merusak tanah dan ekosistem pohon</h1>
            </div>
        </ReactCardFlip>
      </div>
    </div>
  )
}
