import { StateBuyCard } from '../storage/slices/buy-slice';
import { LikeType } from '../types/types-data';

export const isLiked = (
	likes: LikeType[] | undefined,
	idProduct: string | undefined
) => {
	return likes?.some((favorite) => favorite.product?.id === idProduct) || false;
};

export const getDate = (data: string) => {
	return new Date(data).toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
};

export const countProducts = (products: StateBuyCard[]) => {
	return products.reduce((acc, item) => acc + item.count, 0);
};

export const allSum = (products: StateBuyCard[]) =>
	products.reduce(
		(acc, item) => (item.checked ? acc + item.price * item.count : acc),
		0
	);

export const allDiscount = (products: StateBuyCard[]) =>
	products.reduce(
		(acc, item) => (item.checked ? acc + item.discount * item.count : acc),
		0
	);

export const endPrice = (price: number, discount: number) => {
	return price - discount;
};

/// функция склонения слова для разного количества элементов
export function words(count: number, words: string[]) {
	let index = 2;
	if (count % 10 === 1 && count % 100 !== 11) {
		index = 0;
	} else if (
		count % 10 >= 2 &&
		count % 10 <= 4 &&
		(count % 100 < 10 || count % 100 >= 20)
	) {
		index = 1;
	}
	return words[index];
}
