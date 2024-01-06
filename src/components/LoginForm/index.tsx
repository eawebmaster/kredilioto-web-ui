"use client";
import { Checkbox } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "rizzui";
import { BsFacebook } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import route from "@/lib/route";
import { useRouter } from "next/navigation";
function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const credentials = Object.fromEntries(formData);

    signIn("credentials", {
      email: credentials.email as string,
      password: credentials.password as string,
      redirect: false,
    })
      .then((res) => {
        if (res?.error) {
          router.push(route.login + "?error=CredentialsSignin");
        } else {
          router.push(route.home);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <div className="login-cover flex items-center justify-center">
        <div className="flex flex-col gap-[40px]">
          <Link href="/" className="">
            <Image
              alt="logo"
              src="/mock-images/logo-white.png"
              width={400}
              height={200}
            />
          </Link>
          <div className="bg-white shadow-lg p-[20px] rounded-md flex flex-col">
            <div className="flex flex-col gap-[5px]">
              <span className="font-bold text-[20px] text-[#414141]">
                Hoşgeldiniz
              </span>
              <span className="font-medium text-[16px]">
                Üye değilseniz, üye olmak için{" "}
                <Link href={route.register} className="text-[#FF0000]">
                  buraya
                </Link>{" "}
                tıklayınız.
              </span>
            </div>
            <div className="flex gap-2 mt-2">
              <div className="flex-1 flex gap-2">
                <span className="cursor-pointer bg-white flex-1 rounded-md p-[5px] flex border border-slate-200 items-center hover:bg-gray-100">
                  <BsFacebook size={20} color="#3F83F8" />
                  <span className="font-bold text-[16px] text-[#414141] ml-[10px]">
                    Facebook ile
                  </span>
                </span>
                <span className="cursor-pointer bg-white flex-1 rounded-md p-[5px] flex border border-slate-200 items-center hover:bg-gray-100">
                  <BsFacebook size={20} color="#3F83F8" />
                  <span className="font-bold text-[16px] text-[#414141] ml-[10px]">
                    Facebook ile
                  </span>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex-1 h-[1px] bg-gray-200"></div>
              <div className="flex justify-center">
                <span className="font-bold text-[16px] text-[#414141]">
                  Veya
                </span>
              </div>
              <div className="flex-1 h-[1px] bg-gray-200"></div>
            </div>
            <FormError error={error} />

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-[10px] mt-2">
                <div className="flex flex-col gap-[5px]">
                  <span className="font-bold text-[16px] text-[#414141]">
                    E-posta adresiniz
                  </span>
                  <input
                    name="email"
                    type="text"
                    className="border border-slate-200 rounded-md p-[10px] w-full focus:outline-none focus:border-[#FF0000]"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-[15px] text-[#414141]">
                      Şifreniz
                    </span>
                    <span className="font-bold text-[15px] text-[#414141]">
                      Şifremi unuttum
                    </span>
                  </div>
                  <input
                    name="password"
                    type="password"
                    className="border border-slate-200 rounded-md p-[10px] w-full focus:outline-none focus:border-[#FF0000]"
                  />
                </div>
                {/* <div className="flex items-center gap-2">
                  <Checkbox>
                    Üyelik sözleşmesini okudum ve kabul ediyorum.
                  </Checkbox>
                </div> */}
                <div className="flex flex-col gap-[5px]">
                  <Button type="submit" className="bg-[#FF0000] text-white">
                    Giriş yap
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormError({ error }: { error: string | null }) {
  if (!error) return null;

  const errorMessages: { [key: string]: string } = {
    CredentialsSignin: "Invalid credentials",
    Default: "Default Error Message",
  };

  return (
    <p>
      <div
        className="my-[5px] gap-[2px] flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
        role="alert"
      >
        <BiErrorCircle size={20} color="white" />
        <div className="text-white">
          <span className="font-bold">Hata!</span> E-posta adresiniz veya
          şifreniz hatalı.
        </div>
      </div>
    </p>
  );
}

export default LoginForm;
