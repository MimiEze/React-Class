import { createBrowserRouter, Router, RouterProvider } from "react-router";
import RootLayout from "../layouts/RootLayouts";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout"
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function AppRoutes() {
  const routes = [
    {
        path: "/",
        element: <RootLayout/>,
        children: [
          {
              // path:"/",
              index: true,
              element:<Home/>,
          },
        ],
    },
    {
        // path: "auth",
        element: <AuthLayout />,
        children: [
          {
              path:"login",
              element:<Login />,
          },
          {
              path:"register",
              element:<Register/>,
          },
        ],
    },
  ];

  const router = createBrowserRouter(routes);
  
  return  <RouterProvider router={router}/>;
}
