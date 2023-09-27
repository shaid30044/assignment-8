import Banner from "./Banner";
import Navbar from "./Navbar";
import banner from "../../assets/banner.jpeg";
import PropTypes from "prop-types";

const Header = ({ data }) => {
  return (
    <div className="relative">
      <div
        className="absolute w-full h-full bg-cover bg-center bg-no-repeat -mt-40"
        style={{
          backgroundImage: `url(${banner})`,
          opacity: "5%",
        }}
      ></div>
      <div className="relative z-1 px-10 lg:px-40">
        <Navbar></Navbar>
        <Banner data={data}></Banner>
      </div>
    </div>
  );
};

Header.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Header;
