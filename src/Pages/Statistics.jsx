import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";

const Statistics = () => {
  const cards = useLoaderData();
  console.log(cards);
  return (
    <div className="mx-10 lg:mx-40 mb-20 -mt-20 lg:-mt-10">
      <div className="pt-10 pb-6">
        <Navbar></Navbar>
      </div>
      <h1>Statistics</h1>
    </div>
  );
};

export default Statistics;
