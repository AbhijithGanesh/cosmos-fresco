import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  EncapsulatedExpandedLayout,
  LeftWhiteLayout,
  RightTealLayout,
  SmallLayout,
} from "./Layout";
import { TealNavbarItem } from "./navbar";

let LeftSection = (): JSX.Element => {
  return (
    <>
      <LeftWhiteLayout>
        <StaticImage
          src="../images/Projects.png"
          alt="Anisha's Projects"
          layout="full-width"
        />
      </LeftWhiteLayout>
    </>
  );
};
let RightSection = (): JSX.Element => {
  return (
    <>
      <RightTealLayout>
        <section className="py-4 px-8 flex lg:justify-end md:justify-evenly sm:justify-evenly gap-4">
          <TealNavbarItem>Work</TealNavbarItem>
          <TealNavbarItem>About</TealNavbarItem>
          <TealNavbarItem>Project</TealNavbarItem>
        </section>
        <section className="pt-72 px-4 text-8xl font-extrabold text-yellow">
          About me
        </section>
      </RightTealLayout>
    </>
  );
};

let About = (): JSX.Element => {
  return (
    <>
      <EncapsulatedExpandedLayout>
        <LeftSection />
        <RightSection />
      </EncapsulatedExpandedLayout>
      <SmallLayout>
        <RightSection />
        <LeftSection />
      </SmallLayout>
    </>
  );
};

export default About;
