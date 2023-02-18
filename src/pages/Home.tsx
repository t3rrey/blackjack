import { Link } from "react-router-dom";
import GithubLogoIcon from "../components/icons/GithubLogoIcon";
import PlayButtonIcon from "../components/icons/PlayButtonIcon";

export const Home = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <div className="w-auto">
        <Link
          to="https://github.com/t3rrey/blackjack"
          className="w-8 absolute top-2 right-2 hover:scale-105"
        >
          <GithubLogoIcon />
        </Link>
        <div className="flex items-center">
          <div className="w-56 h-24 rounded-lg bg-blue-600 flex items-center hover:scale-105">
            <Link
              className="mx-auto flex items-center text-4xl text-white font-bold"
              to={"/game"}
            >
              <p className="mr-2"> PLAY NOW</p>
              <PlayButtonIcon className="text-white w-8" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
