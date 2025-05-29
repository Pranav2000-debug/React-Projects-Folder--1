import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
// import Github from "./components/Github/GithubTwo.jsx";
import GithubTwo, { githubInfoLoader } from "./components/Github/GithubTwo.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {/* Capturing dynamic routing from URL by using a colon after slash "/:" */}
      <Route path="user/" element={<User />}>
        <Route path=":userId" element={<User />}></Route>
      </Route>
      {/* <Route path="github" element={<Github/>}></Route> */}

      {/* Pre processing with a loader attribute for Optimized version for fetching data */}
      <Route loader={githubInfoLoader} path="github" element={<GithubTwo />}></Route> */
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
