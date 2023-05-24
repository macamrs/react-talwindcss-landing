import { latestVideos } from "../constants/db";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import fullStar from '../assets/full-star.svg';
import emptyStar from '../assets/empty-star.svg';
import { useState } from "react";

export const LatestVideos = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <section>
    <div className="container mx-auto py-[5.5rem]">
      <h3 className="font-light text-[2rem] leading-10 text-center	"><span className="purple-text-highlight">Latest</span> videos</h3>
      <ArrowLeft color="#071629" />
      <div>
        {        
          latestVideos.length && latestVideos?.map((video: any) => {
            return (
              <div key={video.id}>
                <img src={video.video} alt="" />
                <h3>{video.videoTitle}</h3>
                <p>{video.videoDescription}</p>
                <div>
                  <img src={video.contentCreatorInfo.creatorImg} alt="" />
                  <h5>{video.contentCreatorInfo.creatorName}</h5>
                  <div>
                      {[...new Array(5)].map((arr: any, index: any) => {
                        return index < video.contentCreatorInfo.fullStars ? <img src={fullStar} /> : <img src={emptyStar} />
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
