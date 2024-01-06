"use client";

import Link from "next/link";
import React from "react";

const LeftSideMenuItem = ({ item }: any) => {
  return item.hr ? (
    <hr className="border-[#e5e5e5] my-2" />
  ) : (
    <Link
      href="/kategori"
      className="hover:bg-gray-50 flex items-center justify-between text-[#484848] p-[5px] text-[12px] hover:text-red"
    >
      <span className="font-bold">{item.title}</span>
      <span className="text-[#dedede] font-medium">121</span>
    </Link>
  );
};

export default LeftSideMenuItem;
