import React from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

const Values = ({ head, tag, image, prevSlide, nextSlide }) => {
  return (
    <div className='px-9 py-20 bg-white text-[#222]'>
        <h3 className='font-bold uppercase text-xs'>our values</h3>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 py-4'>            
            <div className='flex'>
                {/* <h2 className='pr-5 text-xl font-bold'>01</h2> */}
                <div>
                 <h2 className='font-bold text-[56px] leading-snug'>{head}</h2><br />
                <p className='text-lg'>{tag}</p>   
                </div>                
            </div>
            <div className='pl-6 mt-4'>
                <img className='px-10 mt-6' src={image} alt="company" />
            </div>
        </div>
        <div className='flex pt-8 gap-x-6'>
      <AiOutlineArrowLeft onClick={prevSlide} size={25} className='cursor-pointer'/>
      <AiOutlineArrowRight onClick={nextSlide} size={25} className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default Values