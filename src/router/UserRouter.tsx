import UserLayout from "../pages/layout/UserLayout";
import UserDashboard from "../pages/dashboard/UserDashboard";

export const UserRouter = [{ path: "/user", element: <UserLayout />, children: [{ index: true, element: <UserDashboard /> }] }];
