import React from "react";
import { Link } from "react-router";

const Error404: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-5 py-25 text-center">
      <h1 className="my-10 text-[100px] font-bold text-[#c80032] leading-none">404</h1>
      <h2 className="text-2xl font-semibold text-[#006b44]">Page Not Found</h2>
      <p className="my-5 text-3xl text-[#333]">We are thrilled to have you here, but this page doesn't exist.</p>
      <Link to="/" className="inline-block rounded-md bg-[#006b44] px-10 py-6 font-semibold text-white transition-opacity hover:opacity-90">
        Go Home
      </Link>
    </div>
  );
};

export default Error404;
