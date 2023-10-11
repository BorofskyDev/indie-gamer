// 'use client'

import Link from 'next/link'
import Heading from '@/components/Heading'
import { getReviews } from '@/lib/reviews'
import Image from 'next/image'

export default async function HomePage() {
  const reviews = await getReviews(3)

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className='pb-3'>Only the best indie games, reviewed for you.</p>
      <ul className='flex flex-col gap-3'>
        {reviews.map((review) => (
          <li
            key={review.slug}
            className='bg-white border rounded shadow hover:shadow-xl w-80 sm:w-full'
          >
            <Link
              href={`/reviews/${review.slug}`}
              className='flex flex-col sm:flex-row'
            >
              <Image
                src={review.image}
                alt=''
                width={320}
                height={180}
                className=' rounded-t  sm:rounded-l sm:rounded-r-none'
              />
              <h2 className='py-1  text-center font-inconsolata '>
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
