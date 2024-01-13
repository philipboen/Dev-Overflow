import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
}

const NoQuestionsFound = ({ title, description, link, linkTitle }: Props) => {
  return (
    <div className="mt-8 flex w-full flex-col items-center justify-center px-4">
      <Image
        src="/assets/images/light-illustration.png"
        alt="No questions found"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        alt="No questions found"
        width={270}
        height={200}
        className="hidden object-contain dark:block"
      />

      <h2 className="h2-bold text-dark300_light800 mt-8">{title}</h2>
      <p className="sm-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {description}
      </p>
      <Link href={link}>
        <Button className="sm-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-primary-500/90 dark:text-light-900">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoQuestionsFound;
