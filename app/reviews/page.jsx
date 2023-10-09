import Link from 'next/link'
import Heading from '@/components/Heading'

export default function ReviewPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className='flex flex-col gap-3'>
        <li className='bg-white border rounded w-80 shadow hover:shadow-xl'>
          <Link href='/reviews/hollow-knight'>
            <img
              src='/images/hollow-knight.jpg'
              alt='Hollow Knight'
              width='320'
              height='180'
              className='mb-2 rounded-t'
            />
            <h2 className='py-1 text-center font-inconsolata'>Hollow Knight</h2>
          </Link>
        </li>

        <li className='bg-white border rounded w-80 shadow hover:shadow-xl'>
          <Link href='/reviews/stardew-valley'>
            <img
              src='/images/stardew-valley.jpg'
              alt='Stardew Valley'
              width='320'
              height='180'
              className='mb-2 rounded-t'
            />
            <h2 className='py-1 text-center font-inconsolata'>Starwdew Valley</h2>
          </Link>
        </li>
      </ul>
    </>
  )
}
