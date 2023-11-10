import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MantineProvider } from "@mantine/core";

import MainPage from "./pages/MainPage.tsx";
import AsyncSelectPracticePage from "./pages/AsyncSelectPracticePage.tsx";

import "@mantine/core/styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "async-select-practice",
    element: <AsyncSelectPracticePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
