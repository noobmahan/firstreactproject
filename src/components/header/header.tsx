import logo from "./../../img/snappTextLogo.svg";
import "./header.css";

function Header() {
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default Header;
