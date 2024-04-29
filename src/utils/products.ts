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
