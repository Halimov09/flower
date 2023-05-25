import { Menu } from "../";
import { colors } from "../../constants/color";

const Navbar = () => {
  return (
    <div>
      <div className="container navbar-container">
        <div className="logo" >
          <a style={{color: `${colors.secondary}`, fontSize: "18px", fontWeight: "bold"}} href="/">ROSEBUDFLOWERS</a>
        </div>
        <div className="menu">
          <Menu />
        </div>
        <div className="contact">
          <a style={{color: `${colors.secondary}`, fontSize: "18px", fontWeight: "bold"}} href="">+7 926 394 53 25</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
