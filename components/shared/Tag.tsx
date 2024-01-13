import Link from "next/link";
import { Badge } from "../ui/badge";
import { formatNumber } from "@/lib/utils";

interface TagProps {
  _id: string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
  otherClasses?: string;
}

const Tag = ({ _id, name, totalQuestions, showCount, otherClasses }: TagProps) => {
  return (
    <Link href={`/tags/${_id}`}>
      <Badge
        className={`xs-medium flex-1 gap-2 bg-slate-800 ${otherClasses} px-3 py-[6px] dark:bg-dark-400`}
      >
        <p className="text-white dark:text-light-500">{name}</p>
        {showCount && (
          <p className="xs-medium leading-none text-light-700 dark:text-light-700">
            {formatNumber(totalQuestions || 0)}
          </p>
        )}
      </Badge>
    </Link>
  );
};

export default Tag;
