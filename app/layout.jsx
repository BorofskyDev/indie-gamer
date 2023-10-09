import Link from 'next/link'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header>[header]</header>
        <nav>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/reviews'>Reviews</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
        <footer>
          Game data and images courtesy of{' '}
          <span>
            <a href='https://rawg.io/' target='_blank'>
              RAWG
            </a>
          </span>
        </footer>
      </body>
    </html>
  )
}
