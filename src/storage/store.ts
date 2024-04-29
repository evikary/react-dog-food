import { configureStore } from '@reduxjs/toolkit';
import { unitApi } from '../utils/api';
import { reducer } from './root-reducer/root-reducer';

const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: unitApi,
			},
		}),
});

export default store;
