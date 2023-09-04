import { createContext, useReducer } from "react";
export const ItemContext = createContext();

export const ItemContextProvider = ({children}) =>
{
    const[state, dispatch] = useReducer(itemsReducer, 
        {
            items: null
        });

    dispatch({type:'SET_ITEMS', payload: [{}, {}]})

    return(
        <ItemContext.Provider value={}>
            {children}
        </ItemContext.Provider>
    )
}
