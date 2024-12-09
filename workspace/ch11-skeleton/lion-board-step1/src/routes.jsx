import { createBrowserRouter } from "react-router-dom";

import Layout from "@components/layout";
import MainPage from "@pages/index";
import List from "@pages/boards/List";
import New from "@pages/boards/New";
import Detail from "@pages/boards/Detail";
import Edit from "@pages/boards/Edit";
import Signup from "@pages/user/Signup";
import Login from "@pages/user/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: ":type/", element: <List /> },
      { path: ":type/new", element: <New /> },
      { path: ":type/:_id", element: <Detail /> },
      { path: ":type/:_id/edit", element: <Edit /> },
      { path: "users/signup", element: <Signup /> },
      { path: "users/login", element: <Login /> },
    ],
  },
]);

export default router;
