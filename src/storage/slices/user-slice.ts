import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../types/type-store';
import { UserType } from '../../types/types-data';

interface StateUser {
	info: UserType | null;
	status: RequestStatus;
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
	status: RequestStatus.Idle,
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
		userRequestStatus: (state: StateUser) => state.status,
	},
});

export const userSelector = userSlice.selectors;
export const UserActions = userSlice.actions;
