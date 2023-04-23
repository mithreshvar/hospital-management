import { createContext, useReducer } from "react";

export const WaitingListsContext = createContext();

export const waitingListsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WAITINGLISTS':
            return {
                waitingLists: action.payload
            }
        case 'CREATE_WAITINGLIST':
            if (!state.waitingLists)
                return {
                    waitingLists: [action.payload]
                }
            else
                return {
                    waitingLists: [action.payload, ...state.waitingLists] // !!!!! (...state.waitingLists) spread operator should not be null else it throws | TypeError: e is null 
                }
        case 'DELETE_WAITINGLIST':
            return {
                waitingLists: state.waitingLists.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state

    }
}

export const WaitingListsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(waitingListsReducer, {
        waitingLists: null
    });


    return (
        <WaitingListsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WaitingListsContext.Provider>
    );
}