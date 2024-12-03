import Link from 'next/link'
import { Star } from 'lucide-react'

interface StatProps {
  title: string
  value: string | React.ReactNode
  link?: string
}

const Stat = ({ title, value, link }: StatProps) => (
  <div className="flex flex-col items-center">
    <h4 className="text-white font-bold text-sm leading-tight md:text-sm md:leading-tight">
      {title} <br />
      {link ? (
        <Link href={link} className="text-[#00FF88] transition-colors">
          {value}
        </Link>
      ) : (
        <span className="text-[#00FF88] transition-colors">{value}</span>
      )}
    </h4>
  </div>
)

const StarRating = () => (
  <span className="flex -mt-3">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className="w-3 h-3 fill-[#00FF88] text-[#00FF88] space-y-3 mt-4" 
      />
    ))}
  </span>
)

export default function TrustStats() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-12 text-center md:col-span-2 lg:flex-nowrap lg:items-start lg:gap-24 bg-transparent p-8">
      <Stat title="Trusted by" value="140M people" />
      <Stat title="Founded in" value="2017" />
      <Stat title="Independently" value="Audited" />
      <Stat title="ISO" value="Certified" />
      <Stat 
      
        title="Top reviews" 
        value={<StarRating />} 
        link="https://apps.apple.com/app/trust-crypto-bitcoin-wallet/id1288339409?see-all=reviews" 
      />
    </div>
  )
}

