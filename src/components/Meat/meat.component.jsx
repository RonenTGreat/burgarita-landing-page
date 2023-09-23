import "./meat.styles.css";

const Meat = ({ name, image, price }) => {
  return (
    <article className="meats">
      <img src={image} alt={name} className="meat-img" />
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </article>
  );
};

export default Meat;
