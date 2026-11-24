import React from "react";
import footerContact from "../../api/footerApi.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };
  return (
      <footer className="footer-section">
        <div className="footer-grid page-shell">
          {footerContact.map((cuData, index) => {
            const { icon, title, details } = cuData;
            return (
              <div className="footer-contact" key={index}>
                <div className="icon">{footerIcon[icon]}</div>
                <div className="footer-contact-text">
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="copyright-area">
          <div className="copyright-inner page-shell">
              <div className="copyright-text">
                <p>
                  &copy; {new Date().getFullYear()} WorldAtlas. Crafted by
                  <a href="https://salmankhankkkuk.github.io/MyPersonalPortfolio/" target="_blank" rel="noreferrer"> Salman Khan</a>
                </p>
              </div>

              <div className="footer-menu">
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="https://www.facebook.com/salman.khan.600307"
                      target="_blank"
                    >
                      Social
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="https://github.com/SalmanKhanKKKUK"
                      target="_blank"
                    >
                      Source Code
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
