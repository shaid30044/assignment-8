import { useEffect, useState } from "react";
import DonatedItems from "../Components/Body/DonatedItems";

const Donation = () => {
  const [donates, setDonates] = useState();
  console.log(donates);

  useEffect(() => {
    const donatedItems = JSON.parse(localStorage.getItem("donate"));

    if (donatedItems) {
      setDonates(donatedItems);
    }
  }, []);

  return (
    <div>
      <h1>Donate</h1>
      <div>
        {donates.map((card) => (
          <DonatedItems key={card.id} card={card}></DonatedItems>
        ))}
      </div>
    </div>
  );
};

export default Donation;
