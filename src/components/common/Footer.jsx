import React from 'react'
import apple from '../../assests/images/apple.png';
import playstore from '../../assests/images/playstore.png';
const Footer = () => {
    return (
        <div className='bg-[#fcbf4e]'>
            <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-6'>
                <div className='flex justify-center items-center flex-col gap-7 py-14'>
                    <h1 className="max-w-full md:max-w-[657px] text-4xl sm:text-3xl md:text-4xl lg:text-7xl font-bold lg:leading-[72px] leading-tight px-4 sm:px-6 lg:px-0 text-center">
                        Download AppX <span>to get started</span>
                    </h1>
                    <div className='flex gap-5 flex-col sm:flex sm:flex-row'>
                        <div className='inline-block'>
                            <a href="https://www.apple.com/in/store?afid=p238%7Cs6Ww8AeKv-dc_mtid_187079nc38483_pcrid_715593096429_pgrid_112258962227_pntwk_g_pchan__pexid__ptid_kwd-12522920_&cid=aos-IN-kwgo-brand--slid---product-" className='flex gap-2 px-4 py-3 hover:bg-orange-500 duration-1000 bg-black text-white justify-center items-center'>
                                <img src={apple} alt="apple" />
                                <p> Available now <span className='block'>
                                    App Store </span></p>
                            </a>
                        </div>
                        <div className='inline-block'>
                            <a href="https://play.google.com/store/games?hl=en&pli=1" className='flex gap-2 px-4 py-3 hover:bg-orange-500 duration-1000 bg-black text-white justify-center items-center'>
                                <img src={playstore} alt="apple" className='w-7' />
                                <p> Available now <span className='block'>
                                    Play Store </span></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default Footer