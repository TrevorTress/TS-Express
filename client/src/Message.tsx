import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Message: React.FC<X> = ({ className }) => {
	const [message, setMessage] = useState('');
	const getMessage = async () => {
		const message = await axios.get('http://localhost:3001');
		setMessage(message.data);
	};

	useEffect(() => {
		getMessage();
	}, []);
	return <span className={className}>{message}</span>;
};

export default styled(Message)``;
