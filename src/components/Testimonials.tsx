import { testimonial } from '../constants/db';

export const Testimonials = () => {
  return (
    <section>
      <div className='container mx-auto'>
        {
          testimonial.length && testimonial?.map((testimonial: any) => {
            return (
                <div key={testimonial.id}>
                  <img src={testimonial.img} alt={`${testimonial.userName} testimonial`} />
                  <p>{testimonial.testimony}</p>
                  <h4>{testimonial.userName}</h4>
                  <span>{testimonial.occupation}</span>
                </div>    
            )
          })
        }
      </div>
    </section>
  )
}
