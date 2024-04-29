import { useDispatch } from 'react-redux';
import { AppDispatch } from '../storage/types/type-store';

export const useAppDispatch: () => AppDispatch = useDispatch;
