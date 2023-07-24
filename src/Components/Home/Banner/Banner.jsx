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
            </div>

        </div>
    );
};

export default Banner;