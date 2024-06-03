import { ComponentType, FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
import { authSelector } from '../storage/slices/auth-slice';
import { path } from '../app/routes';

export const withProtection = <P extends object>(
	WrappedComponent: ComponentType<P>
) => {
	const ReturnedComponent: FC<P> = (props) => {
		// Достаем accessToken из redux'a
		const accessToken = useAppSelector(authSelector.accessTokenSelector);
		// Объект location на понадобиться для задания состояния при redirect'e
		const location = useLocation();

		// Если токен пустой, то нужно отправить пользователя на странице входа в систему
		if (!accessToken) {
			return (
				<Navigate
					to={path.signin}
					// при этом мы передаем состояние, в котором указываем, какую
					// страницу хотел посетить пользователь. И если он в дальнейшем
					// войдет в систему, то мы его автоматически перебросим на желаемую страницу
					state={{
						from: location.pathname,
					}}
				/>
			);
		}

		return <WrappedComponent {...props} />;
	};

	// У каждого компонента должно быть имя. Это поможет нам, когда будем использовать
	// dev tools'ы реакта
	ReturnedComponent.displayName = `withProtection${WrappedComponent.displayName}`;

	return ReturnedComponent;
};
