import * as React from "react";
import { FaTwitter, FaInstagram, FaTumblr } from "react-icons/fa";
import { SiWattpad } from "react-icons/si";
import { GenericProps } from "../types/LayoutProps";

let SocialMedia = (props: GenericProps) => {
  return (
    <>
      <section className="text-4xl text-white py-4">{props.children}</section>
    </>
  );
};

let Footer = () => {
  let date = new Date();
  return (
    <>
      <section className="h-[2px]  bg-gradient-to-r from-pink-800 via-red-800 to-yellow" />
      <section className="bg-teal text-white">
        <section className="flex justify-around">
          <section className="font-light text-xl">Tagline</section>
          <section className="font-light text-xl">
            Copyright © {date.getFullYear()} - Anisha Kang and Abhijith Ganesh
          </section>
        </section>
        <section className="flex justify-center items-center gap-4">
          <SocialMedia>
            <FaTwitter />
          </SocialMedia>
          <SocialMedia>
            <FaInstagram />
          </SocialMedia>
          <SocialMedia>
            <SiWattpad />
          </SocialMedia>
          <SocialMedia>
            <FaTumblr />
          </SocialMedia>
        </section>
      </section>
    </>
  );
};

export default Footer;
