import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../storage/types/type-store';
import { UnitApi } from '../types/types-data';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
	state: RootState;
	dispatch: AppDispatch;
	extra: UnitApi;
}>();
