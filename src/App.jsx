import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./components/layout/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <h1>Home Page</h1>
        },
        {
          path: "/landing",
          element: <h1>Landing Page</h1>
        },
        {
          path: "/login",
          element: <h1>Login Page</h1>
        },
        {
          path: "/signup",
          element: <h1>Signup Page</h1>
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