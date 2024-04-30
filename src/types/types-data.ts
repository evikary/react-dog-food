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

export type UserUpdateDto = Partial<
	Omit<UserType, 'favoritesPost' | 'id'> & { password: string }
>;

export type DataSetUser = {
	token: string;
	user: UserUpdateDto;
};

export type GetUser = (token: string) => Promise<UserType>;
export type SetUser = (data: DataSetUser) => Promise<UserType>;
export type GetProducts = (search?: string) => Promise<ProductType[]>;
export type GetProduct = (id: string) => Promise<ProductType>;
export type Changelike = (
	id: string,
	token: string,
	like: boolean | undefined
) => Promise<LikeChangeType>;

export type UnitApi = {
	getUser: GetUser;
	setUser: SetUser;
	getProducts: GetProducts;
	getProduct: GetProduct;
	changelike: Changelike;
};
