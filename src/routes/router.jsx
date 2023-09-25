import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../admin/views/Home";
import Panel from "../admin/views/Panel";
import CategoryCreate from "../admin/views/CategoryCreate";
import Category from "../admin/views/Category";

const router = createBrowserRouter([
    {
      path: "/admin/inicio",
      element: <Home />,
    },
    {
      path: "/admin/panel",
      element: <Panel />,
    },
    {
      path: "/admin/crear-categoria",
      element: <CategoryCreate />,
    },
    {
      path: "/admin/categoria/:id",
      element: <Category />,
    },
    {
      path: "/admin/crear-talle/:category_id",
      element: <Category />,
    },
]);

export default router