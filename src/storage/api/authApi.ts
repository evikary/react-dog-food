import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from './config';
import { Token, UserType } from '../../types/types-data';
import { SignUpFormValues } from '../../components/forms/sign-up-form/helpers/types';

type SignUpResponse = {
	user: Pick<UserType, 'id' | 'email'>;
	accessToken: Token['accessToken'];
};

// type SignInResponse = {
// 	user: Pick<UserType, 'id' | 'email'>;
// 	accessToken: Token['accessToken'];
// };

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: customBaseQuery,
	endpoints: (builder) => ({
		signUp: builder.mutation<SignUpResponse, SignUpFormValues>({
			query: (signUpFormValues) => ({
				url: '/auth/register',
				method: 'POST',
				body: signUpFormValues,
			}),
		}),
		// signIn: builder.mutation<SignInResponse, unknown>({
		// 	query: (signInFormValues) => ({
		// 		url: '/auth/login',
		// 		method: 'POST',
		// 		body: signInFormValues,
		// 	}),
		// }),
	}),
});

export const { useSignUpMutation } = authApi;
