import * as React from "react";
import { RightLayout } from "./Layout";

let Work = (): JSX.Element => {
  return (
    <>
      <RightLayout color="teal">
        <section className="text-white">Hello Right World!</section>
      </RightLayout>
    </>
  );
};

export default Work;
