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
    <div className='flex justify-center lg:flex-row flex-col items-center gap-16 lg:mt-0 -mt-60 font-poppins min-h-auto mb-28' id='ancaman'>
      <h1 className='lg:text-[42px] text-[30px] lg:text-start text-center font-[700] text-transparent bg-clip-text bg-[linear-gradient(160deg,_#6EC7F0_0%,_#0097DC_81%)]' data-aos="fade-right" data-aos-duration="800">ANCAMAN <br /> PENCEMARAN</h1>
      <div className="flex lg:mt-0 -mt-6 lg:flex-row flex-col justify-center items-center gap-12 cursor-pointer">
        <div data-aos="fade-up" data-aos-duration="800">
          <ReactCardFlip isFlipped={flip1} flipDirection='horizontal'>
              <div onClick={handleFLip1} className="bg-[radial-gradient(circle,_rgba(0,151,220,1)_40%,_rgba(110,199,240,1)_100%)] lg:w-[240px] w-[300px] h-[340px] rounded-xl flex justify-center items-center">
                  <Image width={200} height={200} className='' src='/image/water/flip1.png' alt='flip'/>
              </div>
              <div onClick={handleFLip1} className="bg-[radial-gradient(circle,_rgba(0,151,220,1)_40%,_rgba(110,199,240,1)_100%)] lg:w-[240px] w-[300px] p-4 h-[340px] rounded-xl flex justify-center items-center">
                  <h1 className='font-[600] text-[24px] text-center text-white'>Pembuangan mikroplastik di aliran sungai.</h1>
              </div>
          </ReactCardFlip>
        </div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          <ReactCardFlip isFlipped={flip2} flipDirection='horizontal'>
              <div onClick={handleFLip2} className="bg-[radial-gradient(circle,_rgba(0,151,220,1)_40%,_rgba(110,199,240,1)_100%)] lg:w-[240px] w-[300px] h-[340px] rounded-xl flex justify-center items-center">
                  <Image width={200} height={200} className='' src='/image/water/flip2.png' alt='flip'/>
              </div>
              <div onClick={handleFLip2} className="bg-[radial-gradient(circle,_rgba(0,151,220,1)_40%,_rgba(110,199,240,1)_100%)] lg:w-[240px] w-[300px] p-4 h-[340px] rounded-xl flex justify-center items-center">
                  <h1 className='font-[600] text-[24px] text-center text-white'>Pestisida dan pupuk kimia dari lahan pertanian.</h1>
              </div>
          </ReactCardFlip>
        </div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <ReactCardFlip isFlipped={flip3} flipDirection='horizontal'>
              <div onClick={handleFLip3} className="bg-[radial-gradient(circle,_rgba(0,151,220,1)_40%,_rgba(110,199,240,1)_100%)] lg:w-[240px] w-[300px] h-[340px] rounded-xl flex justify-center items-center">
                  <Image width={200} height={200} className='' src='/image/water/flip3.png' alt='flip'/>
              </div>
              <div onClick={handleFLip3} className="bg-[radial-gradient(circle,_rgba(0,151,220,1)_40%,_rgba(110,199,240,1)_100%)] lg:w-[240px] w-[300px] p-4 h-[340px] rounded-xl flex justify-center items-center">
                  <h1 className='font-[600] text-[24px] text-center text-white'>Tumpahan minyak dari kapal atau industri perkapalan.</h1>
              </div>
          </ReactCardFlip>
        </div>
      </div>
    </div>
  )
}
