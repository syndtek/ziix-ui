import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import {
  Home,
  CatalogViewPage,
  ListOfCatalogsPage,
  ReleasePage,
} from "./pages";
import { Navbar } from "./components";

const App = () => {
  // ! Create router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "catalog/:catalogId",
      element: <CatalogViewPage />,
    },
    {
      path: "catalogs/",
      element: <ListOfCatalogsPage />,
    },
    {
      path: "release/:releaseCode",
      element: <ReleasePage />,
    },
  ]);

  return (
    <>
      <Navbar></Navbar>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
