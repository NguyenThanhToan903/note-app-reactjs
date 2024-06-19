import Container from "@mui/material/Container";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./firebase/config.jsx";
import "./index.css";
import router from "./router/index.jsx";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container maxWidth="lg" sx={{ textAlign: "center", marginTop: "50px" }}>
      <RouterProvider router={router} />
    </Container>
  </React.StrictMode>
);
