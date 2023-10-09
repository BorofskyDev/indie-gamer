'use client'

import Link from 'next/link'
import Heading from '@/components/Heading'

export default function HomePage() {
  console.log('[HomePage] render')

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className='pb-3'>Only the best indie games, reviewed for you.</p>

      <div className='bg-white border roundedshadow hover:shadow-xl w-80 sm:w-full'>
        <Link
          href='/reviews/stardew-valley'
          className='flex flex-col sm:flex-row'
        >
          <img
            src='/images/stardew-valley.jpg'
            alt='Stardew Valley'
            width='320'
            height='180'
            className=' rounded-t  sm:rounded-l sm:rounded-r-none'
          />
          <h2 className='py-1  text-center font-inconsolata '>
            Starwdew Valley
          </h2>
        </Link>
      </div>
    </>
  )
}
