import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

const CardDescription = ({ card }) => {
  const { id, description_image, price, title, description, text_color } =
    card || {};

  const textStyle = {
    backgroundColor: `${text_color}`,
  };

  const handleDonation = () => {
    const donation = [];
    const donatedCards = JSON.parse(localStorage.getItem("donate"));

    if (!donatedCards) {
      donation.push(card);
      localStorage.setItem("donate", JSON.stringify(donation));
      return toast.success("Donation successful!", {
        autoClose: 3000,
      });
    } else {
      const isExist = donatedCards.find((card) => card.id == id);

      if (!isExist) {
        donation.push(...donatedCards, card);
        localStorage.setItem("donate", JSON.stringify(donation));
        return toast.success("Donation successful!", {
          autoClose: 3000,
        });
      } else {
        return toast.warning(
          "You've already made a donation. Thank you for your support!",
          {
            autoClose: 3000,
          }
        );
      }
    }
  };

  return (
    <div>
      <div className="relative">
        <img
          src={description_image}
          alt=""
          className="w-full h-auto rounded-3xl"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-x-0 bottom-0 rounded-b-3xl bg-[#0B0B0B80] h-32"></div>
        <button
          onClick={handleDonation}
          style={textStyle}
          className="absolute bottom-10 left-10 btn btn-ghost normal-case text-xl font-semibold text-white px-6"
        >
          Donate ${price}
        </button>
      </div>
      <h1 className="text-4xl font-bold color-2 pt-14 pb-6">{title}</h1>
      <p className="text-justify">{description}</p>
      <ToastContainer />
    </div>
  );
};

CardDescription.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardDescription;
