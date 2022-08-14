import * as React from "react";

interface CardProps {
  text: string;
  children: JSX.Element;
  describe: JSX.Element;
}

let Card = ({ text, children, describe }: CardProps): JSX.Element => {
  return (
    <>
      <section className="z-2 w-full bg-[#ffffff] text-black drop-shadow-md my-2 px-1">
        <section className="font-bold text-xl pl-4">{text}</section>
        <section className="bg-gray-200 h-0.5 w-full" />
        <section className="flex flex-1 justify-start">{children}</section>
        <section className="p-2 text-black font-light text-sm">
          {describe}
        </section>
      </section>
    </>
  );
};

interface ColumnProps {
  icon: JSX.Element;
  text: string;
  views: string;
}

let Column = ({ icon, text, views }: ColumnProps): JSX.Element => {
  return (
    <>
      <section className="px-2 flex flex-col border-gray-600 border-r-[1px] my-2">
        <section className="flex flex-1 justify-start items-center place-content-center">
          <section className="text-xl">{icon}</section>
          <section className="pl-2 text-gray-700">{text}</section>
        </section>
        <section className="text-black font-bold text-center">{views}</section>
      </section>
    </>
  );
};

let Describe = (): JSX.Element => {
  return (
    <>
      <section className="text-sm font-regular text-black"></section>
    </>
  );
};

export { Card, Column, Describe };
