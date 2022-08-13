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
      <section className="text-white text-2xl font-bold hover:bg-slate-400">
        {props.children}
      </section>
    </>
  );
};

export { TealNavbarItem, WhiteNavbarItem };
