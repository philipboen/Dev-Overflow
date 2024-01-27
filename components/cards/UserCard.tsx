import Image from "next/image";
import Link from "next/link";

interface Props {
  user: {
    _id: string;
    clerkId: string;
    profilePicture: string;
    name: string;
    username: string;
  };
}

const UserCard = async ({ user }: Props) => {
  return (
    <Link href={`/profile/${user.clerkId}`}>
      <article className="card-wrapper light-border flex min-w-[200px] flex-row items-center gap-5 rounded-2xl border p-4 max-sm:rounded-[10px] sm:gap-2.5">
        <Image
          src={user.profilePicture}
          alt="User Profile Picture"
          width={50}
          height={50}
          className="rounded-full"
        />

        <div className="flex flex-col gap-1 self-center">
          <h3 className="sm-semibold text-dark200_light900 line-clamp-1 font-serif">
            {user.name}
          </h3>
          <p className="sm-regular text-dark500_light500">@{user.username}</p>
        </div>
      </article>
    </Link>
  );
};

export default UserCard;
