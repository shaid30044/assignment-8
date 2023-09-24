import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img className="h-12 md:h-16" src={logo} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
