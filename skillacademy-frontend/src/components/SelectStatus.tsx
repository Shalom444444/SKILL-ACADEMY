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

  type SelectStatusProps={
    status:string;
    setStatus:(e:any)=>void;
  }

const SelectStatus = (props:SelectStatusProps) => {
  return (
    <Select value={props.status} onValueChange={(e)=>props.setStatus(e)}>
      <SelectTrigger  className="w-[180px] text-muted-foreground rounded-xl">
        <SelectValue className="text-white" placeholder="Statut" />
      </SelectTrigger>
      
      <SelectContent className="rounded-xl">
        <SelectGroup>
          <SelectLabel>Statut</SelectLabel>
          <SelectItem value="Gratuit">Gratuit</SelectItem>
          <SelectItem value="Premuim">Premuim</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectStatus