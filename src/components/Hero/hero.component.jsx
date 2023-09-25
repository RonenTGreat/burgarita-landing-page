import "./hero.component.css";
import food from "../../assets/hero-food.png";
import Meat from "../Meat/meat.component";
import meat_1 from "../../assets/meat-1.png";
import meat_2 from "../../assets/meat-2.png";
import meat_3 from "../../assets/meat-3.png";
import explore from "../../assets/explore-dish.png";
import pepper from "../../assets/Red_Chili_Pepper.svg";
import meal_1 from "../../assets/grilled-food.png";
import meal_2 from "../../assets/oyster.png";
import meal_3 from "../../assets/gros.png";
import meal_4 from "../../assets/lovepik.png";
import table from "../../assets/table.png";
import { motion } from "framer-motion";
import { useRef } from "react";

const cardVariants = {
  offscreen: {
    x: "100vw",
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

const Hero = () => {
  const constraintsRef = useRef(null);

  return (
    <main className="container hero" ref={constraintsRef}>
      {/* Beginnig: First Section */}
      <section className="hero-section">
        <motion.article
          className="hero-article"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
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
        </motion.article>
        <motion.img
          src={food}
          className="hero-img"
          alt=""
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        />
      </section>
      {/* End: First Section */}

      {/* Beginnig: Second Section */}

      <motion.section
        className="platter"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
      >
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
          <Meat name="Grilled meat in plate" image={meat_1} price="$32.50" />
          <Meat
            name="Beef steak with saulted veg"
            image={meat_2}
            price="$40.00"
          />
          <Meat name="Barbecue Grill Beefsteak" image={meat_3} price="$40.00" />
        </div>
      </motion.section>
      {/* End: Second Section */}

      {/* Beginnig: Third Section */}

      <motion.section
        className="explore"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.article variants={cardVariants}>
          <h2 className="explore-header">
            Explore our <span className="orange-text">exclusive</span> dishes
          </h2>
          <p className="explore-desc">
            Our exclusive dishes are crafted with a blend of creativity,
            expertise, and the finest ingredients, resulting in a symphony of
            flavors that will transport your taste buds to new heights of
            delight. Whether you&apos;re an adventurous foodie or seeking
            something truly special, our unique creations promise to captivate
            your senses.
          </p>
          <a href="#" className="btn">
            More
          </a>
        </motion.article>
        <motion.img
          variants={cardVariants}
          src={explore}
          alt="meal"
          className="explore-img"
        />
      </motion.section>
      <motion.img
        src={pepper}
        alt="red pepper"
        className="pepper"
        drag
        dragConstraints={constraintsRef}
        dragMomentum={false}
      />
      <motion.section
        className="meals"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <Meat
          name="Appetizers"
          image={meal_1}
          price="Begin your culinary journey with our delectable appetizers."
        />
        <Meat
          name="Sea Food"
          image={meal_2}
          price="Dive into a world of oceanic flavors with our exquisite seafood dishes."
        />
        <Meat
          name="Main Dish"
          image={meal_3}
          price="Savor our exquisite Main Dish creations, a symphony of flavors on every plate."
        />
        <Meat
          name="Salads"
          image={meal_4}
          price="Elevate your greens with our fresh and flavorful salads"
        />
      </motion.section>
      {/* End: Third Section */}

      {/* Beginnig: Fourth Section */}

      <motion.section
        className="chef"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <article className="chef-header">
          <h2 className="chef-heading">
            Secret <span className="orange-text">steak recipe</span> from our
            chef
          </h2>
          <p className="chef-desc">
            Savor the tantalizing flavors of our chef&apos;s closely guarded
            secret steak recipe.
          </p>
        </article>
        <article className="chef-recipe">
          <img src={meat_2} alt="" />
          <p>
            <h3>
              Season the steaks with salt. Heat the oil in a frying pan large
              enough to fit{" "}
            </h3>
            Once melted and foaming, add the garlic and thyme. Carefully put the
            steak in the pan and cook for 3 mins for rare, 4 mins for medium and
            6 mins for well done, flip the steak and repeat. Once cooked, add a
            squeeze of lemon juice to the pan and spoon the lemony butter over
            the steak.
            <h3>Transfer the steaks to a warm plate and cover.</h3>
            <a href="#" className="btn">
              Full Method
            </a>
          </p>
        </article>
      </motion.section>
      {/* End: Fourth Section */}

      <motion.section
        className="booking"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <article>
          <h1>
            Book a <span className="orange-text">Table</span>
          </h1>
          <p>
            Reserve your unforgettable dining experience now – book a table with
            us.
          </p>
          <form className="book">
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Contact Number" />
            <input type="text" placeholder="Number of booking" />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </article>
        <img src={table} alt="" />
      </motion.section>
    </main>
  );
};

export default Hero;
