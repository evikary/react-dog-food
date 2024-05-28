import { LikeType, ProductType } from '../types/types-data';

export const isLiked = (
	likes: LikeType[] | undefined,
	idUser: string | undefined
) => {
	return likes?.some((favorite) => favorite.userId === idUser);
};

export function favoritesProducts(
	dataProducts: ProductType[],
	idUser: string | undefined
) {
	return dataProducts.filter((item) => isLiked(item.likes, idUser));
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
