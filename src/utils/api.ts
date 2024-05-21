import {
	AllProducts,
	LikeChangeType,
	ProductType,
	UserType,
} from '../types/types-data';
import { URL } from './constants';

export const checkResponse = async <T>(res: Response): Promise<T> => {
	const json: T = await res.json();
	if (!res.ok) {
		return Promise.reject(json);
	}
	return json;
};

export const getAllProducts = (): Promise<AllProducts> => {
	return fetch(`${URL}/products`)
		.then((data) => checkResponse<AllProducts>(data))
		.then((json) => {
			return json;
		})
		.catch((err) => {
			return Promise.reject(err);
		});
};

export const getProductId = (id: string): Promise<ProductType> => {
	return fetch(`${URL}/products/${id}`)
		.then((data) => checkResponse<ProductType>(data))
		.then((json) => {
			return json;
		})
		.catch((err: Error) => {
			return Promise.reject(err);
		});
};

export const getUser = (token: string): Promise<UserType> => {
	return fetch(`${URL}/users/me`, {
		method: 'GET',
		headers: { accept: 'application/json', Authorization: token },
	})
		.then((data) => checkResponse<UserType>(data))
		.then((json) => {
			return json;
		})
		.catch((err: Error) => {
			return Promise.reject(err);
		});
};

export const changelike = (
	id: string,
	token: string,
	like: boolean | undefined
): Promise<LikeChangeType> => {
	return fetch(`${URL}/products/${id}/likes`, {
		method: like ? 'DELETE' : 'PUT',
		headers: { accept: 'application/json', Authorization: token },
	})
		.then((data) => checkResponse<LikeChangeType>(data))
		.then((json) => {
			return json;
		})
		.catch((err: Error) => {
			return Promise.reject(err);
		});
};
