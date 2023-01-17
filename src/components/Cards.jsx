import React from "react";

const Cards = ({
  MainBtn,
  textColor,
  margin,
  noMargin,
  grayBg,
  imgBg,
  User,
  Image,
  Price,
  Storage,
  Grant,
  Benefit,
}) => {
  return (
    <div
      className={`${margin} ${grayBg} ${noMargin} w-full shadow-xl my-4 flex flex-col p-4 rounded-lg hover:scale-105 duration-399`}
      id='about'
    >
      <img
        className={` w-20 mx-auto mt-[-3rem] ${imgBg} `}
        src={Image}
        alt='/'
      />
      <h2 className='text-2xl font-bold text-center py-8'>{User}</h2>
      <p className='text-center text-4xl font-bold'>{Price}</p>
      <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 mt-8'>{Storage}</p>
        <p className='py-2 border-b mx-8'>{Grant}</p>
        <p className='py-2 border-b mx-8'>{Benefit}</p>
      </div>
      <button
        className={`bg-[#00df9a] text-black ${MainBtn} ${textColor} w-[200px] rounded-md font-medium  mx-auto my-6 py-3 px-6`}
      >
        Start Trial
      </button>
    </div>
  );
};

export default Cards;
