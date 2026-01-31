import { ChatBubbleOvalLeftEllipsisIcon, EllipsisHorizontalCircleIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Contacts = () => {
  return (
    <div className='flex flex-col border-t-2 border-t-secondary w-full mt-8 pt-3'>
        <h1 className=' text-text text-3xl sm:text-4xl  w-full font-semibold text-center drop-shadow-[0_4px_58px] drop-shadow-ui-color/40 border-b-2 border-b-ui-color/10 py-4 rounded-xl'>
            Every Way You Want, <span className=' text-text-third'><br className='hidden sm:flex' /> <span className='bg-ui-color  mx-1 px-3 rounded-2xl text-ui-color-text drop-shadow-[0_4px_38px] drop-shadow-ui-color/20'>Contact</span> Me in Any Platform.</span>
      </h1>
      <div className='bg-red-300/ w-full h-full p-5  sm:px-20 flex items-center gap-3 flex-col sm:flex-row '>
        <div className='bg-red-200/ p-5 flex-1 w-full h-full rounded-3xl flex flex-col gap-2'>
          <div className='flex  items-center gap-3 mb-8'>
            {/* <img className='size-9 mt-0.5 border-2 border-ui-color/20 p-0.5 rounded-xl' src="/public/Untitled-1 [Recovered].png" alt="" /> */}
            <div className='size-8 bg-secondary rounded-xl'></div>
            <div className='w-1 h-1 bg-invert rounded-3xl'></div>
            <h1 className='text-text font-semibold'>Abshir Dev.</h1>
          </div>

          <div className='flex items-start gap-3 '>
            <div className='size-9 bg-secondary rounded-3xl flex items-center justify-center'>
              <ChatBubbleOvalLeftEllipsisIcon className='size-5 text-text'/>
            </div>
            <div className='flex flex-col'>
              <h1 className='text-text font-semibold'>Chat To Me</h1>
              <p className=' text-text-third'>Is pleasure to me to chat me</p>
              <span className=' text-text-third font-semibold truncate w-50 sm:w-full'>Mascudkacade440@gmail.com</span>
            </div>
          </div>

          <div className='flex items-start gap-3 '>
            <div className='size-9 bg-secondary rounded-3xl flex items-center justify-center'>
              <MapPinIcon className='size-5 text-text'/>
            </div>
            <div className='flex flex-col'>
              <h1 className='text-text font-semibold'>Location</h1>
              <p className=' text-text-third'>Somalia - Mogadisho</p>
              <span className=' text-text-third font-semibold w-50 truncate'>Madina - Dharkeynley - Suuq-Bocle</span>
            </div>
          </div>

          <div className='flex items-start gap-3 '>
            <div className='size-9 bg-secondary rounded-3xl flex items-center justify-center'>
              <PhoneIcon className='size-5 text-text'/>
            </div>
            <div className='flex flex-col'>
              <h1 className='text-text font-semibold'>Call  Me</h1>
              <p className=' text-text-third'>Call me any time you want</p>
              <span className=' text-text-third font-semibold'>0613773919 - 0613695774</span>
            </div>
          </div>

        </div>
        <div className='bg-secondary  border-3 border-third w-full h-fit rounded-3xl flex-2 flex flex-col p-5 '>
          <h1 className=' text-text text-[27px] sm:text-4xl font-semibold'>Got Ideas?  We've got <br /> the skills. Let's team up</h1>
          <p className='text-text-third mt-1'>Tell us more about your project and what you're got in your mind</p>
          <div className='flex flex-col gap-2 mt-6'>
            <div className='flex flex-col gap-1.5'>
              <label className=' font-semibold text-text ml-2' htmlFor="">Your Name</label>
              <input className='bg-third py-3 px-5 rounded-[21px] text-ui-color-text font-semibold' type="text" placeholder='Enter your name' />
            </div>

            <div className='flex flex-col gap-1.5'>
              <label className=' font-semibold text-text ml-2' htmlFor="">Your Email</label>
              <input className='bg-third py-3 px-5 rounded-[21px] text-ui-color-text font-semibold' type="text" placeholder='Enter your email' />
            </div>
          </div>
          <h2 className='text-text font-semibold ml-2 mt-3 text-lg'>How can i help?</h2>
          <p className='text-text-third mt-1 ml-2 sm:w-100'>Tell us more about your project and what you're got in your mind about your project and what you're got in your mind</p>
           <div className='flex items-center gap-2 flex-wrap mb-6 sm:mb-0 mt-2 sm:mt-0'>
             <div className='flex mt-2 items-center gap-3'>
               <label className=' font-normal  text-text ml-2' htmlFor="">Web Design</label>
               <div className='size-6 bg-third rounded-lg'></div>
             </div>
             <div className='flex mt-2 items-center gap-3'>
               <label className=' font-normal  text-text ml-2' htmlFor="">UI/UX Design</label>
               <div className='size-6 bg-third rounded-lg'></div>
             </div>
             <div className='flex mt-2 items-center gap-3'>
               <label className=' font-normal  text-text ml-2' htmlFor="">Backend</label>
               <div className='size-6 bg-third rounded-lg'></div>
             </div>
             <div className='flex mt-2 items-center gap-3'>
               <label className=' font-normal  text-text ml-2' htmlFor="">Frontend</label>
               <div className='size-6 bg-third rounded-lg'></div>
             </div>
             <div className='flex mt-2 items-center gap-3'>
               <label className=' font-normal  text-text ml-2' htmlFor="">Mobile Design</label>
               <div className='size-6 bg-third rounded-lg'></div>
             </div>
           </div>
           <div className='h-full'></div>
            <button className=' drop-shadow-[0_4px_38px] drop-shadow-ui-color/60 bg-ui-color text-ui-color-text rounded-3xl py-3 px-4.5 transition-all ease-in-out hover:scale-101.5 active:scale-99 cursor-pointer font-semibold '>Let's Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Contacts