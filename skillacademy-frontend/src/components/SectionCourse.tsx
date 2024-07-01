/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowRightIcon } from "lucide-react"
type SectionCourseProps = {
  chapiters:any[];
  setTitle:any;
  title:any;
  setVideo:any;
  setContent:any;
  content:any;
}

const SectionCourse = (props:SectionCourseProps) =>{
        return(
            
            <div className='w-full mb-28 px-4 flex gap-4 max-sm:flex-col-reverse'>

            {/* Chapitres */}
            <div className='flex flex-col gap-2 h-full items-center max-sm:w-full w-96 '>
              {props.chapiters.map((c,i)=>(
                <div
                onClick={()=>{
                  props.setTitle(c.title);
                  props.setVideo(c.video);
                  console.log(c.content);
                  props.setContent(c.content);
                }}
                key={i}
                className='h-auto cursor-pointer text-muted-foreground hover:text-white transition-all ease-in-out rounded-xl p-3 flex items-center gap-2 bg-black w-full'>
                <ArrowRightIcon className='text-green-500'/>
                <h1 className='font-semibold'>{i+1} - {c.title}</h1>
              </div>
              ))}
            </div>

             {/* Presentation */}
            <div className='flex flex-col gap-2 w-full  pr-8'>
              {/* Titre du chapitre */}
              <div className='flex justify-between items-center'>
                <h1 className='text-white text-2xl font-bold uppercase'>{props.title}</h1>
              </div>
              <p className='text-muted-foreground ' dangerouslySetInnerHTML={{__html:props.content}}></p>
            </div>

        </div>)
}

export default SectionCourse