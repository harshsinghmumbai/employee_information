"use client";

import Image from "next/image";
import { ModeToggle } from "./Mode_Toggle";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex p-1 mx-4 border-b-2 justify-between items-center border-gray-500 md:px-5 lg:px-9 rounded-xl md:rounded-2xl sticky top-10 z-30 bg-white/20 dark:bg-black/20 backdrop-blur-sm  md:max-w-[800px] md:mx-auto">
      <div className="flex justify-between items-center w-full">
        <Link href={"/"} className="cursor-pointer">
          <Image
            rel="icon"
            src="/favicon.ico"
            alt="favicon"
            width={100}
            height={100}
            priority
            className="w-7 h-7"
          />
        </Link>
        <Link href={"/details"} className="cursor-pointer">
          Detail Page
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
