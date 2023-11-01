import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/about-us",
      element: (
        <Layout>
          <AboutUs />
        </Layout>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
