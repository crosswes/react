// * Components
import App from "../App";
import Loading from "../components/Loading/Loading";

// * Hooks
import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

// * Lazy components
const MainPage = lazy(() => import("../pages/Main/MainPage"));
const CounterPage = lazy(() => import("./Counter/CounterPage"));
const FormPage = lazy(() => import("./Form/FormPage"));

// * Element
const Element = ({ component }) => {
  return <Suspense fallback={<Loading />}>{component}</Suspense>;
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Element component={<MainPage />} />,
      },
      {
        path: "/counter",
        element: <Element component={<CounterPage />} />,
      },
      {
        path: "/form",
        element: <Element component={<FormPage />} />,
      },
      {
        path: "*",
        element: <h1>Page not found</h1>,
      },
    ],
  },
]);

export default routes;
