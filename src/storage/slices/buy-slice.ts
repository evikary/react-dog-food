import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface StateBuyCard {
	idProduct: string;
	count: number;
	price: number;
	discount: number;
	stock: number;
	checked: boolean;
}

const initialState: StateBuyCard[] = [];

export const buySlice = createSlice({
	name: 'buyCards',
	initialState,
	reducers: {
		addBuyCard: (
			state: StateBuyCard[],
			action: PayloadAction<StateBuyCard>
		) => {
			const element = state.find(
				(item) => item.idProduct === action.payload.idProduct
			);

			if (element) {
				element.count = element.count + 1;
			} else {
				state.push(action.payload);
			}
		},
		decreaseCount: (state, action: PayloadAction<string>) => {
			const element = state.find((item) => item.idProduct === action.payload);
			if (element) {
				element.count = element.count - 1;
			}
		},
		removeBuyCard: (state, action: PayloadAction<string>) => {
			return state.filter((item) => item.idProduct !== action.payload);
		},
		changeChecked: (state, action: PayloadAction<string>) => {
			state.forEach((item) => {
				if (item.idProduct === action.payload) {
					item.checked = !item.checked;
				}
			});
		},
		changeAllChecked: (state, action: PayloadAction<boolean>) => {
			state.forEach((item) => {
				item.checked = action.payload;
			});
		},
		clearBuyCards: () => {
			return initialState;
		},
	},
	selectors: {
		cards: (state) => state,
	},
});

export const buySelector = buySlice.selectors;
export const buyActions = buySlice.actions;
