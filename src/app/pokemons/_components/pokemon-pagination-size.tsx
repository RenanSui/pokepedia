import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useConfigPaginationSize } from '@/hooks/use-pokemon-atom'
import { cn } from '@/lib/utils'

export function PokemonPaginationSize({
  pageSizeOptions = [10, 20, 30, 40, 50],
  className,
}: {
  pageSizeOptions?: number[]
  className?: string
}) {
  const [configSize, setConfigSize] = useConfigPaginationSize()

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <p className="whitespace-nowrap text-sm font-medium">Pokemons per page</p>
      <Select
        value={`${configSize}`}
        onValueChange={(value) => {
          setConfigSize(Number(value))
        }}
      >
        <SelectTrigger className="h-8 w-[70px]">
          <SelectValue placeholder={configSize} />
        </SelectTrigger>
        <SelectContent side="top">
          {pageSizeOptions.map((pageSize) => (
            <SelectItem key={pageSize} value={`${pageSize}`}>
              {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
