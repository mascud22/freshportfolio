import { BuildingLibraryIcon, CircleStackIcon, DocumentTextIcon, FireIcon, MegaphoneIcon, PlayCircleIcon, SunIcon } from '@heroicons/react/16/solid'
import { DocumentIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Skills = () => {
    const skillsData = [
    {
      logo: "",
      skill: "JavaScript & TypeScript",
      categorie: "Web Development",
      description:
        "Javascript is my favourite programing langueage and i know well",
    },
    {
      logo: "",
      skill: "MongoDb & Express",
      categorie: "Web Development",
      description:
        "My datbase is mongodb i use alot in my apps",
    },
    {
      logo: "",
      skill: "React JS & Next JS",
      categorie: "Web Development",
      description:
        "The only framwork i use is react so i enjoy this is not good for sure",
    },
    {
      logo: "",
      skill: "Tailwind & Bootstarp",
      categorie: "Web Development",
      description:
        "The only framwork i use is react so i enjoy very well and i liked ",
    },
  ];
    const otherSkills = [
    {
      logo: "",
      skill: "JavaScript",
      categorie: "Web Development",
      description:
        "Javascript is my favourite programing langueage and i know well",
     
    },
    {
      logo: "",
      skill: "MongoDb",
      categorie: "Web Development",
      description:
        "My datbase is mongodb i use alot in my apps so enjoy this content of mongodb",
    },
    {
      logo: "",
      skill: "React JS",
      categorie: "Web Development",
      description:
        "The only framwork i use is react so i enjoy this is not good for sure",
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
                    <div className='size-10 bg-ui-color rounded-3xl flex items-center justify-center'>
                        <button className={`  font-semibold text-invert-text bg-invert rounded-3xl text-sm ${index +1 > 1 ? "py-1 px-2.5" : "py-1 px-3"}`}>{index+1}</button>
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