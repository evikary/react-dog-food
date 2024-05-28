import { createRoot } from 'react-dom/client';
import { App } from './app';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { theme } from './styles/theme';
import store, { persistor } from './storage/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<App />
						<ToastContainer
							position='top-right'
							autoClose={5000}
							newestOnTop={true}
							pauseOnFocusLoss={false}
							theme='colored'
						/>
					</PersistGate>
				</Provider>
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>
);
