import UserCard from "@/components/cards/UserCard";
import Filter from "@/components/shared/Filter";
import LocalSearch from "@/components/shared/Search/LocalSearch";
import { UserFilters } from "@/constants/filters";
import { getAllUsers } from "@/lib/actions/user.action";
import Link from "next/link";

const Page = async () => {
  const result = await getAllUsers({});

  return (
    <div className="max-sm:px-4">
      <h1 className="h1-bold text-dark300_light870 font-serif">All Users</h1>
      <div className="mt-6 flex justify-between gap-5 max-sm:flex-col sm:mt-8 sm:items-center">
        <LocalSearch
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for a specific user..."
          otherClasses="flex-1"
        />
        <Filter
          filters={UserFilters}
          otherClasses="min-h-[50px] sm:min-w-[170px]"
        />
      </div>
      <section className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {result.users.length > 0 ? (
          result.users.map((user) => <UserCard key={user._id} user={user} />)
        ) : (
          <div className="base-regular text-dark200_light870 mx-auto mt-12 flex max-w-4xl flex-col gap-2 text-center">
            <p>No users yet</p>
            <Link
              href="/sign-up"
              className="font-serif font-bold text-accent-blue"
            >
              Join to be the first!
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Page;
