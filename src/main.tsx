import { ArweaveWalletKit } from "arweave-wallet-kit";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import App from "./App.tsx";
import { Footer, Navbar } from "./components";
import ScrollToTop from "./components/Layout/ScrollTop.tsx";
import Layout from "./components/Layout/index.tsx";
import "./index.css";
import About from "./pages/About.tsx";
import AddProject from "./pages/AddProject.tsx";
import Project from "./pages/Project.tsx";
import User from "./pages/User.tsx";
import Faucet from "./pages/Faucet.tsx";
import { Toaster } from "sonner";
import Nav from "./components/Layout/Nav.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout as the main element
    children: [
      { path: "/", element: <App /> },
      { path: "project/:projectId", element: <Project /> },
      { path: "profile", element: <User /> },
      { path: "addProject", element: <AddProject /> },
      { path: "faucet", element: <Faucet /> },
      { path: "about", element: <About /> },
    ],
  },
]);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/project/:projectId",
//     element: <Project />,
//   },
//   {
//     path: "/profile",
//     element: <User />,
//   },
//   {
//     path: "/addProject",
//     element: <AddProject />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ArweaveWalletKit
      config={{
        permissions: ["ACCESS_ADDRESS", "DISPATCH", "ACCESS_ALL_ADDRESSES", "ACCESS_PUBLIC_KEY", "SIGN_TRANSACTION"],
        ensurePermissions: true,
      }}
      theme={{
        radius: "minimal",
        titleHighlight: { r: 0, g: 109, b: 27 },
        accent: { r: 32, g: 81, b: 86 },
      }}
    >
      <div className="font-[Rale-Regular] min-h-screen flex flex-col justify-between gap-12 lining-figures">
        <Toaster />
        
        {/* @ts-expect-error types wrong with router */}
        <RouterProvider router={router}>
        {/* <Navbar />
        <Nav/> */}
          <ScrollToTop />
          {router}
        </RouterProvider>
        <Footer />
      </div>
    </ArweaveWalletKit>
  </React.StrictMode>
);
