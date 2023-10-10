import NavBar from '@/components/NavBar'
import './globals.css'
import { inconsolata, exo2 } from './fonts'

export const metadata = {
  title:{
    default: 'Indie Gamer',
    template: '%s | Indie Gamer'

  } 
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inconsolata.variable} ${exo2.vairable}`}>
      <body className='flex flex-col min-h-screen px-4 py-2 bg-indigo-50 '>
        <header>
          <NavBar />
        </header>
        <main className='grow py-3'>{children}</main>
        <footer className='border-t py-3 text-center text-xs '>
          Game data and images courtesy of{' '}
          <span>
            <a
              href='https://rawg.io/'
              target='_blank'
              className='text-indigo-800 hover:underline'
            >
              RAWG
            </a>
          </span>
        </footer>
      </body>
    </html>
  )
}
