import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useConfigNameAtom, useConfigTypesAtom } from '@/hooks/use-pokemon-atom'

export default function PokemonViewOptions() {
  const [configName, setConfigName] = useConfigNameAtom()
  const [configTypes, setConfigTypes] = useConfigTypesAtom()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Toggle columns"
          variant="outline"
          size="sm"
          className="flex h-8 w-fit"
        >
          <Icons.options className="mr-2 h-4 w-4" />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Toggle Infos</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={configName}
          onClick={() => setConfigName(!configName)}
        >
          Name
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={configTypes}
          onClick={() => setConfigTypes(!configTypes)}
        >
          Types
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
