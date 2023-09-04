import { createContext, useReducer } from "react";
export const ItemContext = createContext();

    //Local State Synchronization 
export const itemsReducer = (state, action) =>
{
    switch(action.type)
    {
        case 'SET_ITEMS':
            return{
                items: action.payload
            }

        case 'CREATE_ITEM':
            return{
                items: [action.payload, ...state.items]
            }
        //Careful not to leave this in an array, or else it will have trouble rendering
        case 'DELETE_ITEM':
            return{
                items: state.items.filter((i) => i._id !== action.payload._id)
            }

        case 'UPDATE_ITEM':
            return{
                items: state.items.map((item) => item._id === action.payload._id ? action.payload : item)
            }
        
        default:
            return state
    }
}

export const ItemContextProvider = ({children}) =>
{
    const[state, dispatch] = useReducer(itemsReducer, 
        {
            items: null
        });

    return(
        <ItemContext.Provider value={{...state, dispatch}}>
            {children}
        </ItemContext.Provider>
    )
}
