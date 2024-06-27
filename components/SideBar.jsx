"use client";

import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { RiCalendarTodoFill } from "react-icons/ri";

export default function SideBar() {
  return (
    <div className="flex flex-col w-72 bg-[#f0d84f] min-h-screen items-center">
      <div className="flex justify-center items-center space-x-2 mt-20 hover:text-white text-xl">
        <RiCalendarTodoFill />
        <Link className="font-bold" href={"/"}>
          ToDo
        </Link>
      </div>
      {/* <Link className="bg-white p-2" href={'/addTopic'}>Add Topic</Link> */}
      <Link
        className={buttonVariants({ variant: "outline" })}
        href={"/addTopic"}
      >
        Add Topic
      </Link>
    </div>
  );
}
