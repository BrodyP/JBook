import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { Rootstate } from '../state';

//use for acess component
export const useTypedSelector: TypedUseSelectorHook<Rootstate> = useSelector;
