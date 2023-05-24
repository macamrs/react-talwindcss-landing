import { testimonial } from '../constants/db';
import { ArrowLeft } from './ArrowLeft';
import { ArrowRight } from './ArrowRight';
import { useState } from 'react';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  
  const previousIndex = () => {
     // If the index is greater than 0, then i can subtract 1
    const condition = currentIndex > 1;
    // Check the index that i want to go once i substract 1. If its 0 then i want to start over
    const nextIndex = condition ? currentIndex - 1 : testimonial.length - 1;
    setCurrentIndex(nextIndex);
  }

  const nextIndex = () => {
    const condition = currentIndex < testimonial.length;
    const nextIndex = condition ? currentIndex + 1 : 1;
    setCurrentIndex(nextIndex);
  }

  return (
    <section className='bg-purple '>
      <div className='container mx-auto py-[6.75rem] flex'>
      <ArrowLeft color='#FFFFFF' previousIndex={previousIndex} />

        {/* slider container */}
        <div className='overflow-hidden w-full'>
          <div className='overflow-hidden max-w-full'>
            <div className={`overflow-hidden translate-x-[${-currentIndex * 100}%]`}>
              {
                testimonial.length && testimonial?.map((testimonial: any) => {
                    if(testimonial.id === currentIndex) {
                      return (
                        <div key={testimonial.id} className='flex w-full px-16 h-full'>
                          <img src={testimonial.img} alt={`${testimonial.userName} testimonial`} className='px-14' />
                          <div className='flex h-full flex-col gap-5'>
                            <p className='text-white font-normal text-[1.4rem]'>{testimonial.testimony}</p>

                            <div>
                              <h4 className='text-[1.4rem] font-bold text-white'>{testimonial.userName}</h4>
                              <span className='text-[1.4rem] font-normal text-white italic'>{testimonial.occupation}</span>                       
                            </div>
                          </div>
                        </div>    
                    )                        
                    }
                })
              }                 
            </div>
          
          </div>
         
        </div>
        <ArrowRight color="#FFFFFF" nextIndex={nextIndex} />
      </div>
    </section>
  )
};
