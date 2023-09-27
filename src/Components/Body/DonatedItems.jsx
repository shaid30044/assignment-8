import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonatedItems = ({ card, onDonation }) => {
  const {
    id,
    description_image,
    category,
    title,
    price,
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
  const textBgStyle = {
    backgroundColor: `${text_color}`,
  };
  const textStyle = {
    color: `${text_color}`,
  };

  const handleDonateClick = () => {
    onDonation(price);
  };

  return (
    <div
      style={titleBgStyle}
      className="md:flex items-center gap-10 lg:gap-6 rounded-xl"
    >
      <img
        className="w-full md:w-72 md:h-52 rounded-t-xl md:rounded-r-[0px] md:rounded-l-xl"
        src={description_image}
        alt=""
      />
      <div style={textStyle} className="p-6 md:py-6 md:px-0">
        <p className="font-medium">
          <span
            style={categoryBgStyle}
            className="rounded-[4px] px-[10px] pt-[2px] pb-[3px]"
          >
            {category}
          </span>
        </p>
        <h1 className="text-xl font-semibold color-2 py-2">{title}</h1>
        <p className="font-semibold pb-5">${price}</p>
        <Link to={`../card/${id}`}>
          <button
            onClick={handleDonateClick}
            style={textBgStyle}
            className="btn btn-ghost normal-case text-lg font-semibold text-white w-full md:w-auto"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

DonatedItems.propTypes = {
  card: PropTypes.object.isRequired,
  onDonation: PropTypes.func,
};

export default DonatedItems;
