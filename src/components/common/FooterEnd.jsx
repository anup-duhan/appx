import React from 'react'
import footerlogo from '../../assests/images/footerlogo.png';
const FooterEnd = () => {
    return (
        <>
            <div className='bg-[#262626;] py-10' id="contact">
                <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-6'>
                    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6">
                        <div className=" col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-6 py-10 md:py-0">
                            <img src={footerlogo} alt="footerlogo" className='w-[86px]' />
                            <p className='text-base text-white leading-[19px; max-w-[331px] font-normal'>Lorem ipsum dolor sit amet consectetur adipiscin eli a sit facilisis volutpat interdum non a magna tempus amet velit dolor sit.</p>
                            <span>
                                <button className="bg-white text-black px-3 py-3 rounded-sm hover:bg-orange-700 hover:text-white duration-1000 button-shadow "> Get Started</button>

                            </span>
                        </div>
                        <div className=" col-span-1 py-10 md:py-0">
                            <div className='text-white text-lg flex flex-col gap-5'>
                                <a href="#" className='hover:text-orange-700 duration-500'> About Us</a>
                                <a href="#" className='hover:text-orange-700 duration-500'> Carrrier </a>
                                <a href="#" className='hover:text-orange-700 duration-500'> Quize</a>
                                <a href="#" className='hover:text-orange-700 duration-500'> Support</a>
                            </div>
                        </div>
                        <div className=" text-white text-lg flex flex-col gap-5 col-span-1 py-10 md:py-0">
                            <a href="#" className='hover:text-orange-700 duration-500'> Legal </a>
                            <a href="#" className='hover:text-orange-700 duration-500'> Terms Of Services</a>
                            <a href="#" className='hover:text-orange-700 duration-500'> Privacy</a>
                        </div>
                        <div className=" text-white text-lg flex flex-col gap-5 col-span-1 py-10 md:py-0">
                            <a href="#" className='hover:text-orange-700 duration-500' >Twitter </a>
                            <a href="#" className='hover:text-orange-700 duration-500'> Instagram</a>
                            <a href="#" className='hover:text-orange-700 duration-500'> LinkedIn</a>

                        </div>
                        <div className=" text-white text-lg flex flex-col gap-5 col-span-1 py-10 md:py-0">
                            <a href="#" className='hover:text-orange-700 duration-500'> duhanappx.com</a>
                            <a href="#" className='hover:text-orange-700 duration-500'> 9671444736</a>
                        </div>

                    </div>
                </div>

            </div>
            <div className='bg-black py-5'>
                <h2 className='text-white md:text-xl  text-center text-sm  opacity-50 '>Copyright @ Anup Duhan 2024. All Rights Reserved.</h2>
            </div>
        </>
    )
}

export default FooterEnd