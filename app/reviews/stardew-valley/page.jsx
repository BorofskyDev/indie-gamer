import Heading from '@/components/Heading'

export default function StardewValleyPage() {
  return (
    <>
      <Heading >Stardew Valley</Heading>
      <img
        src='/images/stardew-valley.jpg'
        alt='Stardew Valley'
        width='640'
        height='360'
        className='mb-2 rounded '
      />
      <p>
        Stardew Valley is a farming simulation game. You inherit a farm from
        your grandfather and move to a small town to start a new life.
      </p>
    </>
  )
}
