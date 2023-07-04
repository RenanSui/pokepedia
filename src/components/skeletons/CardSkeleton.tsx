import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { memo } from 'react'
import { Icon } from '../Icons/Icon'
import { LoadingAnimation } from '../animation/LoadingAnimation'
import { Paragraph } from '../paragraph/Paragraph'

const CardSkeleton = () => {
  return (
    <div className="mt-4 w-[250px]">
      <div className="relative h-[250px] w-[250px] cursor-pointer overflow-hidden rounded-lg bg-[#313338] shadow-xl">
        <LoadingAnimation />
        <div className="absolute bottom-0 left-0 right-0 top-0 backdrop-blur-[32px]" />
      </div>
      <div className="mt-1 flex justify-between">
        <div className="relative cursor-pointer overflow-hidden rounded-md bg-[#313338] px-20 py-3">
          <LoadingAnimation />
        </div>
        <Icon icon={faHeart} />
      </div>
      <div className="mt-1 flex items-center justify-start gap-1">
        <Paragraph
          pill
          className="relative overflow-hidden border-[#313338] bg-[#313338] px-6 py-2"
        >
          <LoadingAnimation />
        </Paragraph>
        <Paragraph
          pill
          className="relative overflow-hidden border-[#313338] bg-[#313338] px-6 py-2"
        >
          <LoadingAnimation />
        </Paragraph>
      </div>
    </div>
  )
}

export default memo(CardSkeleton)
