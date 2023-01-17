import React, { useState } from 'react';
import Typed from "react-typed";
import officeBg from '../assests/officeBg.jpg';
import { values } from '../utils/constants';
import { News, Values } from './';

const About = () => {
  const [ currentIndex, setCurrentIndex ] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? values.length -1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === values.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  return (
    <div className='w-full relative'>
        {/* <div className='w-full h-full mt-[-10rem] absolute flex justify-center items-center flex-col top-0 left-0 text-white'>
            <div className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>At DataFest</div>
            <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for
          </p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>        
        </div> */}
        <img className='max-h-[500px] w-full' src={officeBg} alt="/" />  
        <div className='w-full bg-white py-8 px-20'>
        <div>
        <p className='text-lg font-normal'><span className='font-medium'>162</span> roles in <span className='font-medium'>110</span> locations</p>
        <p className='pt-4 pb-4 text-4xl font-bold'>Live and work from anywhere</p>
        <button className='bg-black w-[200px] rounded-md font-medium text-[#00df9a] my-6 mx-auto md:mx-0 py-3 hover:text-black hover:bg-[#00df9a]'>Explore</button>
        <hr />
        </div> 
        <div className='w-[70%] ml-48'>
        <News title='News' heading='Living and working from anywhere' body='We have a new design for living and working anywhere! Red our co-founder and email to our employees round the globe in our  We"ll share more info on the career page soon' />
        <News title='Our mission' heading='create a world where anyone can belong anywhere' body='It is an audacious, incredibly rewarding mission that our increasingly diverse team is dedicated to achieving' nextBody='We are built around the idea that everyone should be able to take the perfect trip, including where they stay, what they do, and what to eat' />        
        </div>       
        </div>
        {
        values.filter(({ id }) => id === currentIndex).map(({ id, head, tag, image}) => (
          <Values  head={head} tag={tag} image={image} nextSlide={nextSlide} prevSlide={prevSlide}/>
        ))
        }        
    </div>
  )
}

export default About