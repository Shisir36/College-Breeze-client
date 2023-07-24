import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";

const AdmissionDetails = () => {
    const { id } = useParams();
    const { currentUser } = useContext(Authcontext)
    const [formData, setFormData] = useState({
        candidateName: "",
        subject: "",
        candidateEmail: "",
        candidatePhone: "",
        address: "",
        dob: "",
        image: "",
        email:currentUser?.email
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if currentUser is not null or undefined
        // Perform the POST request to add admission details
        fetch(`http://localhost:5000/admissionDetails/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data); // Handle the response if needed
                // Reset the form after successful submission
                setFormData({
                    candidateName: "",
                    subject: "",
                    candidateEmail: "",
                    candidatePhone: "",
                    address: "",
                    dob: "",
                });
            })
            .catch((error) => {
                console.error("Error submitting form:", error);
            });
    };

    return (
        <div className="p-4 border shadow-md mt-4 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-center">Admission Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="candidateName" className="block text-gray-700">Candidate Name:</label>
                    <input
                        type="text"
                        id="candidateName"
                        name="candidateName"
                        value={formData.candidateName}
                        onChange={(e) => setFormData({ ...formData, candidateName: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-gray-700">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="candidateEmail" className="block text-gray-700">Candidate Email:</label>
                    <input
                        type="email"
                        id="candidateEmail"
                        name="candidateEmail"
                        value={formData.candidateEmail}
                        onChange={(e) => setFormData({ ...formData, candidateEmail: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="candidatePhone" className="block text-gray-700">Candidate Phone:</label>
                    <input
                        type="tel"
                        id="candidatePhone"
                        name="candidatePhone"
                        value={formData.candidatePhone}
                        onChange={(e) => setFormData({ ...formData, candidatePhone: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="address" className="block text-gray-700">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="dob" className="block text-gray-700">Date of Birth:</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="image" className="block text-gray-700">Image:</label>
                    <input
                        type="url"
                        id="image"
                        name="image"
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        required
                    />
                </div>
                <input type="submit" className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-blue-300" value="Submit" />
            </form>
        </div>
    );
};

export default AdmissionDetails;
