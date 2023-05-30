import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./pages/login/Login";
import SignIn from "./pages/signIn/SignIn";
import "./app.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/tasks",
      element: <Layout />,
    },
    {
      path: "/signIn",
      element: <SignIn />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
