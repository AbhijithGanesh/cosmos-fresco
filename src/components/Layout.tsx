import * as React from "react";
import { GenericProps as LayoutProps } from "../types/LayoutProps";

let EncapsulatedExpandedLayout = (props: LayoutProps): JSX.Element => {
  return (
    <>
      <section className="md:hidden sm:hidden lg:grid grid-cols-10">
        {props.children}
      </section>
    </>
  );
};

let SmallLayout = (props: LayoutProps) => {
  return (
    <>
      <section className="lg:hidden grid md:grid-cols-1 sm:grid-cols-1">
        <section className="sm: col-start-1 md:col-span-1 md: col-span-1 sm:col-span-1">
          {props.children}
        </section>
      </section>
    </>
  );
};

let LeftTealLayout = (props: LayoutProps): JSX.Element => {
  return (
    <>
      <section
        className={`h-screen bg-teal sm:col-span-1 md:col-span-1 col-start-1 lg:col-span-5`}
      >
        {props.children}
      </section>
    </>
  );
};

let LeftWhiteLayout = (props: LayoutProps): JSX.Element => {
  return (
    <>
      <section
        className={`h-screen bg-white sm:col-span-1 md:col-span-1col-start-1 lg:col-span-5`}
      >
        {props.children}
      </section>
    </>
  );
};

let RightTealLayout = (props: LayoutProps): JSX.Element => {
  return (
    <>
      <section
        className={`h-screen sm:col-span-1 md:col-span-1 lg:col-start-6 lg:col-span-5 bg-teal`}
      >
        {props.children}
      </section>
    </>
  );
};

let RightWhiteLayout = (props: LayoutProps): JSX.Element => {
  return (
    <>
      <section
        className={`h-screen sm:col-span-1 md:col-span-1 lg:col-start-6 lg:col-span-5 bg-white`}
      >
        {props.children}
      </section>
    </>
  );
};

export {
  LeftTealLayout,
  LeftWhiteLayout,
  RightTealLayout,
  RightWhiteLayout,
  EncapsulatedExpandedLayout,
  SmallLayout
};
