import Link from "next/link";
import { Badge } from "../ui/badge";

interface TagProps {
  _id: string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

const Tag = ({ _id, name, totalQuestions, showCount }: TagProps) => {
  return (
    <Link href={`/tags/${_id}`}>
      <Badge className="xs-medium flex-1 gap-2 bg-slate-500 px-3 py-1 dark:bg-dark-400">
        <p className="text-white dark:text-light-500">{name}</p>
        {showCount && (
          <p className="xs-medium text-light-700 dark:text-light-700">
            {totalQuestions}
          </p>
        )}
      </Badge>
    </Link>
  );
};

export default Tag;
