import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';

function SearchElements() {
	const Search = styled('div')(() => ({
		width: '468px',
		height: '48px',
		display: 'flex',
		alignItems: 'center',
		background: 'rgb(255, 255, 255)',
		padding: '12px 20px',
		borderRadius: '34px',
	}));

	return (
		<Search>
			<SearchIcon sx={{ fill: 'rgb(207, 216, 220)' }} />
			<InputBase />
		</Search>
	);
}

export default SearchElements;
