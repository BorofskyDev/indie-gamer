import NavLink from './NavLink'

function NavBar() {
  return (
    <nav>
      <ul className='flex gap-2'>
        <li className="font-bold text-xl ">
          <NavLink href="/">
            Indie Gamer
          </NavLink>
        </li>
        <li className="ml-auto">
          <NavLink href="/reviews">
            Reviews
          </NavLink>
        </li>
        <li >
          <NavLink href="/About" prefetch={false}>
           About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar