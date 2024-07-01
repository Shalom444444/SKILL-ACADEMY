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

  type SelectTrainingProps={
    training:string;
    setTraining:(e:any)=>void;
    listFormations?:any[];
  }

const SelectTraining = (props:SelectTrainingProps) => {
  return (
    <Select value={props.training} onValueChange={(e)=>props.setTraining(e)}>
        <SelectTrigger  className="w-[180px] text-muted-foreground rounded-xl">
        <SelectValue className="text-white" placeholder="Formations" />
        </SelectTrigger>
        <SelectContent className="rounded-xl">
        <SelectGroup>
            <SelectLabel>Formations</SelectLabel>
            {props.listFormations?.map((f)=>(
            <SelectItem value={f.id||""}>{f.name}</SelectItem>
            ))}
        </SelectGroup>
        </SelectContent>
    </Select>
  )
}

export default SelectTraining