import * as React from "react";
import { FaTumblr, FaTwitter } from "react-icons/fa";
import { SiWattpad } from "react-icons/si";
import { Link } from "gatsby";

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
        <>
          <section className="flex-col p-12">
            <Cards
              link="https://www.wattpad.com/user/highratedkudi"
              icon={
                <>
                  <section className="text-orange-600 text-4xl">
                    <SiWattpad />
                  </section>
                </>
              }
              title={"Wattpad"}
              text={
                <>
                  The world's most-loved social storytelling platform Wattpad
                  connects a global community of 90 million readers and writers
                  through the power of story. A social platform where writers
                  write their novels in sequences.
                </>
              }
            />
            <Cards
              link="https://twitter.com/highratedkudi"
              icon={
                <>
                  <section className="text-[#1d9bf0] text-4xl">
                    <FaTwitter />
                  </section>
                </>
              }
              text={
                <>
                  Twitter handle that keeps the world up with HighRatedKudi's
                  latest releases.
                </>
              }
              title="Twitter"
            />
            <Cards
              link="https://highratedkudi.tumblr.com/"
              icon={
                <>
                  <section className="text-4xl text-black">
                    <FaTumblr />
                  </section>
                </>
              }
              text={
                <>
                  Tumblr is so easy to use that it's hard to explain. It is a
                  really simple platform for people to make a blog and upload
                  content. Stories, photos, GIFs. My Story bits can be found
                  here too!
                </>
              }
              title="Tumblr"
            />
          </section>
        </>
      </LeftWhiteLayout>
    </>
  );
};

interface CardProps {
  icon: JSX.Element;
  text: JSX.Element;
  title: string;
  link: string;
}

let Cards = (props: CardProps): JSX.Element => {
  return (
    <>
      <a href={props.link}>
        <section className="bg-slate-100 rounded-md drop-shadow-md p-4 my-16 hover:translate-y-4">
          <section className="flex justify-start gap-4">
            {props.icon}
            <section className="text-black text-3xl font-semibold">
              {props.title}
            </section>
          </section>
          <section className="text-black text-xl sm:text-lg">
            {props.text}
          </section>
        </section>
      </a>
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
