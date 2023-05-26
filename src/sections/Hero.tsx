import { RegisterBtn } from '../components/RegisterBtn';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [prosData, setProsData] = useState([]);

  useEffect(() => {
    fetch('/pros').then(res => res.json()).then(r => {
      setProsData(r.data)
    })
  }, [])

  return (
    <section className="hero-bg-image relative">
      <div className='container mx-auto flex justify-evenly gap-[4.5rem] md:gap-[3rem] lg:gap-0 py-32 md:pb-12 lg:pb-0 md:pt-20  flex-col px-2 h-full'>
        <div className='flex justify-center items-center flex-col'>
          <h1 className='text-white pb-6 md:pb-1 font-bold text-[3rem] md:text-[6rem] lg:text-[7.5rem]'>Get schooled</h1>
          <div className='flex gap-14 pb-10'>
            <span className='hero-tags'>Smiles</span>
            <span className='hero-tags'>Grin</span>
            <span className='hero-tags'>Laugh</span>            
          </div>

          <RegisterBtn />
        </div>

        <div className='flex flex-col gap-[3rem] md:gap-[4.5rem] min-h-[24rem] z-10'>
          <h3 className='text-white font-light text-[2rem] text-center'><span className='purple-text-highlight'>Learn</span> from the pros</h3>
          <motion.div 
          className='grid grid-cols-2 lg:grid-cols-4 w-full gap-7 justify-items-center'
          initial={{ y : '22%', opacity: 0}}
          animate={{ y : 0, opacity: 1}}
          transition={{duration: 0.9, ease: 'easeIn'}}
          >
            { prosData?.map((pro: any) => {
              return (
              <div key={pro.id} className='pros-card'>
                <LazyLoadImage
                  className='rounded-full w-32 h-full md:w-40'
                  alt={`${pro.name} profile image`} 
                  src={pro.img}
                  width={128} 
                  height={128}
                  visibleByDefault={true}
                  />
                <h4 className='text-base md:text-lg font-black text-white'>{pro.name}</h4>
                <p className='text-sm md:text-base font-normal italic text-white'>{pro.award}</p>
                <span className='text-sm md:text-base font-normal italic text-white'>{pro.year}</span>
              </div>                
              )
            })}
          </motion.div >
        </div>
      </div>
      <div className='bg-gradient-to-b from-transparent to-[#071629] h-2/4 w-full absolute bottom-0'></div>
    </section>
  )
};