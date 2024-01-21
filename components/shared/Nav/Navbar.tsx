import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../Search/GlobalSearch";

const Navbar = () => {
  return (
    <nav className="flexBetween background-light900_dark200 fixed z-50 w-full gap-4 border-b px-4 py-6 shadow-light-300 sm:px-[30px] dark:border-b-0 dark:shadow-none">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={24}
          height={24}
          alt="Dev Overflow"
        />

        <h2 className="h2-bold font-spaceGrotesk text-dark-100 max-sm:hidden dark:text-light-900">
          Dev <span className="text-primary-500">Overflow</span>
        </h2>
      </Link>

      <GlobalSearch />

      <div className="flex items-center gap-3 max-sm:gap-4">
        <Theme />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-8 w-8",
              },
              variables: {
                colorPrimary: "#FF7000",
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <div className="flex gap-2 align-middle">
            <Link
              href="/sign-in"
              className="rounded-[10px] px-4 py-3 text-center font-serif text-[14px] font-medium leading-none outline-none transition-all duration-100 hover:bg-light-700 max-sm:hidden dark:hover:bg-dark-400 dark:hover:text-light-900"
            >
              Log In
            </Link>
            <Link
              href="/sign-up"
              className="rounded-[10px] border border-dark-200 px-4 py-3 text-center font-serif text-[14px] font-medium leading-none outline-none transition-all duration-100 hover:bg-dark-200 hover:text-light-900 max-sm:hidden dark:border-light-700 dark:hover:bg-light-700 dark:hover:text-dark-400"
            >
              Create account
            </Link>
          </div>
        </SignedOut>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
