import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDescription from "./CardDescription";
import Navbar from "../Header/Navbar";

const Card = () => {
  const cards = useLoaderData();
  const { id } = useParams();

  const [card, setCard] = useState();

  useEffect(() => {
    const findCard = cards.find((card) => card.id == id);

    setCard(findCard);
  }, [id, cards]);

  return (
    <div className="mx-10 lg:mx-40 mb-20 -mt-20 lg:-mt-10">
      <div className="pt-10 pb-6">
        <Navbar></Navbar>
      </div>
      <div>
        <CardDescription card={card}></CardDescription>
      </div>
    </div>
  );
};

export default Card;
