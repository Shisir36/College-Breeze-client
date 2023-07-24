import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const College = () => {
  const [colleges, setColleges] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/college")
      .then((res) => res.json())
      .then((data) => setColleges(data.slice(0, 3)));
  }, []);

  useEffect(() => {
    const filteredColleges = colleges.filter((college) =>
      college.college_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredColleges);
  }, [searchQuery, colleges]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the searchQuery state with the input value
  };

  return (
    <div>
      <h1 className="text-4xl font-bold my-10 text-center text-orange-500">Colleges</h1>
      <div className="flex justify-center mb-4">
        <form className="flex items-center">
          <input
            type="text"
            placeholder="Search by college name"
            value={searchQuery}
            onChange={handleSearchChange}
            className="border-2 border-orange-400 rounded-md px-4 py-2 mr-2"
          />
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-7">
        {searchResults.length > 0 ? (
          searchResults.map((college) => (
            <div key={college.id} className="bg-white border">
              <img src={college.image_url} alt="College Image" className="w-full h-44 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{college.college_name}</h2>
                <p className="text-gray-600 mb-4">
                  Admission Dates: Fall: {college.admission_dates.fall},
                  Spring: {college.admission_dates.spring}, Summer:{" "}
                  {college.admission_dates.summer}
                </p>
                <p className="text-gray-600 mb-4">
                  Events: {college.events.join(", ")}
                </p>
                <p className="text-gray-600 mb-4">
                  Research History: {college.research_history}
                </p>
                <p className="text-gray-600 mb-4">
                  Sports: {college.sports[0].sport_name}
                </p>
                <Link to={`/collegeDetails/${college._id}`}>
                  <div className="flex justify-start mt-8">
                    <button className="bg-orange-400 hover:bg-orange-500 text-white px-7 py-2 rounded-md">
                      Details
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))
        ) : (
          colleges.map((college) => (
            <div key={college.id} className="bg-white border">
              <img src={college.image_url} alt="College Image" className="w-full h-44 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{college.college_name}</h2>
                <p className="text-gray-600 mb-4">
                  Admission Dates: Fall: {college.admission_dates.fall},
                  Spring: {college.admission_dates.spring}, Summer:{" "}
                  {college.admission_dates.summer}
                </p>
                <p className="text-gray-600 mb-4">
                  Events: {college.events.join(", ")}
                </p>
                <p className="text-gray-600 mb-4">
                  Research History: {college.research_history}
                </p>
                <p className="text-gray-600 mb-4">
                  Sports: {college.sports[0].sport_name}
                </p>
                <Link to={`/collegeDetails/${college._id}`}>
                  <div className="flex justify-start mt-8">
                    <button className="bg-orange-400 hover:bg-orange-500 text-white px-7 py-2 rounded-md">
                      Details
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default College;
