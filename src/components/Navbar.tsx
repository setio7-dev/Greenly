/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { dropdownList } from '@/app/data/Element';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarFiltered, setNavbarFiltered] = useState<any>([]);
  const [isOpenNav, setIsOpenNav] = useState(true);
  const [thisNav, setThisNav] = useState('');
  const [colorNav, setColorNav] = useState('');
  const navigate = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const filteredNavbar = () => {
      const filteredData = dropdownList.filter((item) => {
        const data = item.path != pathname;
        return data;
      });      

      const filteredThisNav = dropdownList.filter((item) => {
        const data = item.path === pathname;
        return data;
      });
      
      setThisNav(filteredThisNav[0].label)
      setNavbarFiltered(filteredData);
      setColorNav(filteredThisNav[0].color);
    }    

    filteredNavbar();
  }, [pathname]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenNav = () => {
    setIsOpenNav(!isOpenNav);
  }

  return (
    <div className="flex lg:justify-center justify-between lg:px-0 px-4 items-center font-poppins text-black lg:h-[14vh] h-[10vh] lg:gap-68 gap-0 fixed w-full bg-white z-30">
      <Link href="/">
        <Image src={logo.src} width={200} height={80} alt='image' className='lg:w-[160px] w-[110px] h-auto'/>
      </Link>
      <div className={`flex lg:flex-row flex-col bg-white lg:w-auto w-[200px] text-[16px] lg:h-auto h-[100vh] top-0 justify-center items-center gap-8 lg:text-[18px] font-[500] duration-700 lg:relative absolute ${isOpenNav ? 'right-0' : '-right-[300px]'}`}>
        <Link
          href="/"
          className="relative link-gradient text-black font-medium lg:text-[18px] text-[16px]"
          style={{ ['--gradient' as any]: colorNav }}
        >
          Beranda
        </Link>
        <a
          href="#tentangkami"
          className="relative link-gradient text-black font-medium lg:text-[18px] text-[16px]"
          style={{ ['--gradient' as any]: colorNav }}
        >
          Tentang Kami
        </a>
        <Link
          href="/cek-emisi"
          className="relative link-gradient text-black font-medium lg:text-[18px] text-[16px]"
          style={{ ['--gradient' as any]: colorNav }}
        >
          Kalkulator
        </Link>
        <a
          href="#berita"
          className="relative link-gradient text-black font-medium lg:text-[18px] text-[16px]"
          style={{ ['--gradient' as any]: colorNav }}
        >
          Berita
        </a>
        <Link
          href="/chatbot"
          className="relative link-gradient text-black font-medium lg:text-[18px] text-[16px]"
          style={{ ['--gradient' as any]: colorNav }}
        >
          Chatbot
        </Link>
        <a
          href="/permainan"
          className="relative link-gradient text-black font-medium lg:text-[18px] text-[16px]"
          style={{ ['--gradient' as any]: colorNav }}
        >
          Permainan
        </a>
        <div className="flex gap-2 cursor-pointer relative justify-center items-center">
            <svg className='w-[22px] h-auto' viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.792 14.5833C24.792 16.9706 23.6472 19.0896 21.8695 20.421L23.6195 22.7544C24.8898 21.8045 25.921 20.5712 26.6309 19.1527C27.3407 17.7342 27.7098 16.1696 27.7087 14.5833H24.792ZM17.5003 7.29167C19.4342 7.29167 21.2889 8.05989 22.6563 9.42735C24.0238 10.7948 24.792 12.6495 24.792 14.5833H27.7087C27.7087 11.8759 26.6331 9.27939 24.7187 7.36495C22.8043 5.45052 20.2077 4.375 17.5003 4.375V7.29167ZM10.2087 14.5833C10.2087 12.6495 10.9769 10.7948 12.3443 9.42735C13.7118 8.05989 15.5665 7.29167 17.5003 7.29167V4.375C14.7929 4.375 12.1964 5.45052 10.2819 7.36495C8.36751 9.27939 7.29199 11.8759 7.29199 14.5833H10.2087ZM13.1312 20.421C12.2231 19.7428 11.4859 18.8618 10.9785 17.8483C10.4712 16.8348 10.2075 15.7168 10.2087 14.5833H7.29199C7.29086 16.1696 7.65991 17.7342 8.3698 19.1527C9.07969 20.5712 10.1108 21.8045 11.3812 22.7544L13.1312 20.421ZM16.0376 28.7919C15.9914 26.5682 15.532 24.3726 14.6828 22.3169L11.9878 23.4325C12.6966 25.149 13.083 26.9865 13.1224 28.8531L16.0376 28.7919ZM19.4574 28.016C18.8498 28.32 18.1797 28.4782 17.5003 28.4782C16.8209 28.4782 16.1509 28.32 15.5432 28.016L14.2395 30.625C15.252 31.1312 16.3684 31.3948 17.5003 31.3948C18.6323 31.3948 19.7487 31.1312 20.7612 30.625L19.4574 28.016ZM20.3178 22.3183C19.4684 24.3735 19.0085 26.5686 18.9616 28.7919L21.8782 28.8531C21.9176 26.9865 22.3041 25.149 23.0128 23.4325L20.3178 22.3183ZM20.7612 30.625C21.091 30.4594 21.3694 30.2068 21.5663 29.8945C21.7632 29.5823 21.871 29.2222 21.8782 28.8531L18.9616 28.7919C18.9656 28.6296 19.0139 28.4716 19.1013 28.3348C19.1887 28.1981 19.3119 28.0878 19.4574 28.016L20.7612 30.625ZM13.1224 28.8531C13.137 29.5881 13.5512 30.2808 14.2395 30.625L15.5432 28.016C15.6888 28.0878 15.8119 28.1981 15.8993 28.3348C15.9867 28.4716 16.0351 28.6296 16.0391 28.7919L13.1224 28.8531ZM11.3812 22.7544C11.5999 22.9206 11.7297 23.0169 11.8201 23.0898C11.912 23.1656 11.8945 23.1627 11.8537 23.1102L14.1578 21.3223C13.8851 20.9694 13.4622 20.669 13.1312 20.421L11.3812 22.7544ZM14.6828 22.3169C14.5691 22.0413 14.4247 21.665 14.1578 21.3223L11.8537 23.1102C11.8347 23.084 11.8303 23.0708 11.8493 23.1102L11.9003 23.224L11.9878 23.4325L14.6828 22.3169ZM21.8695 20.421C21.5385 20.669 21.1141 20.9708 20.8414 21.3223L23.147 23.1102C23.1076 23.1613 23.0887 23.1656 23.1805 23.0912C23.271 23.0169 23.3993 22.9206 23.6195 22.7558L21.8695 20.421ZM23.0128 23.4325L23.1003 23.224L23.1514 23.1102C23.1703 23.0708 23.166 23.084 23.147 23.1102L20.8414 21.3223C20.5745 21.6665 20.4316 22.0413 20.3178 22.3183L23.0128 23.4325Z" fill="black"/>
                <path d="M21.8634 23.3334C20.5722 24.1974 19.0536 24.6586 17.5001 24.6586C15.9465 24.6586 14.4279 24.1974 13.1367 23.3334" stroke="black" stroke-width="2.91667"/>
            </svg>
            <p onClick={handleOpen}>{thisNav}</p>
            <svg onClick={handleOpen} className={`w-[10px] h-auto duration-200 ${isOpen ? 'rotate-180' : "rotate-0"}`} viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.374196 0.420639C0.613866 0.151304 0.938885 0 1.27778 0C1.61667 0 1.94169 0.151304 2.18136 0.420639L8.50772 7.53218L14.8341 0.420639C15.0751 0.158937 15.398 0.0141279 15.7331 0.0174012C16.0682 0.0206745 16.3887 0.171768 16.6257 0.438139C16.8626 0.70451 16.997 1.06485 17 1.44154C17.0029 1.81823 16.874 2.18114 16.6412 2.4521L9.4113 10.5794C9.17163 10.8487 8.84661 11 8.50772 11C8.16882 11 7.8438 10.8487 7.60413 10.5794L0.374196 2.4521C0.134599 2.18268 0 1.81732 0 1.43637C0 1.05541 0.134599 0.690055 0.374196 0.420639Z" fill="black"/>
            </svg>
            <div className={`${isOpen ? 'h-[170px] border' : 'h-0 border-0'} duration-300 transition-all absolute top-full mt-2 bg-white rounded-b-xl shadow-md w-[120px] overflow-y-auto z-10 flex flex-col border-gray-200`}>
              {navbarFiltered.map((item: any) => (
                <div key={item.id} className=" px-4 py-2 hover:bg-gray-100 cursor-pointer text-center transition-all duration-200">
                  <p onClick={() => navigate.push(item.path)} className="font-[400] text-[16px] text-gray-800">{item.label}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
      <div className="flex flex-col justify-center z-20 items-center gap-1.5 display-flex" onClick={handleOpenNav}>
          <div className={`w-[26px] duration-500 h-[2px] bg-black ${isOpenNav ? 'rotate-45' : 'rotate-0 mt-0'}`}></div>
          <div className={`w-[26px] duration-500 h-[2px] bg-black ${isOpenNav ? 'opacity-0' : 'rotate-0 mt-0 opacity-100'}`}></div>
          <div className={`w-[26px] duration-500 h-[2px] bg-black ${isOpenNav ? '-rotate-45 -mt-4' : 'rotate-0 mt-0'}`}></div>
      </div>
    </div>
  )
}
