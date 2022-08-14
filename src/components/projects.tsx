import * as React from "react";
import IpadLayout from "./ipad";

import {
  EncapsulatedExpandedLayout,
  LeftTealLayout,
  RightWhiteLayout,
  SmallLayout,
} from "./Layout";

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
        <>
          <IpadLayout />
        </>
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
