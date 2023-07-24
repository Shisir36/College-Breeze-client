
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
    const [admission, setAdmission] = useState([]);
    useEffect(() => {
        fetch("https://college-breezre-server-shisir36.vercel.app/admission")
            .then(res => res.json())
            .then(data => setAdmission(data))
    }, [])
    return (
        <div className=" md:grid grid-cols-3 gap-5 mt-10 px-2 md:px-0 ">
            {
                admission.map(collegeName => (
                    <Link  to={`/admissionDetails/${collegeName._id}`} key={collegeName._id}>
                        <h1 className=" p-5 border shadow-md text-center mb-5 md:mb-0">{collegeName.name}
                        </h1>
                    </Link>
                ))
            }
        </div>
    );
};

export default Admission;
