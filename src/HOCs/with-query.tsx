import {
	Alert,
	AlertTitle,
	Box,
	Button,
	CircularProgress,
	Container,
} from '@mui/material';
import { ComponentType, FC } from 'react';

interface WithQueryProps {
	isLoading: boolean;
	isError: boolean;
	queryErrorMsg: string;
	refetch: () => void;
}

export const withQuery = <WrappedComponentProps extends object>(
	WrappedComponent: ComponentType<WrappedComponentProps>
) => {
	const ReturnedComponent: FC<WrappedComponentProps & WithQueryProps> = (
		props
	) => {
		const {
			isLoading,
			isError,
			queryErrorMsg,
			refetch,
			...wrappedComponentProps
		} = props;

		// Ошибки часто возникают при сетевых взаимодействия,
		// нужно быть к ним готовым
		if (isError) {
			return (
				<Container
					component='main'
					sx={{ height: 'calc(100vh - 192px - 396px)' }}>
					<Alert
						action={
							// Эта кнопка нужна для повторного запроса
							<Button onClick={refetch} color='inherit' size='small'>
								Повторный запрос
							</Button>
						}
						severity='error'>
						<AlertTitle>Ошибка</AlertTitle>
						{/* текст ошибки */}
						{queryErrorMsg ??
							'Неизвестная ошибка, пожалуйста, повторите запрос'}
					</Alert>
				</Container>
			);
		}

		// Если ошибки нет, но запрос еще не завершен, то мы показываем
		// индикатор загрузки. Чтобы конечный пользователь понимал, что
		// наше приложение не зависло и скоро покажет данные
		if (isLoading) {
			console.log('isLoading');
			return (
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<CircularProgress />
				</Box>
			);
		}

		return (
			<WrappedComponent {...(wrappedComponentProps as WrappedComponentProps)} />
		);
	};

	return ReturnedComponent;
};
