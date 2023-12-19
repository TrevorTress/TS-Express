import styled from 'styled-components';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';

const Component: React.FC<X> = ({ className, children }) => {
	return (
		<div className={className}>
			<Header />
			<Container>{children}</Container>
			<Footer />
		</div>
	);
};

export default styled(Component)`
	--primary: #60bbe6;
	--header-height: 10vh;
	--footer-height: 10vh;
	background: pink;

	& header {
		height: 10vh;
		background: var(--primary);
	}

	& container {
		background: orange;
		width: 100vw;
		height: calc(100vh - var(--header-height) - var(--footer-height));
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& footer {
		height: 10vh;
		background: var(--primary);
	}
`;
