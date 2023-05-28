import { Brightness2 } from "@mui/icons-material";
import { Menu } from "../";
import { colors } from "../../constants/color";

const Navbar = () => {
  return (
    <div
      className="navbar shadow p-3 mb-5 bg-body-tertiary rounded"
      style={{ backgroundColor: colors.white }}
    >
      <div style={{ width: "100%" }}>
        <div className="container navbar-container">
          <div className="logo">
            <a
              style={{
                color: `${colors.secondary}`,
                fontSize: "18px",
                fontWeight: "bold",
              }}
              href="/"
            >
              ROSEBUDFLOWERS
            </a>
          </div>
          <Brightness2 
            style={{ cursor: "pointer" ,color: colors.gren, marginLeft: "15px", width: "50px" }}
          />
          <div className="menu">
            <Menu />
          </div>
          <div className="contact">
            <a
              style={{
                color: `${colors.secondary}`,
                fontSize: "18px",
                fontWeight: "bold",
              }}
              href=""
            >
              +7 926 394 53 25
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
