export type AllProducts = {
	products: ProductType[];
	length: number;
};

export type ProductType = {
	updatedAt?: string;
	wight?: string;
	images: string;
	description: string;
	id: string;
	name: string;
	price: number;
	createdAt: string;
	slug: string;
	discount: number;
	isPublished: boolean;
	stock: number;
	tags: string[];
	likes?: LikeType[];
	category?: CategoryType;
	categoryId?: number;
	reviews?: ReviewsType[];
	user?: UserType;
	userId?: string;
};

export type CategoryType = {
	id: number;
	name: string;
	slug: string;
};

export type LikeType = {
	id: string;
	userId: string;
	productId: string;
	product?: ProductType;
	user?: UserType;
};

export type FavoritesPost = {
	id: string;
	userId: string;
	postId: string;
	post?: PostType;
};

export type PostType = {
	id: string;
	createdAt: string;
	updatedAt: string;
	title: string;
	slug: string;
	description: string;
	body: string;
	images: string;
	tags: string[];
	isPublished: boolean;
	favoritesCount: number;
	userId: string;
};

export type UserType = {
	id: string;
	createdAt?: string;
	updatedAt?: string;
	email: string;
	password?: string;
	provider?: any;
	isAdmin?: boolean;
	isBlocked?: boolean;
	name: string;
	avatarPath: string;
	about: string;
	phone: string;
	roles: string[];
	likes?: LikeType[];
	favoritesPost?: FavoritesPost[];
};

export type ReviewsType = {
	user: UserType;
	createdAt: string;
	text: string;
	rating: number;
	id: string;
	product: ProductType;
};

export type LikeChangeType = {
	message: string;
	product: {
		id: string;
		userId: string;
		productId: string;
	};
};

export interface FofmProfile {
	name: string;
	about: string;
	phone: string;
	email: string;
}

export interface ChangeLikeData {
	id: string;
	like: boolean;
}

export interface FormFeedback {
	text: string;
	rating: number;
}

export type DataCreateFeedback = {
	token: string;
	id: string;
	rating: number;
	text: string;
};

export type SearchParam = {
	searchTerm?: string;
};

export type Token = {
	accessToken: string;
};

export interface Filters {
	searchTerm: string;
	page: number;
}
