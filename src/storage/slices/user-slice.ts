import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../types/types-data';

interface StateUser {
	info: UserType | null;
}

const initialState: StateUser = {
	info: {
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
	},
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.info = { ...state.info, ...action.payload };
		},
		clearUser: () => {
			return initialState;
		},
	},
	selectors: {
		user: (state: StateUser) => state.info,
	},
});

export const userSelector = userSlice.selectors;
export const userActions = userSlice.actions;
