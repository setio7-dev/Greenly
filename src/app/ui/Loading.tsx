import React from 'react'

interface LoadingProps {
  className?: string
}

const Loading: React.FC<LoadingProps> = ({ className }) => {
  return (
    <div className={`fixed inset-0 z-10 flex items-center font-poppins justify-center text-white bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)] ${className}`}>
      <div className="text-center animate-pulse">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-white animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25" cx="12" cy="12" r="10"
            stroke="currentColor" strokeWidth="4"
          ></circle>
          <path
            className="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          ></path>
        </svg>
        <p className="text-lg font-semibold">Memuat...</p>
      </div>
    </div>
  )
}

export default Loading
