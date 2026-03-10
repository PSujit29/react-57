import React from "react";
import { Link } from "react-router";

const Error404: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-white px-5 py-10 text-center">
      <h1 className="mb-4 text-7xl md:text-[100px] font-bold text-[#c80032] leading-none">404</h1>
      <h2 className="text-xl md:text-2xl font-semibold text-[#006b44]">Page Not Found</h2>
      <p className="my-5 text-lg md:text-2xl text-[#333]">We are thrilled to have you here, but this page doesn't exist.</p>
      <Link to="/" className="inline-block rounded-md bg-[#006b44] px-8 py-4 font-semibold text-white transition-opacity hover:opacity-90">
        Go Home
      </Link>
    </div>
  );
};

export default Error404;
