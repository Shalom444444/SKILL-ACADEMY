/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type SelectChapiterProps={
  chapiters:any[];
  oneChapiter:any;
  setChapiter:(e:any)=>void;
}


export const SelectChapiter = (props:SelectChapiterProps) => {
  return (
    <Select defaultValue={props.chapiters[0].id??""} onValueChange={(e)=>props.setChapiter(e)}>
    <SelectTrigger  className="w-[180px] text-muted-foreground rounded-xl">
      <SelectValue className="text-white" placeholder="Niveau" />
    </SelectTrigger>
    <SelectContent className="rounded-xl">
      <SelectGroup>
        <SelectLabel>Mes chapitres</SelectLabel>
        {props.chapiters.map((c)=>(
          <SelectItem value={c.id}>{c.title}</SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
  )
}
