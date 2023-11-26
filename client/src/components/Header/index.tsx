import { Navbar } from "../index";
import { Link } from "react-router-dom";
import { shades } from "../../theme";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <div style={{ color: shades.secondary[500], cursor: "pointer" }}>
            Swift Card
          </div>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
