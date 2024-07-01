/* eslint-disable @typescript-eslint/no-explicit-any */
import { Search } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import SelectCategories from "./SelectCategories"
import { SelectLevel } from "./SelectLevel"

type SearchOptionsProps={
  level:string;
  setLevel:(e:any)=>void;
  categorie:string;
  setCategorie:(e:any)=>void;

}
const SearchOptions = (props:SearchOptionsProps) => {
  return (
    <section className="w-full flex px-4 justify-around max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-4">
        <div className="flex relative items-center">
            <Input className="rounded-full text-white" placeholder="rechercher ..."/>
            <Button size={'icon'} className="w-8 h-8 absolute right-1 rounded-full">
                <Search size={16}/>
            </Button>
        </div>
        <div className="flex items-center gap-4">
            <SelectLevel level={props.level} setLevel={props.setLevel}/>
            <SelectCategories/>
        </div>
    </section>
  )
}

export default SearchOptions