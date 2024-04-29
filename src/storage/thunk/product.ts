import { createAppAsyncThunk } from '../../hooks/useAppCreateAsyncThunk';
import { ProductType, UnitApi } from '../../types/types-data';

export const fetchProduct = createAppAsyncThunk<ProductType, string>(
	'product/fetchProduct',
	async (id, { extra: unitApi }) => {
		const data = await (unitApi as UnitApi).GetProduct(id);
		return data;
	}
);
