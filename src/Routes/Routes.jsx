import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Books from "../Pages/Books/Books";
import Homepage from "../Pages/Homepage/Homepage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children : [
      {
        index : true,
        element : <Homepage />
      },
      {
        path : '/books',
        element : <Books />
      }
    ],
    errorElement : <ErrorPage />
  },
])
export default router;