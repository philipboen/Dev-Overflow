import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flexBetween background-light900_dark200 fixed z-50 w-full gap-4 px-4 py-6 shadow-light-300 sm:px-[48px] md:px-[70px] dark:shadow-none">
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
      {/* <div>Global Search</div> */}
      <div className="flex items-center gap-4">
        <Theme />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10 max-sm:h-8 max-sm:w-8",
              },
              variables: {
                colorPrimary: "#FF7000",
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <Link
            href="/sign-in"
            className="rounded-[10px] border border-dark-200 px-6 py-2 text-center font-serif font-medium outline-none hover:bg-light-800 max-sm:hidden dark:border-light-700 dark:hover:bg-dark-400 dark:hover:text-light-900"
          >
            Sign In
          </Link>
        </SignedOut>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
