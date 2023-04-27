import { useEffect, useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import HistoryTab from "../../common/HistoryTab";

export default function StudentHistory({ setSelected }) {
    setSelected('history');

    const { user } = useAuthContext();
    const [records, setRecords] = useState(null);

    useEffect(() => {
        const fetchHistory = async () => {
            const response = await fetch("/api/prescription/my", {
                headers: { 'Authorization': `Bearer ${user.token}` },
            });
            const json = await response.json();

            if (response.ok) {
                setRecords(json);
            }
            else {
                console.log(json.error)
            }
        }

        fetchHistory();
    }, []);

    return (
        <>
            <section className="font-Fredoka font-semibold text-[40px] mb-[30px] text-[#26148ca4] ">
                My History
            </section>
            <section >
                {(records && records.length !== 0 && records.map((item) => <HistoryTab currentHistory={item} />)) || <div className="text-[40px] font-Fredoka text-center ">No History !</div>}
            </section>
        </>
    );
}