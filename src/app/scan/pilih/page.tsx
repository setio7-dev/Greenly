"use client"
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import upload from '../../../../public/image/scan/upload.png'
import Image from 'next/image'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import { useScan } from '@/app/context/scanContext'

export default function Page() {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const navigate = useRouter();
    const { setResult } = useScan();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            handleFile(selectedFile);
        }
    }

    const handleFile = (selectedFile: File) => {
        setFile(selectedFile);
        const objectUrl = URL.createObjectURL(selectedFile);
        setPreviewUrl(objectUrl);
    }

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    }

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files?.[0];
        if (droppedFile) {
            handleFile(droppedFile);
        }
    }

    const handleSubmit = async() => {
        try {
            Swal.fire({
                title: 'Mengunggah...',
                text: 'Mohon tunggu, proses unggah sedang berlangsung.',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            await new Promise(resolve => setTimeout(resolve, 2000));
            const formData = new FormData();
            formData.append('file', file as Blob);

            const response = await axios.post('https://greenly-machine.setionugraha.my.id/predict', formData,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
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
    }

    return (
        <div className='flex flex-col items-center lg:justify-center justify-start lg:py-0 py-2 min-h-screen font-poppins bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)]'>
            <div className="w-full text-white flex justify-between h-[11vh] lg:h-[14vh] items-center lg:px-20 pt-6 px-6 top-0 lg:fixed relative cursor-pointer z-30">
                <Link href="/scan" className="flex justify-center gap-1 cursor-pointer items-center">
                    <i className="bx bx-chevron-left text-[24px] lg:text-[36px]" />
                    <h1 className="font-poppins font-[600] text-[18px] lg:text-[24px]">Kembali</h1>
                </Link>
            </div>
            <div className="flex lg:flex-row flex-col lg:mt-10 mt-6 justify-center items-start lg:gap-24 gap-12 h-auto w-[86vw] rounded-lg lg:px-8 px-6 py-12 bg-white">
                <div className={`flex flex-col text-center gap-4 justify-center items-center border-2 ${isDragging ? 'border-green-500 bg-green-50' : 'border-[#00AD03]'} border-dashed p-6 rounded-xl transition-colors`} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
                    <Image src={upload.src} width={200} height={200} alt='image' className='lg:w-[80px] w-[50px] cursor-pointer h-auto' onClick={handleUploadClick}/>
                    <input type="file" onChange={handleFileChange} className='hidden' ref={fileInputRef} id='upload-input' />
                    <p className='lg:text-[20px] text-[14px] font-[600]'>Jatuhkan file untuk diunggah</p>
                    <p className='lg:text-[18px] text-[14px] font-[600]'>Atau</p>
                    <Link href="/scan/kamera">
                        <button className='bg-[#84D300] mt-4 text-white rounded-full border-[#84D300] border-2 px-8 py-2 hover:bg-transparent hover:text-[#84D300] lg:text-[16px] text-[14px] cursor-pointer font-[500] duration-200'>Kamera</button>
                    </Link>
                    <p className='text-[#21212144] font-[500] lg:text-[14px] text-[12px]'>File yang didukung: JPG, JPEG, PNG, WEBP</p>
                </div>
                <div className="flex flex-col gap-4 justify-center items-start">
                    <h1 className='font-[600] lg:text-[18px] text-[16px]'>File yang Diunggah :</h1>
                    <div className="mt-2">
                        {previewUrl ? (
                            <div>
                                <Image src={previewUrl} width={200} height={200} alt='preview' className='object-cover h-[30vh] rounded-lg'/>
                                <button onClick={handleSubmit} className='bg-[#84D300] mt-6 text-white rounded-lg border-[#84D300] border-2 px-8 py-2 hover:bg-transparent hover:text-[#84D300] text-[16px] cursor-pointer font-[500] duration-200'>Kirim</button>
                            </div>
                        ) : (
                            <p className='text-[#21212144] font-[500] lg:text-[14px] text-[12px]'>Tidak ada file yang diunggah</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
