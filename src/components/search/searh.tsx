import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import { ChangeEvent, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useSearch } from '../../hooks/useSearch';
import { filtersActions } from '../../storage/slices/filters-slice';
import { useDebounce } from '../../hooks/useDebounce';

const Search = styled('form')(() => ({
	width: '468px',
	height: '48px',
	display: 'flex',
	alignItems: 'center',
	background: 'rgb(255, 255, 255)',
	padding: '12px 20px',
	borderRadius: '34px',
}));

function SearchElements() {
	const { search, setSearch } = useSearch();
	const dispatch = useAppDispatch();
	const debounceValue = useDebounce(search, 1000);

	useEffect(() => {
		dispatch(filtersActions.setFilters({ searchTerm: debounceValue }));
	}, [debounceValue]);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return (
		<Search>
			<InputBase
				placeholder='Поиск'
				fullWidth
				value={search}
				onChange={onChange}
			/>
			<SearchIcon sx={{ fill: 'rgb(207, 216, 220)' }} />
		</Search>
	);
}

export default SearchElements;
