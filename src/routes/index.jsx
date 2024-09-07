import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import App from "../App";
import BlogPage from "../components/BlogPage/BlogPage";
import BlogCreateFormPage from "../components/BlogCreateFormPage/BlogCreateFormPage";
import BlogEditFormPage from "../components/BlogEditFormPage/BlogEditFormPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h3 className="text-center">Sorry Nothing Found .... !😊</h3>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/blogs/create-blog",
        element: <BlogCreateFormPage />,
      },
      {
        path: "/blogs/:blogId",
        element: <BlogPage />,
      },
      {
        path: "/blogs/:blogId/edit",
        element: <BlogEditFormPage />,
      }
    ],
  },
]);
