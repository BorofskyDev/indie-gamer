import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'

function Paginationbar({ href, page, pageCount }) {
  return (
    <div className='flex gap-2 pb-3'>
      <PaginationLink href={`${href}?page=${page - 1}`} enabled={page > 1}>
        <ChevronDoubleLeftIcon className='h-5 w-5' />
        <span className='sr-only'>Previous Page</span>
      </PaginationLink>
      <span>
        Page {page} of {pageCount}
      </span>
      <PaginationLink
        href={`${href}?page=${page + 1}`}
        enabled={page < pageCount}
      >
        <ChevronDoubleRightIcon className='h-5 w-5' />{' '}
        <span className='sr-only'>Previous Next</span>
      </PaginationLink>
    </div>
  )
}
export default Paginationbar

function PaginationLink({ children, enabled ,href }) {
    if (!enabled) {
    return <span className='text-slate-300 cursor-not-allowed rounded border' >{children}</span>
    }
  return (
    <Link
      href={href}
      className='border rounded text-slate-500 text-sm hover:sm-orange-100 hover:text-slate-700'
    >
      {children}
    </Link>
  )
}
