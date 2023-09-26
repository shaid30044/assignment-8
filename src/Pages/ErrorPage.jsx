import { Link } from "react-router-dom";
import error from "../assets/404.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 h-[90vh]">
      <img className="h-[400px]" src={error} alt="" />
      <Link>
        <button className="btn btn-ghost normal-case rounded-lg bg-color-1 hover:bg-[#db080f] text-lg font-semibold text-white -ml-1 px-7">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
