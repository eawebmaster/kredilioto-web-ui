"use client";
import { Input } from "rizzui";
import {
  MagnifyingGlassIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function SearchBar() {
  return (
    <>
      <Input
        prefix={<MagnifyingGlassIcon className="w-4" />}
        suffix={<ArrowRightIcon className="w-4" />}
        placeholder="Icons as prefix and suffix"
      />
    </>
  );
}
