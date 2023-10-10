'use client'
import { useState } from 'react'

export default function ShareLinkButton() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href)
    setClicked(true)
    setTimeout(() => setClicked(false), 2000)
  }

  return (
    <button
      onClick={handleClick}
      className='border px-2 py-1 rounded text-slate-500 text-sm hover:bg-indigo-200 hover:text-slate-950'
    >
      {clicked ? 'Link copied!' : 'Share Link'}
    </button>
  )
}
