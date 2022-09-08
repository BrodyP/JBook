import { useSelector, TypedUseSelectorHook } from "react-redux";
import { Rootstate } from "../state";

//use for acess component, state  and result from reducer
export const useTypedSelector: TypedUseSelectorHook<Rootstate> = useSelector;
