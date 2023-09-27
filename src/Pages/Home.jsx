import { useLoaderData } from "react-router-dom";
import Cards from "../Components/Body/Cards";
import Header from "../Components/Header/Header";
import { useState } from "react";
import PropTypes from "prop-types";

const Home = () => {
  const data = useLoaderData();

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showNoResults, setShowNoResults] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowNoResults(false);

    setTimeout(() => {
      const filteredProducts = data.filter((product) =>
        product.category.toLowerCase().includes(search.toLowerCase())
      );

      setSearchResults(filteredProducts);
      setIsLoading(false);

      if (filteredProducts.length === 0) {
        setShowNoResults(true);
      }
    }, 200);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Header data={data}></Header>
      <div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="pb-[100px] md:w-[600px] lg:w-[800px]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center pb-10">
              I Grow By Helping People In Need
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex justify-center items-center"
            >
              <input
                onChange={handleSearch}
                className="border focus:outline-1 outline-offset-0 rounded-l-lg px-4 py-[11px] md:w-80 lg:w-[400px]"
                type="search"
                placeholder="Search here...."
                value={search}
              />
              <button
                className="btn btn-ghost normal-case rounded-l-[0px] rounded-r-lg bg-color-1 hover:bg-[#db080f] font-semibold text-white -ml-1 px-7"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Searching..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 mx-10 lg:mx-40 mb-20 -mt-20 lg:-mt-10">
          {isLoading ? (
            <div className="flex justify-center items-center w-[1200px] md:text-xl font-semibold">
              Loading...
            </div>
          ) : showNoResults ? (
            <div className="flex justify-center items-center w-[1200px] md:text-xl font-semibold">
              No results found for{" "}
              <span className="pl-2">{'"' + search + '"'}</span>
            </div>
          ) : searchResults.length > 0 ? (
            searchResults.map((card) => (
              <Cards key={card.id} card={card}></Cards>
            ))
          ) : (
            data.map((card) => <Cards key={card.id} card={card}></Cards>)
          )}
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.array,
};

export default Home;
