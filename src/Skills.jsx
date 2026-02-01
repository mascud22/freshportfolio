import { BuildingLibraryIcon, CircleStackIcon, DocumentTextIcon, FireIcon, MegaphoneIcon, PlayCircleIcon, SunIcon } from '@heroicons/react/16/solid'
import { DocumentIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Skills = () => {
   const skillsData = [
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    skill: "JavaScript & TypeScript",
    categorie: "Web Development",
    secondLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description: "Javascript is my favourite programming language and I know it well",
  },
  {
    logo: "data:image/png;base64,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",
    skill: "MongoDb & Express",
    categorie: "Web Development",
    secondLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSer5zs_osl8bYfvfcy-2o-n0S8-Q-p_9U-g&s",
    description: "My database is MongoDB I use a lot in my apps",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s",
    skill: "React JS & Next JS",
    categorie: "Web Development",
    secondLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4Gm4ZZkmeriyXZlpU7_sXXHYDt06yt9yLQ&s",
    description: "The only framework I use is React so I enjoy it",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
    skill: "Tailwind & Bootstrap",
    categorie: "Web Development",
    secondLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwOodD9dyO-Js6H5K2dWK10TBEA1pvzoFCQ&s",
    description: "I enjoy building responsive and modern UIs",
  },
];

  return (
    <div className='flex flex-col gap-2 mt-5 border-t-2 border-t-secondary pt-10 w-full sm:px-25 px-4 items-center '>
      <h1 className=' text-text text-3xl sm:text-4xl  w-full font-semibold text-center drop-shadow-[0_4px_58px] drop-shadow-ui-color/40 border-b-2 border-b-ui-color/10 py-4 rounded-xl'>
          Great Idea <span className=' text-text-third '>Cames From, <br className='hidden sm:flex' /> Showcasing <span className='bg-ui-color/50  mx-1 px-3 rounded-2xl text-ui-color-text drop-shadow-[0_4px_38px] drop-shadow-ui-color/20'>Skills</span> In Action.</span>
      </h1>
        {/* <p className='text-text-third w-100 text-center mt-2'>Great Work cames from great skills so here is the best of skills that match your system</p> */}
        <div className=' flex items-center  p-3 flex-col bg-ui-color/ w-full h-fit gap-5 '>
          {/* <div className='flex items-center flex-col justify-center'>
              <h1 className='text-lg text-text font-semibold ml-4 '>  My Main Skills </h1>
              <p className=' text-text-third ml-4 sm:w-100 text-center'>here is my main skills i here is my main skills i  cant lie man this is all man  cant lie man this is all man</p>
          </div> */}
          
          <div className='flex flex-col sm:flex-row items-center gap-3 w-full justify-between '>

            {skillsData.map((skillList,index) => (
                <div className='bg-ui-color/12 drop-shadow-[0_4px_38px] drop-shadow-ui-color/60 border-2 border-ui-color/20 rounded-4xl w-full hover:sm:w-80   sm:w-70 h-fit flex flex-col items-start gap-2 p-4 transition-all ease-in-out cursor-pointer hover:scale-103'>
                <div className='flex items-center justify-between w-full '>
                   <div className='flex items-center gap-2'>
                      <div className='size-10 bg-ui-color rounded-3xl flex items-center justify-center'>
                          <div className='size-10 bg-ui-color rounded-3xl flex items-center justify-center overflow-hidden'>
                              <img className='size-10 object-cover' src={skillList.logo} alt={skillList.skill} />
                          </div>
  
                      </div>

                      <div className='size-7 bg-ui-color rounded-3xl flex items-center justify-center'>
                          <div className='size-7 bg-ui-color rounded-3xl flex items-center justify-center overflow-hidden'>
                              <img className='size-10 object-cover' src={skillList.secondLogo} alt={skillList.skill} />
                          </div>
  
                      </div>
                   </div>
                    <FireIcon className=' text-text size-6 mr-3 transition-all ease-in-out cursor-pointer hover:scale-103'/>
                </div>
                <div className='flex flex-col'>
                    <span className='text-text font-semibold'> {skillList.skill} </span>
                    <span className='text-text-third text-sm'> {skillList.categorie} </span>
                </div>
                <p className='text-text-third w-full line-clamp-2'> {skillList.description} </p>
                <button className='py-2 px-3 bg-ui-color/80 text-ui-color-text rounded-3xl w-full font-semibold transition-all ease-in-out cursor-pointer hover:scale-103'>Look Out</button>
            </div>
            ))}

          </div>
          <div className='bg-ui-color/8 drop-shadow-[0_4px_38px] drop-shadow-ui-color/20 border-2 border-ui-color/15 rounded-4xl w-full hover:sm:w-full    sm:w-full h-fit flex flex-col items-center gap-2 sm:p-10 p-4 transition-all ease-in-out cursor-pointer hover:scale-103 '>
                <MegaphoneIcon className=' text-text size-17'/>
            <div className='flex items-center gap-1.5'>
                <h1 className=' text-text font-semibold text-xl text-center'>Wanna look my other skills</h1>
            </div>
            <p className='text-text-third w-full line-clamp-2 text-center sm:w-130'>I have several skills like <b>Photoshop</b> <b>Illustrator</b> <b>Adobe after Effect</b>  <b>Graphic Design</b>  <b>Motion Design</b> <b>UI/UX Design</b> <b>Web Design</b>    </p>
            <button className='py-2 px-3 bg-ui-color/80 text-ui-color-text rounded-3xl sm:w-110 w-full font-semibold transition-all ease-in-out cursor-pointer hover:scale-103'>Look Out</button>
          </div>
          
        
        </div>

        
        
    </div>
  )
}

export default Skills