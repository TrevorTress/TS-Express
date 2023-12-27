import { useQuery } from '@apollo/client';
import { GET_USERS } from './apollo';
import styled from 'styled-components';

const Message: React.FC<X> = ({ className }) => {
	const { loading, data } = useQuery(GET_USERS);

	if (!loading) {
		console.log(data);
	}
	return (
		<span className={className}>
			{data?.users.map((user) => (
				<h1>Hello, {user.firstName}</h1>
			))}
		</span>
	);
};

export default styled(Message)``;
