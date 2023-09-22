import "./hero.component.css";
import food from "../../assets/hero-food.png";

const Hero = () => {
  return (
    <main className="container hero">
      <section>
        <article className="hero-article">
          <p className="hero-taste">Tasty Food Forever</p>
          <h1 className="hero-header">
            Hot new items in the <span className="orange-text">resturant</span>{" "}
          </h1>
          <p className="hero-desc">
            Where culinary delight knows no bounds!{" "}
            <span className="orange-text">Our restaurant</span> is your passport
            to a world of flavors that will tantalize your taste buds and leave
            you craving for more.
          </p>
          <form className="hero-form">
            <input type="email" placeholder="Search Here..." required />
            <button type="submit" className="btn-grab-it">
              Grab it
            </button>
          </form>
        </article>
        <img src={food} alt="" />
      </section>
    </main>
  );
};

export default Hero;
