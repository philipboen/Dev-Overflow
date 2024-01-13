import HomeFilters from "@/components/HomeFilters";
import QuestionCard from "@/components/cards/QuestionCard";
import Filter from "@/components/shared/Filter";
import NoQuestionsFound from "@/components/shared/NoQuestionsFound";
import LocalSearch from "@/components/shared/Search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How to optimize Nextjs app for SEO?",
    tags: [
      { _id: "1", name: "Nextjs" },
      { _id: "2", name: "React" },
      { _id: "3", name: "Typescript" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      avatar: "/assets/images/avatars/avatar1.png",
    },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date("2024-01-03T11:26:30.559Z"),
  },
  {
    _id: "2",
    title: "How to add custom styles in TailwindCSS?",
    tags: [
      { _id: "1", name: "TailwindCSS" },
      { _id: "2", name: "CSS" },
      { _id: "3", name: "React" },
    ],
    author: {
      _id: "2",
      name: "Jane Doe",
      avatar: "/assets/images/avatars/avatar2.png",
    },
    upvotes: 60000,
    views: 50520,
    answers: [],
    createdAt: new Date("2024-01-03T11:33:34.927Z"),
  },
  {
    _id: "3",
    title: "How to use React Context API?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Javascript" },
      { _id: "3", name: "Typescript" },
    ],
    author: {
      _id: "3",
      name: "Peter Smith",
      avatar: "/assets/images/avatars/avatar3.png",
    },
    upvotes: 14500,
    views: 250,
    answers: [],
    createdAt: new Date("2021-09-01T11:00:00.000Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 max-sm:px-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark300_light800">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-6 flex justify-between gap-5 max-sm:flex-col max-sm:px-4 sm:mt-8 sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions..."
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[50px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-8 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoQuestionsFound
            title="There's no questions to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. Your query could be the next big thing others learn from. Get
        involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
