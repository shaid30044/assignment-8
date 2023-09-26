import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Cards = ({ card }) => {
  const {
    id,
    description_image,
    category,
    title,
    text_color,
    category_bg_color,
    title_bg_color,
  } = card;

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
      <Link to={`card/${id}`}>
        <div style={titleBgStyle} className="rounded-xl">
          <img
            className="w-full h-48 rounded-t-xl"
            src={description_image}
            alt=""
          />
          <div style={textStyle} className="p-4">
            <p className=" font-medium">
              <span
                style={categoryBgStyle}
                className="rounded-[4px] px-[10px] pt-[2px] pb-[3px]"
              >
                {category}
              </span>
            </p>
            <h1 className="text-xl font-semibold pt-2">{title}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

Cards.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Cards;
