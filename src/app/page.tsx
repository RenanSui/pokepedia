'use client'
import Providers from '@/Redux/Provider'
import { BackgroundCircles } from '@/features/Background/BackgroundCircles'
import { BlurBackground } from '@/features/Background/BlurBackground'
import { MouseTracker } from '@/features/MouseTracker/MouseTracker'

import Header from '@/layouts/header'
import Main from '@/layouts/main'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const Home = () => {
  return (
    <>
      <Providers>
        <BlurBackground />
        <BackgroundCircles />
        <MouseTracker />
        <QueryClientProvider client={queryClient}>
          <Header />
          <Main />
        </QueryClientProvider>
      </Providers>
    </>
  )
}

// 260x225

export default Home

// bg-[#1F2628] bg color
// border-[#42443A] yellow
// border-[#304358] blue
