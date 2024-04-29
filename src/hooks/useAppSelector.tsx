import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../storage/types/type-store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
