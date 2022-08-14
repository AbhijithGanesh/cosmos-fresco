import { Link } from "gatsby";
import * as React from "react";
import { FaTwitter, FaInstagram, FaTumblr } from "react-icons/fa";
import { SiWattpad } from "react-icons/si";
import { GenericProps } from "../types/LayoutProps";

interface SocialMediaProps extends GenericProps {
  link?: string;
}

let SocialMedia = (props: SocialMediaProps) => {
  return (
    <>
      <section className="text-4xl text-white py-4 hover: ease-in  hover:transform-cpu hover:-translate-y-2">
        <Link to={props.link!}>{props.children}</Link>
      </section>
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
          <section className="font-light text-xl">
            Writing Stories and Beyond!
          </section>
          <section className="font-light text-xl">
            Copyright © {date.getFullYear()} - Anisha Kang and Abhijith Ganesh
          </section>
        </section>
        <section className="flex justify-center items-center gap-4">
          <SocialMedia link={"https://twitter.com/highratedkudi"}>
            <FaTwitter />
          </SocialMedia>
          <SocialMedia link={"https://instagram.com/highratedkudi"}>
            <FaInstagram />
          </SocialMedia>
          <SocialMedia link={"https://www.wattpad.com/user/highratedkudi"}>
            <SiWattpad />
          </SocialMedia>
          <SocialMedia link={"https://highratedkudi.tumblr.com"}>
            <FaTumblr />
          </SocialMedia>
        </section>
      </section>
    </>
  );
};

export default Footer;
