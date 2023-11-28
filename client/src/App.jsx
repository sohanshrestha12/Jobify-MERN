import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Layout,
  HomeLayout,
  Register,
  Login,
  Error,
  DashboardLayout,
  Admin,
} from "./pages";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/DashboardLayout";

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Layout />,
      },
      {
        path: "register",
        element: <Register />,
        action:registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action:loginAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
        loader:dashboardLoader,
        children: [
          {
            path: "admin",
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
