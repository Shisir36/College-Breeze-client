import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CollegeDetails = () => {
    const { id } = useParams();
    const [collegeDetails, setCollegeDetails] = useState({});

    useEffect(() => {
        fetch(`https://college-breezre-server-shisir36.vercel.app/details/${id}`)
            .then((res) => res.json())
            .then((data) => setCollegeDetails(data)); // Assuming the API returns an array of colleges, and we only need the first one
    }, [id]);

    // Conditional rendering
    if (!collegeDetails.college_name) {
        return <div>Loading...</div>;
    }

    // Now you can safely destructure collegeDetails since it is guaranteed to have properties.
    const { college_name, image_url, admission_dates, admission_process, events, research_history, sports } = collegeDetails;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="mb-8 lg:mb-0">
                    <img className="w-full h-auto rounded-lg shadow-lg" src={image_url} alt={college_name} />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-4">{college_name}</h1>
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold">Admission Dates</h2>
                        <ul>
                            <li>Fall: {admission_dates?.fall}</li>
                            <li>Spring: {admission_dates?.spring}</li>
                            <li>Summer: {admission_dates?.summer}</li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold">Admission Process</h2>
                        <p>{admission_process}</p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold">Events</h2>
                        <ul>
                            {events?.map((event, index) => (
                                <li key={index}>{event}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold">Research History</h2>
                        <p>{research_history}</p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold">Sports</h2>
                        <ul>
                            {sports?.map((sport, index) => (
                                <li key={index}>
                                    Sport: {sport.sport_name}, Team: {sport.team}, Coach: {sport.coach}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;
