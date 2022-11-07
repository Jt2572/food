import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { useSelector } from 'react-redux'

export default function Carousel() {

  const { carouselImages } = useSelector((state) => state.recipes)

  return (
    <div className="container mx-auto">

      <div className="flex items-center justify-center w-full h-full ">

        {(typeof carouselImages[0] === "object") ?

          <CarouselProvider
            className="lg:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={12}
            visibleSlides={4}
            step={1}
            isPlaying
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
              >
                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div id="slider" className="h-full flex lg:gap-2 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">

                    {carouselImages && carouselImages.map((x, i) =>

                      <Slide index={i}  >
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img src={x.image} alt="alcatraz" className="object-cover object-center w-full" />
                          <div className="absolute flex h-full w-full items-end justify-end pb-5 pr-4">
                            <h2 className="opacity-0 bg-gray-800 bg-opacity-30 rounded-md p-1 text-xs leading-4  text-white">
                              {x.id}
                            </h2>
                          </div>
                        </div>

                      </Slide>
                    )}

                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                id="next"
              >
                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>

          :

          <div class="flex items-center justify-center w-full h-full">
          <div class="flex justify-center items-center space-x-1 text-sm text-gray-700">
             
                <svg fill='none' class="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
                  <path clip-rule='evenodd'
                    d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                    fill='currentColor' fill-rule='evenodd' />
                </svg>
        
             
            <div>... Loading Recipes</div>
          </div>
        </div>

        }

      </div>
    </div>
  )
}