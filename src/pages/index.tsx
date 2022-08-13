import * as React from "react";
import type { HeadFC } from "gatsby";
import MainPage from "../components/main";
import About from "../components/about";
import Projects from "../components/projects";
import Work from "../components/work";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <>
      <MainPage />
      <About />
      <Projects />
      <Work />
      {/* <Footer /> */}
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
