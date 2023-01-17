import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shouldUseOpaqueHeader, setShouldUseOpaqueHeader] = useState(false);
    const router = useLocation();

  const checkForHeaderBG = () => {
    setShouldUseOpaqueHeader(
      typeof window !== "undefined" && window.pageYOffset !== 0
    );
  };
  console.log(router.pathname)

  useEffect(() => {    
    setShouldUseOpaqueHeader(router.pathname !== "/");
    if (router.pathname === "/") {
      checkForHeaderBG();
      window.addEventListener("scroll", checkForHeaderBG);
    }
    return () => window.removeEventListener("scroll", checkForHeaderBG);
  }, [router.pathname]);

    const handleNav = () => {
        setNav(!nav);
    }

  return (    
    <div className='flex justify-between z-20 items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>DATAFEST.</h1>
        <ul className='hidden z-20 md:flex'>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'><Link to='/'>Home</Link></li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Company</li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Resources</li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'><Link to='/about'>About</Link></li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Contact</li>
        </ul>
    
    <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}        
    </div>
    <div className={nav ? 'fixed md:hidden z-20 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>DATAFEST.</h1>
         <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]'>Home</li>
            <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]'>Company</li>
            <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]'>Resources</li>
            <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]' id='about'>About</li>
            <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]'>Contact</li>
        </ul> 
    </div>
    </div>
    
  )
}

export default Navbar