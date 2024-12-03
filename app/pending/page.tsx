import Image from 'next/image'
import TrustLogo from './TrustLogo'
import Crystal from '../images/crystal.svg'
import TrustStats from '../components/stars'
import Footer from '../components/footer'

export default function VerificationPending() {
  return (
    <div className="min-h-screen bg-[#1b1b1c] p-6 md:p-12">
      <div className="mt-12 flex flex-col items-center justify-center">
        <div className="w-40 md:w-[160px]">
          <TrustLogo />
        </div>
        <div className="flex flex-col items-center">
          <div className="mt-12 h-64 w-64 flex flex-col items-center justify-center">
          <Image src={Crystal} alt='Success'  />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-medium text-white">
              Your Verification Is Pending.
            </h1>
            <h4 className="mt-4 max-w-sm px-4 text-center text-white opacity-70">
              Your response has been recorded and will be reviewed manually within 48 hours. 
              Please check your wallet for further information.
            </h4>
          </div>
        </div>
      </div>
      <TrustStats />
        <Footer />
    </div>
  )
}

