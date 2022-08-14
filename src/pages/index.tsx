import * as React from "react";
import type { HeadFC } from "gatsby";
import { TealNavBar, TealNavbarItem } from "../components/navbar";
import MainPage from "../components/main";
import About from "../components/about";
import Projects from "../components/projects";
import Work from "../components/work";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <>
      <TealNavBar>
        <section className="flex lg:items-center lg:justify-between">
          <section className="hidden lg:flex lg:justify-start lg:gap-4">
            <section className="text-3xl text-yellow font-extrabold">
              HighRatedKudi
            </section>
          </section>
          <section className="py-4 px-8 flex lg:justify-end md:justify-evenly sm:justify-evenly gap-4">
            <TealNavbarItem>Work</TealNavbarItem>
            <TealNavbarItem>About</TealNavbarItem>
            <TealNavbarItem>Projects</TealNavbarItem>
          </section>
        </section>
      </TealNavBar>
      <MainPage />
      <Work />
      <Projects />
      <About />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
