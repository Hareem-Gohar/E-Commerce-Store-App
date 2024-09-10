import React from 'react'
import { Link } from 'react-router-dom';
import NavigateBack from '../Common/NavigateBack';
const Error = () => {
    return (<>
    <div className="my-3 mx-6"> <NavigateBack/></div>
   
    
      <div className="h-full flex flex-col items-center justify-centertext-gray-800 py-10">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Page Not Found</p>
        <Link to="/" className="bg-sky-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-sky-600 transition-colors duration-300">
          Go to Home
        </Link>
      </div></>
    );
}

export default Error