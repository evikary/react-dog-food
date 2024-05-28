import { LikeType, ProductType } from '../types/types-data';

export const isLiked = (
	likes: LikeType[] | undefined,
	idProduct: string | undefined
) => {
	return likes?.some((favorite) => favorite.product?.id === idProduct) || false;
};

export function favoritesProducts(
	dataProducts: ProductType[],
	idProduct: string | undefined,
	likesProduct: LikeType[]
) {
	if (isLiked(likesProduct, idProduct)) {
		return dataProducts.filter((item) => item.id === idProduct);
	}
}

export const getDate = (data: string) => {
	const date = new Date(data);
	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	};
	return date.toLocaleDateString('ru-RU', options);
};
