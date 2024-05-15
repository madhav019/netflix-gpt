import React from "react";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Body;
