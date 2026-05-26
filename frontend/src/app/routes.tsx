import { createBrowserRouter } from "react-router";
import { MainLayout } from "./MainLayout";
import { Portfolio } from "./pages/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Portfolio },
    ],
  },
]);
