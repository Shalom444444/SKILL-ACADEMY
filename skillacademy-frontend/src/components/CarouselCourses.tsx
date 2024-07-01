import { ScrollArea, ScrollBar } from "./ui/scroll-area"
import CardView from "./CardView"
import { url } from "@/lib/constants"


export function CarouselCourses() {
  return (
    <div className=' flex w-full py-4'>
    {/* <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
    </section> */}
    { <ScrollArea className=" max-w-max flex whitespace-nowrap rounded-md ">
    <div className="flex w-max space-x-4 p-4">
        {url.map((i)=>(
            <CardView url={i.url}/>
        ))}
        <ScrollBar  color="gray" orientation='horizontal'/>
        </div>
    </ScrollArea>}
    </div>
  )
}
