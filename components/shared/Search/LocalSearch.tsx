"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";

interface LocalSearchProps {
  route: string;
  iconPosition: "left" | "right";
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearch = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: LocalSearchProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[50px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="search"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      )}

      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="base-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none"
      />

      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="search"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearch;
