import UserLayout from "../pages/layout/UserLayout";
import UserDashboard from "../pages/dashboard/UserDashboard";
import WorkInProgress from "../pages/errors/work-in-progress";

export const UserRouter = [
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      { index: true, element: <UserDashboard /> },
      { path: "all-users", element: <WorkInProgress /> },
      { path: "reports", element: <WorkInProgress /> },
      { path: "settings", element: <WorkInProgress /> },
    ],
  },
];
