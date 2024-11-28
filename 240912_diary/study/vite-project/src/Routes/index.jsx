import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import New from "../Pages/New";
import Edit from "../Pages/Edit";
import Diary from "../Pages/Diary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new",
    element: <New />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "/diary/:id",
    element: <Diary />,
  },
]);
