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
        <section
          className="font-Ally py-2 px-4 text-6xl lg:text-8xl md:text-8xl font-extrabold text-yellow"
          id="Projects"
        >
          My Projects
        </section>
        <section className="font-Ally text-white font-light lg:text-2xl px-4 m-2 py-4 md:text-3xl text-2xl sm:text-2xl">
          I have worked on multiple projects and I have highlighted my favourite
          ones here! These projects can be accessed via Wattpad.
        </section>
        <section className="font-Ally text-white font-semibold italic text-xl px-4 m-2 py-4 sm:hidden">
          Click on the cards to go to the story
        </section>
      </LeftTealLayout>
    </>
  );
};

let RightSection = (): JSX.Element => {
  return (
    <>
      <RightWhiteLayout>
        <IpadLayout />
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
        <section className="hidden md:block">
          <RightSection />
        </section>
        <section className="md:hidden sm:h-fit p-4 text-teal font-bold bg-white text-2xl sm:font-extrabold sm:px-8 sm:block">
          You need a bigger screen to view this section
        </section>
      </SmallLayout>
    </>
  );
};

export default Projects;
