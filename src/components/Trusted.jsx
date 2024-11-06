import React from 'react'
import history from '../assests/images/history.png';
const Trusted = () => {
    return (
        <div className='bg-slate-100' id="port">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    <div className='lg:py-10 py-5  order-2'>
                        <img src={history} alt="Logo" className='lg:w-[450px]' />
                    </div>

                    <div className='flex flex-col justify-center gap-5 order-1 lg:order-2 py-10 lg:py-0 md:py-0 '>
                        <h1 className='lg:text-[46px] text-3xl font-semibold text-black leading-[46px] max-w-[471px] font-style'>Used and trusted by
                            a community of millions</h1>
                        <p className='lg:text-xl  text-lg leading-8 max-w-[446px] font-medium font-style'> Lorem ipsum dolor sit amet consectetur adipiscing elit in consequat sollicitudin adipiscing facilisi sit et hendrerit diam</p>
                        <div className='flex flex-col gap-5' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <div className='flex  flex-col justify-center items-center gap-10 lg:flex lg:flex-row lg:justify-start'>
                                <div className=' bg-white card-shadow w-[200px] h-[100px] flex flex-col items-center justify-center'>
                                    <h1 className='text-black  text-center font-bold text-5xl leading-10'>12+</h1>
                                    <p className='text-lg text-black  text-center font-semibold'>Years Experience</p>
                                </div>
                                <div className=' bg-white card-shadow w-[200px] h-[100px] flex flex-col items-center justify-center'>
                                    <h1 className='text-black  text-center font-bold text-5xl leading-10'>90%</h1>
                                    <p className='text-lg text-black  text-center font-semibold'>Commited Users</p>
                                </div>

                            </div>

                            <div className='flex gap-10 flex-col justify-center items-center lg:flex lg:flex-row lg:justify-start'>
                                <div className=' bg-white card-shadow w-[200px] h-[100px] flex flex-col items-center justify-center'>
                                    <h1 className='text-black  text-center font-bold text-5xl leading-10'>10M</h1>
                                    <p className='text-lg text-black  text-center font-semibold'>Active Users</p>
                                </div>
                                <div className=' bg-white card-shadow w-[200px] h-[100px] flex flex-col items-center justify-center'>
                                    <h1 className='text-black  text-center font-bold text-5xl leading-10'>250M</h1>
                                    <p className='text-lg text-black  text-center font-semibold'>Total Transactions</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Trusted