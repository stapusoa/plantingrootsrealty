import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { Search } from "lucide-react"

type Props = {
  query: string
  onChange: (value: string) => void
  onSubmit: (e: React.FormEvent) => void
}

export function SearchBar({ query, onChange, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search by title, location, or description..."
          value={query}
          onChange={(e) => onChange(e.target.value)}
          className="pl-10"
        />
      </div>
      <Button type="submit">Search</Button>
    </form>
  )
}