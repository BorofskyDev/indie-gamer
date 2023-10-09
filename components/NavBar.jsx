import Link from 'next/link'

function NavBar() {
  return (
    <nav>
      <ul className='flex gap-2'>
        <li>
          <Link href='/' className='text-indigo-800 hover:underline font-inconsolata font-bold '>
          Indie Gamer
          </Link>
        </li>
        <li>
          <Link href='/reviews' className='text-indigo-800 hover:underline'>
            Reviews
          </Link>
        </li>
        <li>
          <Link href='/about' className='text-indigo-800 hover:underline'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar