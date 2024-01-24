import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Create and export a custom hook for dispatching actions with types
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Create and export a typed selector hook for accessing the state
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;