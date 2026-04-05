import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center  text-black px-4">
            
            {/* Big 404 Text */}
            <h1 className="text-9xl font-extrabold mb-4">404</h1>

            {/* Message */}
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-center">
                Oops! Page Not Found
            </h2>

            <p className="text-lg text-center mb-6 max-w-md">
                The page you are looking for might have been removed or doesn't exist.
            </p>

            {/* Button */}
            <Link to="/">
                <button className="btn btn-primary text-white-600 font-semibold px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:text-black hover:bg-gray-200 transition duration-300">
                    Go Back Home
                </button>
            </Link>

        </div>
    );
};

export default ErrorPage;