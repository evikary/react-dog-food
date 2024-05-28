import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Token } from '../../types/types-data';

interface StateAuth {
	accessToken: string;
}

const initialState: StateAuth = {
	accessToken: '',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAccessToken(state, action: PayloadAction<Token>) {
			state.accessToken = action.payload.accessToken;
		},
		clearToken() {
			return initialState;
		},
	},
	selectors: {
		accessTokenSelector: (state: StateAuth) => state.accessToken,
	},
});

export const authSelector = authSlice.selectors;
export const authAction = authSlice.actions;
