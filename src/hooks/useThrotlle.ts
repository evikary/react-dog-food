import { useEffect, useRef, useState } from 'react';

export const useThrottle = <T>(value: T, delay: number) => {
	const [optimaizedValue, setOptimaizedValue] = useState(value);

	const isTimerOn = useRef(false);

	useEffect(() => {
		if (isTimerOn.current) {
			return;
		}

		isTimerOn.current = true;

		setTimeout(() => {
			setOptimaizedValue(value);
			isTimerOn.current = false;
		}, delay);
	}, [value, delay]);

	return optimaizedValue;
};
