import { SliderComponent } from "../components/SliderComponent";
import { useEffect, useState } from 'react';

export const LatestVideos = () => {
  const [latestVideos, setLatestVideos] = useState([]);
  const [isLoading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch('/latest-videos').then(res => res.json()).then(r => {
      setLatestVideos(r.data)
      setLoading(false);
    })
  }, [])

  return (
    <section>
    <div className="container mx-auto py-[5.5rem]">
      <h3 className="font-light text-[2rem] leading-10 text-center pb-[4.5rem]"><span className="purple-text-highlight">Latest</span> videos</h3>
      <SliderComponent dataAPI={latestVideos} arrowColor={'#071629'} isLoading={isLoading} />
    </div>
  </section>
  )
}
