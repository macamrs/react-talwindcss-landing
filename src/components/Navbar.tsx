import smile from '../assets/smilewh.svg';
import logo from '../assets/SmileSchool.svg'
import { Logo } from './Logo';

export const Navbar = () => {
  return (
    <header>
      <div className="container mx-auto flex flex-row justify-between">
        <Logo />

        <nav>
          <ul className='inline-flex'>
            <li>Courses</li>
            <li>Pricing</li>
            <li>Login</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
