import { createContext } from 'react';
import { ProductType } from '../types/types-data';

export interface ProductsContextInterface {
	products: ProductType[];
	onProductLike: (productData: ProductType) => Promise<ProductType | undefined>;
}

export const ProductsContext = createContext<ProductsContextInterface | null>(
	null
);
ProductsContext.displayName = 'ProductsContext';
