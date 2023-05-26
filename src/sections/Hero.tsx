import { RegisterBtn } from '../components/RegisterBtn';
import LazyLoad from 'react-lazy-load';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [prosData, setProsData] = useState([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/pros').then(res => res.json()).then(r => {
      setProsData(r.data)
      setLoading(false);
    })
  }, [])

  return (
    <section className="hero-bg-image">
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

        <div className='flex flex-col gap-[3rem] md:gap-[4.5rem]'>
          <h3 className='text-white font-light text-[2rem] text-center'><span className='purple-text-highlight'>Learn</span> from the pros</h3>
          <motion.div 
          className='grid grid-cols-2 lg:grid-cols-4 w-full gap-7 justify-items-center'
          initial={{ y : '20%', opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.38, ease: 'easeIn'}}
          >
            { prosData?.map((pro: any) => {
              return (
              <div key={pro.id} className='pros-card'>
                <LazyLoad width={128} height={128}>
                  <img className='rounded-full w-32 h-full md:w-40' src={pro.img} alt={`${pro.name} profile image`} />                  
                </LazyLoad>
                <h4 className='text-base md:text-lg font-black text-white'>{pro.name}</h4>
                <p className='text-sm md:text-base font-normal italic text-white'>{pro.award}</p>
                <span className='text-sm md:text-base font-normal italic text-white'>{pro.year}</span>
              </div>                
              )
            })}
          </motion.div >
        </div>
      </div>
    </section>
  )
};