import { starter } from "../../utils/menuData";
import { breakfast } from "../../utils/breakfastData";
import { lunch } from "../../utils/lunchData";
import { dinner } from "../../utils/dinnerData";

import "./Menu.css";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <section id="menu" className="menu">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Menu</h2>
          <p>
            Check Our <span>JCafe Menu</span>
          </p>
        </div>

        <ul
          className="nav nav-tabs d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <li className="nav-item">
            <a
              className="nav-link active show"
              data-bs-toggle="tab"
              data-bs-target="#menu-starters"
            >
              <h4>Starters</h4>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#menu-breakfast"
            >
              <h4>Breakfast</h4>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#menu-lunch"
            >
              <h4>Lunch</h4>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#menu-dinner"
            >
              <h4>Dinner</h4>
            </a>
          </li>
        </ul>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="300">
          <div className="tab-pane fade active show" id="menu-starters">
            <div className="tab-header text-center">
              <p>Menu</p>
              <h3>Starters</h3>
            </div>

            <div className="row gy-5">
              {starter.map((item, index) => (
                <MenuItem
                  key={index}
                  img={item.img}
                  title={item.title}
                  incredients={item.incredients}
                  price={item.price}
                />
              ))}
            </div>
          </div>

          <div className="tab-pane fade" id="menu-breakfast">
            <div className="tab-header text-center">
              <p>Menu</p>
              <h3>Breakfast</h3>
            </div>

            <div className="row gy-5">
              {breakfast.map((item, index) => (
                <MenuItem
                  key={index}
                  img={item.img}
                  title={item.title}
                  incredients={item.incredients}
                  price={item.price}
                />
              ))}
            </div>
          </div>

          <div className="tab-pane fade" id="menu-lunch">
            <div className="tab-header text-center">
              <p>Menu</p>
              <h3>Lunch</h3>
            </div>

            <div className="row gy-5">
              {lunch.map((item, index) => (
                <MenuItem
                  key={index}
                  img={item.img}
                  title={item.title}
                  incredients={item.incredients}
                  price={item.price}
                />
              ))}
            </div>
          </div>

          <div className="tab-pane fade" id="menu-dinner">
            <div className="tab-header text-center">
              <p>Menu</p>
              <h3>Dinner</h3>
            </div>

            <div className="row gy-5">
              {dinner.map((item, index) => (
                <MenuItem
                  key={index}
                  img={item.img}
                  title={item.title}
                  incredients={item.incredients}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
