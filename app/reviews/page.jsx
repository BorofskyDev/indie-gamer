import Link from 'next/link'
import Heading from '@/components/Heading'
import { getReviews, getSlugs } from '@/lib/reviews'
import Image from 'next/image'

export const metadata = {
  title: 'Reviews',
}

export async function generateStaticParams() {
  const slugs = await getSlugs()
  return slugs.map((slug) => ({ params: { slug } }))
}

export default async function ReviewPage() {
  const reviews = await getReviews(6)

  return (
    <>
      <Heading>Reviews</Heading>
      <ul className='flex flex-row flex-wrap gap-3'>
        {reviews.map((review, index) => (
          <li
            key={review.slug}
            className='bg-white border rounded w-80 shadow hover:shadow-xl'
          >
            <Link href={`/reviews/${review.slug}`}>
              <Image
                src={review.image}
                alt={review.title}
                width={320}
                height={180}
                className='mb-2 rounded-t'
                priority={index < 3}
              />
              <h2 className='py-1 text-center font-inconsolata'>
                {review.title}
              </h2>
              <p>{review.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
