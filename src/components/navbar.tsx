import * as React from "react";
import { GenericProps } from "../types/LayoutProps";
import "../styles/hovers.css";

let WhiteNavbarItem = (props: GenericProps): JSX.Element => {
  return (
    <>
      <section className="text-teal text-2xl font-bold underline_hover hover:bg-slate-100 hover:p-1 hover:rounded-md">
        {props.children}
      </section>
    </>
  );
};

let TealNavbarItem = (props: GenericProps): JSX.Element => {
  return (
    <>
      <section className="text-white text-2xl font-bold underline_hover hover:bg-gray-700 hover:p-1 hover:rounded-md">
        {props.children}
      </section>
    </>
  );
};

let TealNavBar = (props: GenericProps): JSX.Element => {
  return (
    <>
      <nav className="bg-teal top-0 sticky z-50">
        {props.children}
        <section className="h-0.5 bg-gradient-to-r from-pink-800  to-yellow" />
      </nav>
    </>
  );
};

export { TealNavbarItem, WhiteNavbarItem, TealNavBar };
