import {useAuthContext} from './useAuthContext'
import {useItemContext} from './useItemsContext'

export const useLogout = () =>
{
    const {dispatch} = useAuthContext();
    const {dispatch: itemsDispatch} = useItemContext();

    const logout = () =>
    {
        //remove user from storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({type: 'LOGOUT'})
        itemsDispatch({type: 'SET_ITEMS', payload: null})
    }

    return {logout}
}