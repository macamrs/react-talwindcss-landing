import { Logo } from "../components/Logo"
import instagram from '../assets/socials/instagram.svg';
import twitter from '../assets/socials/twitter.svg';
import facebook from '../assets/socials/facebook.svg';

export const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-center md:justify-between md:flex-row py-24 px-8 gap-y-8">
        <Logo />
        
        <ul className="flex gap-5">
          <li><img src={facebook} alt="" /></li>
          <li><img src={twitter} alt="" /></li>
          <li><img src={instagram} alt="" /></li>
        </ul>
      </div>

      <div className="container mx-auto grid place-items-center pb-10">
        <span className="text-white opacity-50">©smileschool 2020</span>
      </div>
    </footer>
  )
}
