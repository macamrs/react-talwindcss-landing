import { ArrowLeft } from '../components/ArrowLeft';
import { ArrowRight } from '../components/ArrowRight';
import { useEffect, useState } from 'react';
import { Loader } from '../components/Loader';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from "framer-motion";

export const Testimonials = () => {
  const [dataTestimonials, setDataTestimonials] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(1);
  
  // Change testimonial when you click on the prev button
  const previousIndex = () => {
     // If the index is greater than 0, then i can subtract 1
    const condition = currentIndex > 1;
    // Check the index that i want to go once i substract 1. If its 0 then i want to start over
    const nextIndex = condition ? currentIndex - 1 : dataTestimonials.length - 1;
    setCurrentIndex(nextIndex);
  }

  // Change testimonial when you click on the next button
  const nextIndex = () => {
    const condition = currentIndex < dataTestimonials.length;
    const nextIndex = condition ? currentIndex + 1 : 1;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    fetch('/testimonial').then(res => res.json()).then(r => {
      setDataTestimonials(r.data)
      setLoading(false);
    })
  }, [])

  return (
    <section className='bg-purple '>
      <div className='container mx-auto py-[6.75rem] flex px-5'>
      <ArrowLeft color='#FFFFFF' previousIndex={previousIndex} />
      
        {/* slider container */}
        <div className='overflow-hidden w-full min-h-[10rem]'>
          {
            isLoading ? <Loader color='#FFFFFF' />
            :           
            <div className='overflow-hidden max-w-full'>
              <div className={`overflow-hidden transition-all duration-200 ease-in`}>
                {
                  dataTestimonials?.map((testimonial: any) => {
                      if(testimonial.id === currentIndex) {
                        return (
                          <motion.div 
                          key={testimonial.id} 
                          className='flex gap-y-6 md:gap-x-8 flex-col items-center md:flex-row w-full px-16 h-full'
                          initial={{ y : '-5%', opacity: 0}}
                          animate={{ y : 0, opacity: 1}}
                          >
                            <LazyLoadImage
                              className='px-2 w-40 h-40 md:w-[12rem] md:h-[12rem]'
                              alt={`${testimonial.userName} testimonial`} 
                              src={testimonial.img}
                              visibleByDefault={true}
                              />
                          <div className='flex h-full flex-col gap-5'>
                            <p className='text-white font-normal text-[1.15rem] md:text-[1.4rem]'>{testimonial.testimony}</p>
                            <div>
                              <h4 className='text-[1.15rem] md:text-[1.4rem] font-bold text-white'>{testimonial.userName}</h4>
                              <span className='text-[1.15rem] md:text-[1.4rem] font-normal text-white italic'>{testimonial.occupation}</span>                       
                            </div>
                          </div>
                        </motion.div>    
                    )                        
                    }
                })
              }                 
            </div>  
          </div>
          }

        </div>
        <ArrowRight color="#FFFFFF" nextIndex={nextIndex} />
      </div>
    </section>
  )
};
