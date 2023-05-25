import { Logo } from './Logo';
import { useState, useEffect } from 'react';
import burgerMenu from '../assets/menu.svg';
import closeMenu from '../assets/close.svg';
import { RegisterBtn } from './RegisterBtn';

export const ResponsiveNavBar = () => {
    const [ toggleMenu, setToggleMenu ] = useState<boolean>(false);
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

    const toggleNavMenu = () => {
        setToggleMenu(!toggleMenu)
    };

  return (
    <header className={`navbar ${navbar && 'bg-secondary shadow-lg' } ${toggleMenu ? 'backdrop-blur-sm h-full' : 'backdrop-blur-0'} overflow-hidden px-2`}>
      <div className="container mx-auto flex flex-row py-9 px-2 items-start overflow-hidden">
        <button className='flex-1' onClick={toggleNavMenu}>
            <img className='w-7 h-full' src={burgerMenu} alt="Open Menu Icon" />
        </button>
        <div className='flex-1'>
            <Logo />
        </div>
        { 
            toggleMenu && 
                <div className='fixed z-50 left-0 inset-0 overflow-y-auto p-6 opacity-100 bg-slate-800 max-w-[calc(100% - 3rem)] w-80 overflow-hidden flex flex-col items-end'>
                  <button onClick={toggleNavMenu}>
                    <img className='w-7 h-full fill-white' src={closeMenu} alt="Close Menu Icon" />
                  </button>
                  <nav className='w-full'>
                    <ul className='flex flex-col gap-y-[1.5rem] w-full py-14 px-3'>
                        <li className='navbar-menu-links-responsive'>Courses</li>
                        <li className='navbar-menu-links-responsive'>Pricing</li>
                        <li className='navbar-menu-links-responsive'>Login</li>
                    </ul>         

                    <RegisterBtn />           
                  </nav>
                </div>
        }
        <div className='flex-1'></div>
      </div>
    </header>
  )
}