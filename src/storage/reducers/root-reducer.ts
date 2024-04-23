import { combineReducers } from 'redux';
import { userReducer } from './reducer-user';

export const rootReducer = combineReducers({
	profile: userReducer,
});
