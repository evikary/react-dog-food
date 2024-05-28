import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay: number) => {
	const [optimaizedValue, setOptimaizedValu] = useState(value);

	useEffect(() => {
		const id = setTimeout(() => {
			setOptimaizedValu(value);
		}, delay);

		return () => clearTimeout(id);
	}, [value, delay]);

	return optimaizedValue;
};
