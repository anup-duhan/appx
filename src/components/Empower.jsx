import React from 'react'
import Right from '../assests/images/empower-right.png';
import { Tick } from './common/Icons';
const Empower = () => {
  return (
    <div className='lg:my-14 my-5' id="about">
    <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-6'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
      <div className=' order-2 lg:order-1 mt-10 lg:mt-0'data-aos="zoom-in">
      <img src={Right} alt="apple" className='w-[450px]' />
      </div>
      <div className='flex flex-col justify-center gap-5 order-1'data-aos="zoom-in">
        <div>
      <h1 className='text-black  text-4xl lg:text-5xl max-w-[476px] font-semibold font-style'> Empower Cash Advance</h1>
      </div>
      <div className='flex gap-5 flex-col'>
      <div class='flex gap-4 '>
        <div className='w-8 h-8 rounded-full bg-[#fcbf4e;] flex justify-center items-center'>
            <Tick/>
        </div>
        <h2 className='text-black text-lg font-semibold font-style'> Receive up to $250 today</h2>
      </div>

      <div class='flex gap-4'>
        <div className='w-8 h-8 rounded-full bg-[#fcbf4e;] flex justify-center items-center'>
           <Tick/>
        </div>
        <h2 className='text-black text-lg font-semibold font-style'> No interest, no late fees.</h2>
      </div>

      <div class='flex gap-4'>
        <div className='w-8 h-8 rounded-full bg-[#fcbf4e;] flex justify-center items-center'>
            <Tick/>
        </div>
        <h2 className='text-black text-lg font-semibold font-style'>Instant delivery</h2>
      </div>
      </div>
      <span>
      <button className="bg-black text-white px-3 py-3 rounded-sm hover:bg-orange-700 hover:text-white duration-1000 button-shadow "> Learn More</button>

      </span>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Empower