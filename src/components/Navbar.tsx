import { useEffect, useState } from 'react';
import { Logo } from './Logo';

export const Navbar = () => {
  const [ navbar, setNavbar ] = useState(false);

  const changeBgNavbar = () => {
    if(window.scrollY >= 120) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBgNavbar);

    return () => {
      window.removeEventListener('scroll', changeBgNavbar);
    };
  }, [window.scrollY]);

  return (
    <header className={`navbar ${navbar && 'bg-secondary shadow-lg'}`}>
      <div className="container mx-auto flex flex-row justify-between py-9 px-8">
        <Logo />
        <nav>
          <ul className='inline-flex gap-[3.25rem]'>
            <li className='navbar-menu-links'>Courses</li>
            <li className='navbar-menu-links'>Pricing</li>
            <li className='navbar-menu-links'>Login</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
