'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavLink({ children, href, prefetch }) {
    const pathname = usePathname()

    if (pathname === href) {
        return (
            <span className='text-rose-300 font-inconsolata font-bold underline'>
                {children}
            </span>
        )
    }

  return (
  
      <Link
        href={href}
        prefetch={prefetch}
        className='text-indigo-800 hover:underline font-inconsolata font-bold '
      >
        {children}
      </Link>

  )
}
export default NavLink
