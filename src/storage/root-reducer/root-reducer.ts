import { combineReducers } from 'redux';
import { userSlice } from '../slices/user-slice';
import { productsSlice } from '../slices/products-slice';
import { productSlice } from '../slices/product-slice';

export const reducer = combineReducers({
	[userSlice.name]: userSlice.reducer,
	[productsSlice.name]: productsSlice.reducer,
	[productSlice.name]: productSlice.reducer,
});
