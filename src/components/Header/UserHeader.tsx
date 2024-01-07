import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@nextui-org/react";
import { IconBell, IconHome, IconHome2, IconMessage, IconPlus, IconStar } from "@tabler/icons-react";

export default function UserHeader() {
    return (
        <div className="h-[60px] bg-white shadow-md ">
            <div className="mx-auto container h-full items-center">
                <div className="flex items-center justify-between h-full gap-x-5">
                    <div className="flex gap-2 items-center">
                        <Button isIconOnly variant="ghost" color="primary" radius="sm">
                            <IconHome2 size={20} />
                        </Button>
                        <Link href="/">
                            <Image
                                src="/mock-images/logo.png"
                                alt="logo"
                                width={200}
                                height={50}
                            />
                        </Link>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Button variant="ghost" color="primary" isIconOnly radius="sm">
                            <IconMessage size={20} />

                        </Button>
                        <Button variant="ghost" color="primary" isIconOnly radius="sm">
                            <IconStar size={20} />

                        </Button>
                        <Button variant="ghost" color="primary" isIconOnly radius="sm">
                            <IconBell size={20} />

                        </Button>
                        <Button startContent={<IconPlus />} className="" variant="faded" color="primary" radius="sm">
                            İlan Ver
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    );
}
