import React from 'react'
import bigmobile from '../assests/images/empower-right.png';
const ExternalChecking = () => {
  return (
    <div className='bg-[#14213D;]' id="services">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
          <div className='flex flex-col gap-5 my-20' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <h1 className='lg:text-5xl text-4xl text-white leading-[46px] max-w-[471px] font-style'>External Checking Account</h1>
            <p className='lg:text-lg text-white font-medium  max-w-[446px] leading-8'>Keep your current bank and have your Empower Cash Advance or Empower Thrive funds deposited to your primary bank account.</p>

            <p className='lg:text-lg text-white font-medium  max-w-[446px] leading-8'>Keep your current bank and have your Empower Cash Advance or Empower Thrive funds deposited to your primary bank account.</p>
            <span>
              <button className="bg-white text-black px-3 py-3 rounded-sm hover:bg-orange-700 hover:text-white duration-1000 button-shadow "> Learn More</button>
            </span>
          </div>
          <div className='lg:py-10' data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <img src={bigmobile} alt="Logo" className='lg:w-[450px]' />
          </div>
        </div>

      </div>

    </div>
  )
}

export default ExternalChecking