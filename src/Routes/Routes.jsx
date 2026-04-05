import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Books from "../Pages/Books/Books";
import Homepage from "../Pages/Homepage/Homepage";

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
    ]
  },
])
export default router;