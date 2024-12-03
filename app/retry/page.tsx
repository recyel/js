import Image from 'next/image'
import TrustLogo from './TrustLogo'
import Helmet from '../images/helmet.svg'
import TrustStats from '../components/stars'
import Footer from '../components/footer'


export default function VerificationFailure() {
  return (
    <div className="min-h-screen bg-[#1b1b1c] p-6 md:p-12">
      <div className="mt-24 flex flex-col items-center justify-center">
        <div className="w-40 md:w-[160px]">
          <TrustLogo />
        </div>
        <div className="flex flex-col items-center">
          <div className="mt-6 h-76 w-76">
            <Image
              src={Helmet}
              alt="Verification failure"
              width={200}
              height={200}
            />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'boldfont' }}>
              Verification Failure
            </h1>
            <h4 className="mt-4 max-w-sm px-4 text-center text-white opacity-70">
              One or more than one field provided is invalid or incorrect. Please retry with correct information.
            </h4>
          </div>
        </div>
      </div>
     <div className='mt-6'>
     <TrustStats />
     </div>
        <Footer />
    </div>
  )
}

