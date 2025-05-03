import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Landing from "./pages/Landing";
import AuthLayout from "./components/layout/AuthLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import PublicRoute from "./components/layout/PublicRoute";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <ProtectedRoute><Home /></ProtectedRoute>
        },
        {
          path: "/landing",
          element: <PublicRoute><Landing /></PublicRoute>
        },
        {
          path: "/login",
          element: <PublicRoute><Login /></PublicRoute>
        },
        {
          path: "/signup",
          element: <PublicRoute><Signup /></PublicRoute>
        },
        {
          path: "/forgot-password",
          element: <PublicRoute><ForgotPassword /></PublicRoute>
        },
        {
          path: "/transactions",
          element: <ProtectedRoute><h1>Transactions Page</h1></ProtectedRoute>
        },
      ]
    }
  ])

  return (
    <AuthLayout>
      <RouterProvider router={router} />
    </AuthLayout>
  )
}

export default App;