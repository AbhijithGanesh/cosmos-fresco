import * as React from "react";
import IpadLayout from "./ipad";
import {
  EncapsulatedExpandedLayout,
  LeftWhiteLayout,
  RightTealLayout,
  SmallLayout
} from "./Layout";

let LeftSection = (): JSX.Element => {
  return (
    <>
      <LeftWhiteLayout>
        <>
          <IpadLayout />
        </>
      </LeftWhiteLayout>
    </>
  );
};

let RightSection = () => {
  return (
    <>
      <RightTealLayout>
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
