import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/user-slice';
import { unitApi } from '../utils/api';

const reducer = combineReducers({
	[userSlice.name]: userSlice.reducer,
});

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
