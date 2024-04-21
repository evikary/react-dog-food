import { createContext } from 'react';
import { UserType } from '../types/types-data';

export const UserContext = createContext<UserType | null>(null);
UserContext.displayName = 'UserContext';
