'use client'
import { LinkIcon } from '@heroicons/react/20/solid'
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
      className='border flex gap-1 px-2 py-1 rounded text-slate-500 text-sm hover:bg-indigo-200 hover:text-slate-950'
    >
      <LinkIcon className='inline-block w-4 h-4 mr-1' />
      {clicked ? 'Link copied!' : 'Share Link'}
    </button>
  )
}
