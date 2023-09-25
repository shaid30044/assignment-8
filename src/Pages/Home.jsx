import { useLoaderData } from "react-router-dom";
import Cards from "../Components/Body/Cards";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 mx-10 lg:mx-40 mb-20 -mt-20 lg:-mt-10">
      {data.map((card, idx) => (
        <Cards key={idx} card={card}></Cards>
      ))}
    </div>
  );
};

export default Home;
