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

  type SelectLevelProps={
    level:string;
    defaultValue?:any;
    setLevel:(e:any)=>void;
  }

export const SelectLevel = (props:SelectLevelProps) => {
  return (
    <Select  value={props.level} onValueChange={(e)=>props.setLevel(e)}>
      <SelectTrigger  className="w-[180px] text-muted-foreground rounded-xl">
        <SelectValue className="text-white" placeholder="Niveau" />
      </SelectTrigger>
      <SelectContent className="rounded-xl">
        <SelectGroup>
          <SelectLabel>Niveau</SelectLabel>
          <SelectItem value="all">tout les niveaux</SelectItem>
          <SelectItem value="debutant">debutant</SelectItem>
          <SelectItem value="intermediaire">intermediaire</SelectItem>
          <SelectItem value="expert">expert</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
