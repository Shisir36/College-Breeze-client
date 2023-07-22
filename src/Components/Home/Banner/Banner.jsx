import { FaSearch } from "react-icons/fa";
import backgroundImage from "../../../assets/banner-image/pang-yuhao-_kd5cxwZOK4-unsplash.jpg"
const Banner = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: "cover" }} className=" md:min-h-screen lg:min-h-screen relative min-h-full">
            <div className="md:absolute top-[30%] left-[200px] text-center text-white md:w-[75%] h-full md:p-0 py-8">
                <h1 className=" md:text-2xl">COLLEGE BREEZE ADMISSION 23</h1>
                <p className=" md:text-6xl text-3xl md:mt-5 mt-3 "><span className=" text-orange-400">Secure Your Spot in Your Dream College</span><br />
                    Book Your Admission Today!
                    </p>
                <h6 className=" md:mt-5 mt-3 md:text-xl">Discover a World of Opportunities.</h6>
                <form className=" mt-10">
                    <input type="text" placeholder="enter your keyword here" className=" md:px-36 md:py-4 py-2 px-3 rounded-[24px] relative text-black" />
                    <div className=" md:absolute md:left-[350px]
                    lg:left-[500px] md:top-[280px] w-0 hidden md:block lg:block">
                    <FaSearch className=" text-black text-xl"/>
                    </div>
                    <input type="submit" value="Serach" className=" bg-orange-400 md:px-9 md:absolute md:left-[680px] md:top-[264px] md:py-3 py-[5px] px-5 lg:left-[820px]  rounded-[24px]" />
                </form>
            </div>

        </div>
    );
};

export default Banner;