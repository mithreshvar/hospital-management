import { WaitingListsContext } from "../context/waitingListsContext";
import { useContext } from "react";

export const useWaitingListsContext = () => {
    const context = useContext(WaitingListsContext);

    if (!context) {
        throw Error("useWaitingListsContext must be used inside a WaitingListsContextProvider");
    }

    return context;
}