import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loading from "./components/smallComps/loading/Loading";
import Header from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Cursor } from "./components/smallComps/cursor/Cursor";
const Home = React.lazy(() => import("./pages/home/Home"));
const About = React.lazy(() => import("./pages/about/About"));
const Project = React.lazy(() => import("./pages/projects/Project"));
const Contact = React.lazy(() => import("./pages/contact/Contact"));

function App() {
  const location = useLocation();

  const [windwoWidth, setWidnowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizer = () => {
      setWidnowWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizer);

    return () => {
      window.removeEventListener("resize", resizer);
    };
  }, [windwoWidth]);

  return (
    <>
      <div className="bg"></div>
      <div className="bg2"></div>
      {windwoWidth > 1000 ? <Cursor /> : null}

      <section className="mianSection">
        <Header />

        <div className="appDiv">
          <Navbar />
          <div className="dinamyContent">
            <AnimatePresence mode="wait">
              <Routes key={location.pathname} location={location}>
                <Route
                  path="/"
                  element={
                    <React.Suspense fallback={<Loading />}>
                      <Home />
                    </React.Suspense>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <React.Suspense fallback={<Loading />}>
                      <About />
                    </React.Suspense>
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <React.Suspense fallback={<Loading />}>
                      <Project />
                    </React.Suspense>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <React.Suspense fallback={<Loading />}>
                      <Contact />
                    </React.Suspense>
                  }
                />
              </Routes>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
