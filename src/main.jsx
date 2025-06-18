import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Stopwatch from "./components/Stopwatch/Stopwatch.jsx";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/stopwatch",
    element: <Stopwatch />,
  },
  {
    path: "/password-generator",
    element: <PasswordGenerator />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
