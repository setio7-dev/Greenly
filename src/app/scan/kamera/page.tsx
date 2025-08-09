"use client"
import React, { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import camera from '../../../../public/image/scan/camera.png'
import Image from 'next/image'
import Link from 'next/link'
import Webcam from 'react-webcam'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useScan } from '@/app/context/scanContext'

export default function Page() {
  const webcamRef = useRef<Webcam>(null);
  const [facingMode, setFacingMode] = useState('environment');
  const [file, setFile] = useState<File | null>(null);
  const previewUrl = file ? URL.createObjectURL(file) : null;
  const { setResult } = useScan();
  const navigate = useRouter();

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        const byteString = atob(imageSrc.split(',')[1]);
        const mimeString = imageSrc.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeString });
        const imageFile = new File([blob], 'capture.jpg', { type: mimeString });
        setFile(imageFile);
      }
    }
  };

  const handleSubmit = async () => {
    try {
      if (!file) return;

      Swal.fire({
        title: 'Mengunggah...',
        text: 'Mohon tunggu, proses unggah sedang berlangsung.',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading()
      });

      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('https://greenly-machine.setionugraha.my.id/predict', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const resultScan = response.data.class;
      setResult(resultScan);
      console.log('Hasil Scan:', resultScan);

      Swal.fire({
        title: 'Berhasil!',
        text: 'File berhasil diunggah.',
        icon: 'success',
        confirmButtonText: 'Oke',
        confirmButtonColor: 'green'
      });

      setTimeout(() => {
        navigate.push('/scan/hasil');
      }, 1000);
    } catch (error) {
      Swal.fire({
        title: 'Gagal!',
        text: 'Terjadi kesalahan saat mengunggah file.' + error,
        icon: 'error',
        confirmButtonText: 'Coba Lagi',
        confirmButtonColor: 'red'
      });
    }
  };

  return (
    <div className='flex relative flex-col items-center lg:justify-center justify-start lg:py-0 py-2 min-h-screen font-poppins bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)]'>
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

      {file && previewUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="relative bg-white p-2 lg:p-4 rounded-lg">
            <button
              onClick={() => setFile(null)}
              className="absolute -top-3 -right-3 bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold"
            >
              ×
            </button>
            <Image
              src={previewUrl}
              alt="Preview"
              width={800}
              height={800}
              className="max-w-[90vw] max-h-[80vh] lg:max-w-[80vw] lg:max-h-[80vh] object-cover rounded-lg"
            />
            <button onClick={handleSubmit} className='bg-[#84D300] mt-6 text-white rounded-lg border-[#84D300] border-2 px-8 py-2 hover:bg-transparent hover:text-[#84D300] text-[16px] cursor-pointer font-[500] duration-200'>Kirim</button>
          </div>
        </div>
      )}
    </div>
  )
}
