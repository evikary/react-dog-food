import { getUser } from '../../utils/api';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

// export interface GetUserRequestAction {
// 	readonly type: typeof GET_USER_REQUEST;
// }

// export interface GetUserSuccessAction {
// 	readonly type: typeof GET_USER_SUCCESS;
// 	readonly payload: UserType;
// }

// export interface GetUserFailedAction {
// 	readonly type: typeof GET_USER_FAILED;
// 	readonly payload: string;
// }

// export type UserActions =
// 	| GetUserRequestAction
// 	| GetUserSuccessAction
// 	| GetUserFailedAction;

export const fetchUserAction: any = (token: string) => {
	return function (dispatch: any) {
		dispatch({ type: GET_USER_REQUEST });
		getUser(token)
			.then((data) => {
				console.log('getUserAction', data);
				dispatch({ type: GET_USER_SUCCESS, payload: data });
			})
			.catch((error) => {
				console.log('getUserAction', error);
				dispatch({ type: GET_USER_FAILED, payload: error.message });
			});
	};
};
