import { useEffect } from "react";
import { useWaitingListsContext } from "../../../../hooks/useWaitingListsContext"
import WaitingLog from "./WaitingLog";
import { useAuthContext } from "../../../../hooks/useAuthContext";

export default function WaitingList({ setSelected }) {

    setSelected("waiting");

    const { waitingLists, dispatch } = useWaitingListsContext()
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchWaitingList = async () => {
            const response = await fetch("/api/waitingList", {
                headers: { 'Authorization': `Bearer ${user.token}` },
            });
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_WAITINGLISTS", payload: json })
            }
            else {
                console.log(response.status, response.error)
            }
        }

        fetchWaitingList();
    }, [dispatch]);

    return (
        <>
            <section className="font-Fredoka font-semibold text-[40px] mb-[30px] text-[#26148ca4] ">
                Waiting List
            </section>
            <section >
                {(waitingLists && waitingLists.length !== 0 && waitingLists.map((item) => <WaitingLog currentWaitingList={item} user={user} />)) || <div className="text-[40px] font-Fredoka text-center ">No Waiting Patients !</div>}
            </section>
        </>
    );
}