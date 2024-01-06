"use client";
import Image from "next/image";
import React from "react";

interface Props {
  loading: boolean;
}

const Loading = ({ loading }: Props) => {
  return (
    <div
      className="fixed top-0 left-0 z-[5] flex items-center justify-center w-full h-full"
      style={{
        display: loading ? "flex" : "none",
      }}
    >
      <div className="fixed top-0 left-0 z-[4] bg-white bg-opacity-90 w-full h-full"></div>
      <div className="z-[50]">
        <div className="skeleton-box"></div>
        <Image
          alt="logo"
          width={200}
          height={100}
          src="/mock-images/logo.png"
        />
      </div>
    </div>
  );
};

export default Loading;
