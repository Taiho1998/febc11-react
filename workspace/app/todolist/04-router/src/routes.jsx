import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "@components/Layout";
import Home from "@pages/Home";
import About from "@pages/About";
import TodoList from "@pages/TodoList";
import TodoAdd from "@pages/TodoAdd";
import TodoDetail from "@pages/TodoDetail";
import TodoEdit from "@pages/TodoEdit";
import ErrorPage from "@pages/ErrorPage";

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
