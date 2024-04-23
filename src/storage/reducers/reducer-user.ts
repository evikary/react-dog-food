import {
	GET_USER_FAILED,
	GET_USER_REQUEST,
	GET_USER_SUCCESS,
} from '../actions/actions-user';

import { UserState } from '../types/type-store';

const initialState: UserState = {
	currentUser: null,
	userRequest: false,
	failed: '',
};

export const userReducer = (state = initialState, action: any): UserState => {
	switch (action.type) {
		case GET_USER_REQUEST:
			return { ...state, userRequest: true, failed: '' };
		case GET_USER_SUCCESS:
			return { ...state, userRequest: false, currentUser: action.payload };
		case GET_USER_FAILED:
			return { ...state, userRequest: false, failed: action.payload };
		default:
			return state;
	}
};
