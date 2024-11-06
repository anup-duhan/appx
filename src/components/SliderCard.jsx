import React from 'react'
import youtube from '../assests/images/Union.png';
import vector from '../assests/images/Vector (1).png';
import third from '../assests/images/Vector (2).png';
import fourth from '../assests/images/Vector (3).png';
const SliderCard = () => {
    return (
        <div className=' bg-black '>
       <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-6 py-10'>
                <div class="overflow-hidden">
                  <div class="running-cards flex gap-4 justify-center items-center">
                    
                    <div class="min-w-[300px]">
                    <img src={youtube} alt="apple" className='w-[100px]' />
                    </div>
            
                    
                    <div class="min-w-[300px]">
                    <img src={vector} alt="apple" className='w-[100px]'/>
                    </div>
            
                    
                    <div class="min-w-[300px]">
                    <img src={third} alt="apple" className='w-[100px]'/>
                    </div>
            
                    
                    <div class="min-w-[300px]">
                    <img src={youtube} alt="apple" className='w-[100px]'/>
                    </div>
            
                    
                    <div class="min-w-[300px]">
                    <img src={third} alt="apple" className='w-[100px]'/>
                    </div>
            
                    
                    <div class="min-w-[300px]">
                    <img src={fourth} alt="apple" className='w-[100px]' />
                    </div>
            
                
                    <div class="min-w-[300px]">
                    <img src={youtube} alt="apple" className='w-[100px]'/>
                    </div>
            
            
                    <div class="min-w-[300px]">
                    <img src={youtube} alt="apple" className='w-[100px]'/>
                    </div>
            
                    
                    
                    <div class="min-w-[300px]">
                    <img src={fourth} alt="apple" className='w-[100px]' />
                    </div>
            
                    
                    <div class="min-w-[300px]">
                    <img src={youtube} alt="apple" className='w-[100px]'/>
                    </div>

                    <div class="min-w-[300px]">
                    <img src={third} alt="apple" className='w-[100px]'/>
                      </div>

                      <div class="min-w-[300px]">
                      <img src={youtube} alt="apple" className='w-[100px]'/>
                      </div>
                      <div class="min-w-[300px]">
                      <img src={vector} alt="apple" className='w-[100px]' />
                      </div>
                  </div>
                </div>
              </div>
        </div>
    )
}

export default SliderCard