import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function SelectPlaceholder() {
  return (
    <Select disabled={true}>
      <SelectTrigger className="rounded-xl h-12 max-md:h-9 max-md:text-[10px]">
        <SelectValue placeholder="Carregando..." />
      </SelectTrigger>

      <SelectContent>
      </SelectContent>
    </Select>
  );
}
