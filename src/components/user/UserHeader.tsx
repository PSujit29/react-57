import { HiMenu } from "react-icons/hi";
// import axiosInstance from "../../api/axiosInstance";

export const UserHeader =  () => {
  // const response = await axiosInstance.get()
  return (
    <header className="bg-white shadow-sm px-4 md:px-8 py-3 flex justify-between items-center border-b border-gray-200 z-10 relative">
      <div className="flex items-center gap-3">
        <button className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
          <HiMenu className="w-6 h-6" />
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">Dashboard</h1>
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        <span className="text-sm md:text-base text-gray-600 font-medium hidden sm:block">
          Welcome, <strong className="text-gray-900">Admin</strong>
        </span>

        <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-emerald-100 border-2 border-emerald-600 flex items-center justify-center overflow-hidden shrink-0 cursor-pointer hover:ring-2 hover:ring-emerald-500 hover:ring-offset-2 transition-all">
          <img src="https://i.pravatar.cc/150?img=32" className="w-full h-full object-cover" alt="Admin Avatar" />
        </div>
      </div>
    </header>
  );
};
