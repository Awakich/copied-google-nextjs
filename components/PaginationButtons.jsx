import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const PaginationButtons = () => {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;

  return (
    <div className="flex max-w-lg justify-between text-blue-700 mb-10">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <ArrowLeftIcon className="h-6" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <ArrowRightIcon className="h-6" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default PaginationButtons;
