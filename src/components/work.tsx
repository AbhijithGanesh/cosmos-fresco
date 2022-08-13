import * as React from "react";
import icon from "../images/stars.png";
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
        <section className="sm:hidden md:hidden lg:flex justify-start pt-[660px]">
          <img src={icon} />
        </section>
      </LeftWhiteLayout>
    </>
  );
};

let RightSection = () => {
  return (
    <>
      <RightTealLayout>
        <section className="py-4 px-8 flex lg:justify-end md:justify-evenly sm:justify-evenly gap-4">
          <TealNavbarItem>Work</TealNavbarItem>
          <TealNavbarItem>About</TealNavbarItem>
          <TealNavbarItem>Project</TealNavbarItem>
        </section>
        <section className="pt-72 px-4 text-8xl font-extrabold text-yellow">
          My Works
        </section>
      </RightTealLayout>
    </>
  );
};

let Work = (): JSX.Element => {
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

export default Work;
