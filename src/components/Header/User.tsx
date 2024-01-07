import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  User,
} from "@nextui-org/react";
import { IconList, IconMail, IconPlus, IconStar, IconUser } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import route from "@/lib/route";
export default function UserMenu() {
  const { data: session } = useSession();
  return (
    <div className="flex gap-2">
      <Dropdown
        showArrow
        radius="sm"
        classNames={{
          base: "before:bg-default-200", // change arrow background
          content: "p-0 border-small border-divider bg-background",
        }}
      >
        <DropdownTrigger>
          <Button variant="ghost" disableRipple>
            {session?.user?.name}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Custom item styles"
          disabledKeys={["profile"]}
          className="p-3"
          itemClasses={{
            base: [
              "rounded-md",
              "text-default-500",
              "transition-opacity",
              "data-[hover=true]:text-foreground",
              "data-[hover=true]:bg-default-100",
              "dark:data-[hover=true]:bg-default-50",
              "data-[selectable=true]:focus:bg-default-50",
              "data-[pressed=true]:opacity-70",
              "data-[focus-visible=true]:ring-default-500",
            ],
          }}
        >
          <DropdownSection aria-label="Profile & Actions" showDivider>
            <DropdownItem href={route.myAccount} endContent={<IconUser size={15} />} key="dashboard">
              Hesabım
            </DropdownItem>
            <DropdownItem endContent={<IconList size={15} />} key="dashboard">
              İlanlar
            </DropdownItem>
            <DropdownItem endContent={<IconMail size={15} />} key="settings">
              Mesajlar
            </DropdownItem>
            <DropdownItem
              key="new_project"
              endContent={<IconStar size={15} className="" />}
            >
              Favori İlanlar
            </DropdownItem>
          </DropdownSection>

          <DropdownSection aria-label="Help & Feedback">
            <DropdownItem key="help_and_feedback">
              Yardım Ve Destek
            </DropdownItem>
            <DropdownItem key="logout">Çıkış Yap</DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
      <Button
        className="bg-red text-white"
        startContent={<IconPlus size={20} />}
      >
        Ücretsiz İlan Ver
      </Button>
    </div>
  );
}
