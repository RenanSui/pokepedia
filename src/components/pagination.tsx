import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This makes the scrolling smooth
    })
  }

  return (
    <div className="flex items-center">
      <p className="mr-8 font-semibold">
        Page {currentPage + 1} of {totalPages}
      </p>
      <div className="space-x-1">
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            scrollToTop()
            onPageChange(0)
          }}
          disabled={currentPage === 0}
        >
          {<Icons.doubleArrowLeftIcon />}
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            scrollToTop()
            onPageChange(currentPage - 1)
          }}
          disabled={currentPage === 0}
        >
          {<Icons.chevronLeft />}
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            scrollToTop()
            onPageChange(currentPage + 1)
          }}
          disabled={currentPage === totalPages - 1}
        >
          {<Icons.chevronRight />}
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            scrollToTop()
            onPageChange(totalPages)
          }}
          disabled={currentPage === totalPages - 1}
        >
          {<Icons.doubleArrowRightIcon />}
        </Button>
      </div>
    </div>
  )
}
