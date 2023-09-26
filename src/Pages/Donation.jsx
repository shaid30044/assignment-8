import { useEffect, useState } from "react";
import DonatedItems from "../Components/Body/DonatedItems";
import Navbar from "../Components/Header/Navbar";

const Donation = () => {
  const [donates, setDonates] = useState([]);
  const [noCard, setNoCard] = useState(false);
  const [cardLength, setCardLength] = useState(4);

  useEffect(() => {
    const donatedItems = JSON.parse(localStorage.getItem("donate"));

    if (donatedItems) {
      setDonates(donatedItems);
    } else {
      setNoCard(true);
    }
  }, []);

  return (
    <div className="mx-10 lg:mx-40 mb-20 -mt-20 lg:-mt-10">
      <div className="pt-20 lg:pt-10 pb-6">
        <Navbar></Navbar>
      </div>
      {noCard ? (
        <div className="flex justify-center items-center md:text-3xl font-semibold h-[110vh]">
          No donations found. Thank you for visiting!
        </div>
      ) : (
        <div>
          <div className="grid lg:grid-cols-2 gap-6">
            {donates.slice(0, cardLength).map((card) => (
              <DonatedItems key={card.id} card={card}></DonatedItems>
            ))}
          </div>
          <div className={cardLength >= donates.length ? "hidden" : ""}>
            <button
              onClick={() => setCardLength(donates.length)}
              className="flex btn btn-ghost normal-case text-lg font-semibold bg-[#009444] hover:bg-[#066432] text-white px-7 mt-10 mb-20 m-auto"
            >
              See All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
