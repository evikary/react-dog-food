import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Filters } from '../../types/types-data';

const initialState: Filters = {
	searchTerm: '',
	page: 1,
};

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilters: (state, action: PayloadAction<Partial<Filters>>) => {
			return { ...state, ...action.payload };
		},
		clearFilters: () => {
			return initialState;
		},
	},
	selectors: {
		filters: (state) => state,
	},
});

export const filtersSelector = filtersSlice.selectors;
export const filtersActions = filtersSlice.actions;
