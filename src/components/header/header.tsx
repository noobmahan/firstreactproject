import logo from "../../img/snappTextLogo.svg";
import "./header.css";
import menulogo from "../../img/menu.png";

function Header() {
  return (
    <header>
      <div className="menu">
        <img src={menulogo} alt="menu" />
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      <a className="navbar" href="a.html">
        فرصت های شغلی
      </a>
      <a className="navbar" href="a.html">
        بلاگ
      </a>
      <a className="navbar" href="a.html">
        باشگان رانندگان
      </a>
      <a className="navbar" href="a.html">
        ثبت نام راننده اسنپ
      </a>
      <a className="navbar" href="a.html">
        پنل سازمانی
      </a>
      <a className="navbar" href="a.html">
        درباره ما
      </a>
      <a className="navbar" href="a.html">
        تماس با ما
      </a>
    </header>
  );
}

export default Header;
