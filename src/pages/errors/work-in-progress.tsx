import React from "react";
import { Link } from "react-router";

const WorkInProgress: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-white px-5 py-10 text-center">
      {/* Visual Header */}
      <h1 className="my-10 text-6xl md:text-[80px] font-bold text-emerald-800 leading-none">Work In Progress</h1>

      {/* Under Construction + CSS Loader */}
      <div className="flex items-center justify-center gap-3">
        <h2 className="text-2xl font-semibold text-emerald-800">Under Construction</h2>
        <div className="flex gap-1">
          <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-800 [animation-delay:-0.3s]"></span>
          <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-800 [animation-delay:-0.15s]"></span>
          <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-800"></span>
        </div>
      </div>

      <p className="my-5 text-2xl md:text-3xl text-rose-700">We are working hard to bring this feature to you.</p>

      <Link to="/" className="inline-block rounded-md bg-emerald-800 px-10 py-6 font-semibold text-white transition-opacity hover:opacity-90">
        Go Home
      </Link>
    </div>
  );
};

export default WorkInProgress;
