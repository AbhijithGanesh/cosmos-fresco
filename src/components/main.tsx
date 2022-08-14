import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import {
  EncapsulatedExpandedLayout,
  LeftTealLayout,
  RightWhiteLayout,
  SmallLayout,
} from "./Layout";
import { TealNavBar, TealNavbarItem, WhiteNavbarItem } from "./navbar";

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
        <section className="flex justify-center pl-16 mt-32">
          {/* <StaticImage
            src="../images/anisha-bitmoji.jpg"
            alt="Anisha's Graphic"
            height={400}
            width={400}
          /> */}
        </section>
        <section className="sm:hidden md:hidden lg:flex justify-start pt-4">
          <StaticImage src="../images/stars.png" alt="none" />
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
