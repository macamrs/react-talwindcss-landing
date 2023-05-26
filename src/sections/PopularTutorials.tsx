import { useEffect, useState } from 'react';
import { SliderComponent } from "../components/SliderComponent";

export const PopularTutorials = () => {
  const [popularTutorials, setPopularTutorials] = useState([]);
  const [isLoading, setLoading] = useState(true);

  console.log({popularTutorials});
  
  
  useEffect(() => {
    fetch('/popular-videos').then(res => res.json()).then(r => {
      setPopularTutorials(r.data);
      setLoading(false);
    })
  }, [])

  return (
    <section>
      <div className="container mx-auto py-[5.5rem]">
        <h3 className="font-light text-[2rem] leading-10 text-center pb-[4.5rem]">Most <span className="purple-text-highlight">popular</span> tutorials</h3>
        <SliderComponent dataAPI={popularTutorials} arrowColor={'#071629'} isLoading={isLoading} />
      </div>
    </section>
  )
}
