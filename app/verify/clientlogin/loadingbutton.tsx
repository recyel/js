import React from 'react'

interface LoadingButtonProps {
  isLoading: boolean
}

const LoadingButton: React.FC<LoadingButtonProps> = ({ isLoading }) => {
  return (
    <button
      type="submit"
      className="rounded-3xl bg-[#48FF91] px-10 py-2 text-[#1B1B1C] relative"
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#1B1B1C]"></div>
        </div>
      ) : (
        'Proceed'
      )}
    </button>
  )
}

export default LoadingButton