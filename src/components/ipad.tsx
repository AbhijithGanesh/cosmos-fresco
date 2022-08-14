import * as React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SiWattpad } from "react-icons/si";
import {
  AiOutlineEye,
  AiOutlineStar,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { BiBook } from "react-icons/bi";

import { Card, Column } from "./card";

let IpadLayout = (): JSX.Element => {
  return (
    <>
      <section className="  flex-col my-20 mx-16 p-8 h-max w-5/6  border-[10px] rounded-2xl border-black">
        <section className="flex justify-between ">
          <section className="flex flex-1 justify-start items-center">
            <section className="text-4xl sm:text-2xl text-orange-500">
              <SiWattpad />
            </section>
            <section className="px-2 text-2xl sm:text-xl font-bold text-orange-500">
              Wattpad
            </section>
          </section>
          <section className="flex flex-1 items-center m-2 rounded-md justify-start bg-slate-50">
            <section className="p-1 text-3xl">
              <AiOutlineSearch />
            </section>
            <section className="font-regular text-lg text-black">
              Highratedkudi
            </section>
          </section>
        </section>
        <Card
          link="https://www.wattpad.com/story/204995619-project-parvati"
          text={"Project Parvati"}
          children={
            <>
              <Column icon={<AiOutlineEye />} text={"Read"} views="5.7K" />
              <Column icon={<AiOutlineStar />} text={"Votes"} views="481" />
              <Column
                icon={<AiOutlineUnorderedList />}
                text={"Parts"}
                views="24"
              />
              <Column icon={<BiBook />} text={"Time"} views="3H" />{" "}
            </>
          }
          describe={
            <>
              Parvati Nair is born out of necessity and desperation. The
              necessity to complete Shyne Inc.'s insurmountable project and the
              desperation to reunite two estranged souls. With T minus 30 days
              to complete the project.
            </>
          }
        />
        <Card
          link="https://www.wattpad.com/story/153006001-just-gen-z-things"
          text={"Just Gen Z Things"}
          children={
            <>
              <Column icon={<AiOutlineEye />} text={"Read"} views="21.2K" />
              <Column icon={<AiOutlineStar />} text={"Votes"} views="2.1K" />
              <Column
                icon={<AiOutlineUnorderedList />}
                text={"Parts"}
                views="75"
              />
              <Column icon={<BiBook />} text={"Time"} views="19m" />{" "}
            </>
          }
          describe={
            <>
              Things only our generation can relate to. Because, this is how
              Gen-Z views the world! Contains: Puns Relatable Stuff Books
              Entertainment Celebrities ....and much more!
            </>
          }
        />
        <Card
          link="https://www.wattpad.com/story/214534079-leaving-you-behind"
          text={"Leaving you Behind"}
          children={
            <>
              <Column icon={<AiOutlineEye />} text={"Read"} views="100" />
              <Column icon={<AiOutlineStar />} text={"Votes"} views="12" />
              <Column
                icon={<AiOutlineUnorderedList />}
                text={"Parts"}
                views="1"
              />
              <Column icon={<BiBook />} text={"Time"} views="7m" />{" "}
            </>
          }
          describe={
            <>
              &quot;If you truly love someone, you have to let them go.&quot;
              Even after more than four years of his death, Annie Cresta finds
              herself stuck to the same spot she has been in, ever since he
              left. Will she ever be...
            </>
          }
        />
      </section>
    </>
  );
};

export default IpadLayout;
