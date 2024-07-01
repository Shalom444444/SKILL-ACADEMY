
import { Card, CardContent } from './ui/card'


export type CardViewProps={
    url:string;
}

const CardView = (props:CardViewProps) => {
  return (
    <Card className="w-full max-w-xs mx-auto border-none rounded-xl bg-black ">
      <CardContent className="p-0">
        <div className=" aspect-card rounded-xl relative">
          <img
            alt="Article"
            className=" w-full h-72 rounded-xl object-cover"
        src={props.url}
          />
          </div>
      </CardContent>
    </Card>
  )
}

export default CardView