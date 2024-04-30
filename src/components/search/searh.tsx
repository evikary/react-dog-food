import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { ProductsActions } from '../../storage/slices/products-slice';
import { useNavigate } from 'react-router-dom';

function SearchElements() {
	const Search = styled('form')(() => ({
		width: '468px',
		height: '48px',
		display: 'flex',
		alignItems: 'center',
		background: 'rgb(255, 255, 255)',
		padding: '12px 20px',
		borderRadius: '34px',
	}));

	const [search, setSearch] = useState('');
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
		dispatch(
			ProductsActions.fetchSearchProducts({ searchTerm: e.target.value })
		);
		navigate('/products');
	};

	return (
		<Search>
			<InputBase
				// eslint-disable-next-line jsx-a11y/no-autofocus
				autoFocus={true}
				placeholder='Поиск'
				fullWidth
				defaultValue={search}
				onChange={onChange}
			/>
			<SearchIcon sx={{ fill: 'rgb(207, 216, 220)' }} />
		</Search>
	);
}

export default SearchElements;
