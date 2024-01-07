import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "../ui/SearchBar";
import CalculatorButtons from "../ui/CalculatorButtons";
import Auth from "./Auth";

export default function HeaderMain() {
  return (
    <div className="h-[60px] bg-white shadow-md ">
      <div className="mx-auto container h-full items-center">
        <div className="flex items-center h-full gap-x-5">
          <Link href="/">
            <Image
              src="/mock-images/logo.png"
              alt="logo"
              width={200}
              height={50}
            />
          </Link>
          <div className="flex-1 w-full">
            <SearchBar />
          </div>
          <div className="flex-1 flex gap-[20px]">
            <CalculatorButtons />
            <Auth />
          </div>
        </div>
      </div>
    </div>
  );
}
