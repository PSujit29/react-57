import { createBrowserRouter, RouterProvider } from "react-router";
import Error404 from "../pages/errors/Error-404";
import { AuthRouter } from "./AuthRouter";
import { UserRouter } from "./UserRouter";

const router = createBrowserRouter([
  ...AuthRouter,
  ...UserRouter,
  { path: "*", element: <Error404 /> },
]);

export default function RouterConfig() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
