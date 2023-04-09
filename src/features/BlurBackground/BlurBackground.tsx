const BlurBackground = () => {
	return (
		<>
			<div className="fixed top-0 right-0 left-0 bottom-0 z-[-1] bg-[#00000048] backdrop-blur-[100px]" />
			<div className="fixed bottom-[55%] left-[55%] z-[-2] aspect-square w-[1000px] rounded-full border-[200px] border-[#555849] md:left-[40%] lg:bottom-[55%] lg:left-[60%] 2xl:left-[70%]" />
			<div className="fixed top-[35%] right-[45%] z-[-2] aspect-square w-[1200px] rounded-full border-[450px] border-[#304358] md:right-[25%] md:w-[1500px] lg:top-[30%] lg:right-[35%] 2xl:right-[60%]" />
		</>
	);
};

// border-[#47493ee4] yellow transparent
// border-[#334c68c0]
// border-[#42443A] yellow
// border-[#304358] blue

export default BlurBackground;
