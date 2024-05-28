import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../types/type-store';
import { UserType } from '../../types/types-data';
import { fetchUser, fetchEditUser } from '../thunk/user';
import { isActionPending, isActionRejected } from '../../utils/store-utils';

// interface StateUser {
// 	info: UserType | null;
// 	status: RequestStatus;
// }

interface StateUser {
	info: UserType | null;
	status: RequestStatus;
}

// const initialState: StateUser = {
// 	info: null,
// 	status: RequestStatus.Idle,
// };

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
			// state.info = action.payload;
			// return { ...state, info: { ...state.info, ...action.payload } };
			state.info = { ...state.info, ...action.payload };
		},
		clearUser: () => {
			return initialState;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUser.fulfilled, (state, action) => {
				// state.info = action.payload;
				///
				// return {
				// 	...state,
				// 	status: RequestStatus.Success,
				// 	info: { ...state.info, ...action.payload },
				// };
				///
				state.status = RequestStatus.Success;
				state.info = { ...state.info, ...action.payload };
			})
			.addCase(fetchEditUser.fulfilled, (state, action) => {
				// state.info = action.payload;
				state.status = RequestStatus.Success;
				state.info = { ...state.info, ...action.payload };
			})
			.addMatcher(isActionPending(userSlice.name), (state) => {
				state.status = RequestStatus.Loading;
			})
			.addMatcher(isActionRejected(userSlice.name), (state) => {
				state.status = RequestStatus.Failed;
			});
	},
	selectors: {
		user: (state: StateUser) => state.info,
		userRequestStatus: (state: StateUser) => state.status,
	},
});

export const userSelector = userSlice.selectors;
export const UserActions = { ...userSlice.actions, fetchUser, fetchEditUser };
