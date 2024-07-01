import { SVGProps } from 'react';
import { JSX } from 'react/jsx-runtime';
import { Card, CardContent } from './ui/card'
import { NavLink } from 'react-router-dom';
export type CourseCardProps={
    id:number;
    name:string;
    niveau:string;
    url:string;
    status?:string;
    video?:string;
}
const CourseCard = (props:CourseCardProps) => {
  
  return (
    <NavLink to={`/courses/${props.id}`} className={'rounded-xl'}>
    <Card className="w-full border-muted max-w-sm rounded-xl">
      <img
        alt="Course Image"
        className="w-full rounded-t-xl object-cover"
        height={225}
        src={props.url}
        style={{
          aspectRatio: "400/225",
          objectFit: "cover",
        }}
        width={400}
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{props.name}</h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Niveau {" "}
          {props.niveau}
        </p>
        <div className='flex justify-between items-center'>

          <div className="flex items-center mt-4 space-x-1">
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            <span className="text-gray-500 dark:text-gray-400 ml-2 text-sm">4.2</span>
          </div>
          <h3 className='text-muted-foreground font-semibold'>{props.status}</h3>
        </div>
      </CardContent>
    </Card>
    </NavLink>
  )
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export default CourseCard