import Question from "@/components/forms/Question";

const AskQuestion = () => {
  return (
    <div className="max-sm:px-4">
      <h1 className="h1-bold text-dark300_light870">Ask a Question</h1>
      <div className="mt-8 sm:mt-6">
        <Question />
      </div>
    </div>
  );
};

export default AskQuestion;
