import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from './config';
import {
	AllProducts,
	ChangeLikeData,
	DataCreateFeedback,
	FofmProfile,
	LikeChangeType,
	ProductType,
	ReviewsType,
	UserType,
} from '../../types/types-data';

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: customBaseQuery,
	tagTypes: ['Products'],
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
			providesTags: [{ type: 'Products' }],
		}),
		getProductById: builder.query<ProductType, ProductType['id']>({
			query: (id) => ({
				url: `/products/${id}`,
			}),
			providesTags: (response) => [{ type: 'Products', id: response?.id }],
		}),
		createReview: builder.mutation<
			ReviewsType,
			Omit<DataCreateFeedback, 'token'>
		>({
			query: (productReviewValues) => ({
				url: `/reviews/leave/${productReviewValues.id}`,
				method: 'POST',
				body: {
					rating: productReviewValues.rating,
					text: productReviewValues.text,
				},
			}),
			invalidatesTags: (response) => [
				{ type: 'Products', id: response?.product.id },
			],
		}),
		getUser: builder.query<UserType, void>({
			query: () => ({
				url: '/users/me',
				method: 'GET',
			}),
		}),
		updatedUser: builder.mutation<UserType, FofmProfile>({
			query: (data) => ({
				url: '/users/me',
				method: 'PATCH',
				body: data,
			}),
			invalidatesTags: [{ type: 'Products' }],
		}),
		changelike: builder.mutation<LikeChangeType, ChangeLikeData>({
			query: (data) => ({
				url: `/products/${data.id}/likes`,
				method: data.like ? 'DELETE' : 'PUT',
			}),
			invalidatesTags: [{ type: 'Products' }],
		}),
	}),
});

export const {
	useGetProductsQuery,
	useCreateReviewMutation,
	useGetProductByIdQuery,
	useGetUserQuery,
	useUpdatedUserMutation,
	useChangelikeMutation,
} = productsApi;
