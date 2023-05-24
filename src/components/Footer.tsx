import { Logo } from "./Logo"
import instagram from '../assets/socials/instagram.svg';
import twitter from '../assets/socials/twitter.svg';
import facebook from '../assets/socials/facebook.svg';

export const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto flex justify-between py-24">
        <Logo />
        
        <ul className="flex gap-5">
          <li><img src={facebook} alt="" /></li>
          <li><img src={twitter} alt="" /></li>
          <li><img src={instagram} alt="" /></li>
        </ul>
      </div>

      <div className="container mx-auto grid place-items-center pb-10">
        <span className="text-white opacity-80">©smileschool 2020</span>
      </div>
    </footer>
  )
}
