import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  EncapsulatedExpandedLayout,
  LeftTealLayout,
  RightTealLayout,
  RightWhiteLayout,
  SmallLayout,
} from "./Layout";

const LeftSection = (): JSX.Element => {
  return (
    <>
      <LeftTealLayout>
        <>
          <section className="flex place-self-center lg:justify-center md:justify-start sm:justify-start pt-72 px-4 text-8xl text-yellow font-extrabold">
            Anisha Kang
          </section>
          <section className="flex p-8 justify-end text-3xl font-regular text-white">
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
        <>
          <section className="flex justify-center hover:-translate-x-2">
            <a href="https://instagram.com/highratedkudi/" target={"__blank"}>
              <StaticImage
                src="../images/Mobile.png"
                alt="Anisha's Feed"
                height={850}
              />
            </a>
          </section>
        </>
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
