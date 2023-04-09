import BlurBackground from '@/src/features/BlurBackground/BlurBackground';
import { MouseTracker } from '@/src/features/MouseTracker';

const Home = () => {
	return (
		<>
			<MouseTracker />
			<BlurBackground />
		</>
	);
};

export default Home;

// bg-[#1F2628] bg color
// border-[#42443A] yellow
// border-[#304358] blue
