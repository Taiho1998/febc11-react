import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// import Layout from "@components/layout";
// import MainPage from "@pages/index";
// import List from "@pages/boards/List";
// import New from "@pages/boards/New";
// import Detail from "@pages/boards/Detail";
// import Edit from "@pages/boards/Edit";
// import Signup from "@pages/user/Signup";
// import Login from "@pages/user/Login";

const Layout = lazy(() => import("@components/layout"));
const Detail = lazy(() => import("@pages/boards/Detail"));
const Edit = lazy(() => import("@pages/boards/Edit"));
const List = lazy(() => import("@pages/boards/List"));
const New = lazy(() => import("@pages/boards/New"));
// const ErrorPage = lazy(() => import("@pages/ErrorPage"));
const MainPage = lazy(() => import("@pages/index"));
const Login = lazy(() => import("@pages/user/Login"));
const Signup = lazy(() => import("@pages/user/Signup"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <MainPage /> },
        { path: ":type/", element: <List /> },
        { path: ":type/new", element: <New /> },
        { path: ":type/:_id", element: <Detail /> },
        { path: ":type/:_id/edit", element: <Edit /> },
        { path: "user/signup", element: <Signup /> },
        { path: "user/login", element: <Login /> },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
