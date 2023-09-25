import { useEffect, useState } from "react";
import DonatedItems from "../Components/Body/DonatedItems";

const Donation = () => {
  const [donates, setDonates] = useState([]);
  const [noCard, setNoCard] = useState(false);

  useEffect(() => {
    const donatedItems = JSON.parse(localStorage.getItem("donate"));

    if (donatedItems) {
      setDonates(donatedItems);
    } else {
      setNoCard(true);
    }
  }, []);

  return (
    <div>
      {noCard ? (
        <div className="flex justify-center items-center md:text-3xl font-semibold h-[70vh]">
          No donations found. Thank you for visiting!
        </div>
      ) : (
        <div>
          <div className="grid lg:grid-cols-2 gap-6 mx-10 lg:mx-40 mb-20 -mt-20 lg:-mt-10">
            {donates.map((card) => (
              <DonatedItems key={card.id} card={card}></DonatedItems>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
