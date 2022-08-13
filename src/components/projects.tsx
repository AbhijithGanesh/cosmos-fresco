import * as React from "react";
import {
    EncapsulatedExpandedLayout,
    LeftTealLayout,
    RightWhiteLayout,
    SmallLayout
} from "./Layout";
import { WhiteNavbarItem } from "./navbar";

let LeftSection = (): JSX.Element => {
  return (
    <>
      <LeftTealLayout>
        <section className="pt-80 px-4 text-8xl font-extrabold text-yellow">
          My Projects
        </section>
      </LeftTealLayout>
    </>
  );
};

let RightSection = (): JSX.Element => {
  return (
    <>
      <RightWhiteLayout>
        <RightWhiteLayout>
          <section className="pt-3 px-8 flex lg:justify-end md:justify-evenly sm:justify-evenly gap-4">
            <WhiteNavbarItem>Work</WhiteNavbarItem>
            <WhiteNavbarItem>About</WhiteNavbarItem>
            <WhiteNavbarItem>Projects</WhiteNavbarItem>
          </section>
        </RightWhiteLayout>
      </RightWhiteLayout>
    </>
  );
};

let Projects = (): JSX.Element => {
  return (
    <>
      <EncapsulatedExpandedLayout>
        <LeftSection />
        <RightSection />
      </EncapsulatedExpandedLayout>
      <SmallLayout>
        <LeftSection />
        <RightSection />
      </SmallLayout>
    </>
  );
};

export default Projects;
