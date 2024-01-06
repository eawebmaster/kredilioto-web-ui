"use client";
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import UserMenu from "./User";

const Auth = () => {
  const isLogin = false;
  const { data: session } = useSession();

  if (session?.user) {
    return <UserMenu />;
  }

  return (
    <div className="flex gap-2 h-full items-center">
      <Link
        href="/uyelik"
        className="font-bold text-[12px] text-[#484848] hover:text-red"
      >
        {JSON.stringify(session)}
      </Link>
      <span>/</span>
      <Link
        href="/kayit-ol"
        className="font-bold text-[12px] text-[#484848] hover:text-red"
      >
        Üye Ol
      </Link>
      <a className="p-[10px] rounded-md bg-red items-center justify-center text-white font-semibold">
        Ücretsiz İlan Ver
      </a>
    </div>
  );
};

export default Auth;
