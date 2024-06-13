import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
