"use client";

import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button"


export default function Navbar(){
    return(
        <nav className= "flex justify-between items-center bg-slate-800 px-8 py-3">
            <Link className="text-white font-bold" href={'/'}>Today You Do</Link>
            {/* <Link className="bg-white p-2" href={'/addTopic'}>Add Topic</Link> */}
            <Link className={buttonVariants({ variant: "outline" })} href={'/addTopic'}>Add Topic</Link>
            

        </nav>
    )
}