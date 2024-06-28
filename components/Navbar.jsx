"use client";

import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { RiCalendarTodoFill } from "react-icons/ri";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center rounded-lg bg-[#f0d84f] px-8 py-3">
      <div className="flex justify-center items-center space-x-2">
        <RiCalendarTodoFill />
        <Link className="font-bold" href={"/"}>
          ToDo
        </Link>
      </div>
      <Link
        className={buttonVariants({ variant: "outline" })}
        href={"/addTopic"}
      >
        Add Task
      </Link>
    </nav>
  );
}
