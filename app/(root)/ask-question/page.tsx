import Question from "@/components/forms/Question";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AskQuestion = async () => {
  const { userId } = auth()

  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });

  console.log(mongoUser);

  return (
    <div className="max-sm:px-4">
      <h1 className="h1-bold text-dark300_light870 font-serif">Ask a Question</h1>
      <div className="mt-8 sm:mt-6">
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};

export default AskQuestion;
