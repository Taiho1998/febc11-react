import Page1 from "./Page1";
import Home from "./Home";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Page2 from "./Page2";
import Layout from "./Layout";

const router = createBrowserRouter(
  [
    // {
    //   path: "/",
    //   element: <Home />,
    // },
    // {
    //   path: "/page1",
    //   element: <Page1 />,
    // },
    // {
    //   path: "/page2",
    //   element: <Page2 />,
    // },
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="/home" /> },
        { path: "home", element: <Home /> },
        { path: "page1", element: <Page1 /> },
        { path: "page2", element: <Page2 /> },
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
