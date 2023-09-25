import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Card = () => {
  const cards = useLoaderData();
  const { id } = useParams();

  const [card, setCard] = useState();

  useEffect(() => {
    const findPhone = cards.find((phone) => phone.id === id);

    setCard(findPhone);
  }, [id, cards]);

  return (
    <div>
      <h1>Card</h1>
    </div>
  );
};

export default Card;
