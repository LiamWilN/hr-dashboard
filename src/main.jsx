import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Index from "./routes/Index.jsx";
import NotFound from "./routes/404.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <NotFound />,
  },
  {
    path: "/dashboard",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: "dashboard/jobs",
      },
      {
        path: "dashboard/applicants",
      },
      {
        path: "dashboard/employees",
      },
      {
        path: "dashboard/settings",
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
