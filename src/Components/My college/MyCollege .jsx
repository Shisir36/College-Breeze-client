import { useContext, useState, useEffect } from "react";
import { Authcontext } from "../Provider/AuthProvider";

const MyCollege = () => {
    const { currentUser } = useContext(Authcontext);
    const [mycollegeDetails, setCollegeDetails] = useState([]);
    const [review, setReview] = useState({ rating: 0, comment: "" });

    const handleReviewChange = (e) => {
        const { name, value } = e.target;
        setReview((prevReview) => ({ ...prevReview, [name]: value }));
    };
    const handleReviewSubmit = (e, collegeId) => {
        e.preventDefault();
        // Here, you can perform the logic to add the review to the college's reviews section.
        // You can save the review data to the database or handle it in any other way as per your backend implementation.
        console.log(review);

        // Check if the college ID is available
        if (collegeId) {
            // Send a POST request to add the review and comment to the specific college
            fetch(`http://localhost:5000/addReview/${collegeId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(review),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data); // Handle the response if needed
                    // Clear the review input fields after successful submission
                    setReview({ rating: 0, comment: "" });
                })
                .catch((error) => {
                    console.error("Error adding review:", error);
                });
        } else {
            console.error("College ID not available");
        }
    };

    useEffect(() => {
        // Fetch college details based on the user's email from the backend
        fetch(`http://localhost:5000/mycollage?email=${currentUser?.email}`)
            .then((res) => res.json())
            .then((data) => setCollegeDetails(data))
            .catch((error) => {
                console.error("Error fetching college details:", error);
            });
    }, [currentUser?.email]);

    return (
        <div className=" px-5 md:grid grid-cols-3 gap-5">
            {mycollegeDetails.map((collegeDetails) => (
                <div key={collegeDetails._id}>
                    {/* College details table */}
                   <div className=" border-2">
                   <div className="bg-white rounded-lg p-4 mb-4 h-[350px]">
                        <h2 className="text-xl font-semibold mb-4">College Details</h2>
                        <table className="table-auto w-full">
                            <tbody>
                                <tr>
                                    <td className="font-semibold pr-4">College Name:</td>
                                    <td>{collegeDetails.name}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold pr-4">Location:</td>
                                    <td>{collegeDetails.location}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold pr-4">Website:</td>
                                    <td>{collegeDetails.website}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold pr-4">Programs:</td>
                                    <td>
                                        <ul>
                                            {collegeDetails.programs.map((program, index) => (
                                                <li key={index}>{program}</li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-semibold pr-4">Description:</td>
                                    <td>{collegeDetails.description}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold pr-4">Admission Requirements:</td>
                                    <td>{collegeDetails.admissionRequirements}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Add Review Form */}
                    <div className="bg-white rounded-lg  p-4 mb-4">
                        <h2 className="text-xl font-semibold mb-4">Add Review</h2>
                        <form onSubmit={(e) => handleReviewSubmit(e, collegeDetails._id)}>
                            <div className="flex items-center mb-4">
                                <label htmlFor="rating" className="mr-2 font-semibold">
                                    Rating:
                                </label>
                                <select
                                    id="rating"
                                    name="rating"
                                    className="rounded-md border-gray-300 focus:ring focus:ring-blue-200"
                                    value={review.rating}
                                    onChange={handleReviewChange}
                                    required
                                >
                                    <option value="0">Select Rating</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="comment" className="font-semibold">
                                    Comment:
                                </label>
                                <textarea
                                    id="comment"
                                    name="comment"
                                    className="w-full rounded-md border-gray-300 border focus:ring focus:ring-blue-200"
                                    value={review.comment}
                                    onChange={handleReviewChange}
                                    required

                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-orange-400 text-white rounded-md px-4 py-2 hover:bg-orange-500"
                            >
                                Submit Review
                            </button>
                        </form>
                    </div>
                   </div>
                </div>
            ))}
        </div>
    );
};

export default MyCollege;
