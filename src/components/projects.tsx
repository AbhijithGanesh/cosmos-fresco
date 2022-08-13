import * as React from "react";
import { LeftLayout } from "./Layout";

let Projects = (): JSX.Element => {
  return (
    <>
      <LeftLayout color="teal">
        <section className="text-white">Hello Left World!</section>
      </LeftLayout>
    </>
  );
};

export default Projects;
