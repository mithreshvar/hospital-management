import { useAuthContext } from './useAuthContext'
import { useWaitingListsContext } from './useWaitingListsContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: dispatchWorkouts } = useWaitingListsContext()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({ type: 'LOGOUT' })
        dispatchWorkouts({ type: 'SET_WORKOUTS', payload: null })
    }

    return { logout }
}