import "./hero.component.css";
import food from "../../assets/hero-food.png";
import Meat from "../Meat/meat.component";
import meat_1 from "../../assets/meat-1.png"
import meat_2 from "../../assets/meat-2.png"
import meat_3 from "../../assets/meat-3.png"

const Hero = () => {
  return (
    <main className="container hero">
      <section className="hero-section">
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
        <img src={food} className="hero-img" alt="" />
      </section>

      <section className="platter">
        <article>
          <h2 className="platter-header">
            Try one of the three new{" "}
            <span className="orange-text">steak platter</span>
          </h2>
          <p>
            Each of these delectable platters offers a unique and tantalizing
            flavor profile, expertly prepared by our talented chefs. From
            perfectly seared cuts to savory seasonings, every bite is a culinary
            masterpiece waiting to be savored
          </p>
        </article>

        <div className="platter-dish">
          <Meat 
            name="Grilled meat in plate"
            image={meat_1}
            price="$32.50 "
          />
          <Meat 
            name="Grilled meat in plate"
            image={meat_2}
            price="$32.50 "
          />
          <Meat 
            name="Grilled meat in plate"
            image={meat_3}
            price="$32.50 "
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;
