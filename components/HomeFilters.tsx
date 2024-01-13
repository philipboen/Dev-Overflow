"use client";

import { HomePageFilters } from "@/constants/filters";
import { Button } from "./ui/button";

const HomeFilters = () => {
  const isActive = "newest";

  return (
    <div className="mt-6 flex flex-wrap gap-3 max-md:hidden">
      {HomePageFilters.map((item) => (
        <Button
          key={item.name}
          onClick={() => {}}
          className={`sm-medium h-8 rounded-md px-6 py-[18px] capitalize shadow-none ${
            isActive === item.value
              ? "bg-slate-800 text-primary-100 dark:bg-dark-400 dark:text-primary-500"
              : "bg-light-800 text-[#888] hover:bg-light-700 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-400"
          }`}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
