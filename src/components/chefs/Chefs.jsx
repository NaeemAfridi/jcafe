import { chefs } from "../../utils/chefsData";
import "./Chefs.css";

const Chefs = () => {
  return (
    <section id="chefs" className="chefs section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Chefs</h2>
          <p>
            Our <span>Proffesional</span> Chefs
          </p>
        </div>

        <div className="row gy-4">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="chef-member">
                <div className="member-img">
                  <img src={chef.img} className="img-fluid" alt="" />
                  {chef.chefLinks.map((link, index) => (
                    <div key={index} className="social">
                      <a href="">{link.twitter}</a>
                      <a href="">{link.facebook}</a>
                      <a href="">{link.instagram}</a>
                      <a href="">{link.linkedIn}</a>
                    </div>
                  ))}
                </div>
                <div className="member-info">
                  <h4>{chef.chefName}</h4>
                  <span>{chef.chefPosition}</span>
                  <p>{chef.chefDetails}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;
