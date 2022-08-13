import * as React from "react";
import { RightLayout, EncapsulatedLayout, LeftLayout } from "./Layout";

let About = (): JSX.Element => {
  return (
    <>
      <EncapsulatedLayout>
        <LeftLayout color="white">
          <></>
        </LeftLayout>
        <RightLayout color="teal">
          <section className="text-white">Hi World</section>
        </RightLayout>
      </EncapsulatedLayout>
    </>
  );
};

export default About;
