"use client";

import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { RiCalendarTodoFill } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


export default function Footer(){
    return(
        <div className= "flex flex-col min-h-72 w-full bg-[#f0d84f] px-8 py-3">
            <div className="flex justify-start my-5 mx-10 items-center text-3xl space-x-2">
            <RiCalendarTodoFill data-testid= "calender" />
            <Link className="font-bold" href={'/'}>ToDo</Link>
            </div>
            <div className="flex justify-start mt-5 mb-2 mx-10 items-center space-x-2">
            <FaRegCopyright /><p>Copyright 2024 Riya Zahid Shaikh</p>
            </div>
            <div className="flex justify-start mx-10 items-center">
                <Link className="pr-4" name= "linkedin" data-testid="linkedin" href={'https://www.linkedin.com/in/riya-shaikh-30713126b'}><FaLinkedin size={30} /></Link>
                <Link className="pr-4" name="github" data-testid="github" href={'https://github.com/RiyaZahidShaikh'}><FaGithub size={30} /></Link>
            </div>
            <div className="flex justify-start mx-10 items-center">
                <p className="flex justify-start items-center"><IoIosMail data-testid="mail" size={30} />riyazahidshaikh.official@gmail.com</p>
            </div>                
        </div>
    )
}