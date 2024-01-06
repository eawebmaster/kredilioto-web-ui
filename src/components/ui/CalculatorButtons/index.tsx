"use client";
import { Button } from "@nextui-org/react";
import React from "react";

const CalculatorButtons = () => {
  return (
    <div className="flex items-center gap-[5px]">
      <Button
        color="primary"
        href="#"
        className="transition duration-150 ease-in-out p-[5px] rounded-md  items-center justify-center text-white font-semibold hover:shadow-md"
      >
        İhtiyaç Kredisi
      </Button>
      <Button
        href="#"
        className="p-[5px] rounded-md bg-[#2980b9] items-center justify-center text-white font-semibold"
      >
        Taşıt Kredisi
      </Button>
      <Button
        href="#"
        className="p-[5px] rounded-md bg-[#27ae60] items-center justify-center text-white font-semibold"
      >
        Kasko Değerleme
      </Button>
    </div>
  );
};

export default CalculatorButtons;
