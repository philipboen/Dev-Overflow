"use client";

import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarItem,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { useTheme } from "next-themes";
import { themes } from "@/constants";

const Theme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer p-0 px-2 focus:bg-light-900 data-[state=open]:bg-light-900 max-sm:p-0 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {theme === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              alt="sun"
              width={20}
              height={20}
              className="active-theme max-sm:w-[16px]"
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              alt="moon"
              width={20}
              height={20}
              className="active-theme max-sm:w-[16px]"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="-ml-8 mt-3 min-w-[125px] rounded border bg-light-900 py-2 max-sm:-ml-10 max-sm:min-w-[120px] dark:border-dark-400 dark:bg-dark-300">
          {themes.map((item) => (
            <MenubarItem
              key={item.value}
              className="flex cursor-pointer items-center gap-4 border-none px-2.5 py-2 outline-none focus:bg-light-700 dark:focus:bg-dark-400"
              onClick={() => {
                setTheme(item.value);
              }}
            >
              <Image
                src={item.icon}
                alt={item.value}
                width={16}
                height={16}
                className={`${theme === item.value && "active-theme"}`}
              />
              <p
                className={`sm-medium font-serif text-light-500 ${
                  theme === item.value
                    ? "text-primary-500"
                    : "text-dark100_light900"
                }`}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
