import { combineReducers } from 'redux';
import { userSlice } from '../slices/user-slice';
// import { productsSlice } from '../slices/products-slice';
import { productSlice } from '../slices/product-slice';
import { authSlice } from '../slices/auth-slice';
import { authApi } from '../api/authApi';
import { productsApi } from '../api/productsApi';

export const rootReducer = combineReducers({
	[userSlice.name]: userSlice.reducer,
	// [productsSlice.name]: productsSlice.reducer,
	[productSlice.name]: productSlice.reducer,
	[authSlice.name]: authSlice.reducer,
	[authApi.reducerPath]: authApi.reducer,
	[productsApi.reducerPath]: productsApi.reducer,
});
