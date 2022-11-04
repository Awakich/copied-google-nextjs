import HeaderOption from "./HeaderOption";
import { PlayIcon, MagnifyingGlassIcon, CameraIcon, MapPinIcon, NewspaperIcon, EllipsisVerticalIcon} from "@heroicons/react/24/solid";

const HeaderOptions = () => {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
      <div className="space-x-4 flex">
        <HeaderOption
          Icon={MagnifyingGlassIcon}
          title="All"
          alt="search icon"
          selected
        />
        <HeaderOption
          Icon={CameraIcon}
          title="Images"
          alt="images icon"
        />
        <HeaderOption
          Icon={PlayIcon}
          title="Videos"
          alt="video icon"
        />
        <HeaderOption
          Icon={NewspaperIcon}
          title="News"
          alt="news icon"
        />
        <HeaderOption
          Icon={MapPinIcon}
          title="Map"
          alt="map icon"
        />
        <HeaderOption
          Icon={EllipsisVerticalIcon}
          title="More"
          alt="more icon"
        />
      </div>

      <div className="flex space-x-4">
        <p className="link">Setting</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
