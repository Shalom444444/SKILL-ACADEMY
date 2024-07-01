
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const SelectCategories = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] text-muted-foreground rounded-xl">
        <SelectValue placeholder="Categorie" />
      </SelectTrigger>
      <SelectContent className="rounded-xl">
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="Programmation">Programmation</SelectItem>
          <SelectItem value="Reseau">Reseau</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectCategories