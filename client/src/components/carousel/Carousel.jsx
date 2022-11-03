import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'


export default function Carousel() {



  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center w-full h-full ">
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
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-2 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}  >
                    <div  className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src="https://spoonacular.com/recipeImages/663559-312x231.jpg"
                        alt="alcatraz"
                        className="object-cover object-center w-full"
                      />
                      <div className="absolute flex h-full w-full items-end justify-end pb-5 pr-4">                        
                        <h2  className="opacity-0 bg-gray-800 bg-opacity-30 rounded-md p-1 text-xs leading-4  text-white">
                        5ae49983-5729-11ed-8cf0-893348aefe88
                        </h2>
                      </div>
                    </div>

                  </Slide>

                  <Slide index={1}>
                    
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://spoonacular.com/recipeImages/716408-312x231.jpg"
                          alt="aprende a amar"
                          className="object-cover object-center w-full"
                        />

                        <div className="absolute flex h-full w-full items-end justify-end pb-5 pr-4">
                          <h2 className="opacity-0 rounded-md p-1 text-xs leading-4  text-white">
                          5ae44b61-5729-11ed-8cf0-893348aefe88
                          </h2>
                        </div>



                      </div>
                 
                  </Slide>
                  <Slide index={2}>
                    
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://spoonacular.com/recipeImages/715415-312x231.jpg"
                          alt="el guardian en el Centeno "
                          className="object-cover object-center w-full"
                        />
                        <div className="absolute flex h-full w-full items-end justify-end pb-5 pr-4">
                          <h2 className="opacity-0 rounded-md p-1 text-xs leading-4  text-white">
                          5ae3fd45-5729-11ed-8cf0-893348aefe88
                          </h2>
                        </div>


                      </div>
                    
                  </Slide>
                  <Slide index={3}>
                    
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        {' '}
                        <img
                          src="https://spoonacular.com/recipeImages/715421-312x231.jpg"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="absolute flex h-full w-full items-end justify-end pb-5 pr-4">
                          <h2 className="opacity-0 rounded-md p-1 text-xs leading-4  text-white">
                          5ae47276-5729-11ed-8cf0-893348aefe88
                          </h2>
                        </div>

                      </div>
                    
                  </Slide>
                  <Slide index={4}>
                  
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://spoonacular.com/recipeImages/794538-312x231.jpg"
                          alt="black chair and white table"
                          className="object-cover object-center w-full"
                        />
                        <div className="absolute flex h-full w-full items-end justify-end pb-5 pr-4">
                          <h2 className="opacity-0 rounded-md p-1 text-xs leading-4  text-white">
                          5ae4727b-5729-11ed-8cf0-893348aefe88                          
                          </h2>
                          
                        </div>

                      </div>
                    
                  </Slide>
                  <Slide index={5}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://spoonacular.com/recipeImages/715495-312x231.jpg"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="absolute flex h-full w-full items-end justify-end pb-5 pr-4">
                          <h2 className="opacity-0 rounded-md p-1 text-xs leading-4  text-white">
                          5ae47275-5729-11ed-8cf0-893348aefe88                                                   
                          </h2>
                        </div>


                      </div>
                  </Slide>
                  <Slide index={6}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        {' '}
                        <img
                          src="https://spoonacular.com/recipeImages/661925-312x231.jpg"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="absolute flex h-full w-full items-end justify-end pb-5 pr-4">
                          <h2 className="opacity-0 rounded-md p-1 text-xs leading-4  text-white">
                          5ae4727f-5729-11ed-8cf0-893348aefe88                                              
                          </h2>
                        </div>

                      </div>
                  </Slide>
                  <Slide index={7}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        {' '}
                        <img
                          src="https://spoonacular.com/recipeImages/659135-312x231.jpg"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="absolute flex h-full w-full items-end justify-end pb-5 pr-4">
                          <h2  className="opacity-0 rounded-md p-1 text-xs leading-4  text-white">
                          5ae535c1-5729-11ed-8cf0-893348aefe88                                               
                          </h2>
                        </div>

                      </div>
                  </Slide>
                  <Slide index={8}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        {' '}
                        <img
                          src="https://spoonacular.com/recipeImages/662670-312x231.jpg"
                          alt="black chair and white table"
                          className="object-cover object-center w-full"
                        />
                        <div className="absolute flex h-full w-full items-end justify-end pb-5 pr-4">
                          <h2 className="opacity-0 rounded-md p-1 text-xs leading-4  text-white">
                          5ae49981-5729-11ed-8cf0-893348aefe88                                
                          </h2>
                        </div>

                      </div>
                  </Slide>
                  <Slide index={9}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://spoonacular.com/recipeImages/647875-312x231.jpg"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="absolute flex h-full w-full items-end justify-end pb-5 pr-4">
                          <h2 className="opacity-0 rounded-md p-1 text-xs leading-4  text-white">
                          5ae4998f-5729-11ed-8cf0-893348aefe88                                     
                          </h2>
                        </div>

                      </div>
                  </Slide>
                  <Slide index={10}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://spoonacular.com/recipeImages/715573-312x231.jpg"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="absolute flex h-full w-full items-end justify-end pb-5 pr-4">
                          <h2  className="opacity-0 rounded-md p-1 text-xs leading-4  text-white">
                          5ae4e7a8-5729-11ed-8cf0-893348aefe88</h2>
                        </div>

                      </div>
                  </Slide>
                  <Slide index={11}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://spoonacular.com/recipeImages/715391-312x231.jpg"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="absolute flex h-full w-full items-end justify-end pb-5 pr-4">
                          <h2 className="opacity-0 rounded-md p-1 text-xs leading-4  text-white">
                          5ae50ebe-5729-11ed-8cf0-893348aefe88</h2>
                        </div>

                      </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  )
}