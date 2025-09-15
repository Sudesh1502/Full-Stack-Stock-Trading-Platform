import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import HomePage from "./landing_page/Home/HomePage/HomePage.jsx";
import Signup from "./landing_page/Signup/Signup.jsx";
import AboutPage from "./landing_page/About/AboutPage/AboutPage.jsx";
import ProductsPage from "./landing_page/Products/ProductsPage/ProductsPage.jsx";
import PricingPage from "./landing_page/Pricing/PricingPage/PricingPage.jsx";
import SupportPage from "./landing_page/support/SupportPage/SupportPage.jsx";
import NotFound from "./landing_page/NotFound.jsx";
import Layout from "./landing_page/Layout.jsx"; 
import App from "./App.jsx";
import { LoaderProvider } from "./landing_page/LoaderContext.jsx";

// Define routes
const router = createBrowserRouter([
  {
    element: <Layout />,   // contains Navbar + Footer
    children: [
      { path: "/", element: <App /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/pricing", element: <PricingPage /> },
      { path: "/support", element: <SupportPage /> },
    ],
  },
  { path: "/signup", element: <Signup /> },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoaderProvider>
    <RouterProvider router={router} />
    </LoaderProvider>
  </StrictMode>
);
