import { BackgroundCircles, BlurBackground } from '@/src/features/Background';
import { MouseTracker } from '@/src/features/MouseTracker';
import Header from '@/src/layouts/header';
import Main from '@/src/layouts/main';

const Home = () => {
	return (
		<>
			<BlurBackground />
			<BackgroundCircles />
			<MouseTracker />
			<Header></Header>
			<Main></Main>
		</>
	);
};

// 260x225

export default Home;

// bg-[#1F2628] bg color
// border-[#42443A] yellow
// border-[#304358] blue
