import { UserType } from '../../types/types-data';
import store from '../store';

export const enum RequestStatus {
	Idle = 'idle',
	Loading = 'loading',
	Success = 'success',
	Failed = 'failed',
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface UserState {
	currentUser: UserType | null;
	userRequest: boolean;
	failed: string;
}
