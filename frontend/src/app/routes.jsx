import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App
  }
]);
export {
  router
};
