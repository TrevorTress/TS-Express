import styled from 'styled-components';

const Header: React.FC<X> = ({ className }) => {
	return (
		<header className={className}>
			<h1>Header</h1>
		</header>
	);
};

export default styled(Header)``;
