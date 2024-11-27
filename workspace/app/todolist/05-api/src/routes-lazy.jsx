import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

const Layout = lazy(() => import("@components/Layout"));
const About = lazy(() => import("@pages/About"));
const Home = lazy(() => import("@pages/Home"));
const TodoList = lazy(() => import("@pages/TodoList"));
const TodoAdd = lazy(() => import("@pages/TodoAdd"));
const TodoDetail = lazy(() => import("@pages/TodoDetail"));
const TodoEdit = lazy(() => import("@pages/TodoEdit"));
const ErrorPage = lazy(() => import("@pages/ErrorPage"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="/home" /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "list", element: <TodoList /> },
        { path: "list/add", element: <TodoAdd /> },
        {
          path: "list/:_id/",
          element: <TodoDetail />,
          children: [{ path: "edit", element: <TodoEdit /> }],
        },
        { path: "error", element: <ErrorPage /> },
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
