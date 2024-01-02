"use client";

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex flex-col gap-4">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <div key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-[10px] text-light-800"
                  : "text-dark300_light800"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${!isActive && "invert-colors"}`}
              />
              <p
                className={`${
                  isActive ? "base-semibold" : "base-medium"
                } font-serif`}
              >
                {item.label}
              </p>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="menu"
          width={36}
          height={36}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <Link href="/" className="mt-2 flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            alt="Dev Overflow"
            width={24}
            height={24}
          />
          <h2 className="h2-bold text-dark100_light800 font-spaceGrotesk">
            Dev <span className="text-primary-500">Overflow</span>
          </h2>
        </Link>

        <div className="mt-6">
          <NavContent />
          <div className="mt-6">
            <SignedOut>
              <div className="flex flex-col gap-3">
                <Link href="/sign-in">
                  <Button className="btn-secondary min-h-[41px] w-full rounded-[10px] px-4 py-[14px] font-serif shadow-none">
                    <span className="primary-text-gradient">Log In</span>
                  </Button>
                </Link>

                <Link href="/sign-up">
                  <Button className="light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 font-serif shadow-none">
                    Sign up
                  </Button>
                </Link>
              </div>
            </SignedOut>
          </div>
        </div>

        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <SheetClose className="data-[state=open]:bg-secondary absolute right-4 top-4 text-white opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none">
          <X className="h-4 w-4" color="white" />
          <span className="sr-only">Close</span>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
