import * as React from "react";
import {
  EncapsulatedExpandedLayout,
  LeftTealLayout,
  RightWhiteLayout,
  SmallLayout,
} from "./Layout";
import { WhiteNavbarItem } from "./navbar";
import { StaticImage } from "gatsby-plugin-image";

const LeftSection = (): JSX.Element => {
  return (
    <>
      <LeftTealLayout>
        <>
          <section className="flex place-self-center lg:justify-center md:justify-start sm:justify-start pt-72 px-4 lg:text-8xl md:text-6xl text-yellow font-extrabold">
            Anisha Kang
          </section>
          <section className="flex p-8 justify-end lg:text-3xl md:text-xl font-light text-white">
            Creative Writer from India!
          </section>
        </>
      </LeftTealLayout>
    </>
  );
};

const RightSection = (): JSX.Element => {
  return (
    <>
      <RightWhiteLayout>
        <section className="py-4 px-8 flex lg:justify-end md:justify-evenly sm:justify-evenly gap-4">
          <WhiteNavbarItem>Work</WhiteNavbarItem>
          <WhiteNavbarItem>About</WhiteNavbarItem>
          <WhiteNavbarItem>Projects</WhiteNavbarItem>
        </section>

        <section className="flex justify-center">
          <StaticImage
            src="../images/anisha-bitmoji.jpg"
            height={600}
            width={600}
          />
        </section>
        <section className="sm:hidden md:hidden lg:flex justify-start mb-4">
          <StaticImage src="../images/stars.png" />
        </section>
      </RightWhiteLayout>
    </>
  );
};

const MainPage = (): JSX.Element => {
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

export default MainPage;
