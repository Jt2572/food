import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import background from '../../assets/bg-landing.png'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { useSelector } from 'react-redux'

import ArrowUp from '../arrowUp/arrowUp';
import Header from '../header/Header';
import { getRecipes, searchRecipeId } from '../../features/reducers/recipesActions';
import { useDispatch } from 'react-redux';
import Footer from '../footer/footer';

export default function Landing() {

  const { carouselImages } = useSelector((state) => state.recipes)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecipes())
  }, [dispatch])

  const handleDetails = (e) => {
    dispatch(searchRecipeId(e.target.innerText))
  }

  return (
    <>
      <Header />
      <section >
        <div className=" relative px-28 lg:pb-32  ">
          <img className="absolute inset-0 object-[7%] object-cover w-full h-full sm:object-[25%]" src={`${background}`} alt="background" />
          <div className="  " />
          <div className="  max-w-screen-xl py-32 md:flex md:justify-end  ">
            <div className=" w-80 text-center p-3 lg:flex justify-end sm:text-center bg-white opacity-80 rounded-3xl md:mx-20 sm:mx-16 lg:mx-40">
              <h1 className="  text-6xl font-bgs font-extrabold text-teal-900  sm:text-7xl">
                Welcome
                <br />
                <div className="text-xl font-medium text-veg-600 sm:block p-1 flex flex-col ">
                  to the best place to eat
                </div>
                <strong className="text-4xl font-dancing text-amber-900 sm:block  ">
                  <div className="text-veg-600  sm:inline-block text-center h-7 ">
                    <div className='flex justify-center'>
                      <p className='text-xs absolute font-castle font-light p-2 ' >
                        - RECIPES FOR EVERYBODY -
                      </p>
                    </div>
                    <div className='mt-2 flex justify-center' >
                      <svg version="1.0" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="199.116px" height="16.352px" viewBox="0 0 199.116 16.352" enableBackground="new 0 0 199.116 16.352">
                        <polygon id="XMLID_6840_" fill="#e4d8cb" points="199.116,16.352 0,16.352 6.815,8.176 0,0 199.116,0 192.315,8.176 " />
                      </svg>
                    </div>
                  </div>
                  <div className='p-1.5 text-veg '>
                    Are you hungry ?
                  </div>
                </strong>
                <button onClick={() => navigate('/home')} type="button" className="text-white text-sm bg-gradient-to-r from-amber-400 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-amber-800/70 font-medium rounded-full text-md px-12 py-1.5 text-center mr-2 mb-2">go</button>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className='px-20 text-center h-24 text-xl text-orange-100 flex justify-center font-monserrat items-center bg-orange-600'> Enjoy the best recipes from all around the world</div>

      <div className='p-0 lg:p-8' onClick={(e) => handleDetails(e)}>
        <div className="container mx-auto">
          <div className="flex items-center justify-center w-full h-full ">
            <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={4} step={1} >
              <div className="w-full relative flex items-center justify-center">
                <ButtonBack role="button" aria-label="slide backward" id="prev" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" >
                  <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </ButtonBack>
                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                  <Slider>

                    {(typeof carouselImages[0] === "object") ?
                      <div id="slider" className="h-full flex lg:gap-2 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                        {carouselImages && carouselImages.map((x, i) =>
                          <Slide index={i}  >
                            <Link to={`/details`}>
                              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                <img src={x.image} alt="alcatraz" className="object-cover object-center w-full" />
                                <div className="absolute flex h-full w-full items-end justify-end pb-5 pr-4">
                                  <h2 className="opacity-0 bg-gray-800 bg-opacity-30 rounded-md p-1 text-xs leading-4  text-white">
                                    {x.id}
                                  </h2>
                                </div>
                              </div>
                            </Link>

                          </Slide>
                        )}
                      </div>

                      :
                      <div className="flex items-center justify-center h-[25rem] ">
                        <svg fill='none' class="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
                          <path clip-rule='evenodd' d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z' fill='currentColor' fill-rule='evenodd' />
                        </svg>
                        <div>... Loading Recipes</div>
                      </div>
                    }

                  </Slider>
                </div>
                <ButtonNext role="button" aria-label="slide forward" id="next" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" >
                  <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>

      <Footer />
      <ArrowUp />
    </>
  )
}

