import { FC } from 'react';

interface indexProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

const Header: FC<indexProps> = ({ children, ...props }) => {
	return <header {...props}>{children}</header>;
};

export default Header;
