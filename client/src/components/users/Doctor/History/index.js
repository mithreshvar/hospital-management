import { useEffect, useState } from "react";
import HistoryLogs from "./HistoryLogs";
import { useAuthContext } from "../../../../hooks/useAuthContext";

export default function History({ setSelected }) {
    setSelected('history');

    const { user } = useAuthContext();
    const [logs, setLogs] = useState(null);

    useEffect(() => {
        const fetchHistoryLog = async () => {
            const response = await fetch("/api/historyLog", {
                headers: { 'Authorization': `Bearer ${user.token}` },
            });
            const json = await response.json();

            if (response.ok) {
                setLogs(json);
            }
            else {
                console.log(json.error)
            }
        }

        fetchHistoryLog();
    }, []);

    return (
        <>
            <section className="font-Fredoka font-semibold text-[40px] mb-[30px] text-[#26148ca4] ">
                Record History
            </section>
            <section >
                {(logs && logs.length !== 0 && logs.map((item) => <HistoryLogs currentHistory={item} />)) || <div className="text-[40px] font-Fredoka text-center ">No Recorded History !</div>}
            </section>
        </>
    );
}