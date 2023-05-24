import { pros } from '../constants/db';
import { RegisterBtn } from './RegisterBtn';

export const Hero = () => {
  return (
    <div className="hero-bg-image">
      <div className='container mx-auto flex justify-center pt-20 flex-col h-full gap-[6rem]'>
        <div className='flex justify-center items-center flex-col'>
          <h1 className='text-white font-bold text-[7.5rem]'>Get schooled</h1>
          <div className='flex gap-14 pb-10'>
            <span className='hero-tags'>Smiles</span>
            <span className='hero-tags'>Grin</span>
            <span className='hero-tags'>Laugh</span>            
          </div>

          <RegisterBtn />
        </div>

        <div className='flex flex-col gap-[4.5rem]'>
          <h3 className='text-white font-light text-[2rem] text-center'><span className='purple-text-highlight'>Learn</span> from the pros</h3>
          <div className='grid grid-cols-4 w-full gap-7 justify-items-center'>
            { pros.length && pros?.map((pro: any) => {
              return (
              <div key={pro.id} className='pros-container'>
                <img className='rounded-full' src={pro.img} alt={`${pro.name} profile image`} />
                <h4 className='text-lg font-black text-white'>{pro.name}</h4>
                <p className='text-base font-normal text-white'>{pro.award}</p>
                <span className='text-base font-normal text-white'>{pro.year}</span>
              </div>                
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
};