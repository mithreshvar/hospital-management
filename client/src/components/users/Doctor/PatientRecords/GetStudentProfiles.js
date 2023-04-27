import { useParams } from "react-router-dom";
import Profile from "../../../common/Profile";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../../../hooks/useAuthContext";

export default function GetStudentProfiles() {

    const { id } = useParams();
    const { user } = useAuthContext();

    const [profileInfo, setProfileInfo] = useState(null);

    useEffect(() => {

        const fetchPatientProfile = async () => {
            const response = await fetch("/api/patientProfiles/user/" + id, {
                headers: { 'Authorization': `Bearer ${user.token}` },
            });

            const json = await response.json();

            if (!response.ok) {
                console.log(json.error);
            }

            if (response.ok) {
                setProfileInfo(json);
            }
        }

        fetchPatientProfile();

    }, [])

    return (
        <>
            {profileInfo && <Profile profileInfo={profileInfo} />}
        </>
    );
}