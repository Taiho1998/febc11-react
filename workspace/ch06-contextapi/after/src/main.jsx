import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SimpleContext } from "@context/SimpleContext";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <SimpleContext.Provider value={{ hello: "world" }}>
    <App />
  </SimpleContext.Provider>
  // </StrictMode>
);
