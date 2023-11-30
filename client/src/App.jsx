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
  AllJob,
  AddJob,
} from "./pages";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as addJobAction } from "./pages/AddJob";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as allJobsLoader } from "./pages/AllJob";


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
            index:true,
            element:<AddJob/>,
            action: addJobAction,
          },
          {
            path: "admin",
            element: <Admin />,
          },
          {
            path: "all-jobs",
            element: <AllJob />,
            loader:allJobsLoader,
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
