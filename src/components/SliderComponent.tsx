import Slider from 'react-slick';
import { ArrowRight } from './ArrowRight';
import { ArrowLeft } from './ArrowLeft';
import fullStar from '../assets/full-star.svg';
import emptyStar from '../assets/empty-star.svg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const SliderComponent = ({dataAPI, arrowColor} : any) => {
  const NextArrow = (props : any) => {
    const { onClick } = props;
    return <ArrowRight nextIndex={onClick} color={arrowColor} />
    ;
  }
  
  const PrevArrow = (props : any) => {
    const { onClick } = props;
    return <ArrowLeft previousIndex={onClick} color={arrowColor} />;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div>
      <Slider {...settings}>
      {
            dataAPI.length && dataAPI?.map((item : any) => {
              return (
                <div key={item.id} className='video-card_container'>
                  <img className='rounded-t-md w-full' src={item.video} alt={`${item.videoTitle} video thumbnail`} />

                  <div className='video-card_text flex flex-col gap-2'>
                    <h3 className="font-bold text-base text-secondary">{item.videoTitle}</h3>
                    <p className="font-normal text-sm text-secondary opacity-50">{item.videoDescription}</p>
                    <div>
                      <div className='flex gap-3 items-center pb-[0.875rem]'>
                        <img className='rounded-full' src={item.contentCreatorInfo.creatorImg} alt={`Profile image of ${item.contentCreatorInfo.creatorName}`} />
                        <h5 className='font-semibold text-sm text-purple'>{item.contentCreatorInfo.creatorName}</h5>                        
                      </div>

                      <div className='flex gap-2 items-center'>
                        {[...new Array(5)].map((arr: any, index: any) => {
                          return index < item.contentCreatorInfo.fullStars ? <img src={fullStar} className='w-4 h-4' /> : <img src={emptyStar} className='w-4 h-4' />
                        })}
                      </div>
                    </div>                    
                  </div>

                </div>                
              )
            })
          }
      </Slider>
    </div>
  );
}