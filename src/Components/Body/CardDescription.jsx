const CardDescription = ({ card }) => {
  const { description_image, price, title, description, text_color } =
    card || {};

  const textStyle = {
    backgroundColor: `${text_color}`,
  };

  return (
    <div>
      <div className="relative">
        <img
          src={description_image}
          alt=""
          className="w-full h-auto rounded-xl"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-x-0 bottom-0 rounded-b-xl bg-[#0B0B0B80] h-32"></div>
        <button
          style={textStyle}
          className="absolute bottom-10 left-10 btn btn-ghost normal-case text-xl font-semibold text-white px-6"
        >
          Donate ${price}
        </button>
      </div>
      <h1 className="text-4xl font-bold color-2 pt-14 pb-6">{title}</h1>
      <p className="text-justify">{description}</p>
    </div>
  );
};

export default CardDescription;
