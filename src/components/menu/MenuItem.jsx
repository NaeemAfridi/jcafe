import "./Menu.css";

const MenuItem = ({ img, title, incredients, price }) => {
  return (
    <div className="col-lg-4 menu-item">
      <a href="assets/img/menu/menu-item-1.png" className="glightbox">
        <img src={img} className="menu-img img-fluid" alt="" />
      </a>
      <h4>{title}</h4>
      <p className="ingredients">{incredients}</p>
      <p className="price">{price}</p>
    </div>
  );
};

export default MenuItem;
