import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import LoginPage from "../Pages/Login";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/Login",
      element: <LoginPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
