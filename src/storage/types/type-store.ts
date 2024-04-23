import { UserType } from '../../types/types-data';

export const enum RequestStatus {
	Idle = 'idle',
	Loading = 'loading',
	Success = 'success',
	Failed = 'failed',
}

export interface UserState {
	currentUser: UserType | null;
	userRequest: boolean;
	// status: RequestStatus;
	failed: string;
}

export interface IStore {
	profile: UserState;
}
