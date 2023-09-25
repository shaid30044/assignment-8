import { Link } from "react-router-dom";

const DonatedItems = () => {
  const cards = ({ card }) => {
    const {
      id,
      description_image,
      category,
      title,
      text_color,
      category_bg_color,
      title_bg_color,
    } = card;
    console.log(cards);

    const categoryBgStyle = {
      backgroundColor: `${category_bg_color}`,
    };
    const titleBgStyle = {
      backgroundColor: `${title_bg_color}`,
    };
    const textStyle = {
      color: `${text_color}`,
    };

    return (
      <div>
        <h1>Cards</h1>
      </div>
    );
  };
};

export default DonatedItems;
