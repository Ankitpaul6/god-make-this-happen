import { Link } from "react-router-dom";
import Homelayout from "../Layouts/Homelayout";
import HomePageimage from "../assets/Images/homePageMainImage.png";

function HomePage(){
    return (
        <Homelayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
            <div className="w-1/2 space-y-6">
                <h1 className="text-5xl font-semifold">
                    Find out best
                    <span className="text-yellow-500 font-bold">
                        Online Courses
                    </span>
                    </h1>
                    <p className="text-xl text-gray-200">
                        we have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost.
                    </p>
                    <div className=" space-x-6">
                        <Link to="/courses">
                        <button className="bg-blue-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-purple-600 transition-all ease-in-out duration-300">
                            explore courses
                        </button>
                        </Link>
                        <Link to="/contact">
                        <button className="border border-red-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                            Contact us 
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                <img alt="homepage image" src={HomePageimage} />

                </div>
            </div>
        </Homelayout>
    );

}

export default HomePage;
