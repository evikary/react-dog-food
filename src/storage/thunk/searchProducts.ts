import { createAppAsyncThunk } from '../../hooks/useAppCreateAsyncThunk';
import { ProductType, SearchParam, UnitApi } from '../../types/types-data';

export const fetchSearchProducts = createAppAsyncThunk<
	ProductType[],
	SearchParam
>('products/fetchSearchProducts', async (search, { extra: unitApi }) => {
	const data = await (unitApi as UnitApi).getProducts(search);
	return data;
});
