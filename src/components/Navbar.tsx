import { Logo } from './Logo';

export const Navbar = () => {
  return (
    <header className='navbar'>
      <div className="container mx-auto flex flex-row justify-between py-9">
        <Logo />
        <nav>
          <ul className='inline-flex'>
            <li className='navbar-menu-links'>Courses</li>
            <li className='navbar-menu-links'>Pricing</li>
            <li className='navbar-menu-links'>Login</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
