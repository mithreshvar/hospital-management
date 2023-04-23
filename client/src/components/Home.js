import Doctor from './users/Doctor';
import Student from './users/Student';

export default function Home({ type }) {
    if (type === 'Doctor')
        return (
            <Doctor />
        );

    if (type === 'Student')
        return (
            <Student />
        );

    if (type === 'Teacher')
        return (
            <div>Teacher</div>
        );
}