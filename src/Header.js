import logo from "./Logo.png";
import "./Header.scss";
import { FaFacebook, FaInstagramSquare, FaMobile } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="jkb-logo" alt="logo" />
      <ul className="header-menu">
        <li>Home</li>
        <li>About Us</li>
        <li>Projects</li>
        <li>Joint Ventures</li>
        <li>Media</li>
        <li>Buyers Gulde</li>
        <li>Careers</li>
        <li>Contact Us</li>
      </ul>
      <ul>
        <li xyz>
          <FaMobile size="30" />
          <span>9910568242</span>
        </li>
        <li xyz gh>
          <FcGoogle size="28" />
          <span>Review</span>
        </li>
      </ul>
      <ul className="social-icons">
        <FaFacebook size="28" color="blue" />
        <TiSocialYoutubeCircular size="35" color="#C4302B" />
        <FaInstagramSquare size="28" color="red" />
      </ul>
    </header>
  );
}

export default Header;
