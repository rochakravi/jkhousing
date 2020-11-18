import logo from "./Logo.png";
import "./Header.scss";
import { FaFacebook } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";

function Header() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="jkb-logo" alt="logo" />
        <ui className="header-menu">
          <li>Home</li>
          <li>About Us</li>
          <li>Projects</li>
          <li>Joint Ventures</li>
          <li>Media</li>
          <li>Buyers Guide</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ui>
        <ui>
          <li>9910568242</li>
          <li>Review</li>
        </ui>
        <ui>
          <FaFacebook />
          <TiSocialYoutubeCircular />
          <li>icons</li>
          <li>icons</li>
        </ui>
      </header>
    </div>
  );
}

export default Header;
