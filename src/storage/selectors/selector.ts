import { RootState } from '../store';

export const selectUser = (store: RootState) => store.profile.currentUser;
