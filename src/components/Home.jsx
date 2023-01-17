import React from 'react';
import { Hero, Analytics, Newsletter, Cards } from './';
import Double from "../assests/double.png";
import Single from "../assests/single.png";
import Triple from "../assests/triple.png";

const Home = () => {
  return (
    <div>
    <Hero />
      <Analytics />
      <Newsletter />
      <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <Cards
            Image={Single}
            User='Single User'
            Price='$149'
            Storage='500 GB Storage'
            Grant='1 Granted User'
            Benefit='Send up to 2 GB'
          />
          <Cards
            Image={Double}
            User='Double User'
            Price='$149'
            Storage='500 GB Storage'
            Grant='1 Granted User'
            Benefit='Send up to 2 GB'
            textColor='!text-[#00df9a]'
            MainBtn='!bg-black'
            margin='!md:my-0'
            noMargin='my-8'
            grayBg='bg-gray-100'
            imgBg='bg-transparent'
          />          
          <Cards
            Image={Triple}
            User='Triple User'
            Price='$149'
            Storage='500 GB Storage'
            Grant='1 Granted User'
            Benefit='Send up to 2 GB'
          />
        </div>
      </div>
      </div>
  )
}

export default Home