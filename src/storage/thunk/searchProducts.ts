import { createAppAsyncThunk } from '../../hooks/useAppCreateAsyncThunk';
import { ProductType, UnitApi } from '../../types/types-data';

export const fetchSearchProducts = createAppAsyncThunk<ProductType[], string>(
	'products/fetchSearchProducts',
	async (search, { extra: unitApi }) => {
		console.log('search', search);
		const data = await (unitApi as UnitApi).getProducts(search);
		console.log('fetchSearchProducts', data);
		return data;
	}
);
