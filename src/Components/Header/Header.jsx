import Banner from "./Banner";
import Navbar from "./Navbar";
import banner from "../../assets/banner.jpeg";

const Header = () => {
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
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Header;
