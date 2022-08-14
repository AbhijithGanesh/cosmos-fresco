import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import IpadLayout from "./ipad";
import {
  EncapsulatedExpandedLayout,
  LeftWhiteLayout,
  RightTealLayout,
  SmallLayout,
} from "./Layout";

let LeftSection = (): JSX.Element => {
  return (
    <>
      <LeftWhiteLayout>
        <StaticImage src="../images/anisha.png" alt="Anisha's Avatar" />
      </LeftWhiteLayout>
    </>
  );
};
let RightSection = (): JSX.Element => {
  return (
    <>
      <RightTealLayout>
        <section className="lg:pt-72 px-4 text-6xl lg:text-8xl md:text-8xl font-extrabold text-yellow">
          About me
        </section>
        <section className="text-white font-light lg:text-2xl px-4 m-2 py-4 md:text-3xl text-2xl sm:text-2xl">
          Hi! This is Anisha Kang. I enjoy almost all creative activities, be it
          novel writing, poetry, graphic design and so on. I've been writing
          since the age of 10 and I guess my storytelling urge transcended into
          the otherwise non-creative aspects of my life as well. I happen to be
          an avid reader too, and I'm always on the lookout for new books and
          new stories to provide me with my next adventure!
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
