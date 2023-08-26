import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "@/assets/global.css";
import MainLayout from "./layouts/main-layout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MantineProvider
    theme={{ fontFamily: "Inter, sans-serif", primaryColor: "indigo" }}
  >
    <React.StrictMode>
      <MainLayout />
    </React.StrictMode>
  </MantineProvider>
);
