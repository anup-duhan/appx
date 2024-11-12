import React, { useEffect } from 'react';
// import React from 'react'
import mobile from '../assests/images/phone.png';
import apple from '../assests/images/apple.png';
import playstore from '../assests/images/playstore.png';
import TypewriterComponent from './common/TypewriterComponent';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Hero = () => {
    useEffect(() => {
        AOS.init({
          duration: 3000,  // Animation duration in milliseconds
          once: true       // Only animate elements once when they come into view
        });
      }, []);
    return (
        <div className='bg-color' id="home">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-[18px] overflow-hidden'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div data-aos="fade-right">
                    <h1 className=' text-[43px] lg:text-7xl mt-[20px] lg:mt-[50px] font-bold leading-none font-style '> Your journey to better credit</h1>
                    <h2 className='leading-none text-[43px] lg:text-7xl bg-[#fcbf4e;] inline-block px-2 py-2 lg:my-4  my-[20px] font-bold font-style'> <TypewriterComponent words={[' Starts Here', ]} /> </h2>
                    <p className='text-xl font-style'>Think the credit system is stacked against you? So do we. We'll credit the system.<TypewriterComponent words={[' help the credit you deserve.', ]} /> </p>
                    <div className='flex gap-5 py-8 flex-col   lg:justify-start  lg:flex lg:flex-row'>
                    <div className='inline-block'>
                        <a href="https://www.apple.com/in/store?afid=p238%7Cs6Ww8AeKv-dc_mtid_187079nc38483_pcrid_715593096429_pgrid_112258962227_pntwk_g_pchan__pexid__ptid_kwd-12522920_&cid=aos-IN-kwgo-brand--slid---product-" className='flex gap-2 px-4 py-3 hover:bg-orange-500 duration-1000 bg-black text-white justify-center items-center'>
                            <img src={apple} alt="apple" />
                            <p> Available now <span className='block'>
                            App Store </span></p>
                        </a>
                    </div>

                    <div className='inline-block'>
                        <a href="https://play.google.com/store/games?hl=en&pli=1" className='flex gap-2 px-4 py-3 hover:bg-orange-500 duration-1000 bg-black text-white justify-center items-center'>
                            <img src={playstore} alt="apple"  className='w-7'/>
                            <p> Available now <span className='block'>
                            Play Store </span></p>
                        </a>
                    </div>

                 </div>
                </div>
                <div className='flex justify-center items-center py-5'>
                    <img src={mobile} alt="Logo" className='lg:w-[250px] w-[180px]'data-aos="fade-left" />
                </div>
            </div>
        </div>
        
        </div>  
    )
}
export default Hero;


