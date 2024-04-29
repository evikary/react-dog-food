import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../types/type-store';
import { ProductType } from '../../types/types-data';
import { fetchProduct } from '../thunk/product';

interface StateProduct {
	oneProduct: ProductType | null;
	status: RequestStatus;
}

const initialState: StateProduct = {
	oneProduct: null,
	status: RequestStatus.Idle,
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProduct: (state, action) => {
			state.oneProduct = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchProduct.pending, (state) => {
				state.status = RequestStatus.Loading;
			})
			.addCase(fetchProduct.fulfilled, (state, action) => {
				state.status = RequestStatus.Success;
				state.oneProduct = action.payload;
			})
			.addCase(fetchProduct.rejected, (state) => {
				state.status = RequestStatus.Failed;
			});
	},
	selectors: {
		product: (state: StateProduct) => state.oneProduct,
		productsRequestStatus: (state: StateProduct) => state.status,
	},
});

export const productSelector = productSlice.selectors;
export const ProductActions = {
	...productSlice.actions,
	fetchProduct,
};
