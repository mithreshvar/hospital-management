import HistoryTab from "../../common/HistoryTab";

export default function StudentHistory({ setSelected }) {
    setSelected('history');

    return (
        <>
            <HistoryTab />
            <HistoryTab />
            <HistoryTab />
            <HistoryTab />
            <HistoryTab />
        </>
    );
}