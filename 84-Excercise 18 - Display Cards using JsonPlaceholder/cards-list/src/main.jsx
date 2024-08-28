import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <About />
      </>
    ),
  },
  {
    path: "/contact/:id?",
    element: (
      <>
        <Contact />
      </>
    ),
    children: [{}, {}],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
