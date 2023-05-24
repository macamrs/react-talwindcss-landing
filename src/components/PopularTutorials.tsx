import { popularTutorials } from "../constants/db";
import { SliderComponent } from "./SliderComponent";

export const PopularTutorials = () => {
  return (
    <section>
      <div className="container mx-auto py-[5.5rem]">
        <h3 className="font-light text-[2rem] leading-10 text-center pb-[4.5rem]">Most <span className="purple-text-highlight">popular</span> tutorials</h3>
        <div>
          <SliderComponent dataAPI={popularTutorials} arrowColor={'#071629'} />
        </div>
      </div>
    </section>
  )
}
