import { createContext } from "react";
export const ItemContext = createContext();

export const ItemContextProvider = ({children}) =>
{
    return(
        <ItemContext.Provider>
            {children}
        </ItemContext.Provider>
    )
}
