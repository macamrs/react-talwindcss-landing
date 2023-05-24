import { latestVideos } from "../constants/db";
import { SliderComponent } from "./SliderComponent";

export const LatestVideos = () => {
  return (
    <section>
    <div className="container mx-auto py-[5.5rem]">
      <h3 className="font-light text-[2rem] leading-10 text-center pb-[4.5rem]"><span className="purple-text-highlight">Latest</span> videos</h3>
      <div>
          <SliderComponent dataAPI={latestVideos} arrowColor={'#071629'} />
        </div>
    </div>
  </section>
  )
}
