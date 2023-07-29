import React from "react";

const NewsLetter = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-gray-800 space-y-4 h-[80vh] text-center">
      <h6 className="absolute text-6xl md:text-8xl font-bold -z-50 text-slate-200">Newsletter</h6>
      <h6 className="text-3xl md:text-4xl font-bold">Subscribe our Newsletter</h6>
      <p className="max-w-[32rem] text-lg font-medium">Get the latest information and promo offers directly</p>
      <div className="flex flex-wrap justify-center items-center space-x-4 gap-4">
        <input
          type="text"
          placeholder="Enter your email address"
          className="flex flex-grow w-80 border border-gray-600 py-1 px-2 md:px-4"
        />
        <button className="text-white bg-gray-900 border border-gray-500 px-4 py-2">Get Started</button>
      </div>
    </div>
  );
};

export default NewsLetter;
