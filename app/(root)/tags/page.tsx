import Filter from "@/components/shared/Filter";
import NotFound from "@/components/shared/NotFound";
import LocalSearch from "@/components/shared/Search/LocalSearch";
import { TagFilters } from "@/constants/filters";
import { getAllTags } from "@/lib/actions/tag.action";
import Link from "next/link";

export default async function page() {
  const result = await getAllTags({});

  console.log(result.tags);

  return (
    <div className="max-sm:px-4">
      <h1 className="h1-bold text-dark300_light870 font-serif">All Tags</h1>
      <div className="mt-6 flex justify-between gap-5 max-sm:flex-col sm:mt-8 sm:items-center">
        <LocalSearch
          route="/tags"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for tags..."
          otherClasses="flex-1"
        />
        <Filter
          filters={TagFilters}
          otherClasses="min-h-[50px] sm:min-w-[170px]"
        />
      </div>
      <div>
        {result.tags.length > 0 ? (
          <section className="mt-12 grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {result.tags.map((tag) => (
              <Link href={`/tags/${tag._id}`} key={tag._id}>
                <article className="card-wrapper light-border flex min-w-[120px] flex-col rounded-2xl border p-4 hover:bg-light-700/60 max-sm:rounded-[10px] dark:hover:bg-dark-400/80">
                  <p className="sm-semibold text-dark200_light870 line-clamp-1 font-serif">
                    {tag.name}
                  </p>

                  <p className="xs-regular text-dark400_light600 mt-4 line-clamp-1">
                    <span>{/* {tag.questions.length} */}640</span> questions
                  </p>
                </article>
              </Link>
            ))}
          </section>
        ) : (
          <NotFound
            title="No Tags Found"
            description="It looks like there are no tags available at the moment."
            link="/ask-question"
            linkTitle="Ask a question"
          />
        )}
      </div>
    </div>
  );
}
