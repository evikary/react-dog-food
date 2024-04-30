import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductType, UnitApi } from '../../types/types-data';

export const fetchProducts = createAsyncThunk<ProductType[], void>(
	'products/fetchProducts',
	async (_, { extra: unitApi }) => {
		const data = await (unitApi as UnitApi).getProducts();
		return data;
	}
);
