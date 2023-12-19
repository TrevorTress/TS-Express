import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalShell from './GlobalShell';
import Message from './Message';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<GlobalShell>
			<Message />
		</GlobalShell>
	</BrowserRouter>
);
