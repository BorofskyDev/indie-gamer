import Link from 'next/link'
import Heading from '@/components/Heading'
import { getReviews, getSlugs } from '@/lib/reviews'

export const metadata = {
  title: 'Reviews',
}

// export async function generateStaticParams() {
//   const slugs = await getSlugs()
//   return slugs.map((slug) => ({ params: { slug } }))
// }

export default async function ReviewPage() {
  const reviews = await getReviews()

  return (
    <>
      <Heading>Reviews</Heading>
      <ul className='flex flex-row flex-wrap gap-3'>
        {reviews.map((review) => (
          <li
            key={review.slug}
            className='bg-white border rounded w-80 shadow hover:shadow-xl'
          >
            <Link href={`/reviews/${review.slug}`}>
              <img
                src={review.image}
                alt={review.title}
                width='320'
                height='180'
                className='mb-2 rounded-t'
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
