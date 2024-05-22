import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer/root-reducer';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { authApi } from './api/authApi';
import { productsApi } from './api/productsApi';
import { filtersSlice } from './slices/filters-slice';
import { buySlice } from './slices/buy-slice';

const persistConfig = {
	key: 'root',
	storage,
	version: 4,
	// сетевые данные в localStorage не сохраняем
	blacklist: [
		authApi.reducerPath,
		productsApi.reducerPath,
		filtersSlice.name,
		buySlice.name,
	],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				// из доки redux-persist
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat([authApi.middleware, productsApi.middleware]),
});

export const persistor = persistStore(store);

export default store;
