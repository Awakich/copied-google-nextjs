import Avatar from "../components/Avatar";
import { ViewColumnsIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="w-full p-5 flex justify-between items-center text-sm">
      <div className="flex items-center space-x-4">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>

      <div className="flex items-center space-x-4">
        <p className="link">Gmail</p>
        <p className="link">Images</p>

        <ViewColumnsIcon className="h-10 p-2 cursor-pointer hover:bg-gray-300 rounded-full" />

        <Avatar url="https://avatars.githubusercontent.com/u/106466193?v=4" />
      </div>
    </header>
  );
};

export default Header;
