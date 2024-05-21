import { Alert, CircularProgress, Stack } from '@mui/material';
import { useLayoutEffect, useRef } from 'react';

interface LoadMoreProps {
	action: () => void;
	isLoading?: boolean;
	isEndOfList?: boolean;
}

const LoadMore = ({ action, isLoading, isEndOfList }: LoadMoreProps) => {
	const ref = useRef(null);

	useLayoutEffect(() => {
		let observer: IntersectionObserver | undefined = undefined;
		// Если мы не достигли конца списка, то запускаем инициализацию
		// IntersectionObserver
		if (!isEndOfList) {
			// Определяем настройка для будущего наблюдателя
			// Читай доку https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver
			const options: IntersectionObserverInit = {
				threshold: 0.5,
			};

			// Функция, которая будет вызываться каждый раз, когда элемент будет
			// появляться на экране и исчезать
			const callback: IntersectionObserverCallback = (entries) => {
				// Для того чтобы отследить именно появление элемента в области видимости,
				// используем свойство isIntersecting
				if (entries[0].isIntersecting) {
					// запускаем пользовательскую логику
					action();
				}
			};
			// создаем экземпляр класса IntersectionObserver
			observer = new IntersectionObserver(callback, options);

			// Если ссылка есть, то начинаем наблюдать за нашим элементом
			ref.current && observer.observe(ref.current);
		}

		return () => {
			// Перед последующем запуском useLayoutEffect перестаем следить
			// за всеми элементами
			observer && observer.disconnect();
		};
	}, [action, isEndOfList]);

	return (
		<Stack
			ref={ref}
			justifyContent='center'
			alignItems='center'
			direction='row'
			sx={{ my: '5px' }}>
			{' '}
			{isLoading && <CircularProgress />}
			{isEndOfList && (
				<Alert severity='success'>Вы пролистали список до конца!</Alert>
			)}
		</Stack>
	);
};

export default LoadMore;
