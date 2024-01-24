import Image from "next/image";
import Link from "next/link";
import Tag from "../Tag";

const hotQuestions = [
  {
    _id: "1",
    title: "How do I use express as a custom server in Next.js?",
  },
  {
    _id: "2",
    title: "What are the best practices for data fetching in Next.js with SSR",
  },
  {
    _id: "3",
    title: "What is an Hydration error in Next.js?",
  },
  {
    _id: "4",
    title: "Redux Toolkit not updating state as expected. How to fix this?",
  },
];

const popularTags = [
  {
    _id: "1",
    name: "React",
    totalQuestions: 21894,
  },
  {
    _id: "2",
    name: "Nextjs",
    totalQuestions: 1456,
  },
  {
    _id: "3",
    name: "Nodejs",
    totalQuestions: 68,
  },
  {
    _id: "4",
    name: "TypeScript",
    totalQuestions: 27,
  },
  {
    _id: "5",
    name: "Redux",
    totalQuestions: 12,
  },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 custom-scrollbar sticky right-0 top-0 flex h-screen max-w-[340px] flex-col justify-start overflow-y-auto overflow-x-hidden border-l border-light-400 px-4 pb-6 pl-6 pt-28 shadow-light-300 max-xl:hidden dark:border-dark-300 dark:shadow-none">
      <h3 className="h3-bold text-dark200_light870 font-serif">
        Top Questions
      </h3>
      <div className="mt-7 flex w-full flex-col gap-[30px]">
        {hotQuestions.map((question) => (
          <Link
            href={`/questions/${question._id}`}
            key={question._id}
            className="flex cursor-pointer items-center justify-between gap-4"
          >
            <p className="sm-medium text-dark500_light700">{question.title}</p>
            <Image
              src="assets/icons/chevron-right.svg"
              alt="chevron-right"
              width={20}
              height={20}
              className="invert-colors"
            />
          </Link>
        ))}
      </div>
      <div className="mt-10">
        <h3 className="h3-bold text-dark200_light870 font-serif">
          Popular Tags
        </h3>
        <div className="mr-1 mt-4 flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Tag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
              otherClasses="border-[#888] dark:border-none"
              textStyles="text-dark-180"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
