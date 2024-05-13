import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from './config';
import { AllProducts } from '../../types/types-data';

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: customBaseQuery,
	endpoints: (builder) => ({
		getProducts: builder.query<AllProducts, object>({
			query: () => ({
				url: '/products',
				params: {
					sort: 'newest',
					searchTerm: '',
					perPage: 8,
					page: 1,
				},
			}),
		}),
	}),
});

export const { useGetProductsQuery } = productsApi;
