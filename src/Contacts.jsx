import { ChatBubbleOvalLeftEllipsisIcon, CubeIcon, EllipsisHorizontalCircleIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/16/solid'
import { FilmIcon, FireIcon } from '@heroicons/react/20/solid'
import { BoltIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Contacts = () => {
  return (
    <div className='flex flex-col border-t-2 border-t-secondary w-full mt-8 pt-3'>
        <h1 className=' text-text text-3xl sm:text-4xl  w-full font-semibold text-center drop-shadow-[0_4px_58px] drop-shadow-ui-color/40 border-b-2 border-b-ui-color/10 py-4 rounded-xl'>
            Every Way You Want, <span className=' text-text-third'><br className='hidden sm:flex' /> <span className='bg-ui-color  mx-1 px-3 rounded-2xl text-ui-color-text drop-shadow-[0_4px_38px] drop-shadow-ui-color/20'>Contact</span> Me in Any Platform.</span>
      </h1>
      <div className='bg-red-300/ w-full h-full p-5  sm:px-20 flex items-start  gap-5 flex-col sm:flex-row '>
        <div className='flex-1 w-full h-full rounded-3xl flex flex-col gap-5 sm:mt-3 p-6 
            border/ border-ui-color/  bg-red-200/'>

              {/* HEADER */}
              <div className='flex items-center gap-3'>
                <div className='size-10 bg-secondary rounded-xl'></div>
                <div>
                  <h1 className='text-text font-semibold text-lg'>Abshir Dev.</h1>
                  <p className='text-text-third text-sm sm:w-full w-50 '>
                    Frontend Developer • Web Designer • React Specialist
                  </p>
                </div>
              </div>

              {/* AVAILABILITY */}
              <div className='bg-green-500/10 text-green-400 text-xs px-4 py-2 font-semibold rounded-full w-fit'>
                ● Available for freelance work
              </div>

              {/* EMAIL */}
              <div className='flex items-start gap-3'>
                <div className='size-9 bg-secondary rounded-3xl flex items-center justify-center'>
                  <ChatBubbleOvalLeftEllipsisIcon className='size-5 text-text'/>
                </div>
                <div className='flex flex-col'>
                  <h1 className='text-text font-semibold'>Chat With Me</h1>
                  <p className='text-text-third text-sm 0'>I’d love to discuss your project</p>
                  <span className='text-text-third font-semibold truncate sm:w-full w-40'>
                    Mascudkacade440@gmail.com
                  </span>
                </div>
              </div>

              {/* LOCATION */}
              <div className='flex items-start gap-3'>
                <div className='size-9 bg-secondary rounded-3xl flex items-center justify-center'>
                  <MapPinIcon className='size-5 text-text'/>
                </div>
                <div className='flex flex-col'>
                  <h1 className='text-text font-semibold'>Location</h1>
                  <p className='text-text-third text-sm'>Mogadishu, Somalia</p>
                  <span className='text-text-third font-semibold truncate  sm:w-full w-40'>
                    Madina • Dharkeynley • Suuq-Bocle
                  </span>
                </div>
              </div>

              {/* PHONE */}
              <div className='flex items-start gap-3'>
                <div className='size-9 bg-secondary rounded-3xl flex items-center justify-center'>
                  <PhoneIcon className='size-5 text-text'/>
                </div>
                <div className='flex flex-col'>
                  <h1 className='text-text font-semibold'>Call Me</h1>
                  <p className='text-text-third text-sm'>Available anytime</p>
                  <span className='text-text-third font-semibold'>
                    0613773919 • 0613695774
                  </span>
                </div>
              </div>

              {/* SOCIAL LINKS */}
             <div className='flex gap-4 pt-2 ml-2'>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://sf-static.tiktokcdn.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png" 
                    alt="TikTok" 
                    className='w-5 h-5 hover:w-6 hover:h-6 transition-all cursor-pointer' 
                  />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" 
                    alt="Instagram" 
                    className='w-5 h-5 hover:w-6 hover:h-6 transition-all cursor-pointer' 
                  />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" 
                    alt="Facebook" 
                    className='w-5 h-5 hover:w-6 hover:h-6 transition-all cursor-pointer' 
                  />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                    alt="LinkedIn" 
                    className='w-5 h-5 hover:w-6 hover:h-6 transition-all cursor-pointer' 
                  />
                </a>
              </div>


              {/* RESPONSE TIME */}
              <p className='text-text-third text-xs ml-2'>
                Usually responds within 1–3 hours
              </p>

              {/* CTA BUTTON */}
              <button className='sm:mt-7 mt-1 drop-shadow-[0_4px_38px] drop-shadow-ui-color/60 bg-ui-color text-ui-color-text rounded-3xl py-3 px-4 transition-all hover:scale-105 active:scale-95 font-semibold '>
              Let’s Work Together 🚀
            </button>

            </div>

        <div className='bg-secondary border-2 border-third w-full h-fit rounded-3xl flex-2 flex flex-col p-6 '>

              {/* Heading */}
              <h1 className='text-text text-[27px] sm:text-4xl font-semibold leading-snug'>
                Got Ideas? We’ve got the skills. <br /> Let’s team up
              </h1>

              <p className='text-text-third mt-2 text-sm sm:text-base'>
                Tell me about your project and what you have in mind. I’ll guide you through the process.
              </p>

              {/* NAME + EMAIL */}
              <div className='flex flex-col gap-3 mt-6'>
                <div className='flex flex-col gap-1.5'>
                  <label className='font-semibold text-text ml-2'>Your Name</label>
                  <input
                    className='bg-third py-3 px-5 rounded-[21px] text-text font-semibold focus:outline-none focus:ring-2 focus:ring-ui-color/10 transition-all'
                    type="text"
                    placeholder='Enter your name'
                  />
                </div>

                <div className='flex flex-col gap-1.5'>
                  <label className='font-semibold text-text ml-2'>Your Email</label>
                  <input
                    className='bg-third py-3 px-5 rounded-[21px] text-text font-semibold focus:outline-none focus:ring-2 focus:ring-ui-color/10 transition-all'
                    type="email"
                    placeholder='Enter your email'
                  />
                </div>
              </div>

              {/* PROJECT DETAILS */}
              <div className='flex flex-col gap-1.5 mt-4'>
                <label className='font-semibold text-text ml-2'>Project Details</label>
                <textarea
                  className='bg-third py-4 px-5 rounded-[21px] text-text font-semibold resize-none h-32 focus:outline-none focus:ring-2 focus:ring-ui-color/10 transition-all placeholder:text-text-third'
                  placeholder='Describe your project idea...'
                />
              </div>

              {/* BUTTON */}
              <button className='mt-6 drop-shadow-[0_4px_38px] drop-shadow-ui-color/60 bg-ui-color text-ui-color-text rounded-3xl py-3 px-4 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95'>
                Send Project Request 🚀
              </button>

              {/* TRUST NOTE */}
              <p className='text-text-third text-xs text-center mt-2'>
                I usually reply within a few hours. Your information stays private.
              </p>

              {/* Optional small improvement: subtle gradient overlay */}
              {/* <div className='absolute inset-0 rounded-3xl bg-gradient-to-b from-ui-color/5 to-ui-color/10 pointer-events-none'></div> */}

            </div>


      </div>
    </div>
  )
}

export default Contacts