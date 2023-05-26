import Slider from 'react-slick';
import { ArrowRight } from '../components/ArrowRight';
import { ArrowLeft } from '../components/ArrowLeft';
import fullStar from '../assets/full-star.svg';
import emptyStar from '../assets/empty-star.svg';
import playBtn from '../assets/play.svg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const SliderComponent = ({dataAPI, arrowColor} : any) => {
  const NextArrow = (props : any) => {
    const { onClick } = props;
    return <ArrowRight nextIndex={onClick} color={arrowColor} />;
  }
  
  const PrevArrow = (props : any) => {
    const { onClick } = props;
    return <ArrowLeft previousIndex={onClick} color={arrowColor} />;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          speed: 600,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          speed: 600,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          speed: 600,
        }
      }
    ]
  };
  return (
    <div className='px-2'>
      <Slider {...settings}>
        {
           dataAPI?.map((item : any) => {
              return (
                <div key={item.id} className='video-card_container'>
                  <div className='shadow rounded-md hover:shadow-lg transition-all ease-in duration-100'>
                    <div className='relative'>
                    <LazyLoadImage
                      className='rounded-t-md w-full min-h-[9.5rem]'
                      alt={`${item.videoTitle} video thumbnail`}
                      src={item.video}
                      visibleByDefault={true}
                      width={'100%'}
                      height={'100%'}
                      />
                      <img className='rounded-full shadow-md w-14 h-14 md:w-16 md:h-16 absolute top-[12%] left-[25%] translate-x-2/4 translate-y-2/4' src={playBtn} alt='Play Button' />
                    </div>

                    <div className='video-card_text flex flex-col gap-2'>
                      <h3 className="font-bold text-base text-secondary">{item.videoTitle}</h3>
                      <p className="font-normal text-sm text-secondary opacity-50">{item.videoDescription}</p>
                      <div className='pt-2'>
                        <div className='flex gap-3 items-center pb-[0.875rem]'>
                        <LazyLoadImage
                          className='rounded-full' 
                          alt={`Profile image of ${item.contentCreatorInfo.creatorName}`}
                          src={item.contentCreatorInfo.creatorImg}
                          visibleByDefault={true}
                          width={30}
                          height={30}
                          />
                          <h5 className='font-semibold text-sm text-purple'>{item.contentCreatorInfo.creatorName}</h5>                        
                        </div>
                      <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                          {[...new Array(5)].map((arr: any, index: any) => {
                            return index < item.contentCreatorInfo.fullStars || arr ? <img key={index} src={fullStar} className='w-4 h-4' /> : <img key={index}  src={emptyStar} className='w-4 h-4' />
                          })}
                        </div>  
                        <span className='font-semibold text-sm text-purple'>{`${item.contentCreatorInfo.videoLenght} min`}</span>
                      </div>
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