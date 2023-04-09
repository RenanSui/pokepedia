import LoadCSS from '@/src/utils/LoadCSS';
import './globals.css';

export const metadata = {
	title: 'Pokédex',
	description: 'Simple and Elegant Pokédex App',
	icons: {
		icon: 'Assets/Images/favicon.ico',
		shortcut: 'Assets/Images/favicon.ico',
		apple: 'Assets/Images/apple-touch-icon.png',
		other: {
			rel: 'apple-touch-icon',
			url: 'Assets/Images/apple-touch-icon.png',
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-[#1F2628]">
				{children}
				<LoadCSS />
			</body>
		</html>
	);
}
