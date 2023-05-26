import smile from '../assets/smilewh.svg';
import smileTitle from '../assets/SmileSchool.svg';

export const Logo = () => {
  return (
    <div className='flex flex-col md:flex-row items-center '>
      <img src={smile} alt="Smile part of SmileSchool logo" className='mb-[0.85rem] md:mb-0 md:mr-[1.125rem]'/>
      <img src={smileTitle} alt="SmileSchool part of SmileSchool logo" />
    </div>
  )
}
