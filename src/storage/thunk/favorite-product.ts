import { createAppAsyncThunk } from '../../hooks/useAppCreateAsyncThunk';
import { ProductType, UnitApi } from '../../types/types-data';
import { apiToken } from '../../utils/constants';
import { isLiked } from '../../utils/products';
import { fetchProduct } from './product';

export const fetchChangeLikeProduct = createAppAsyncThunk<
	ProductType,
	ProductType
>(
	'products/fetchChangeLikeProduct',
	async function (product, { dispatch, getState, extra: unitApi }) {
		const { user } = getState();
		const liked = user.info ? isLiked(product.likes, user.info.id) : false;
		await (unitApi as UnitApi).Changelike(product.id, apiToken, liked);
		const updatePost = await dispatch(fetchProduct(product.id)).unwrap();
		return updatePost;
	}
);
