import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	DataCreateFeedback,
	ReviewsType,
	UnitApi,
} from '../../types/types-data';

export const fetchCreateFeedback = createAsyncThunk<
	ReviewsType,
	DataCreateFeedback
>('products/fetchCreateFeedback', async (dataFeedback, { extra: unitApi }) => {
	const data = await (unitApi as UnitApi).createFeedback(dataFeedback);
	return data;
});
