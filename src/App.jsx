import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/landing",
          element: <h1>Landing Page</h1>
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signup",
          element: <Signup />
        },
        {
          path: "/forgot-password",
          element: <ForgotPassword />
        },
        {
          path: "/transactions",
          element: <h1>Transactions Page</h1>
        },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App;