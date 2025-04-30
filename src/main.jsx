import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root/Root.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import Orders from "./components/Orders/Orders.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import Profiles from "./components/Profiles/Profiles.jsx";
import DashBoard from "./components/DashBoard/DashBoard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/order",
        // Component: Orders,
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profiles></Profiles>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashBoard></DashBoard>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
