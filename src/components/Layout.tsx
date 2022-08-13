import * as React from "react";
import { GenericProps } from "../types/LayoutProps";

interface LayoutProps extends GenericProps {
  color: string;
}

let EncapsulatedLayout = (props: GenericProps): JSX.Element => {
  return (
    <>
      <section className="grid lg:grid-cols-10 md:grid-cols-1 sm:grid-cols-1">
        {props.children}
      </section>
    </>
  );
};

let LeftLayout = (props: LayoutProps): JSX.Element => {
  return (
    <>
      <section className={`h-screen bg-${props.color} sm:col-span-1 md:col-span-1col-start-1 lg:col-span-5`}>
        {props.children}
      </section>
    </>
  );
};

let RightLayout = (props: LayoutProps): JSX.Element => {
  return (
    <>
      <section
        className={`h-screen sm:col-span-1 md:col-span-1 lg:col-start-6 lg:col-span-5 bg-${props.color}`}
      >
        {props.children}
      </section>
    </>
  );
};

export { LeftLayout, RightLayout, EncapsulatedLayout };
