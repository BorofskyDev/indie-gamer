// 'use client'

import Link from 'next/link'
import Heading from '@/components/Heading'
import { getFeaturedReview } from '@/lib/reviews'

export default async function HomePage() {
  const review = await getFeaturedReview()

  console.log('[HomePage] render')

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className='pb-3'>Only the best indie games, reviewed for you.</p>

      <div className='bg-white border roundedshadow hover:shadow-xl w-80 sm:w-full'>
        <Link
          href='/reviews/{review.slug}'
          className='flex flex-col sm:flex-row'
        >
          <img
            src={review.image}
            alt=''
            width='320'
            height='180'
            className=' rounded-t  sm:rounded-l sm:rounded-r-none'
          />
          <h2 className='py-1  text-center font-inconsolata '>
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  )
}
