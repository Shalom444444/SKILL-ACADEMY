/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'
import { CourseCardProps } from './CourseCard';


const HeroVideo = (props:CourseCardProps) => {
    const ref = useRef(null)
    useEffect(()=>{
      if(ref){
        console.log(ref.current)
        const Player = ref.current
        console.log(Player)
      }
    },[ref])
  return (
    <section  className='h-[36rem] w-full flex flex-col p-4 m-auto rounded-xl'>
        {/* Video courses */}
        <div className='w-full mb-4  h-full flex items-center flex-col rounded-2xl gap-4 justify-center'>
            {props.video&&<ReactPlayer ref={ref} url={props.video}  controls height={"100%"} width={"100%"}/>}
        </div>

        {/* Titre */}
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-white text-3xl font-bold uppercase'>{props.name}</h1>
          <div className='w-auto p-2 h-10 rounded-full border border-green-500 bg-green-500/40 justify-center items-center flex text-white'>{props.niveau}</div>
        </div>
        

    </section>
  )
}

export default HeroVideo