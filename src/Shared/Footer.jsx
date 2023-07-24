import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-black to-gray-700 text-white py-8 mt-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold">College Breeze</h3>
                        <p className="text-sm mt-2">123 College Street, City</p>
                        <p className="text-sm">Country, ZIP Code</p>
                    </div>
                    <div className="md:col-span-2 lg:col-span-3 flex items-center justify-center md:justify-start space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-white hover:text-gray-300">
                            <FaFacebook size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
                <hr className="border-white my-8" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a href="#" className="text-white hover:text-gray-300">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-300">Admissions</a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-300">Programs</a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-300">About Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-2 lg:col-span-3 mx-auto md:mx-0 text-center md:text-left">
                        <h4 className="text-lg font-semibold">Contact Us</h4>
                        <p className="mt-4 text-sm">
                            <span className="font-semibold">Email:</span> info@collegeadmission.com
                        </p>
                        <p className="text-sm">
                            <span className="font-semibold">Phone:</span> +1 123-456-7890
                        </p>
                    </div>
                </div>
                <hr className="border-white my-8" />
                <p className="text-center md:text-left text-sm">&copy; {new Date().getFullYear()} College Breeze. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;