import { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const ReviewSection = () => {
    const [collegeReviews, setCollegeReviews] = useState([]);

    useEffect(() => {
        // Fetch college reviews from the backend
        fetch("https://college-breezre-server-shisir36.vercel.app/collegereview")
            .then((res) => res.json())
            .then((data) => setCollegeReviews(data))
            .catch((error) => {
                console.error("Error fetching college reviews:", error);
            });
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <h2 className="mb-8 underline col-span-full text-center mt-14 font-bold text-4xl text-orange-500">College Reviews & Feedback</h2>
            {collegeReviews.length === 0 ? (
                <p className="col-span-full text-lg text-gray-600 text-center">No reviews available</p>
            ) : (
                <>
                    {collegeReviews.map((review) => (
                        <div key={review._id} className="bg-white rounded-lg p-6 shadow-md">
                            <h3 className="text-2xl font-semibold mb-3">{review.name}</h3>
                            <div className="flex items-center mb-4">
                                <span className="mr-2 font-semibold text-lg">Rating:</span>
                                {review.reviews?.length > 0 && (
                                    <Rating
                                        placeholderRating={parseInt(review.reviews[0]?.rating)}
                                        readonly
                                        emptySymbol={<FaRegStar className="text-orange-300 text-xl" />}
                                        placeholderSymbol={<FaStar className="text-orange-400 text-xl" />}
                                        fullSymbol={<FaStar className="text-orange-400 text-xl" />}
                                    />
                                )}
                            </div>
                            <span className="font-bold">Feedback:  {review.reviews?.length > 0 && (
                                <span className="text-gray-600 mb-2">{review.reviews[0]?.comment}</span>
                            )}</span>
                           
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default ReviewSection;
