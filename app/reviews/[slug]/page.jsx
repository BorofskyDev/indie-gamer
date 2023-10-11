import Image from 'next/image'
import { getReview, getSlugs } from '@/lib/reviews'
import Heading from '@/components/Heading'
import ShareLinkButton from '@/components/ShareLinkButton'

export async function generateStaticParams() {
  const slugs = await getSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug)
  return {
    title: review.title,
  }
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug)
 
  return (
    <>
      <Heading>{review.title}</Heading>
      <p className='font-semibold pb-3'>
        {review.subtitle}
      </p>
      <div className='flex gap-3 items-baseline mb-1'>
        <p className='italic pb-2'>{review.date}</p>
        <ShareLinkButton />
      </div>
      <Image
        src={review.image}
        alt={review.title}
        width={640}
        height={360}
        className='mb-2 rounded'
        priority
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className='prose prose-slate prose-lg max-w-screen-sm'
      />
    </>
  )
}
