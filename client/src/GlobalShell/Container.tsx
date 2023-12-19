import styled from 'styled-components';

const Container: React.FC<X> = ({ className, children }) => {
	return (
		<>
			<container className={className}>{children}</container>
		</>
	);
};

export default styled(Container)``;
