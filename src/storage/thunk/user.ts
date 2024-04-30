import { DataSetUser, UserType } from '../../types/types-data';
import { createAppAsyncThunk } from '../../hooks/useAppCreateAsyncThunk';

export const fetchUser = createAppAsyncThunk<UserType, string>(
	'user/fetchUser',
	async (token, { extra: unitApi }) => {
		const data = await unitApi.getUser(token);
		return data;
	}
);

export const fetchEditUser = createAppAsyncThunk<UserType, DataSetUser>(
	'user/fetchEditUser',
	async (dataUser, { extra: unitApi }) => {
		const data = await unitApi.setUser(dataUser);
		return data;
	}
);
