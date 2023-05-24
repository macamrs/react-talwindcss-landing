import smile from '../assets/smilewh.svg';
import smileTitle from '../assets/SmileSchool.svg';

export const Logo = () => {
  return (
    <div className='flex'>
      <img className='mr-[1.125rem]' src={smile} alt="" />
      <img src={smileTitle} alt="" />
    </div>
  )
}
