import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Home from "./Components/Home/Home.jsx";
import AuthProvider from "./AuthProvider.jsx";
import CardDetails from "./Components/CardDetails.jsx";
import Root from "./Components/Root/Root.jsx";
import RecomendedApp from "./Components/RecomendedApp.jsx";
import EducationApp from "./Components/EducationApp.jsx";
import HealthApp from "./Components/HealthApp.jsx";
import GameApp from "./Components/GameApp.jsx";
import ProductivityApp from "./Components/ProductivityApp.jsx";
import PopularApp from "./Components/PopularApp.jsx";
import LogIn from "./Components/LogIn.jsx";
import Register from "./Components/Register.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import MyProfile from "./Components/MyProfile.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    // errorElement: <p>error</p>,
    children: [
      {
        index: true,
        element: <Root></Root>,
        loader: ()=>fetch("/AppData.json") ,
      },
      {
        path: "/cardDetails/:id",
        element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        loader: ()=>fetch("/AppData.json") ,
      },
      {
        path: "/popular",

        element: <PopularApp></PopularApp>,
      },
      {
        path: "/recomended",

        element: <RecomendedApp></RecomendedApp>,
      },
      {
        path: "/education",

        element: <EducationApp></EducationApp>,
      },
      {
        path: "/health",

        element: <HealthApp></HealthApp>,
      },
      {
        path: "/games",

        element: <GameApp></GameApp>,
      },
      {
        path: "/productivity",

        element: <ProductivityApp></ProductivityApp>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myprofile",
        element: <MyProfile></MyProfile>,
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
