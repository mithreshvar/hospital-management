import { useEffect, useState } from "react";
import HistoryTab from "../../../common/HistoryTab";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../../../hooks/useAuthContext";

export default function Prescription() {
    const { id } = useParams();
    const { user } = useAuthContext();
    const [record, setRecord] = useState(null);

    useEffect(() => {
        const fetchHistory = async () => {
            const response = await fetch("/api/prescription/" + id, {
                headers: { 'Authorization': `Bearer ${user.token}` },
            });
            const json = await response.json();

            if (response.ok) {
                setRecord(json);
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
                Prescription
            </section>
            <section >
                {record && record.length !== 0 && <HistoryTab currentHistory={record} />}
            </section>
        </>
    );
}