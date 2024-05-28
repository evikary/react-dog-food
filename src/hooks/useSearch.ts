import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useSearch = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [search, setSearch] = useState(searchParams.get('q') || '');
	// console.log(Object.fromEntries(searchParams.entries()));

	useEffect(() => {
		if (search === '') {
			searchParams.delete('q');
		} else {
			searchParams.set('q', search);
		}
		setSearchParams(searchParams);
	}, [search]);

	return { search, setSearch };
};
