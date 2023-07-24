import { useState } from "react";
import Banner from "../Banner/Banner";
import College from "../College/College";
import CollegeGallery from "../CollegeGallery/CollegeGallery";
import ResearchPaperSection from "../ResearchPaperSection";
import ReviewSection from "../ReviewSection/ReviewSection";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle search and update the searchResults state
  const handleSearch = (keyword) => {
    // Implement your search logic here and update the searchResults state accordingly
    // For example, you can fetch data from the server based on the keyword
    // and then update the searchResults state with the fetched data
    // For now, let's just set it to an empty array
    setSearchResults([]);
  };
  return (
    <div>
      <Banner onSearch={handleSearch} />
      <College searchResults={searchResults} />
      <CollegeGallery />
      <ReviewSection />
      <ResearchPaperSection />
    </div>
  );
};

export default Home;