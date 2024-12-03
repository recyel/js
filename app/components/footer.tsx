import Link from "next/link"
import Image from "next/image"
import { Facebook, Github, Instagram, Twitter, MessageCircle, Share2, Send, Music2 } from 'lucide-react'
import TrustNew from "../images/trust.svg"
export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1400px] px-8 py-12 rounded-[20px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 mt-16">
      <div className="grid gap-8 md:grid-cols-[auto,2fr,1fr] md:gap-12">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-8">
            <Image 
              src={TrustNew}
              alt="Trust Wallet"
              width={180}
              height={50}
              className=""
            />
          </div>
          
          <h5 className="mb-4 font-bold text-zinc-900 dark:text-white">Stay Connected:</h5>
          <div className="flex flex-wrap gap-4">
            <SocialLink href="https://facebook.com/trustwalletapp" icon={<Facebook className="h-5 w-5" />} />
            <SocialLink href="https://github.com/trustwallet" icon={<Github className="h-5 w-5" />} />
            <SocialLink href="https://instagram.com/trustwallet" icon={<Instagram className="h-5 w-5" />} />
            <SocialLink href="https://twitter.com/trustwallet" icon={<Twitter className="h-5 w-5" />} />
            <SocialLink href="https://discord.gg/trustwallet" icon={<MessageCircle className="h-5 w-5" />} />
            <SocialLink href="https://reddit.com/r/trustapp" icon={<Share2 className="h-5 w-5" />} />
            <SocialLink href="https://t.me/trustwallet" icon={<Send className="h-5 w-5" />} />
            <SocialLink href="https://www.tiktok.com/@trustwalletweb3" icon={<Music2 className="h-5 w-5" />} />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          <NavSection 
            title="Wallet" 
            links={[
              { href: "/download", label: "Mobile App" },
              { href: "/browser-extension", label: "Browser Extension" }
            ]}
          />
          
          <NavSection 
            title="Features" 
            links={[
              { href: "/buy-crypto", label: "Buy Crypto" },
              { href: "/swap", label: "Swaps" },
              { href: "/staking", label: "Staking" },
              { href: "/nft", label: "NFTs" },
              { href: "/security", label: "Security" },
              { href: "/swift", label: "SWIFT: Smart Contract Wallet" }
            ]}
          />
          
          <NavSection 
            title="Build" 
            links={[
              { href: "https://developer.trustwallet.com/developer/", label: "Developer Docs" },
              { href: "https://developer.trustwallet.com/developer/wallet-core", label: "Wallet Core" },
              { href: "https://developer.trustwallet.com/developer/listing-new-dapps", label: "Submit dApp" },
              { href: "https://developer.trustwallet.com/developer/listing-new-assets", label: "Get assets listed" }
            ]}
          />
          
          <NavSection 
            title="Support" 
            links={[
              { href: "https://community.trustwallet.com/c/helpcenter/8", label: "FAQ" },
              { href: "https://community.trustwallet.com/", label: "Community Forum" },
              { href: "https://support.trustwallet.com/en/support/home", label: "Contact Us" }
            ]}
          />
          
          <NavSection 
            title="About" 
            links={[
              { href: "/about-us", label: "About Us" },
              { href: "/careers", label: "Careers" },
              { href: "/press", label: "Press Kit" },
              { href: "/terms-of-service", label: "Terms of Service" },
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/blog", label: "Blog" }
            ]}
          />
        </div>

        {/* Download Section */}
        <div className="space-y-4">
          <div>
            <h5 className="font-bold text-zinc-900 dark:text-white">Download Trust Wallet</h5>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              The most trusted & secure crypto wallet
            </p>
          </div>

       

          <div className="flex justify-center gap-4 pt-4">
         
            
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-full border border-zinc-200 p-2 text-zinc-600 transition-colors hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-white dark:hover:text-white"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  )
}

function NavSection({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className="space-y-4">
      <h5 className="font-bold text-zinc-900 dark:text-white">{title}</h5>
      <nav className="flex flex-col space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}


