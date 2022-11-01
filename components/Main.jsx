import { useRouter } from "next/router";
import { useRef } from "react";
import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import GoogleIcon from "../assets/images/GoogleIcon.png";

const Main = () => {
  const router = useRouter();

  const searchInputRef = useRef(null);

  const search = (event) => {
    event.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  
  return (
    <form className="flex flex-col justify-center items-center flex-grow">
      <Image src={GoogleIcon} height={100} width={300} />

      <div className="flex items-center w-4/5 mt-5 hover:shadow-md focus-within:shadow-md rounded-full border border-gray-200 px-3 max-w-md sm:max-w-xl lg:max-w-2xl">
        <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500" />

        <input
          ref={searchInputRef}
          className="focus:outline-none rounded-full flex-grow pl-4 py-2"
          type="text"
        />

        <MicrophoneIcon className="h-5" />
      </div>

      <div className="mt-8 flex flex-col space-x-0 space-y-2 sm:flex-row sm:space-x-5 sm:space-y-0">
        <button className="btn" onClick={search}>
          Google Search
        </button>
        <button className="btn" onClick={search}>
          I'm Feeling Lucky
        </button>
      </div>
    </form>
  );
};

export default Main;
