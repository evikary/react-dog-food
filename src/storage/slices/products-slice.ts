import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../types/type-store';
import { ProductType } from '../../types/types-data';
import { fetchProducts } from '../thunk/products';
import { fetchChangeLikeProduct } from '../thunk/favorite-product';
import { isActionPending, isActionRejected } from '../../utils/store-utils';
import { fetchSearchProducts } from '../thunk/searchProducts';
import { fetchCreateFeedback } from '../thunk/reviews-product';

interface StateProduct {
	allProducts: ProductType[];
	status: RequestStatus;
}

const initialState: StateProduct = {
	allProducts: [],
	status: RequestStatus.Idle,
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.allProducts = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = RequestStatus.Success;
				state.allProducts = action.payload;
			})
			.addCase(fetchChangeLikeProduct.fulfilled, (state, action) => {
				state.status = RequestStatus.Success;
				state.allProducts = state.allProducts.map((currentProduct) =>
					currentProduct.id === action.payload.id
						? action.payload
						: currentProduct
				);
			})
			.addCase(fetchCreateFeedback.fulfilled, (state, action) => {
				state.status = RequestStatus.Success;
				state.allProducts = state.allProducts.map((product) => {
					if (product.id === action.payload.product.id) {
						product.reviews?.push(action.payload);
					}
					return product;
				});
			})
			.addCase(fetchSearchProducts.fulfilled, (state, action) => {
				state.status = RequestStatus.Success;
				state.allProducts = action.payload;
			})
			.addMatcher(isActionPending(productsSlice.name), (state) => {
				state.status = RequestStatus.Loading;
			})
			.addMatcher(isActionRejected(productsSlice.name), (state) => {
				state.status = RequestStatus.Failed;
			});
	},
	selectors: {
		products: (state: StateProduct) => state.allProducts,
		productsRequestStatus: (state: StateProduct) => state.status,
	},
});

export const productsSelector = productsSlice.selectors;
export const ProductsActions = {
	...productsSlice.actions,
	fetchProducts,
	fetchSearchProducts,
	fetchCreateFeedback,
};
