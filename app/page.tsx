'use client';
import { BackgroundCircles, BlurBackground } from '@/src/features/Background';
import { MouseTracker } from '@/src/features/MouseTracker';
import Header from '@/src/layouts/header';
import Main from '@/src/layouts/main';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const Home = () => {
	return (
		<>
			<BlurBackground />
			<BackgroundCircles />
			<MouseTracker />
			<Header />
			<QueryClientProvider client={queryClient}>
				<Main />
			</QueryClientProvider>
		</>
	);
};

// 260x225

export default Home;

// bg-[#1F2628] bg color
// border-[#42443A] yellow
// border-[#304358] blue
