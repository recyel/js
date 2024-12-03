import { Metadata } from 'next'
import PhraseConfirmation from '../../components/PhraseConfirmation'

export const metadata: Metadata = {
  title: 'Confirm Your Secret Phrase | Trust Wallet',
  description: 'Confirm your secret phrase for Trust Wallet',
}

export default function ConfirmPhrasePage() {
  return (
    <main className="min-h-screen bg-[#1b1b1c] p-6 md:p-12">
      <PhraseConfirmation />
    </main>
  )
}

