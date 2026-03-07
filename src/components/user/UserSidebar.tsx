import { NavLink } from "react-router";
import { HiChartPie, HiUsers, HiDocumentReport, HiCog } from "react-icons/hi";

export const UserSidebar = () => {
  const navLinks = [
    { name: "Dashboard", path: "/user", end: true, icon: <HiChartPie className="w-5 h-5" /> },
    { name: "Users", path: "/user/all-users", end: false, icon: <HiUsers className="w-5 h-5" /> },
    { name: "Reports", path: "/user/reports", end: false, icon: <HiDocumentReport className="w-5 h-5" /> },
    { name: "Settings", path: "/user/settings", end: false, icon: <HiCog className="w-5 h-5" /> },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-emerald-800 text-white shadow-xl z-20">
      <div className="text-2xl font-bold p-6 tracking-wide border-b border-emerald-700/50">
        Admin Panel
      </div>
      <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end={link.end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-md transition-colors font-medium ${
                isActive
                  ? "bg-emerald-900 text-white shadow-sm border-l-4 border-emerald-400"
                  : "text-emerald-100 hover:bg-emerald-700 hover:text-white"
              }`
            }
          >
            {link.icon}
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
