import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from './config';
import {
	AllProducts,
	ChangeLikeData,
	DataCreateFeedback,
	Filters,
	FofmProfile,
	LikeChangeType,
	ProductType,
	ReviewsType,
	UserType,
} from '../../types/types-data';
import { sleep } from '../../utils/common-utils';

const defaultUser = {
	id: '',
	createdAt: '',
	updatedAt: '',
	email: '',
	password: '',
	isAdmin: false,
	isBlocked: false,
	name: '',
	avatarPath: '',
	about: '',
	phone: '',
	roles: [],
	likes: [],
	favoritesPost: [],
};

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: customBaseQuery,
	tagTypes: ['Products', 'User'],
	endpoints: (builder) => ({
		getProducts: builder.query<AllProducts, Partial<Filters>>({
			query: ({ searchTerm, page }) => ({
				url: '/products',
				params: {
					sort: 'newest',
					searchTerm: searchTerm || '',
					perPage: 4,
					page: page || '',
				},
			}),
			merge(currentCacheData, responseData, { arg: { page } }) {
				if (page === 1) {
					currentCacheData = responseData;
				} else {
					currentCacheData.products.push(...responseData.products);
				}
			},
			serializeQueryArgs: ({ endpointName, queryArgs: { searchTerm } }) => {
				return endpointName + searchTerm;
			},
			forceRefetch: ({ currentArg, previousArg }) => {
				return currentArg?.page !== previousArg?.page;
			},
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
			queryFn: async (_arg, _api, _extraOptions, baseQuery) => {
				console.log('queryFn');
				await sleep(1000);
				const response = await baseQuery({
					url: '/users/me',
				});
				return response.data
					? { data: response.data as UserType }
					: { data: defaultUser as UserType };
			},
			providesTags: ['User'],
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
			invalidatesTags: ['User'],
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
