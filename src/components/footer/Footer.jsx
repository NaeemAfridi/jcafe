import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row gy-3">
          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-geo-alt icon"></i>
            <div>
              <h4>Address</h4>
              <p>
                JB17 jon street <br />
                Islamabad, ISL 24000 - PAK
                <br />
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-links d-flex">
            <i className="bi bi-telephone icon"></i>
            <div>
              <h4>Reservations</h4>
              <p>
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-links d-flex">
            <i className="bi bi-clock icon"></i>
            <div>
              <h4>Opening Hours</h4>
              <p>
                <strong>Mon-Sat: 11AM</strong> - 23PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Follow Us</h4>
            <div className="social-links d-flex">
              <a href="#" className="twitter">
                <BsTwitter />
                {/* <i className="bi bi-twitter"></i> */}
              </a>
              <a href="#" className="facebook">
                <BsFacebook />
                {/* <i className="bi bi-facebook"></i> */}
              </a>
              <a href="#" className="instagram">
                <BsInstagram />
                {/* <i className="bi bi-instagram"></i> */}
              </a>
              <a href="#" className="linkedin">
                <BsLinkedin />
                {/* <i className="bi bi-linkedin"></i> */}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>JCafe</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://jon-ten.vercel.app/">Naeem Jon</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
