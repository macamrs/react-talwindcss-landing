import { popularTutorials } from "../constants/db";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import fullStar from '../assets/full-star.svg';
import emptyStar from '../assets/empty-star.svg'
import { useState } from "react";

export const PopularTutorials = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <section>
      <div className="container mx-auto py-[5.5rem]">
        <h3 className="font-light text-[2rem] leading-10 text-center">Most <span className="purple-text-highlight">popular</span> tutorials</h3>
        <ArrowLeft color="#071629" />
        <div>
          {
            popularTutorials.length && popularTutorials?.map((tutorial : any) => {
              return (
                <div key={tutorial.id}>
                  <img src={tutorial.video} alt={`${tutorial.videoTitle} video thumbnail`} />
                  <h3 className="font-bold text-base text-secondary">{tutorial.videoTitle}</h3>
                  <p className="font-normal text-sm text-secondary opacity-50">{tutorial.videoDescription}</p>
                  <div>
                    <img src={tutorial.contentCreatorInfo.creatorImg} alt="" />
                    <h5>{tutorial.contentCreatorInfo.creatorName}</h5>
                    <div>
                      {[...new Array(5)].map((arr: any, index: any) => {
                        return index < tutorial.contentCreatorInfo.fullStars ? <img src={fullStar} /> : <img src={emptyStar} />
                      })}
                    </div>
                  </div>
                </div>                
              )
            })
          }
        </div>
        <ArrowRight color="#071629" />
      </div>
    </section>
  )
}
