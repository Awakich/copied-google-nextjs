import Image from "next/image";
import GoogleIcon from "../../assets/images/GoogleIcon.png";
import Avatar from "../Avatar";
import HeaderOptions from "./HeaderOptions";
import { useRouter } from "next/router";
import { useRef } from "react";
import {
  XMarkIcon,
  MicrophoneIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const router = useRouter();

  const searchInputRef = useRef(null);

  const search = (event) => {
    event.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => {
            router.replace("/");
          }}
          src={GoogleIcon}
          width={120}
          height={40}
          className="cursor-pointer"
        />

        <form className="border border-gray-200 flex rounded-full flex-grow max-w-3xl items-center px-6 py-3 ml-10 mr-5 shadow-lg">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XMarkIcon
            className="h-6 cursor-pointer text-gray-500 hover:text-black transition-all easy-in-out sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 cursor-pointer mr-3 hidden sm:inline-flex pl-4 border-l-2 border-gray-300" />

          <MagnifyingGlassIcon className="h-6 cursor-pointer hidden sm:inline-flex" />

          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar url="https://avatars.githubusercontent.com/u/106466193?v=4" />
      </div>

      <HeaderOptions />
    </header>
  );
};

export default Header;
