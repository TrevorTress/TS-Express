import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import GlobalShell from './GlobalShell';
import Message from './Message';

const client = new ApolloClient({
	uri: 'http://localhost:3001/graphql',
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<ApolloProvider client={client}>
			<GlobalShell>
				<Message />
			</GlobalShell>
		</ApolloProvider>
	</BrowserRouter>
);
