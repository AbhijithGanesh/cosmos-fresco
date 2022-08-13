import * as React from "react";
import { EncapsulatedLayout, LeftLayout, RightLayout } from "./Layout";
import { WhiteNavbarItem } from "./navbar";
import icon from "../images/stars.png";

const LeftSection = (): JSX.Element => {
  return (
    <>
      <LeftLayout color="teal">
        <>
          <section className="flex place-self-center lg:justify-center md:justify-start sm:justify-start pt-72 px-4 lg:text-8xl md:text-6xl text-yellow font-extrabold">
            Anisha Kang
          </section>
          <section className="flex p-8 justify-end lg:text-3xl md:text-xl font-light text-white">
            Creative Writer from India!
          </section>
        </>
      </LeftLayout>
    </>
  );
};

const RightSection = (): JSX.Element => {
  return (
    <>
      <RightLayout color="white">
        <section className="py-4 px-8 lg:flex md:flex sm:flex lg:justify-end md:justify-evenly sm:justify-evenly gap-4">
          <WhiteNavbarItem>Work</WhiteNavbarItem>
          <WhiteNavbarItem>About</WhiteNavbarItem>
          <WhiteNavbarItem>Projects</WhiteNavbarItem>
        </section>
        <section className="sm:hidden md:hidden lg:flex justify-start pt-[592px]">
          <img src={icon} />
        </section>
      </RightLayout>
    </>
  );
};

const MainPage = (): JSX.Element => {
  return (
    <>
      <EncapsulatedLayout>
        <LeftSection />
        <RightSection />
      </EncapsulatedLayout>
    </>
  );
};

export default MainPage;
