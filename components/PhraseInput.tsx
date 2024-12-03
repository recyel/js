interface PhraseInputProps {
    value: string
    onChange: (value: string) => void
    placeholder: string
  }
  
  export default function PhraseInput({ value, onChange, placeholder }: PhraseInputProps) {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-sm border border-[#676767] bg-[#1b1b1c] px-2 py-2 text-white"
      />
    )
  }
  
  